module.exports = (app) => {
  app.get('/cart', (req, res) => {
    let success; 
    const warning = app.helpers.msg(req);
    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);

    // Get list of ID of product in cart
    const productsInCartIds = req.cookies['productsInCart'];

    
    if (productsInCartIds == null || Object.entries(productsInCartIds).length === 0 ) {
      res.render('checkout/cart', {
        title: 'Cart',
        success: '¡Tu carrito de compras está vacío!',
        empty: true,
        user: req.session['user']
      });
    }else{


      const valueDAO = new app.dao.productsDAO(connection);
      var value;

      valueDAO.getValues(productsInCartIds)
          .then((result) => value = result)
          .catch((err) => warning = 'it was not possible list users');

      productsDao.getById(productsInCartIds)
        .then((products) => {

          res.render('checkout/cart', {
            title: 'Cart',
            success, warning,
            value,
            products,
            user: req.session['user']
          });
        })
        .catch((err) => console.log(err));
    }
  });




  //set another (or first) product in shopping cart (cookie)
  app.get('/add-to-cart/:id', (req, res) => {
    const id = req.params.id;
  
    let prodList = req.cookies['productsInCart'];
    
    //Avoid repeated values in array
    //get time for purchase process (analitic purposes)
    if(prodList == null){
      prodList = [];
      prodList.push(id);

      //set time capture cookie
      res.cookie('timeStart', Date.now());

      //set a transaction on db
      const connection = app.dao.connectionFactory();
      const setTransaction = new app.dao.productsDAO(connection);
      var value;
        
      setTransaction.getNumberTransactions()
            .then((result) => value = result)
            .catch((err) => warning = 'it was not possible upload analytic values');

      //timeout to ensure the value arrived the variable (test without)
      setTimeout(() => {
        setTransaction.setNewTransaction((value[0].value+1))
            .then((result) => total = result)
            .catch((err) => warning = 'it was not possible upload analytic values');
      }, 100);
    
    }else{
      var notRepeated = true
      prodList.forEach(function(elemento, indice, array) {
        if(id == elemento){
          notRepeated = false;
        }
      })
      if(notRepeated){
        prodList.push(id);
      }
    }
    
    res.cookie('productsInCart', prodList).redirect('/cart');
  });


  //Clear shopping cart
  app.get('/clearCart', (req, res) => {
    let prodList = req.cookies['productsInCart'];
    if(prodList == null){
      res.redirect('/cart');
    }else{
      res.clearCookie('productsInCart').redirect('/cart');
    }
    
  });


  //eliminate single cart product
  app.get('/remove-from-cart/:id', (req, res) => {

    const id = req.params.id;

    let prodList = req.cookies['productsInCart'];

    let newProdList = [];

    prodList.forEach(function(elemento, indice, array) {
      if(elemento != id ){
        newProdList.push(elemento);
      }
    })

    res.cookie('productsInCart', newProdList).redirect('/cart');

    
    
  });



  //after success purchase clean cart and redirect
  app.get('/successPurchase', (req, res) => {
    
    res.cookie('endTransaction', 'True');
    res.cookie('timeStart', Date.now());

    let timeStart = req.cookies['timeStart'];
    var timeTaken = Date.now() - parseInt(timeStart);

    var timeInt = parseInt((timeTaken/1000));
    var value;
    //register metric on db
    const connection = app.dao.connectionFactory();
    const setMetric = new app.dao.productsDAO(connection);

    //register time taken to complete transaction on TimeTable
    setMetric.setSuccessTime(timeInt)
          .then((result) => value = result)
          .catch((err) => warning = 'it was not possible upload analytic values');

    setTimeout(() => {
      setMetric.setSuccessTransaction(value[0].value+1)
          .then((result) => total = result)
          .catch((err) => warning = 'it was not possible upload analytic values');
    }, 100);

    

    res.clearCookie('productsInCart').redirect('/cart');
    
    
  });



 



};

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

      productsDao.getById(productsInCartIds)
        .then((products) => {
          res.render('checkout/cart', {
            title: 'Cart',
            success, warning,
            products,
            user: req.session['user']
          });
        })
        .catch((err) => console.log(err));
    }
  });

  



  app.get('/add-to-cart/:id', (req, res) => {
    const id = req.params.id;
  
    let prodList = req.cookies['productsInCart'];
    
    //Avoid repeated values in array
    if(prodList == null){
      prodList = [];
      prodList.push(id);
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

    console.log(newProdList);
    res.cookie('productsInCart', newProdList).redirect('/cart');

    
    
  });


};

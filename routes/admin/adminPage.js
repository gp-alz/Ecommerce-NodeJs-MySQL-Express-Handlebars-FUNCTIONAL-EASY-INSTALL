module.exports = (app) => {



    app.get('/adminPage', (req, res) => {
      


      res.render('admin/adminPage', {
        title: 'Admin',
        empty: true,
        user: req.session['user']
      });

      
    });
  

    app.get('/adminUsers', (req, res) => {


      let success; let warning = app.helpers.msg(req);
      let users; 
      const connection = app.dao.connectionFactory();
      const usersDAO = new app.dao.productsDAO(connection);

      usersDAO.listUsers()
          .then((result) => users = result)
          .catch((err) => warning = 'it was not possible list users');

      setTimeout(() => {
        res.status(200).render('admin/adminUsers', {
          title: 'Home',
          users,
          success, warning,
          user: req.session['user'],
        });
      }, 100);

    
  
        
      });
    
  
  
  
      app.get('/adminTransactions', (req, res) => {
    
        
        const connection = app.dao.connectionFactory();
        const setTransaction = new app.dao.productsDAO(connection);
        var noTrans;
        
        //numero de transacciones
        setTransaction.getNumberTransactions()
              .then((result) => noTrans = result)
              .catch((err) => warning = 'it was not possible upload analytic values');
          //se necesita enviar el valor de tiemposTransaccion de la base hacia los tiles de [success, fail, no y Tiempo promedio]
        

        setTimeout(() => {

          metricsData = [{
            transactions: noTrans[0].value,
            success: 0,
            failure: 0,
            watchers: 0
            }];

          res.render('admin/adminTransactions', {
            title: 'Transactions',
            metricsData,  
            user: req.session['user']
          });
        }, 100);
        
        
        
      });
    
  
  
  
  };
  
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
    
  
  
  
  
  
  
  };
  
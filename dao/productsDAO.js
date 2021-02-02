
class productsDAO {
  constructor(connection) {
    this.connection = connection;
  }


  list(limit=null) {
    return new Promise((resolve, reject) => {
      if (limit) {
        this.connection
            .query('select * from products LIMIT ?', limit,
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
      // End Queries for limits
      else {
        this.connection
            .query('select * from products',
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
    });
  }
 
  //Warning
  //Move this shit to UserDao for organization purposes, you'll need to change a adminPage.js function too
  //Function to show all users on adminUsers.hbs
  listUsers(limit=null) {
    return new Promise((resolve, reject) => {
      if (limit) {
        this.connection
            .query('select * from users LIMIT ?', limit,
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
      // End Queries for limits
      else {
        this.connection
            .query('select * from users',
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
    });
  }
 


  //Function to set price for products
  getValues(ids) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select SUM(price) as value from products where id in (${ids})`,
          (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
    });
  }





  //function to show all products on adminProducts.hbs page
  getAdminProducts(){
    return new Promise((resolve, reject) => {
      if (limit) {
        this.connection
            .query('select * from products LIMIT ?', limit,
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
      // End Queries for limits
      else {
        this.connection
            .query('select * from users',
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
    });
  }
 






  orderedList(order=null) {
    return new Promise((resolve, reject) => {
      if (order == 'low-price') {
        this.connection.query('select * from products ORDER BY price ASC',
            (err, result) => {
              if (err) return reject(err);
              return resolve(result);
            });
      }
      this.connection.query('select * from products ORDER BY ?? DESC', order,
          (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
    });
  }
  filteredList(filter) {
    return new Promise((resolve, reject) => {

    });
  }



  getById(ids) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select * from products where id in (${ids})`,
          (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
    });
  }





setSuccessTransaction(timeTaken){
  return new Promise((resolve, reject) => {
    this.connection.query('INSERT INTO `timeTransaction` (`id`, `value`) VALUES (null,?)',
    [timeTaken],
    (err, result) => {
      if (err) return reject(err);
      return resolve('time Uploaded!');
    });
  });
}

getNumberTransactions(){
  return new Promise((resolve, reject) => {
    this.connection.query(`select value as value from metrics where metricName = "noTransaction"`,
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        });
  });
}

setNewTransaction(value){
  return new Promise((resolve, reject) => {
    this.connection.query(`UPDATE metrics SET value = (${value}) WHERE metricName = "noTransaction"`,
    (err, resultt) => {
      if (err) return reject(err);
      return resolve('time Uploaded!');
    });


    
  });
}










}
module.exports = () => productsDAO;

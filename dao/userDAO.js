const bcrypt = require('bcrypt-nodejs');

class UserDAO {
  constructor(connection) {
    this.connection = connection;
  }
  saveUser(username, email, password) {
    return new Promise((resolve, reject) => {
      const cryptedPassword = bcrypt.hashSync(password);
      this.connection
          .query('select email from users where email = ? OR username = ?', [email, username],
              (err, result) => {
                const emailNotExist = Object.entries(result).length === 0;
                if (emailNotExist) {
                  this.connection
                      .query('INSERT INTO `users` (`id`, `username`, `admin`,`email`, `password`) VALUES (null,?, ?, ?, ?)',
                          [username, 0,email, cryptedPassword],
                          (err, result) => {
                            if (err) return reject(err);
                            return resolve('User was created!');
                          });
                } else if (err) return reject(err);
                else return reject('Email or Username already exist');
              });
    });
  }

 
  

  login(email, password) {
    return new Promise((resolve, reject) => {
      this.connection.query('select * from users where email = ?', email,
          (err, result) => {
            if (err) return reject(err);

            const emailNotExist = Object.entries(result).length === 0;
            if (emailNotExist) return reject('Email is not registered!');

            else {
              const IsPasswordCorrect = bcrypt.compareSync(password, result[0].password);
              if (IsPasswordCorrect) return resolve('Welcome to Ecommerce Quantum');
              else return reject('Password is not correct!');
            }
          });
    });
  }

  isAdmin(email){
    return new Promise((resolve, reject) => {
      this.connection.query('select admin from users where email = ?', email,
          (err, result) => {
            if (err) return reject(err);
            console.log("HERE: admin: ", result[0].admin);
            return resolve(result[0].admin);
          });
    });
  }



  getUsername(email) {
    return new Promise((resolve, reject) => {
        this.connection.query('select username from users where email = ?', email,
          (err, result) => {
            if (err) return reject(err);
            console.log("HERE: USER: ", result[0].username);
            return resolve(result[0].username);
          });
    });
  }
}

module.exports = () => UserDAO;

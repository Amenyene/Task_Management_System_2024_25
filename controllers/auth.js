const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    
});


exports.register = (req, res) => {
    console.log(req.body);
  
    const { name, email, password, passwordConfirm, role } = req.body;
  
    db.query("SELECT email FROM users WHERE email = ?", [email], async (error, results) => {
      if (error) {
        console.error(error);
        return res.render("register", {
          message: "An error occurred while checking the email.",
        });
      }
      if (results.length > 0) {
        return res.render("register", {
          message: "That email is already in use",
        });
      } else if (password !== passwordConfirm) {
        return res.render("register", {
          message: "Passwords do not match",
        });
      }
  
      try {
        const hashedPassword = await bcrypt.hash(password, 8);
        console.log("Hashed Password:", hashedPassword);
  
        const newUser = { name, email, password: hashedPassword, role };
  
        db.query("INSERT INTO users SET ?", newUser, (error, results) => {
          if (error) {
            console.error(error);
            return res.render("register", {
              message: "An error occurred while registering the user.",
            });
          }
  
          console.log("User Registered:", results);
  
          if (role === "admin") {
            return res.render("adminDashboard"); 
          } else {
            return res.redirect("/userDashboard"); 
          }
        });
      } catch (error) {
        console.error(error);
        return res.render("register", {
          message: "An error occurred during registration.",
        });
      }
    });
  };

exports.login = (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    db.query("SELECT * FROM users WHERE email = ?", [email], async (error, results) => {
        if (error) {
            console.error(error);
            return res.render("login", {
                message: "An error occurred while checking the email.",
            });
        }

        if (results.length === 0) {
            return res.render("login", {
                message: "No user found with that email.",
            });
        }

        const user = results[0];

        try {
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.render("login", {
                    message: "Incorrect password.",
                });
            }

          
            console.log("User Logged In:", user);

            
            if (user.role === "admin") {
                return res.redirect("/adminDashboard");
            } else {
                return res.redirect("/userDashboard"); 
            }
        } catch (error) {
            console.error(error);
            return res.render("login", {
                message: "An error occurred during login.",
            });
        }
    });
};
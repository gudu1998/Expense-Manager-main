const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

class AdminController {
    async signupAdmin(req, res) {
        let { firstName, lastName, email, password } = req.body;
        const foundUser = await User.findOne({ "email": email });
        try {
            if (!!foundUser) {
                res.send({ message: "Email already exists" })
            }
            else {
                bcrypt.hash(password, 10, (err, hash) => {
                    password = hash
                    const newUser = new User({
                        firstName,
                        lastName,
                        email,
                        password
                    });

                    newUser.save()
                });
                res.send({ message: "You have successfully registered into the system" })
            }
        }
        catch (error) {
            res.send(`Method: signupAdmin Class: AdminController Error : ${error}`);
        }
    }

    async signinAdmin(req, res) {

        const { email, password } = req.body
        try {
            const foundUser = await User.findOne({ "email": email });
            if (foundUser != null) {
                bcrypt.compare(password, foundUser.password, (err, result) => {
                    if (result) {
                        const token = jwt.sign({_id:foundUser._id},process.env.JWT_SECRET,{expiresIn:'1h'})

                        res.send({
                            token,
                            message: "Successfully logged in"
                        })
                    }
                    else {
                        res.send({ message: "Invalid password!" });
                    }
                });
            }
            else {
                res.send({ message: "User not found" })
            }
        }
        catch (error) {
            res.send(`Method: signinAdmin Class: AdminController Error : ${error}`);
        }
    }

}

module.exports = AdminController
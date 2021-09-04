// const login = (req,res)=>{
// const User = require('../../../../../NewsAPPDB/model/users.entity')
const User = require('../controller/users.entity')
const bcrypt = require('bcrypt')
const { uuid } = require('uuidv4')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'qwertytrew12w212e13e13'
module.exports = {
    register: async args => {
        console.log("args", args)
        try {
            const existingUser = await User.findOne({ emailID: args.userInput.emailID });
            if (existingUser) {
                throw new Error('User already exists')
            }
            else {
                const passwordHashed = await bcrypt.hash(args.userInput.password, 12);
                const newUser = new User({
                    userId: uuid(),
                    userName: args.userInput.userName,
                    fullName: args.userInput.fullName,
                    emailID: args.userInput.emailID,
                    password: passwordHashed,
                    mobile: args.userInput.mobile
                })

                const result = await newUser.save();
                return { ...result._doc, _id: result.userId }
            }
        } catch (error) {
            throw error
        }
    },

    user: () => {
        return User.find();
    },

    login: async ({ email, password }) => {
        try {
            const user = await User.findOne({ emailID: email })
            console.log(user.userId)
            const isMatchPassword = await bcrypt.compare(password, user.password);
            if (!isMatchPassword)
                throw new Error('Password incorrect')

            let token = jwt.sign({
                userId: user.userId,
                fullName: user.fullName
            },
                JWT_SECRET_KEY,
                {
                    expiresIn: "1h"
                }
            )
            return { userID: user.userId, fullName: user.fullName, token: token, tokenExpiration: 1 }
        } catch (error) {
            throw new Error(error)
        }
    },

    isAuthenticated: async ({ token }) => {
        try {
            let response = jwt.verify(token, JWT_SECRET_KEY);
            // console.log("auth response", response)
            return { isAuthenticated: true }

        } catch (error) {
            return { isAuthenticated: true }

        }
    }


}
const userDAO = require('../dao/user.dao');
// const userLogin = async (req, res, next) => {
//     let response = await service.login(req, res);
//     res.json(response)
// }

const userRegister = async (req, res, next) => {
    const user = req.body;
    let result = await userDAO.register(user);
    res.json(result)
}

// const userIsAuthenticated = async (req, res, next) => {
//     let response = await service.isAuthenticated(req, res);
//     res.json(response)
// }

module.exports = {
    // userLogin,
    userRegister,
    // userIsAuthenticated
}
const authUser = require('../dao/user.dao');


const rootResolver={
    ...authUser
}

module.exports=rootResolver;
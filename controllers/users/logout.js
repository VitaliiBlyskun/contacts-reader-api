const { User } = require("../../models");

const logout = async (request, response) => {
    const { _id } = request.user;
    await User.findByIdAndUpdate(_id, { token: "" })
    
    response.json({
        message: "logout successful"
    })
 }

module.exports = logout;
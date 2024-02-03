const { Contact } = require("../../models");

const listContacts = async (request, response) => {
    const { _id: owner } = request.user;
    const { page = 1, limit = 10 } = request.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({owner}, "", {skip, limit}).populate("owner", "email subscription");
    response.json(result);
};

module.exports = listContacts;
const { Contact } = require("../../models");
const { HttpError } = require("../../utils");

const favoriteListContacts = async (request, response) => {
  const { _id: owner } = request.user;
  const { page = 1, limit = 10 } = request.query;
  const skip = (page - 1) * limit;
  const list = await Contact.find({ owner }, "-_id", {
    skip,
    limit,
  });
    const result = list.filter(item => item.favorite === true)
    if (result.length === 0) {
          throw HttpError(404)
    }
    
  response.json(result);
};

module.exports = favoriteListContacts;

const httpStatus = require('http-status');
const getCategories = async (req, res) => {
    const categories = [
        {
            id: 1,
            name: 'Clothes'
        },
        {
            id: 2,
            name: 'IT'
        }
    ]
    res.send(categories);
};
module.exports = { getCategories };
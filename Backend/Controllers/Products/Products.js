const productsSchema = require('../../Schema/defaultSchema');

const getProducts = async (req, res) => {
    try {
        const allProducts = await productsSchema.find({});
        return res.status(200).json({
            message: "Detail of all products",
            data: allProducts
        });
    } catch (error) {
        console.error('Error occurred while getting all products:', error);
        return res.status(500).json({
            message: "Some error occurred in getting the details of all products",
            error: error.message
        });
    }
}

module.exports = getProducts;

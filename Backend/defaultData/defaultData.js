const constData = require('../Constants/data.js');
const defaultSchema = require('../Schema/defaultSchema.js')

 const defaultData = async (req,res) => {
    try {
        
      await defaultSchema.insertMany(constData)

    } catch (error) {
// console.log('some error occured here')
    }
}

module.exports = defaultData;
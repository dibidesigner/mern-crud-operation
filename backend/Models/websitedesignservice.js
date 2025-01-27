const mongoose = require('mongoose')

const webservice = new mongoose.Schema({
    headerText : String,
    ParagraphText : String
})

const webserviceModel =mongoose.Model('webserviceModel', webservice)

exports.module=webserviceModel
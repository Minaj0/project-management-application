const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    subcategory: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Subcategory', subCategorySchema);


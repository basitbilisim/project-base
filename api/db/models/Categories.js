const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    is_active: { type: Boolean, default:true},
    created_by: { type: mongoose.SchemaTypes.ObjectId ,required: true }
  },
  { 
    versionKey:false,// -v yok eder
    timestamps: {
        createdAt:"created_at",
        updatedAt:"updated_at"
  } } // createdAt ve updatedAt'i otomatik yönetecek
);

class Categories extends mongoose.Model{

}
    
schema.loadClass(Categories)


module.exports = mongoose.model("categories", schema)
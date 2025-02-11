const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaTypes.ObjectId ,required: true },
    user_id: { type: mongoose.SchemaTypes.ObjectId ,required: true },
  },
  { 
    versionKey:false,// -v yok eder
    timestamps: {
        createdAt:"created_at",
        updatedAt:"updated_at"
  } } // createdAt ve updatedAt'i otomatik yönetecek
);

class UserRoles extends mongoose.Model{

}
    
schema.loadClass(UserRoles)


module.exports = mongoose.model("user_roles", schema)
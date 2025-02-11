const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    role_id: { type: mongoose.SchemaTypes.ObjectId ,required: true },
    permission: { type: String, required:true },
    created_by: { type: mongoose.SchemaTypes.ObjectId ,required: true },
  },
  { 
    versionKey:false,// -v yok eder
    timestamps: {
        createdAt:"created_at",
        updatedAt:"updated_at"
  } } // createdAt ve updatedAt'i otomatik yönetecek
);

class RolePrivileges extends mongoose.Model{

}
    
schema.loadClass(RolePrivileges)


module.exports = mongoose.model("role_privileges", schema)
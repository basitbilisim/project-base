const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: String, required: false },
  },
  { timestamps: {
    createdAt:"created_at",
    updatedAt:"updated_at"
  } } // createdAt ve updatedAt'i otomatik yönetecek
);

class Users extends mongoose.Model{

}
    
schema.loadClass(Users)


module.exports = mongoose.model("users", schema)
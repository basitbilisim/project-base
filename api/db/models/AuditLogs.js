const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    level: { type: String},
    email: { type: String, required: true, unique:true},
    location: { type: String},
    proc_type: { type: String},
    log: { type: String},
  },
  { 
    versionKey:false,// -v yok eder
    timestamps: {
        createdAt:"created_at",
        updatedAt:"updated_at"
  } } // createdAt ve updatedAt'i otomatik yönetecek
);

class AuditLogs extends mongoose.Model{

}
    
schema.loadClass(AuditLogs)


module.exports = mongoose.model("audit_logs", schema)
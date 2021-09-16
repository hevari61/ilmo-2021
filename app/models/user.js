const mongoose = require("mongoose");
const { collection } = require("./user.model");

const UserScema = new mongoose.Schema({ (property) unique: boolean
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})
{ collection: 'users'}

const model = mongoose.Model('UserScema', UserScema)

  // tää on mongo skema, lähinnä tyylikirjasto, jossa esim tuo username on uuniikki ja muutkin tarvitanan
  
module.exports = Model;

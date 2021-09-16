const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://@cluster0.beap7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// osaan koodista tuon html takia lisätty tähän, myöhemmin muutetaan vastaamaan jsää
const path = require('path')
// app.use('/', express.static(path.join(__dirname, 'static')))

//virheen käsittelyä (epäkelpoa merkkiä, väärä salis ja pituus lyhyt...)
app.post('api/register', async (req, res) => {
  const {username, password: plainTextPassword } = req.body

  if(!username || typeof username !== 'string') {
    return res.json({ status: 'error', error: 'Epäkelpo nimi'})
  }
  
  if(!plainTextPassword || typeof plainTextPassword !== 'string') {
    return res.json({ status: 'error', error: 'Epäkelpo salis'})
  }

  if (plainTextPassword.length <5) {
    return res.json({ status: 'error', error: 'Liian pätkä, pitää olla yli 4 merkkiä'
  })
}
  
//hässätään pituudeeksi 10 merkkiä, ei järkevää kovin pitkäski
  const password = await bcrypt.hash(plainTextPassword, 10)

//tässä vikasietotesti...
try {
  const response = await User.create({
    username,
    password
  })
  console.log('Luotu onnistuneesti', response)
} catch(error) {
    if(error.code === 11000) {
      // tuplana käyttis, ai ai
    }

        return res.jason({status: 'error', error: 'Käytössä jo tuo nimi'})
    throw error
}





  res.json({ status: 'ok' })
})
app.listen(8080, () => {
  console.log('Serveri runnaa 8080') 
})
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

db.mongoose
  .connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
});
}
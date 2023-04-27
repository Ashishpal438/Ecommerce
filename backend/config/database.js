const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb connected with Server: ${data.connection.host}`);
    })
    // .catch((error) => {
    //   console.log(error);
    // });
};

module.exports = connectDatabase;

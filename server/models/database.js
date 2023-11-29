
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://mern-book-store:0NB1Y6E8nW1AuJWe@cluster0.ov4rjdj.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log(e);
  });
// Models
require("./Category");
require("./Recipe");

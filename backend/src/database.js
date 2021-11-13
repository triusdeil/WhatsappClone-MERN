import mongoose from "mongoose";

(async () => {
  try {
    const db = mongoose.connect("mongodb://localhost/whatsappdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
})();

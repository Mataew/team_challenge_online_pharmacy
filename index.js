const express = require("express");
const mongoose = require("mongoose");

const PORT = 2000;

const app = express();

app.use(require("./routes/index"));
app.use(express.json());

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hus:hus99@cluster0.df1f6.mongodb.net/Online_Pharmacy?retryWrites=true&w=majority"
    );
    console.log("Сервер успешно соединен с MongoDB");
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порте ${PORT}...`);
    });
  } catch (e) {
    resizeBy.json(e);
  }
};

startServer();

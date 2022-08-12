const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.ddafgxm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("conected");
  })
  .catch((e) => {
    console.log("error");
  });
const bcrypt = require("bcrypt");
const regSchema = require("../schemas/regSchema");
const uploadProductsSchema = require("../schemas/uploadProductsSchema");
const boughtItemSchema = require("../schemas/boughtItemSchema");
const gameRegSchema = require("../schemas/gameRegSchema");

let words = "";

const wordai = ["pavelas", "tomasas", "mama"];

function randomWord() {
  let word = wordai[Math.floor(Math.random() * wordai.length)];
  words = word;
}

//hasshing and comparing pass functions
async function hashPass(plain) {
  const hashPass = await bcrypt.hash(plain, 10);
  return hashPass;
}
async function comparePass(pass, hashedPass) {
  const compare = await bcrypt.compare(pass, hashedPass);
  return compare;
}
//User registration function
async function regUser(obj) {
  const hashedPass = await hashPass(obj.pass1);
  const item = new gameRegSchema();
  item.email = obj.email;
  item.pass = hashedPass;
  item
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });
}
let guessingletters = [];

module.exports = {
  register: (req, res) => {
    regUser(req.body);
    res.send({ error: false, message: "registracija sekminga" });
  },
  login: async (req, res) => {
    guessingletters = [];
    randomWord();
    console.log(words);
    const { email, pass } = req.body;
    const user = await gameRegSchema.findOne({ email });

    //tikrinam hashintus paswordus

    const compare = await comparePass(pass, user.pass);
    let arr = [];

    for (let i = 0; i < words.length; i++) {
      arr.push("_");
    }

    if (!user || !compare)
      return res.send({ error: true, message: "wrong user or pass" });
    res.send({
      data: user,
      error: false,
      message: "You loged succesfully",
      word: arr,
    });
  },

  checkguess: async (req, res) => {
    const indexes = [];
    const letter = req.body.letter;

    for (let index = 0; index < words.length; index++) {
      if (words[index] === letter) {
        indexes.push(index);
      }
    }

    if (guessingletters.includes(req.body.letter))
      return res.send({
        message: "tokia jau buvo",
        error: true,
      });
    guessingletters.push(req.body.letter);

    console.log(guessingletters);

    const index = words.indexOf(letter);
    // if (index === -1)
    //   return res.send({
    //     error: true,
    //     message: "nera tokios",
    //   });

    if (indexes.length === 0)
      return res.send({
        error: true,
        message: "nera tokios",
      });

    res.send({
      message: "all ok",
      error: false,
      index: indexes,
      letter: letter,
    });
  },
  generatenewword: async (req, res) => {
    guessingletters = [];
    randomWord();
    console.log(words);

    let arr = [];

    for (let i = 0; i < words.length; i++) {
      arr.push("_");
    }

    res.send({
      word: arr,
    });
  },
  points: async (req, res) => {
    // console.log(req.body.buyer);
    const user = await gameRegSchema.findOneAndUpdate(
      { email: req.body.email },
      { $inc: { points: req.body.points } },
      { new: true }
    );

    res.send({
      error: false,
      message: "oki doki",
      user,
    });
  },
  leaders: async (req, res) => {
    const gamers = await gameRegSchema.find();
    res.send({ gamers });
  },
};

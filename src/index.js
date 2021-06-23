var http = require("http");
const express = require("express");
const { time } = require("console");
const App = express();
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    // console.log(json);
    console.table(json, ["id", "name", "email"]);
    const me = { uno: "uno", dos: "dos", tres: "tres" };
    console.table(me);
  });

//create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const labRat = () => {
  console.log("Hello World");
};

const tester = () => {
  console.time("Hello");
  labRat();
  console.timeEnd("Hello");
};

tester();

App.get("/", (re, res) => {
  res.send("Hello World");
  console.log("Por running");
});

App.listen(8080, () => console.log("Server is running on port 3000"));

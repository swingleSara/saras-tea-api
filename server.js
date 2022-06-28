const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

app.use("/", express.static("js"));

const teas = {
  black: {
    type: "black",
    looseLeaf: true,
    decaf: false,
  },
  green: {
    type: "gross",
    looseLeaf: false,
    decaf: false,
  },
  herbal: {
    type: "herbal",
    looseLeaf: false,
    decaf: true,
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:type", (request, response) => {
  const teaType = request.params.type.toLowerCase();
  if (teas[teaType]) {
    response.json(teas[teaType]);
  } else {
    response.json(teas["black"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}.  Better go catch it!`);
});

const supabaseClient = require("@supabase/supabase-js");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const supabaseURL = "https://vfojwovmvpwhdjjofmxb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmb2p3b3ZtdnB3aGRqam9mbXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzg4MDcsImV4cCI6MjAzMTcxNDgwN30.VXAaFuW7X5Jdxs3ekHMo4tnt8gFm_grak3jpBQW69GE";
const supabase = supabaseClient.createClient(supabaseURL, supabaseKey);

// Servers HTML, CSS, and Client Side JS of the site
app.get("/", (req, res) => {
  res.sendFile("public/home.html", { root: __dirname });
});

app.get("/savedQuotes", async (req, res) => {
  console.log("attempting to Get all quotes");

  const { data, error } = await supabase.from("Customer").select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post("/postQuote", async (req, res) => {
  console.log("adding quote");
  var quote = req.body.quote;

  const { data, error } = await supabase
    .from("Customer")
    .insert({ quote: quote })
    .select();

  if (error) {
    console.log("Error");
    res.send(error);
  } else {
    res.send(data);
  }
});

app.listen(port, () => {
  console.log("express app listening on port 3000");
});

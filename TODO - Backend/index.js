const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/TodoModels");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://vishalmaurya:vishalmaurya@cluster0.o5miqqq.mongodb.net/"
  )
  .then((res) => {
    console.log("connected db");
  })
  .catch((err) => {
    console.log("err db not connected");
  });
//  get data
app.get("/", async (req, res) => {
  try {
    const task = await TodoModel.find(); // Retrieve data from the MongoDB collection
    // console.log(task);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data.");
  }
});
// get data by id form db
app.get("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await TodoModel.findOne({ _id: id });  // Use an object with property "_id" to search by ID
    // console.log(result);
    
    if (!result) {
      res.status(404).json({ message: "Data not found" });  // Handle the case when no data is found
    } else {
      res.json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error to get one data.");
  }
});

// for update data in db
app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    await TodoModel.findByIdAndUpdate(id, updatedData).then((result) => {
      console.log(result);
      console.log(" todo updated ");
      res.json(result);
    }); 
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in update data.");
  }
});
// for add
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));

  //   res.send("now you are in home by post req");
});

app.delete ("/delete/:id",async (req,res)=>{
  try{
    const id = req.params.id;
    await TodoModel.findByIdAndDelete(id).then((result)=>{
      res.json(result);
    })

  }  catch (error) {
    console.error(error);
    res.status(500).send("Error in delete data.");
  }
});

app.listen(3001, () => {
  console.log("server is now running");
});

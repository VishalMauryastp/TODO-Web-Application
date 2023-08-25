import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllToDo from "./AllToDo";

const Create = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]); // Run the effect whenever "data" changes

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        setData([...data, { task }]); // Update data with the new task
        setTask(""); // Clear the textarea after adding
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-full flex flex-col h-[300px] p-4 bg-gray-200 rounded-xl mx-auto ">
        <textarea
          className="w-full h-full bg-transparent outline-none"
          name=""
          id=""
          placeholder="Write Here ..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-black mt-4 rounded-lg px-8 py-2 text-white font-semibold hover:bg-black bg-opacity-60 transition-colors"
          onClick={() => {
            handleAdd();
          }}
        >
          Add
        </button>
      </div>
      <AllToDo Data={data} />
    </>
  );
};

export default Create;


import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllToDo from "./AllToDo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState("");
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
    if (task.trim() === "") {
      toast.error('ToDo should not be empty ',{ autoClose: 800 })
      return;
    }

    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        toast.success('ToDo Added ',{ autoClose: 800 })
        // alert("TODO added")
        setData([...data, { task }]);
        setTask(""); // Clear the textarea after adding
        console.log(result);
      })
      .catch((err) =>{ console.log(err)
        toast.error('ToDo Not Save  ',{ autoClose: 800 })
      }
      
      );
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
          className={`bg-black mt-4 rounded-lg px-8 py-2 text-white font-semibold hover:bg-black bg-opacity-60 transition-colors ${
            task.trim() === "" ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => {
            handleAdd();
          }}
          // disabled={task.trim() === ""}
        >
          Add
        </button>
      </div>
      <AllToDo Data={data} />
    </>
  );
};

export default Create;

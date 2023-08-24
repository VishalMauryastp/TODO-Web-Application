import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const create = () => {
  // {_this}
  const navigate = useNavigate();
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="flex flex-col h-[300px] p-4 bg-gray-200  rounded-xl mx-auto">
        {/* w-[400px] h-[300px] */}
        <textarea
          className="w-full h-full bg-transparent outline-none "
          name=""
          id=""
          placeholder="Write Here ..."
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></textarea>
        <button
          className="bg-black mt-4 rounded-lg  px-8 py-2 text-white font-semibold hover:bg-black bg-opacity-60  transition-colors"
          onClick={() => {
            handleAdd();
            // _this.handleLode();
            // navigate("/assdas");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default create;

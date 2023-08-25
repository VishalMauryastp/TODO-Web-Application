import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllToDo = ({Data}) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:3001/delete/${id}`,
    })
      .then(() => {
        toast.success("ToDo Deleted Successfully ", { autoClose: 800 })
        // Remove the deleted item from the data state
        // setData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((err) => {
        toast.error("ToDo Not Deleted Successfully ", { autoClose: 800 })
        console.log(err);
      });

  };

  return (
    <>
      {Data.length == 0 ? (
        <div className="flex p-4 bg-gray-200 w-full  rounded-xl mx-auto">
          <h1 className=" w-fit m-auto">No record... </h1>
          {/* console.log(""); */}
        </div>
      ) : (
        Data.map((val, i) => {
          // console.log(val);
          return (
            <div
              key={i}
              className="flex flex-col h-[300px]  p-4 bg-gray-200 w-full  rounded-xl mx-auto"
            >
              <div className="w-full h-full bg-transparent outline-none  flex-wrap  ">
                {val.task}
                
                
                
              </div>
              <div className="flex  justify-between">
                <button
                  onClick={() => {
                    navigate(`/update/${val._id}`);
                  }}
                  className="bg-black mt-4 rounded-lg  px-14 py-2 text-white font-semibold hover:bg-black bg-opacity-60  transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(val._id)}
                  className="bg-black mt-4 rounded-lg  px-8 py-2 text-white font-semibold hover:bg-black bg-opacity-60  transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default AllToDo;

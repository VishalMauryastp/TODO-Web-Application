import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTodo = () => {
  const naviagate = useNavigate();
  const [data, setData] = useState();
  const [originalData, setOriginalData] = useState(""); 
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3001/update/${id}`,
    })
      .then((result) => {
        setData(result.data.task);
        setOriginalData(result.data.task);
        
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, []);

  const handleCancel = () => {
    if (data !== originalData) {
      const confirmCancel = window.confirm(
        "You have unsaved changes. Do you really want to cancel?"
      );
      if (confirmCancel) {
        naviagate("/");
      }
    } else {
      naviagate(`/update/${id}`);
    }
  };

  const handleUpadate = () => {
    axios
      .put(`http://localhost:3001/update/${id}`, { task: data })
      .then((result) =>{ console.log(result)
        toast.success('Now ToDo Updated ',{ autoClose: 800 })
      })
      .catch((err) =>{ console.log(err)
        toast.error('Now  ToDo Not Updated ',{ autoClose: 800 })
      
      });
  };

  return (
    <div className="w-full h-screen bg-purple-400 flex ">
      <div className="m-auto w-full ">
        <h1 className=" w-fit mx-auto text-2xl font-semibold  text-white">Upadate ToDo Task</h1>
        <div className="w-[95%] sm:w-[80%]  md:w-[60%] mx-auto bg-white p-8 rounded-lg mt-8">
          <textarea
            value={data}
            className="w-full bg-transparent outline-none h-[50vh]"
            onChange={(e) => {
              setData(e.target.value);
            }}
          >
           
          </textarea>
          {/* */}
          <div className="flex  justify-between">
            <button
              onClick={ handleCancel}
              className="bg-black mt-4 rounded-lg  w-[100px] py-2 text-white font-semibold hover:bg-black bg-opacity-60  transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleUpadate();
                naviagate("/");
              }}
              className="bg-black mt-4 rounded-lg  w-[100px]  py-2 text-white font-semibold hover:bg-black bg-opacity-60  transition-colors"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;

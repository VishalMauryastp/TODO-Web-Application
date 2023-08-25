import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import{Route,Routes} from "react-router-dom"
import UpdateTodo from "./components/UpdateTodo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 



function App() {


  return (
    <>
    <main>
      <Routes>
       < Route path="*" element={<Home/>} />
       < Route path="/update/:id" element={<UpdateTodo/>} />
      </Routes>
      <ToastContainer position="top-right" />
    </main>  
    </>
  );
}

export default App;

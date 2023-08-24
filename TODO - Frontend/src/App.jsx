import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import{Route,Routes} from "react-router-dom"
import UpdateTodo from "./components/UpdateTodo";


function App() {


  return (
    <>
    <main>
      <Routes>
       < Route path="*" element={<Home/>} />
       < Route path="/update/:id" element={<UpdateTodo/>} />
      </Routes>
    </main>  
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Create from "../../components/create";
import AllToDo from "../../components/AllToDo";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  // const handleLode = () => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:3001",
  //   })
  //     .then((res) => {
  //       setData(res.data);
  //       // console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <section>
      <div className="flex h-24  shadow-2xl bg-blue-300">
        <h1 className="text-white text-center w-fit m-auto  text-3xl  font-bold font-sans ">
          TODO
        </h1>
      </div>
      <div className=" py-8 w-[90%] mx-auto grid gap-4 md:grid-cols-2 min-[1042px]:grid-cols-3 ">
        <Create
          // _this={{
          //   handleLode,
          // }}
        />
        <AllToDo Data={data} />
      </div>
    </section>
  );
}

export default Home;

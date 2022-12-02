import React, { useEffect, useState } from "react";
import AllCatagory from "./AllCatagory";
import axios from "axios";

const Catagory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // fetch("https://re-roll-abike-server.vercel.app/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
    axios
      .get("https://re-roll-abike-server.vercel.app/categories")
      .then((data) => setCategories(data.data));
  }, []);
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6 ">
        {categories.map((catagory) => (
          <AllCatagory key={catagory._id} catagory={catagory}></AllCatagory>
        ))}
      </div>
    </div>
  );
};

export default Catagory;

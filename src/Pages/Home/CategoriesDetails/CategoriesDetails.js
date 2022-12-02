import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../Catagory/BookingModal/BookingModal";
import CatagoryDetailsCard from "./CatagoryDetailsCard";

const CategoriesDetails = () => {
  const params = useParams();

  const id = params.id;
  console.log(params);

  //    const [category, setCategory] = useState([]);
  const [bikeModel, setbikeModel] = useState(null);
  //  useEffect(() => {
  // fetch(`https://re-roll-abike-server.vercel.app/category?title=${id}`)
  // .then((res) => res.json())
  // .then((data) => setCategory(data));
  // }, [id]);

  const { data: category = [], refetch } = useQuery({
    queryKey: ["allrole", id],
    queryFn: async () => {
      const res = await fetch(
        `https://re-roll-abike-server.vercel.app/category?title=${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-6  ">
        {category.map((cat) => (
          <CatagoryDetailsCard
            key={cat._id}
            setbikeModel={setbikeModel}
            refetch={refetch}
            cat={cat}
          ></CatagoryDetailsCard>
        ))}
      </div>

      {bikeModel && (
        <BookingModal
          bikeModel={bikeModel}
          setbikeModel={setbikeModel}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoriesDetails;

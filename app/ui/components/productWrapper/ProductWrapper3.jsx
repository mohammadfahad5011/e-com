import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";

const datas = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const ProductWrapper3 = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {datas.map((data) => {
        return (
          <div key={data.id} className="basis-[32%]">
            <SingleProduct data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductWrapper3;

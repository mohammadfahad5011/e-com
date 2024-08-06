import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";

const datas = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const ProductWrapper4 = ({ title }) => {
  return (
    <div className="">
      <h2 className="text-4xl mb-4">{title}</h2>

      <div className="flex flex-wrap gap-4">
        {datas.map((data) => {
          return (
            <div key={data.id} className="basis-[24%]">
              <SingleProduct data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductWrapper4;

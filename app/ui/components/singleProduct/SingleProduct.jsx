import Link from "next/link";
import React from "react";

const SingleProduct = ({ data }) => {
  return (
    <div className="">
      <Link href={`/product/${data.id}`}>
        <div className="bg-slate-500  min-h-[300px] flex justify-center items-center">
          SingleProduct {data.id}
        </div>
      </Link>
      <button>Add to cart</button>
    </div>
  );
};

export default SingleProduct;

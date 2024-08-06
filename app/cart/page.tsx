"use client";

import React, { useState } from "react";

const initialCartItems = [
  {
    item_img: "product1.jpg", // Update with actual image path
    item_name: "product 1",
    item_price: 120,
    qty: 1,
  },
  {
    item_img: "product2.jpg", // Update with actual image path
    item_name: "product 2",
    item_price: 50,
    qty: 2,
  },
];

interface CartItem {
  item_img: string;
  item_name: string;
  item_price: number;
  qty: number;
}

const TotalAmount = (cartItems: CartItem[]): number =>
  cartItems.reduce((sum, { item_price, qty }) => sum + item_price * qty, 0);

export default function Page() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const addItem = (itemName: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.item_name === itemName ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const removeItem = (itemName: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.item_name === itemName && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const totalAmount = TotalAmount(cartItems);

  return (
    <main>
      <p>total items: {cartItems.length}</p>
      {cartItems.map((item) => (
        <div key={item.item_name} className="">
          <div className="flex justify-between">
            <img src={item.item_img} alt={item.item_name} />
            <p>item name: {item.item_name}</p>
            <p>item price: {item.item_price}</p>
            <div className="flex gap-x-4">
              <span
                className="text-3xl"
                onClick={() => addItem(item.item_name)}
              >
                +
              </span>
              <span
                className="text-3xl"
                onClick={() => removeItem(item.item_name)}
              >
                -
              </span>
            </div>
            <p>number of quantity: {item.qty}</p>
          </div>
        </div>
      ))}
      <p>total amount: {totalAmount} tk</p>
    </main>
  );
}

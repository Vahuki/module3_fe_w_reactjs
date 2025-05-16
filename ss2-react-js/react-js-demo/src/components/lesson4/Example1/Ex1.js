import React from "react";
import ShowMess from "./ShowMess";
function Ex1() {
    const menuInfo = {
        name: "Banh Mi",
        price: 20000,
        description: "Banh Mi is a Vietnamese sandwich"
    }

    const menuInfo2 = [
        {
            name: "Banh Mi",
            price: 20000,
            description: "Banh Mi is a Vietnamese sandwich"
        },
        {
            name: "Pho",
            price: 30000,
            description: "Pho is a Vietnamese noodle soup"
        },
        {
            name: "Gio Lua",
            price: 10000,
            description: "Gio Lua is a Vietnamese pork sausage"
        },
    ]
  return (
    <div>
      <ShowMess menu={menuInfo}  item={menuInfo2}/>
    </div>
  );
}
export default Ex1;
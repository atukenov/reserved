import React from "react";
import MenuCard from "./MenuCard";
import { ItemType } from "@/utils/types";

const Menu = ({ menu }: { menu: ItemType[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menu.length ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => {
              return <MenuCard key={item._id} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not not have menu</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;

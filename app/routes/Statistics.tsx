import Navbar from "~/Components/navbar";

import type { MetaFunction } from "@remix-run/node";
 ;
export const meta: MetaFunction = () => {
  return [
    { title: "Rooster Ranges Cockatrice" },
    { name: "description", content: "Rooster Ranges is the offical server for Cockatrice" },
  ];
};

export default function Index() {
  return (
    <div>
          <Navbar />
          <h1 className="bg-purple-600 flex flex-col items-center leading text-9xl font-bold text-gray-800 dark:text-gray-100">
             Rooster <br></br>Ranges
          </h1>         
         
   </div>  

  );
}
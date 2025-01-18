import type { MetaFunction } from "@remix-run/node";
import { Container } from '@mui/material' ;
export const meta: MetaFunction = () => {
  return [
    { title: "Rooster Ranges Cockatrice" },
    { name: "description", content: "Rooster Ranges is the offical server for Cockatrice" },
  ];
};

export default function Index() {
  return (
    
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome To Rooster Ranges
          </h1>         
        </header>    

  );
}
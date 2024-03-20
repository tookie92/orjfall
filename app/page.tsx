import Image from "next/image";
import MonCanvas from "./Components/MonCanvas";
import { motion } from "framer-motion";
import Underlay from "./Components/Underlay";

export default function Home() {
  return (
    <>
       <div className="  flex relative  bg-monfond  h-full   w-full">
          <div className=" items-center  justify-center h-[100vh] fixed top-0 z-10  w-full" >
            <MonCanvas/>
          </div>
         <Underlay/>
       </div>
      
    </>
  );
}

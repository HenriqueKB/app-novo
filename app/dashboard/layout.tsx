
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import MenuItem from "@/components/MenuItem";

import { IoIosInformationCircle, IoIosInformationCircleOutline } from "react-icons/io";

import { IoHome, IoHomeOutline } from "react-icons/io5";



export default function DashboardLayout({ children }: { children?: React.ReactNode }) {

 return (

 

 <div className="flex flex-1 flex-row h-[calc(100dvh-4rem)]">

 

 <Menu>

 <MenuItem label="Home" href="/" icon={<IoHomeOutline />} activeIcon={<IoHome />} />

 <MenuItem label="Personagens" href="/dashboard/personagens" icon={<IoIosInformationCircleOutline />} activeIcon={<IoIosInformationCircle />} />

 </Menu>

 <main className="flex-1 p-4">

 {children}

 </main>

 </div>

 );

}




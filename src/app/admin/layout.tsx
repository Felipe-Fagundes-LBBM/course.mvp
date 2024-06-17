import Header from "@/app/ui/forms/header"
import { Box } from "@mui/material"
import Navbar from "../ui/navbar"
export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode
            }>) 
  {
  return (
   <div> 
    <div>
       <Header/>
    </div>
    <Box sx={{ flexDirection: "row", display: "flex"}}>
        <Navbar/>
        {children}
    </Box> 
   </div>
         )     
  }   

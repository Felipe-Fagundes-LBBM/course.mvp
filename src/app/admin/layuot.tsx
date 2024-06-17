import Header from "@/ui/forms/header"

export default function PagesLayout({
    children,
}: Readonly<{
    children:React.ReactNode
            }>) 
  {
  return (
   <div> 
    <div> 
     <Header/>
    </div>
    {children} 
   </div>
         )     
  }   

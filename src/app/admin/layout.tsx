import Header from "../ui/header"
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
    {children} 
   </div>
         )     
  }   

import { PencilRuler, Type,Image } from "lucide-react"
import { useState } from "react"

interface Props{
    changeSelectedIndex: (index:number) => void
}

function SideNav({changeSelectedIndex}:Props) {
 const menuList = [
    {
        id: 1,
        name: "图标",
        icon: PencilRuler
    },
    {
        id: 2,
        name: "背景",
        icon: Image
    },
    {
        id: 3,
        name: "文字",
        icon: Type
    }
 ]
 // state acviveIndex
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="border shadow-lg h-screen w-full">
        <div>
            {menuList.map((menu,index) => (
                <div 
                onClick={() => {setActiveIndex(index);changeSelectedIndex(index);}}
                key={index} className={`px-8 py-4 text-lg hover:bg-primary hover:text-white cursor-pointer flex items-center 
                ${activeIndex===index ?'bg-primary text-white':'bg-white text-gray-500'}`}>
                    <menu.icon/>
                    <span className="ml-4">{menu.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav
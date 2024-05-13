import { useState } from "react";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/BackgroundController";
import FontController from "./components/FontController";

function App() {
  // state selectIndex

  const [selectedIndex, setSelectedIndex] = useState<number>();

  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex md:flex-row flex-col">
        <div className="flex w-1/6 items-start">
          <SideNav changeSelectedIndex={(index)=>setSelectedIndex(index)}/>
        </div>
        <div className="flex md:w-2/6 w-5/6 border">
          {selectedIndex === 0 && <IconController/>}
          {selectedIndex === 1 && <BackgroundController/>}
          {selectedIndex === 2 && <FontController/>}
        </div>
        <div className="flex md:w-3/6 w-6/6 border bg-blue-200">
         预览区域
        </div>
      </div>
    </div>
  );
}

export default App;

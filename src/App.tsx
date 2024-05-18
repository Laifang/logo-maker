import { useState } from "react";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/BackgroundController";
import FontController from "./components/FontController";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

function App() {
  // state selectIndex

  const [selectedIndex, setSelectedIndex] = useState<number>();
  
  const [updateStorage, setUpdateStorage] = useState({});  
  

  return (
    <UpdateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="flex w-2/12 items-start">
          <SideNav changeSelectedIndex={(index) => setSelectedIndex(index)} />
        </div>
        <div className="flex w-5/6 min-w-min overflow-auto border md:w-3/12">
          {selectedIndex === 0 && <IconController />}
          {selectedIndex === 1 && <BackgroundController />}
          {selectedIndex === 2 && <FontController />}
        </div>
        <div className="w-6/6 flex border md:w-7/12">
          <LogoPreview />
        </div>
      </div>
    </div>

    </UpdateStorageContext.Provider>
  );
}

export default App;

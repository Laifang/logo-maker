import { Slider } from "./ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "./IconList";

function IconController() {
  const InitialValue = JSON.parse(localStorage.getItem("value") || "{}");

  //state Icon size
  const [size, setSize] = useState(InitialValue.IconSize || 280);
  const [rotate, setRotate] = useState(InitialValue.IconRotate || 0);
  const [selectedColor, setSelectedColor] = useState(
    InitialValue.IconColor || "#fff",
  );
  const [icon, setIcon] = useState<string>(InitialValue.IconName || "Smile");

  const { setUpdateStorage } = useContext(UpdateStorageContext);

  // 将 size,rotate,selectedColor 存储到 浏览器的 localStorage 中
  useEffect(() => {
    const updateIconValue = {
      ...InitialValue,
      IconSize: size,
      IconRotate: rotate,
      IconColor: selectedColor,
      IconName: icon,
    };
    setUpdateStorage(updateIconValue);
    localStorage.setItem("value", JSON.stringify(updateIconValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, rotate, selectedColor,icon]);

  return (
    <div className="w-full p-4">
      <div>
       <IconList setSelectedIcon={(icon)=>setIcon(icon)}/>
        <div className="w-full">
          <label className="flex items-center justify-between p-4">
            大小 <span>{size} px</span>
          </label>
          <div className="w-full">
            <Slider
              min={32}
              max={512}
              step={2}
              defaultValue={[size]}
              onValueChange={(value) => setSize(value[0])}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="flex items-center justify-between p-4">
            旋转 <span>{rotate} °</span>
          </label>
          <div className="w-full">
            <Slider
              min={0}
              max={359}
              step={1}
              defaultValue={[rotate]}
              onValueChange={(value) => setRotate(value[0])}
            />
          </div>
        </div>
        <div className="w-full">
          <label className="flex items-center justify-between p-4">
            图标颜色
          </label>
          <div className="w-full">
            <ColorPickerController
              setSelectedColor={(color) => setSelectedColor(color)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconController;

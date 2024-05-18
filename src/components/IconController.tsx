import { SmilePlus } from "lucide-react";
import { Slider } from "./ui/slider";
import { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";

function IconController() {
  //state Icon size
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#fff");
  
  const storageValue =
    JSON.parse(localStorage.getItem("IconValue")||"{}");

  // 将 size,rotate,selectedColor 存储到 浏览器的 localStorage 中
  useEffect(() => {
    const updateIconValue = {
      ...storageValue,
      IconSize: size,
      IconRotate: rotate,
      IconColor: selectedColor,
      Icon: "Smile",
    };
    localStorage.setItem("IconValue", JSON.stringify(updateIconValue));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, rotate, selectedColor]);

  return (
    <div className="w-full p-4">
      <div>
        <label>图标</label>
        <div className="itmes-center flex  size-10 justify-center rounded-xl bg-gray-200 p-3">
          <SmilePlus size={16} />
        </div>
        <div className="w-full">
          <label className="flex items-center justify-between p-4">
            大小 <span>{size} px</span>
          </label>
          <div className="w-full">
            <Slider
              min={32}
              max={512}
              step={2}
              defaultValue={[280]}
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
              defaultValue={[0]}
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

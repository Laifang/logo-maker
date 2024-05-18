import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value") || "{}");
  const [rounded, setRounded] = useState(
    storageValue ? storageValue.bgRounded : 0,
  );
  const [padding, setPadding] = useState(storageValue ? storageValue.bgPadding : 0);
  const [color, setColor] = useState(storageValue ? storageValue.bgColor : "#fff");
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updateValue);
    localStorage.setItem("value", JSON.stringify(updateValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rounded, padding, color]);

  return (
    <div className="flex w-full flex-col items-center p-4">
      <div className="w-full">
        <label className="flex items-center justify-between p-4">
          边框圆角 <span>{rounded} px</span>
        </label>
        <div className="w-full">
          <Slider
            min={0}
            max={512}
            step={1}
            defaultValue={[rounded]}
            onValueChange={(value) => setRounded(value[0])}
          />
        </div>
      </div>
      <div className="w-full">
        <label className="flex items-center justify-between p-4">
          内边距 <span>{padding} px</span>
        </label>
        <div className="w-full">
          <Slider
            min={0}
            max={100}
            step={1}
            defaultValue={[padding]}
            onValueChange={(value) => setPadding(value[0])}
          />
        </div>
      </div>
      <div className="w-full">
        <label className="flex items-center justify-between p-4">
          背景颜色
        </label>
        <div className="w-full">
          <ColorPickerController
            setSelectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;

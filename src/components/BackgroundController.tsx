import { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";

function BackgroundController() {
  const [rounded, setRounded] = useState(20);
  const [padding, setPadding] = useState(10);
  const [color, setColor] = useState("#333fff");
  const storageValue = JSON.parse(localStorage.getItem("bgValue") || "{}");

  useEffect(() => {
    const updateValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    localStorage.setItem("bgValue", JSON.stringify(updateValue));
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
            min={10}
            max={100}
            step={1}
            defaultValue={[40]}
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

import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

interface StorageData {
  bgColor: string;
  bgRounded: number;
  bgPadding: number;
  IconSize: number;
  IconRotate: string;
  IconColor: string;
  IconName: string;
}

function LogoPreview() {
  const [storageValue, setStorageValue] = useState<StorageData>();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value") || "{}");
    setStorageValue(storageData);
  }, [updateStorage]);

  const Icon = ({ name, color, size,rotoate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return;
    return <LucidIcon size={size} color={color} style={{ transform: `rotate(${storageValue?.IconRotate}deg)` }} />;
  };

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <div
        className="size-[600px]  bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          <Icon
            name={storageValue?.IconName}
            color={storageValue?.IconColor}
            size={storageValue?.IconSize}
            rotoate={storageValue?.IconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;

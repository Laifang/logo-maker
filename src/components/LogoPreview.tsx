import { useEffect, useState } from "react";

interface StorageData {
  bgColor: string;
  bgRounded: number;
  bgPadding: number;
}


function LogoPreview() {
  const [storageValue, setStorageValue] = useState<StorageData>();


  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("bgValue") || "{}");
    setStorageValue(storageData);
  }, []);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="size-[600px]  bg-gray-200 p-4 outline-dotted outline-gray-300">
        <div
          className="h-full w-full"
          style={{
            borderRadius: storageValue?.bgRounded,
            backgroundColor: storageValue?.bgColor,
            padding: storageValue?.bgPadding
          }}
        ></div>
      </div>
    </div>
  );
}

export default LogoPreview;

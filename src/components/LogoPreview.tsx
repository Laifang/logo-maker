import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toPng } from "html-to-image";

interface StorageData {
  BgColor?: string;
  BgRounded?: number;
  BgPadding?: number;
  IconSize?: number;
  IconRotate?: string;
  IconColor?: string;
  IconName?: string;
}

interface Props {
  downloadPngLogo: boolean;
  setDownloadPngLogo: (value: boolean) => void;
}

// Icon type
type IconName = keyof typeof icons;
type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
  rotate?: string;
};

function LogoPreview({ downloadPngLogo, setDownloadPngLogo }: Props) {
  const [storageValue, setStorageValue] = useState<StorageData>();
  const { updateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value") || "{}");
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadPngLogo) {
      handleDownloadLogo();
      setDownloadPngLogo(false);
    }
  }, [downloadPngLogo]);

  function handleDownloadLogo() {
    const sourceHtml = document.getElementById("png-logo") as HTMLElement;
    setTimeout(() => {
      toPng(sourceHtml, { cacheBust: true })
        .then((dataUrl) => {
          const downloadLink = document.createElement("a");
          downloadLink.download = "logo.png";
          downloadLink.href = dataUrl;
          downloadLink.click();
          console.log(`Logo downloaded @: ${Date.now()}`);
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }, 2000);
  }

  const Icon = ({ name, color, size, rotate }: IconProps) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) return;
    return (
      <LucidIcon
        size={size}
        color={color}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <div
        className="size-[600px]  bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.BgPadding }}
      >
        <div
          id="png-logo"
          className="flex h-full w-full items-center justify-center"
          style={{
            borderRadius: storageValue?.BgRounded,
            background: storageValue?.BgColor,
          }}
        >
          <Icon
            name={storageValue?.IconName as IconName}
            color={storageValue?.IconColor}
            size={storageValue?.IconSize}
            rotate={storageValue?.IconRotate}
          />
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;

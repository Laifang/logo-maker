import { Download, PencilRuler } from "lucide-react";
import { Button } from "./ui/button";

interface Props{
  setDownloadPngLogo: (value:boolean)=>void;
}

function Header({setDownloadPngLogo}:Props) {
  return (
    <div className="flex items-center justify-between border-b p-4 shadow-sm">
      <div className="logo-title flex items-center gap-2 text-blue-500">
        <PencilRuler className="size-6" />
        <p>Logo 制作工具</p>
      </div>
      <Button className="flex items-center gap-2" onClick={()=>setDownloadPngLogo(true)}>
        <Download className="size-4" />
        下载到本地
      </Button>
    </div>
  );
}

export default Header;

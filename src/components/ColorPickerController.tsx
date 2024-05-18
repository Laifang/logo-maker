import { useState } from "react";
import ColorPicker  from "react-best-gradient-color-picker";

interface Props  {
    hideController?: boolean;
    setSelectedColor: (color: string) => void;
}


function ColorPickerController({hideController=false, setSelectedColor}:Props) {
    const [color, setColor] = useState(' rgba(255,255,255,1) 100%)');
    const customLocales = {
        CONTROLS: {
          SOLID: '单色',
          GRADIENT: '渐变',
        },
      }
 
    const options ={
        hideColorGuide: true,
        hideAdvancedSliders: true,
        hideInputType:true,
        // width:400,
        // height:400,
    }

    
  return (
      <ColorPicker value={color} onChange={(e)=>{setColor(e); setSelectedColor(e);}} locales={customLocales} {...options} hideControls={hideController} />
  )
}

export default ColorPickerController
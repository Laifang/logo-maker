import { useState } from "react";
import ColorPicker  from "react-best-gradient-color-picker";



function ColorPickerController() {
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
    }
  return (
      <ColorPicker value={color} onChange={setColor} locales={customLocales} {...options} />
  )
}

export default ColorPickerController
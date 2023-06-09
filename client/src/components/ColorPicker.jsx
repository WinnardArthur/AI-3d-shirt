import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        presetColors={[
          "#ccc", ,
          "#EFBDAE",
          "#353934",
          "#c19277",
          "#726DE8",
          "#2CCCE4",
          "#7098DA",
          "indigo",
          "red",
          "violet",
          "purple",
          "#512314",
          "#FF96AD",
          "#ff8a65",
          "#008A60"
        ]}
      />  
    </div>
  )
}

export default ColorPicker
"use client";

interface BandTogglerProps {
  isFiveBand: boolean;
  setIsFiveBand: (value: boolean) => void;
}

export const BandToggler = (props: BandTogglerProps) => {
  return (
    <div id="band-toggler">
      <label htmlFor="band-count">5 Bands</label>
      <input
        type="checkbox"
        id="band-count"
        onChange={() => {
          props.setIsFiveBand(!props.isFiveBand)
        }}/>
    </div>
  )
}

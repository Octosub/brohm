interface BandProps {
  color: string;
  setColor: (color: string) => void;
}

export const Band = (props: BandProps) => {
  return (
    <>
      <select
        value={props.color}
        onChange={(e) => {
          props.setColor(e.target.value)
          console.log(e.target.value)
        }}
      >
        <option value="black">Black</option>
        <option value="brown">Brown</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="purple">Purple</option>
        <option value="silver">Silver</option>
      </select>
      <div style={{backgroundColor: props.color, width: "100px", height: "100px"}}></div>
    </>
  )
}

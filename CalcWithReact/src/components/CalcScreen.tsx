interface Props {
  value: string;
}

function CalcScreen({ value }: Props) {
  return (
    <input
      readOnly
      type="text"
      className="form-control"
      placeholder={value}
      aria-label="Username"
      aria-describedby="basic-addon1"
    >      
    </input>
  );
}

export default CalcScreen;

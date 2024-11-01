import React from "react";
interface Props {
  value: string;
}

const CalcScreen = React.memo(({ value }: Props) => {
  return (
    <input
      readOnly
      type="text"
      className="form-control text-end"
      placeholder={value}
      aria-label="Username"
      aria-describedby="basic-addon1"
    ></input>
  );
});

export default CalcScreen;

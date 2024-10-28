import React from "react";

interface Props {
  label: string;
  onButtonClick: (addedValue: string) => void;
}

const CalcButton = React.memo(({ label, onButtonClick }: Props) => {
  return <button onClick={() => onButtonClick(label)}>{label}</button>;
});

export default CalcButton;

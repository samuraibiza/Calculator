
interface Props {
  label: string;
  onAddValue: (addedValue: string) => void;
}

const CalcButton = ({ label, onAddValue }: Props) => {
  return <button onClick={() => onAddValue(label)}>{label}</button>;
};

export default CalcButton;

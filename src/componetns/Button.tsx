interface Props {
  children: string;
  handleButton: () => void;
  handleAlertVisabilityTrue: () => void;
  color?: string;
}

const Button = ({
  children,
  handleButton,
  handleAlertVisabilityTrue,
  color,
}: Props) => {
  return (
    <button
      type="button"
      className={`btn btn-${color ? color : "primary"}`}
      onClick={handleAlertVisabilityTrue}
    >
      {children}
    </button>
  );
};

export default Button;

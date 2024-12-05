interface ButtonProps {
  label: string;
  variant: "btn" | "btn-ghost";
}

const Button = ({ label, variant }: ButtonProps) => {
  return <button className={variant}>{label}</button>;
};

export default Button;

// src/components/ui/button.tsx
type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "success" | "warning" | "error" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "", 
}: ButtonProps) {
  // Define the CSS classes for each variant
  const variantClass = {
  primary: "btn btn-primary",
  success: "btn btn-success",
  warning: "btn btn-warning",
  error: "btn btn-error",
  secondary: "btn btn-secondary",
  outline: "btn btn-outline",
}[variant];

  return (
    <button onClick={onClick} type={type} className={`${variantClass} ${className}`}>
        {label}
    </button>
  );
};
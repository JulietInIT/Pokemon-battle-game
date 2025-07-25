// src/components/ui/button.tsx
import { ButtonProps } from "@/lib/types";

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
    <button
      onClick={onClick}
      type={type}
      className={`${variantClass} ${className}`}
    >
      {label}
    </button>
  );
}

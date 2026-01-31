import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "loader";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(css.btnBase, css[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

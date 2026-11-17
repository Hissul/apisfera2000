import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router";

type ButtonVariant = "gold" | "bronze";

const baseClasses =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold motion-safe:transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-graphite";

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-brand-gold text-brand-graphite hover:bg-brand-gold/85",
  bronze: "bg-brand-bronze text-brand-white hover:bg-brand-graphite",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className = "",
  type = "button",
  variant = "gold",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      type={type}
    />
  );
}

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  className = "",
  variant = "gold",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    />
  );
}

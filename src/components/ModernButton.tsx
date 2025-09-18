import React from 'react';
import Link from '@docusaurus/Link';
import { cn } from '../lib/utils';

interface ModernButtonProps {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
  [key: string]: any;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  href,
  as: Tag = href ? Link : "button",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}) => {
  const variantClasses = {
    primary: "modern-button",
    secondary: "modern-button",
    dark: "modern-button modern-button--dark",
    gradient: "modern-button",
  };

  const commonProps = {
    className: cn(variantClasses[variant], className),
    onClick,
    ...props
  };

  if (href) {
    return (
      <Tag
        to={href}
        {...commonProps}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      {...commonProps}>
      {children}
    </Tag>
  );
};

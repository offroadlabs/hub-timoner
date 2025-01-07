interface ColoredSectionProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  className?: string;
}

export function ColoredSection({
  children,
  variant = "white",
  className = "",
}: ColoredSectionProps) {
  const bgColor = {
    primary: "bg-[rgba(158,195,58,0.1)] dark:bg-[rgba(158,195,58,0.05)]",
    secondary: "bg-[rgba(36,135,199,0.1)] dark:bg-[rgba(36,135,199,0.05)]",
    white: "bg-white dark:bg-slate-950",
  };

  return (
    <div className={`w-full py-16 ${bgColor[variant]} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}

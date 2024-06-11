import Image from "next/image";
import React from "react";

interface ButtonProps {
  text?: string;
  icon?: string;
  variant?: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  text = "Default",
  icon,
  type,
  variant,
}) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border py-2 px-4 font-semibold poppins-medium hover:bg-green-700 transition-all duration-150 ${variant}`}
    >
      {icon && <Image src={icon} width={24} height={24} alt="Icon" />}
      {text}
    </button>
  );
};

export default Button;

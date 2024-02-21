import { useState } from "react";

interface PasswordToggleOptions {
  showPassword: boolean;
  handleClickShowPassword: React.MouseEventHandler<HTMLButtonElement>;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const usePasswordToggle = (): PasswordToggleOptions => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };
  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

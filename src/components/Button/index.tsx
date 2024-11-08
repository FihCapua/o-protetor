import { ButtonProps } from "@/types";
import { Button } from "./style";

export const ButtonComponent: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    children,
    onClick,
  }) => {
    return (
      <Button $variant={variant} size={size} $fullWidth={fullWidth} onClick={onClick}>
        {children}
      </Button>
    );
  };
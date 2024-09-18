import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface JamboButtonProps {
  buttonContent: ReactElement | ReactElement[];
  onClick: () => void;
  icon?: ReactElement;
}
export const JamboButton = ({
  buttonContent,
  onClick,
  icon,
}: JamboButtonProps) => {
  const tAccent = process.env.tAccent;
  const cBackground = process.env.cBackground;
  const borderHover = process.env.borderHover;
  return (
    <Button
      border="2px"
      textColor={tAccent}
      _hover={{ borderColor: borderHover, textColor: borderHover }}
      bgColor={cBackground}
      borderColor={tAccent}
      rightIcon={icon}
      onClick={onClick}
    >
      {buttonContent}
    </Button>
  );
};

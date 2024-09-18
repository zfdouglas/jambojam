import { Container } from "@chakra-ui/react";

interface ToastMessageProps {
  content: string;
  backgroundColor: string;
}
export const ToastMessage = ({
  content,
  backgroundColor,
}: ToastMessageProps) => {
  return (
    <Container
      maxW="md"
      bg={backgroundColor}
      color="white"
      borderRadius={"5px"}
      padding={"10px 20px"}
    >
      {content}
    </Container>
  );
};

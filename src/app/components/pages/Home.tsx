"use client";
import { Timer } from "@/app/components/Timer/Timer";
import { useToast } from "@chakra-ui/react";
import { Theme } from "../Theme/Theme";
import { Title } from "../reusables/Title";
import Send from "/public/send.svg";

import { CenteredContainer } from "../reusables/CenteredContainer";
import { JamboButton } from "../reusables/Button";
import { ToastMessage } from "../reusables/ToastMessage";

export const Home = () => {
  const theme = process.env.JAM;
  const tAccent = process.env.tAccent;
  const borderHover = process.env.borderHover;
  const toast = useToast();

  const handleClickToCopy = () => {
    navigator.clipboard.writeText("jambojam@gmail.com");
    toast({
      title: "Email for submissions copied to clipboard!",
      variant: "solid",
      render: () => (
        <ToastMessage
          content="Email for submissions copied to clipboard!"
          backgroundColor={borderHover ?? ""}
        />
      ),
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <div className={"z-10 w-full flex flex-wrap place-content-center mt-10"}>
      {theme ? <Theme theme={theme} /> : null}
      <Title title={`the jam ${theme ? "ends" : "starts"} in`} />
      <Timer />
      <CenteredContainer>
        <JamboButton
          onClick={handleClickToCopy}
          buttonContent={<>Submit Your Work</>}
          icon={<Send color={tAccent} />}
        />
      </CenteredContainer>
    </div>
  );
};

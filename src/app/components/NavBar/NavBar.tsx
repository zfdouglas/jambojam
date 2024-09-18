import Image from "next/image";
import Logo from "/public/jambologo.png";

export const NavBar = () => {
  return (
    <div
      className={
        "z-15 w-full flex justify-start items-center h-14 bg-aBackground"
      }
    >
      <div
        style={{
          marginLeft: "10px",
          width: "11vh",
          maxWidth: "11vh",
          height: "70%",
          maxHeight: "70%",
          position: "relative",
        }}
      >
        <Image
          src={Logo}
          alt={"jambo logo"}
          fill={true}
          objectFit={"contain"}
        />
      </div>
    </div>
  );
};

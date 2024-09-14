import { Timer } from "@/app/components/Timer/Timer";
import { Theme } from "../Theme/Theme";

export const Home = () => {
  const theme = process.env.JAM;
  return (
    <div className={"z-10 w-full flex flex-wrap place-content-center"}>
      {theme ? <Theme theme={theme} /> : null}
      <Timer />
    </div>
  );
};

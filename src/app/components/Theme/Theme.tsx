import { tree } from "next/dist/build/templates/app-page";
import { Title } from "../reusables/Title";

interface ThemeProps {
  theme: string;
}
export const Theme = ({ theme }: ThemeProps) => {
  return (
    <div className={"w-full flex"}>
      <Title title={`The current theme is ${theme}`} />
    </div>
  );
};

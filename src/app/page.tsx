import Image from "next/image";
import { Home as HomePage } from "@/app/components/pages/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col items-center bg-cBackground">
        <NavBar />
        <HomePage />
      </main>
    </ChakraProvider>
  );
}

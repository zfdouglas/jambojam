import Image from "next/image";
import {Home as HomePage} from '@/app/components/pages/Home'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none z-0"
      src={'/patternbg.jpg'}
      alt={'BackgroundPattern'}
    />
      <HomePage />
    </main>
  );
}

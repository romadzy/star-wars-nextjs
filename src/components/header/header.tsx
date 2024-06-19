import logoLarge from "@/assets/logo-large.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex w-full justify-center bg-black p-4 shadow-md">
      <Image src={logoLarge} alt="" width={100} />
    </div>
  );
}

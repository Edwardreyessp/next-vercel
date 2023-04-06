import Image from "next/image";
import MainLayout from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1 className="center">Pricing</h1>
      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </MainLayout>
  );
}

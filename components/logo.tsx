import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
  className?: string;
  white?: boolean;
}

export const Logo = ({
  width,
  height,
  className,
  white = false,
}: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <Image
        src={white ? "/assets/logo-white.svg" : "/assets/logo.svg"}
        width={width}
        height={height}
        alt="Venoma Sport Logo"
      />
    </Link>
  );
};

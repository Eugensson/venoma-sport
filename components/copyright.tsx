import Link from "next/link";

export const Copyright = () => {
  return (
    <section className="mt-24 py-12 bg-primary text-white">
      <div className="comtainer mx-auto flex flex-col items-center gap-12">
        <ul className="flex flex-col xl:flex-row items-center justify-center gap-6">
          <li>
            <Link
              href="#"
              className="border-b hover:opacity-80 transition-opacity duration-300"
            >
              Terms of use
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b hover:opacity-80 transition-opacity duration-300"
            >
              Cookies Policy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="border-b hover:opacity-80 transition-opacity duration-300"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p>&copy; 2025 Venoma Sport. All rights reserved.</p>
      </div>
    </section>
  );
};

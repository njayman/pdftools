import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col gap-2 items-center justify-center text-center mx-auto">
        <p>
          This webapp was designed by{" "}
          <Link href="https://njayman.com" target="_blank">
            njayman
          </Link>
        </p>
        <p className="text-center">
          Find njayman on{" "}
          <Link href="https://github.com/njayman" target="_blank">
            Github
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="text-center py-6">
        <p className="text-white">
          Developed with 🖤 by{" "}
          <Link
            href="https://www.linkedin.com/in/taibislamdipu"
            target="_blank"
          >
            <span className="underline">Taib Islam Dipu</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}

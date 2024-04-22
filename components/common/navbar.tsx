import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <p>Navbar</p>
      <Link href="/auth/register/">S'inscrire</Link>
    </nav>
  );
}

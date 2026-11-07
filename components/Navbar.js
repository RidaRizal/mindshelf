import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">Shipyard</Link>
        <Link href="/submit" className="btn">Launch a product</Link>
      </div>
    </header>
  );
}

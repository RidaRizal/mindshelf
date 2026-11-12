import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo">MindShelf</Link>
        <Link href="/submit" className="btn">Share a tool</Link>
      </div>
    </header>
  );
}

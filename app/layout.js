import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "../context/ProductsContext";
import Navbar from "../components/Navbar";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: "MindShelf — mental health apps worth trying", description: "Discover and upvote mental health apps and tools that people find helpful." };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ProductsProvider>
          <Navbar />
          <main className="container">{children}</main>
          <footer className="container foot">MindShelf lists tools shared by the community. It is not medical advice. If you are in crisis, contact local emergency services or a trusted person.</footer>
        </ProductsProvider>
      </body>
    </html>
  );
}

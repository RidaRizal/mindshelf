import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import "./globals.css";
import { ProductsProvider } from "../context/ProductsContext";
import Navbar from "../components/Navbar";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = { title: "Shipyard — launch your side project", description: "Discover and upvote new products from independent makers." };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ProductsProvider>
          <Navbar />
          <main className="container">{children}</main>
        </ProductsProvider>
      </body>
    </html>
  );
}

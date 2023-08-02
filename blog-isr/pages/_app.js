import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`container mx-auto min-h-screen ${inter.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

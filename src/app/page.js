import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-4 flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Thyllieer Mods Logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold">THYLLIEER MODS</h1>
      </header>

      <main
        className="flex-grow flex flex-col items-center justify-center text-center p-4"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">COMING SOON!</h2>
        <p className="text-xl md:text-2xl mb-8">
          Our new website is under construction. Get ready to ride in style!
        </p>

        <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
          GET NOTIFIED
        </button>
      </main>

      <footer className="p-4 flex justify-center space-x-4">
        <a
          href="https://www.instagram.com/thyilieer_mods_services/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="hhttps://web.facebook.com/thyilieermodifcationservices/?_rdc=1&_rdr#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://www.twitter.com/thyllieermods"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
}

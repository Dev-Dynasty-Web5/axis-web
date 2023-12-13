import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <header className="relative flex items-center h-24 px-8 py-0 shadow-sm">
      <Link href="#" className="mr-6">
        <div className="flex gap-1">
          <Image
            width={30}
            height={30}
            className=""
            alt="Glob icon"
            src="/glob.svg"
          />
          <Image
            width={50}
            height={50}
            className=""
            alt="Glob icon"
            src="/logo.svg"
          />
        </div>
      </Link>

      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-4">
          <li>
            <Link className="" href="#how">
              Travel
            </Link>
          </li>
          <li>
            <Link className="" href="#meals">
              Cars
            </Link>
          </li>
          <li>
            <Link className="" href="#testimonials">
              Rooms
            </Link>
          </li>
          <li>
            <Link className="" href="#pricing">
              Stories
            </Link>
          </li>
          <li>
            <Link className="" href="#pricing">
              Dealls
            </Link>
          </li>
          <li>
            <Link className="" href="#pricing">
              Activities
            </Link>
          </li>
          <li>
            <Link className="" href="#cta">
              <button className="bg-[#CD9327] text-white py-1 px-3 rounded-full text-sm">
                New
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="items-center hidden gap-2 ml-auto lg:flex">
        <div className="flex gap-1">
          <Image
            width={40}
            height={20}
            className="object-contain"
            alt="Glob icon"
            src="/United-States.png"
          />
          <p>USD</p>
        </div>
        <Link href="#">Help</Link>
      </div>
      <MobileSidebar />
    </header>
  );
};

export default Navbar;

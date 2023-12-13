import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, Menu, PlaneTakeoff, UserSquare, Wallet } from "lucide-react";
import { FC } from "react";
import { Label } from "./ui/label";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-auto lg:hidden">
          <Menu className="text-black" size={28} />
        </button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex justify-between mt-10">
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

        <nav className="mt-8 text-sm">
          <ul className="flex flex-col gap-8">
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
              <button className="bg-[#CD9327] text-white py-1 px-3 rounded-full text-sm ml-2">
                New
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-8 mt-10 text-sm">
          <div className="flex items-center gap-4">
            <UserSquare />
            <p>Manage account</p>
          </div>
          <div className="flex items-center gap-4">
            <PlaneTakeoff />
            <p>My trips</p>
          </div>
          <div className="flex items-center gap-4">
            <Wallet />
            <p>Reward and wallet</p>
          </div>
          <div className="flex items-center gap-4">
            <LogOut />
            <p>Sign out</p>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage className="" src="/avatar_1.jpg" />
            </Avatar>
            <div className="text-xs">
              <p>Frodo Ajegbe</p>
              <p>frodo23@gmail.com</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

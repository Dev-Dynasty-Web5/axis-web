import LinkBtn from "@/components/LinkBtn";
import MobileSidebar from "@/components/MobileSidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bell,
  Calendar,
  MapPin,
  Menu,
  PlaneTakeoff,
  UserSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const SearchFlight: FC<pageProps> = ({}) => {
  return (
    <main className="h-screen">
      <div className=" #3851DD h-[200px] bg-[#5067E9] p-3 flex">
        <Link href="#" className="mr-6 ">
          <div className="flex gap-1">
            <Image
              width={30}
              height={30}
              className=""
              alt="Glob icon"
              src="/globIconWhite.svg"
            />
            <Image
              width={50}
              height={50}
              className=""
              alt="Glob icon"
              src="/logoWhite.svg"
            />
          </div>
        </Link>
        <nav className="text-white test-sm">
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

        {/* <div className="flex gap-3 ml-auto text-white">
          <Bell className="mt-2" />
          <div className="flex gap-1">
            <p className="mt-2 text-xs">Frodo</p>
            <Avatar>
              <AvatarImage src="/avatar_1.jpg" />
            </Avatar>
          </div>
          <Menu />
        </div> */}
      </div>
      <div className="justify-center w-full mx-auto -mt-10 max-w-7xl">
        <Card className="grid w-full grid-cols-2 gap-3 p-4 mx-auto sm:grid-cols-3 lg:grid-cols-7">
          <LinkBtn test="MEL" Icon={MapPin} />
          <LinkBtn test="ATL" Icon={MapPin} />
          <LinkBtn test="Road trip" Icon={PlaneTakeoff} />
          <LinkBtn test="31-12-2024" Icon={Calendar} />
          <LinkBtn test="04-2-2023" Icon={Calendar} />
          <LinkBtn test="1 Adult, 0 children" Icon={UserSquare} />
          <Button className="bg-[#2740CD] hover:bg-[#0526e1] col-span-2 sm:col-span-3 lg:col-span-1">
            Search
          </Button>
        </Card>
      </div>
    </main>
  );
};

export default SearchFlight;

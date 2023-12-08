"use client";

import {
  AlertTriangle,
  Calendar,
  MapPin,
  PlaneTakeoff,
  User2,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="space-y-5 pt-14">
      <h1 className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-[#2740CD] text-center">
        Your personalized travel <br /> buddy
      </h1>
      <p className="text-sm font-light md:text-xl text-[#2740CD] text-center">
        Travel authentically, just as you are!
      </p>

      <div className="pt-10">
        <Card className="flex items-center gap-3 p-4 mx-auto w-fit">
          <Link href="#">
            <Button className="text-black bg-gray-200 hover:bg-gray-300">
              <MapPin className="mr-2" />
              <p>From where?</p>
            </Button>
          </Link>
          <Link href="#">
            <Button className="text-black bg-gray-200 hover:bg-gray-300">
              <MapPin className="mr-2" />
              <p>Destination</p>
            </Button>
          </Link>
          <Link href="#">
            <Button className="text-black bg-gray-200 hover:bg-gray-300">
              <PlaneTakeoff className="mr-2" />
              <p>One way</p>
            </Button>
          </Link>
          <Link href="#">
            <Button className="text-black bg-gray-200 hover:bg-gray-300">
              <Calendar className="mr-2" />
              <p>Departure date</p>
            </Button>
          </Link>
          <Link href="#">
            <Button className="text-black bg-gray-200 hover:bg-gray-300">
              <User2 className="mr-2" />
              <p>Passengers</p>
            </Button>
          </Link>

          <Button className="bg-[#2740CD]">Search</Button>
        </Card>
      </div>

      <div className="max-w-6xl pt-10 mx-auto">
        <Card className="bg-[#FCEFCA] p-4">
          <div className="flex items-center gap-8">
            <AlertTriangle size={30} />
            <p className="text-xs">
              Check the latest COVID-19 restrictions before you travel.{" "}
              <span className="text-[#2740CD]">Learn more</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;

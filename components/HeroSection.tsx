"use client";

import {
  AlertTriangle,
  Calendar,
  LucideIcon,
  MapPin,
  PlaneTakeoff,
  User2,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import LinkBtn from "./LinkBtn";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className="max-w-6xl mx-auto space-y-5 pt-14">
      <h1 className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl text-[#2740CD] text-center">
        Your personalized travel <br /> buddy
      </h1>
      <p className="text-sm font-light md:text-xl text-[#2740CD] text-center">
        Travel authentically, just as you are!
      </p>

      <div className="pt-10 mx-auto ">
        <Card className="grid w-full grid-cols-2 gap-3 p-4 mx-auto sm:grid-cols-3 lg:grid-cols-7">
          <LinkBtn test="From where?" Icon={MapPin} />
          <LinkBtn test="Destination" Icon={MapPin} />
          <LinkBtn test="One way" Icon={PlaneTakeoff} />
          <LinkBtn test="Departure date" Icon={Calendar} />
          <LinkBtn test="Passengers" Icon={User2} />
          <LinkBtn test="Return Date" Icon={Calendar} />

          <Button className="bg-[#2740CD] hover:bg-[#0526e1] col-span-2 sm:col-span-3 lg:col-span-1">
            Search
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;

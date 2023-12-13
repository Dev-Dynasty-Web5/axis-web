import { FC } from "react";
import { Card } from "./ui/card";
import { AlertTriangle } from "lucide-react";
import HotelCard from "./HotelCard";

interface HotelSectionProps {}

const HotelSection: FC<HotelSectionProps> = ({}) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="pt-10 mx-auto ">
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

      <div className="mt-6">
        <h1 className="px-3 text-lg">Enjoy your dream vacation</h1>
        <p className="px-3 text-xs">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>
      <div className="grid gap-4 mx-3 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <HotelCard
          title="Lakeside Motel Warefront"
          subTitle="2246 properties"
          imageUrl="/location-1.png"
        />
        <HotelCard
          title="Lakeside Motel Warefront"
          subTitle="2246 properties"
          imageUrl="/location-2.png"
        />
        <HotelCard
          title="Lakeside Motel Warefront"
          subTitle="2246 properties"
          imageUrl="/location-1.png"
        />
        <HotelCard
          title="Lakeside Motel Warefront"
          subTitle="2246 properties"
          imageUrl="/location-2.png"
        />
      </div>

      <div className="mt-6">
        <h1 className="px-3 text-lg">Get inspiration for your next trip</h1>
      </div>
    </section>
  );
};

export default HotelSection;

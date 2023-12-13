import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";

interface HotelCardProps {
  imageUrl: string;
  title: string;
  subTitle: string;
}

const HotelCard: FC<HotelCardProps> = ({ imageUrl, title, subTitle }) => {
  return (
    <Card className="">
      <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="Hotel location"
        className="w-full"
      />
      <div className="p-3 mt-1">
        <h1>{title}</h1>
        <p className="mt-1 text-xs text-gray-500">{subTitle}</p>
      </div>
    </Card>
  );
};

export default HotelCard;

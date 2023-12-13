import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface ILinkBtnProps {
  test: string;
  Icon: LucideIcon;
  href?: string;
}

const LinkBtn: FC<ILinkBtnProps> = ({ test, Icon, href = "#" }) => (
  <Link href={href} className="w-full">
    <Button className="w-full text-black bg-gray-200 hover:bg-gray-300">
      <Icon className="mr-2" size={20} />
      <p className="text-[12px]">{test}</p>
    </Button>
  </Link>
);

export default LinkBtn;

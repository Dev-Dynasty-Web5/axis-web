import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#F5F6FF] flex justify-center items-center gap-2 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
      >
        <path
          d="M8.49992 14.6666C4.81992 14.6666 1.83325 11.6799 1.83325 7.99992C1.83325 4.31992 4.81992 1.33325 8.49992 1.33325C12.1799 1.33325 15.1666 4.31992 15.1666 7.99992C15.1666 11.6799 12.1799 14.6666 8.49992 14.6666Z"
          stroke="#2740CD"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.4198 9.99992C9.93369 10.4287 9.30802 10.6657 8.65983 10.6666C7.1865 10.6666 5.99316 9.47325 5.99316 7.99992C5.99316 6.52659 7.1865 5.33325 8.65983 5.33325C9.30802 5.33418 9.93369 5.57118 10.4198 5.99992"
          stroke="#2740CD"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-sm text-[#2740cd]">2023 AXIS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

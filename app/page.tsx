import { FeedCard } from "@/components/FeedCard";
import { GoogleLoginComponent } from "@/components/GoogleLogin";
import { CredentialResponse } from "@react-oauth/google";
import Image from "next/image";
import React, { useCallback } from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuButton: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <MdAttachMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "Twitter Blue",
    icon: <SlOptions />,
  },
];

export default function Home() {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {},
  []);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen px-80">
        <div className="col-span-3">
          <div className="text-2xl hover:bg-gray-800 rounded-full w-fit p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="text-2xl font-medium pr-4">
            <ul>
              {sidebarMenuButton.map((item) => (
                <li
                  className="flex justify-start gap-4 items-center mt-4 hover:bg-gray-800 rounded-xl w-fit p-2 cursor-pointer"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button className="bg-[#1d9bf0] py-3 rounded-full w-[90%] text-base font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-l-[1px] border-r-[1px] border-gray-600 h-screen overflow-y-auto scrollbar-hide ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3">
          <GoogleLoginComponent />
        </div>
      </div>
    </div>
  );
}

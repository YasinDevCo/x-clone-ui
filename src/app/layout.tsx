import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YasinDevCo X Clone",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-between max-w-screen-md mx-auto lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="px-2 xsm:px-4 xxl:px-8 ">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">
            {children}
          </div>
          <div className="flex-1 hidden ml-4 lg:flex md:ml-8 ">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}

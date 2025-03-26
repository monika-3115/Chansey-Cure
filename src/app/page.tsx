import WidthWrapper from "@/components/WidthWrapper";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <WidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/chansey.png" className="w-full" alt="chansey image" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Health Issues? <span className="bg-pink-500 px-2 text-white">Chansey</span> Bot is here!
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Tell your problem to chansey and get instant <span className="font-semibold">medical care</span> of your own.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-600" />
                    24/7 Availability
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-600" />
                    Improved User Engagement
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-600" />
                    AI-Powered Predictive Analysis
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img src="/users/user-1.png" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-2.png" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-2.png" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-4.jpg" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
                  <img src="/users/user-5.jpg" className="inline-block h-10 w-10 objeect-cover rounded-full ring-2 ring-slate-100" />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-pink-600 fill-pink-600"/>
                    <Star className="h-4 w-4 text-pink-600 fill-pink-600"/>
                    <Star className="h-4 w-4 text-pink-600 fill-pink-600"/>
                    <Star className="h-4 w-4 text-pink-600 fill-pink-600"/>
                    <Star className="h-4 w-4 text-pink-600 fill-pink-600"/>
                  </div>
                  <p><span className="font-semibold">1,125</span> happy users</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img src="/overlay.png" className="w-max h-max" alt="home-page-image" />
            </div>
          </div>
        </WidthWrapper>
      </section>
    </div>
  );
}

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import WidthWrapper from "@/components/WidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-200">
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
                  <img src="/users/user-3.png" className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100" />
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
              <img src="/chat-home.png" className="w-max h-max" alt="home-page-image" />
            </div>
          </div>
        </WidthWrapper>
      </section>

      {/* review section */}
      <section className="bg-slate-200 py-24">
        <WidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              What our <span className="relative px-2">users <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-3 text-pink-600" />
                </span>{' '}
                say
            </h2>
            <img src="/chansey.png" className="h-30 w-30 order-0 lg:order-2" />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:max-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8  xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                "Amazing chatbot! The responses are clear, and the interface is really user-friendly. Definitely a <span className="p-0.5 bg-slate-800 text-white">must-have</span> for health queries!"
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-1.png" />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600 ">
                    <Check className="h-4 w-4 stroke-[3px] text-pink-600" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 -mr-20 lg:pr-8  xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
                <Star className="h-5 w-5 text-pink-600 fill-pink-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                "ChanseyCure is super <span className="p-0.5 bg-slate-800 text-white">helpful and quick!</span> It made understanding my symptoms so easy. I love how convenient it is! and trust me.. this is worthable."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="/users/user-3.png" />
                <div className="flex flex-col">
                  <p className="font-semibold">Beverley Max</p>
                  <div className="flex gap-1.5 items-center text-zinc-600 ">
                    <Check className="h-4 w-4 stroke-[3px] text-pink-600" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthWrapper>
      </section>

      <section>
        <WidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              Chat with the <span className="relative px-1 -pt-3 bg-pink-600 text-white">Chansey Bot
                </span>{' '}
                and get your issue known!
            </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid justify-center">
              <img src="/chat-home.png" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-pink-600 inline mr-1.5" />
              Accurate Information.
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-pink-600 inline mr-1.5" />
              Easy navigation and simple language for all users.
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-pink-600 inline mr-1.5" />
              Fast Responses.
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-pink-600 inline mr-1.5" />
              Offers preliminary insights based on the issue.
            </li>

            <div className="flex justify-center">
              <Link className={buttonVariants({
                size: 'lg',
                className: "mx-auto mt-8 bg-pink-600"
              })} href='/configure/upload'>
                Chat now <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </div>
          </ul>
        </WidthWrapper>
      </section>
    </div>
  );
}
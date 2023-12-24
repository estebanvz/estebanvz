'use client'

import Features from "@/components/features";
import { useState, useRef, useEffect } from 'react'
import Parser from "rss-parser"
import { Transition } from '@headlessui/react'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import Image from 'next/image'
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import { FaGithub, FaMedium } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";



export default function Home() {
  const data = [
  //   {
  //   "title": "titulo",
  //   "categories": ["machine learning"],
  //   "description":"asdasdasd",
  //   "medium": "#",
  //   "github": "#",
  //   "notebook": "#",
  //   "img": "https://placehold.co/600x600"
  // }, {
  //   "title": "titulo2",
  //   "categories": ["machine learning2"],
  //   "description":"asdasdasd",
  //   "medium": "#",
  //   "github": "#",
  //   "notebook": "#",
  //   "img": "https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F29l0UrpsQB6uDlmShjiJ72%2Ff44f1f951062bcefa9959e1985cb61af%2FLightMode_CreateNextApp.png&w=640&q=75&dpl=dpl_E137ZFSTuq1GsiXTMViRX4BP47fv"

  // }
]


  return (
    <>
      {/* <section className="relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Blogs</h1>
              <p className="text-xl text-gray-600">Explore data science insights from a global perspective across healthcare, retail, and finance.</p>
            </div>
          {articles["items"].map((item: any, i: number) => <>TEST</>)}
        </div >
        </div >
      </section > */}
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
        {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Projects</h1>
              {/* <p className="text-xl text-gray-600">Explore data science insights from a global perspective across healthcare, retail, and finance.</p> */}
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              {data.map((item: any, i: number) =>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-6" data-aos="fade-right">
                  {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                </div> */}
                  {/* Tabs buttons */}
                  <div className="mb-8 md:mb-0">
                    <div
                      className={`flex items-between w-full justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mx-auto mb-3 hover:bg-slate-100`}
                    >
                      <div className="grid grid-cols-12 w-full gap-2">
                        <div className="col-span-4">
                          <div className="m-auto w-80 h-60 justify-center items-center">
                            <img src={item.img} alt="" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="col-span-8 flex flex-col justify-between">
                          <div>
                            <div className="font-bold leading-snug tracking-tight mb-1 capitalize text-2xl">{item.title}</div>

                            <div className="font-normal leading-snug tracking-tight mb-1 text-sm text-gray-600">{item.description}</div>
                          </div>
                          <div>
                            <div className="text-gray-600 mb-2">{item.categories.map((category: any) => <span className="text-xs inline-block mr-2 bg-sky-500 text-gray-100 font-bold px-3 rounded-lg">{category}</span>)}</div>
                            <div className="flex gap-4 items-center text-3xl justify-end">
                              <a href="#"><FaMedium /></a>
                              <a href="#"><FaGithub /></a>
                              <a href="#"><SiGooglecolab /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      {/* 
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}

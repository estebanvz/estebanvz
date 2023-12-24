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


export default function Home() {

  const [articles, setArticles] = useState({ "items": [] })
  // Define a regular expression to match URLs enclosed in [img] tags
  const regex = /<img.*?src=["'](.*?)["']/i;



  useEffect(() => {
    async function getFeed() {
      // let parser = new Parser();
      // const rss = await parser.parseURL("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@estebanvz");
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@estebanvz`
      );
      // return await res.json();
      return setArticles(await res.json());
    }
    getFeed()
  }, []);

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
              <h1 className="h2 mb-4">Blogs</h1>
              <p className="text-xl text-gray-600">Explore data science insights from a global perspective across healthcare, retail, and finance.</p>
            </div>

            {/* Section content */}
            <div className="md:grid md:grid-cols-12 md:gap-6">

              {/* Content */}
              {articles["items"].map((item: any, i: number) =>
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
                  {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                </div> */}
                  {/* Tabs buttons */}
                  <div className="mb-8 md:mb-0">
                    <a
                      className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3`}
                      href={item.guid}
                      target="_blank"
                    >
                      <div>
                        <img src={item.description.match(regex)[1]} className="w-full h-52 rounded-md mb-4" alt={"banner of the blog"+item.title} />
                        <div className="font-bold leading-snug tracking-tight mb-1">{item.title}</div>
                        <div className="font-normal leading-snug tracking-tight mb-1 text-sm text-gray-600">{new Date(item.pubDate).toLocaleDateString()}</div>
                        <div className="text-gray-600">{item.categories.map((category: any) => <span className="text-xs inline-block mr-2 bg-sky-500 text-gray-100 font-bold px-3 rounded-lg">{category}</span>)}</div>
                      </div>
                    </a>
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

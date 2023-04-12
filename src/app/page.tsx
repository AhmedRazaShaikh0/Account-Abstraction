'use client'
import styles from './page.module.css'

import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
  return (
    <section className=' bg-[#E7F9FF] h-screen flex items-center'>
      <section className='flex max-w-6xl m-auto'>
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" className="text-base text-gradient font-semibold uppercase"
            >Sign Up Today</span>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The World's <span className="text-header-gradient">Fastest Growing</span> Crypto Web App
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="paragraph hidden sm:block">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <button
              className="max-w-full px-5 py-1 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center rounded-lg hover:scale-105 duration-300 font-semibold"
            >
              <span>Get Started</span>
            </button>
            <ConnectButton />
          </div>
        </div>
        <div className="hidden sm:block col-span-12 lg:col-span-6">
          <div className="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              src='/hero-image.webp'
              className="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='/ellipse-1.png'
          className="hidden sm:block absolute bottom-32 right-[30rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='/ellipse-2.png'
          className="hidden sm:block absolute top-4 sm:top-40 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='/ellipse-3.png'
          className="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src='/star.png'
          className="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-36 w-8"
        />
      </section>
    </section>
  )
}

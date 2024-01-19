/* eslint-disable @next/next/no-html-link-for-pages */
import Navigation from './Navigation'
import Image from 'next/image';
import heroImg from '../public/images/banner.png'
import { Outfit } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'] })
const garamond = Cormorant_Garamond({subsets:['latin'],weight:['400']});




export default function Header() {

  return (
    <>
      <div className='banner bg-slate-900'>
        <div className='banner-image relative md:h-[900px]'>
          <Image
            fill
            style={{objectFit:"cover"}}
            src={`${heroImg.src}`}
            alt="image"
            loading="eager" priority={true} 
          />
          <Navigation />
          <div className='banner-text relative flex text-white wrapper md:pr-96 pl-4 pt-24 pr-24 md:pt-7 flex-wrap'>
            <div className={`${garamond.className} banner-text--title md:text-6xl text-3xl pb-7`}>
              Deeper understanding better solution
            </div>
            <div className={`${outfit.className} banner-text--desc md:text-2xl pb-7`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a looking at its layout.
            </div>
            <div className='banner-text--btn'>
              <div className="py-1 text-right flex">
                <a
                  className="mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-black bg-[#D1B06B] font-secondary"
                  href="/"
                >
                  Pozovite nas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

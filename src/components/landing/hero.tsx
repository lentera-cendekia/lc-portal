'use client'

import { content } from '@/constant/content'

function Hero() {
    return (
        <div className="relative h-[100dvh] bg-[url('/images/hero.png')] bg-cover bg-center">
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80' />
            <div className='relative z-10 flex flex-col justify-end w-full h-full gap-4 p-5 md:p-12'>
                <p
                    className='font-medium text-[32px] md:text-[48px] text-white leading-[110%] md:w-[580px] w-full'
                    dangerouslySetInnerHTML={{ __html: content.hero_title }}
                />
                <p className='text-base md:text-xl text-white md:w-[532px] w-full'>
                    {content.hero_subtitle}
                </p>
            </div>
        </div>
    )
}

export default Hero

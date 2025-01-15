'use client'

import { useState } from 'react'
import { Heading } from './heading'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Card, CardContent } from '../ui/card'
import { QuoteIcon } from 'lucide-react'
import { content } from '@/constant/content'
import clsx from 'clsx'
import Image from 'next/image'
import { type Testimony } from '@/types/home'

export default function Testimony() {
    return (
        <div className='w-full px-4 md:px-6'>
            <Heading
                id='testimonials'
                title='Testimoni'
                description='Apa Kata Mereka?'
            />
            <div className='max-w-[80dvw] mx-auto h-full'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className='w-full h-full'
                >
                    {content.testimonials.map((testimony, index) => (
                        <SwiperSlide
                            key={index}
                            className='w-full min-h-full py-8 overflow-visible'
                        >
                            <TestimonyCard
                                testimony={testimony.testimony}
                                profileImage={testimony.profileImage}
                                name={testimony.name}
                                acceptedIn={testimony.acceptedIn}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export function TestimonyCard({
    testimony,
    name,
    acceptedIn,
    profileImage,
}: Testimony) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    return (
        <Card className='relative flex flex-col h-full mt-8 overflow-visible first:ml-8'>
            <div className='absolute flex items-center justify-center w-12 h-12 rounded-full shadow-md -top-6 -left-6 md:w-14 md:h-14 bg-warning-20'>
                <QuoteIcon className='w-5 h-5 md:w-6 md:h-6 text-neutral-base' />
            </div>
            <CardContent className='flex flex-col flex-1 pt-6'>
                <div className='mb-5 text-xs text-right md:text-sm text-neutral-base'>
                    Diterima di <b>{acceptedIn}</b>
                </div>
                <div className='flex-1'>
                    <p
                        className={clsx(
                            'text-neutral-40 mb-3 text-xs md:text-sm',
                            isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                        )}
                    >
                        {testimony}
                    </p>
                    <button
                        className='text-xs text-blue-600 md:text-sm hover:underline'
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded
                            ? 'Baca Lebih Sedikit'
                            : 'Baca Selengkapnya'}
                    </button>
                </div>
                <div className='flex items-center mt-3 text-xs text-gray-700 md:text-sm'>
                    <Image
                        src={profileImage}
                        alt='Testimoner Photo'
                        width={50}
                        height={50}
                        className='mr-2 rounded-xl'
                    />
                    <span className='font-semibold text-md'>{name}</span>
                </div>
            </CardContent>
        </Card>
    )
}

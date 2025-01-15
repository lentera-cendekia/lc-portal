'use client'

import { useEffect, useState } from 'react'
import { Heading } from './heading'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export default function Activity() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className='mt-24'>
            <Heading
                id='activities'
                title='Aktivitas'
                description='Mau Tahu Aktivitas Seru di Lentera Cendekia?'
            />
            <div className='mx-auto max-w-2xl'>
                <Carousel
                    setApi={setApi}
                    className='w-full min-w-2xl'
                    opts={{
                        align: 'center',
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className='flex items-center justify-center p-4'>
                                        <span className='text-4xl font-semibold'>
                                            <Image
                                                src='/images/hero.png'
                                                alt='Activity Image'
                                                width={880}
                                                height={880}
                                                className='rounded-xl'
                                            />
                                        </span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='py-2 text-center text-sm text-muted-foreground hidden md:flex items-center justify-center gap-4'>
                        <CarouselPrevious />
                        <span>
                            Slide {current} of {count}
                        </span>
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

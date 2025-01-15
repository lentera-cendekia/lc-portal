'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import { Heading } from './heading'
import { content } from '@/constant/content'

export default function FrequentlyAskedQuestion() {
    return (
        <section className='mt-24'>
            <Heading
                id='faqs'
                title='FAQ'
                description='Hal yang Sering Ditanyakan'
            />
            <div className='flex flex-col items-center gap-12 max-w-[60dvw] lg:flex-row lg:w-[990px] mx-auto'>
                <Image
                    src='/images/frequently_asked_question.svg'
                    alt='Frequently Asked Question Image'
                    width={275}
                    height={275}
                />
                <Accordion
                    type='single'
                    collapsible
                    className='w-[80dvw]'
                >
                    {content.faqs.map((faq, index) => (
                        <AccordionItem
                            value={`faq-${index}`}
                            key={index}
                        >
                            <AccordionTrigger className='text-lg'>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className='p-4 border-t-2 text-neutral-40 bg-neutral-10 border-neutral-20'>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

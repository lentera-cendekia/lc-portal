import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Heading } from '@/components/landing/heading'
import { content } from '@/constant/content'
import { Card } from '@/components/ui/card'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { fadeInUp } from '@/constant/motion'
import { type Program } from '@/types/home'

export default function TopProgram() {
    return (
        <motion.div
            className='mt-24'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div variants={fadeInUp}>
                <Heading
                    id='top-program'
                    title={content.top_program_title}
                    description={content.top_program_description}
                />
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mx-auto md:w-[80%]'>
                {content.top_programs.map((program, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ProgramCard
                            name={program.name}
                            short_description={program.short_description}
                            image={program.image}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

function ProgramCard({ name, short_description, image }: Program) {
    return (
        <Drawer>
            <DrawerTrigger>
                <Card className='p-4 w-full max-w-sm min-h-[320px] flex flex-col justify-between'>
                    <Image
                        src={image}
                        alt='Top Program Image'
                        className='object-cover w-full h-40 rounded-xl'
                        width={375}
                        height={160}
                    />
                    <div className='flex-1 mt-3 text-left'>
                        <h3 className='text-xl font-semibold text-neutral-base'>
                            {name}
                        </h3>
                        <p className='mt-2 text-md text-neutral-40'>
                            {short_description}
                        </p>
                    </div>
                </Card>
            </DrawerTrigger>
            <DrawerContent>
                <div className='w-full max-w-sm mx-auto'>
                    <DrawerHeader>
                        <DrawerTitle>{name}</DrawerTitle>
                        <DrawerDescription>
                            <Image
                                src={image}
                                alt='Top Program Image'
                                width={432}
                                height={123}
                            />
                            {short_description}
                        </DrawerDescription>
                    </DrawerHeader>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

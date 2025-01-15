import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading } from '@/components/landing/heading'
import { childVariants, fadeInUp, staggerContainer } from '@/constant/motion'
import { content } from '@/constant/content'
import { type UniqueSellingPoint } from '@/types/home'
import clsx from 'clsx'

export default function UniqueSellingPoint() {
    return (
        <motion.div
            className='mt-24'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
        >
            <motion.div variants={fadeInUp}>
                <Heading
                    id='unique-selling-points'
                    title={content.unique_selling_point_title}
                    description={content.unique_selling_point_description}
                />
            </motion.div>

            <motion.div className='flex flex-col items-center gap-12 md:gap-4'>
                {content.unique_selling_points.map((usp, index) => (
                    <UniqueSellingPointContent
                        key={index}
                        id={usp.id}
                        title={usp.title}
                        description={usp.description}
                        reverse={index % 2 === 1}
                        image={usp.image}
                    />
                ))}
            </motion.div>
        </motion.div>
    )
}

const UniqueSellingPointContent = ({
    id,
    title,
    description,
    image,
    reverse = false,
}: UniqueSellingPoint) => (
    <motion.div
        className={clsx(
            'flex flex-col items-center gap-12',
            reverse && 'md:flex-row-reverse',
            !reverse && 'md:flex-row'
        )}
        variants={childVariants}
        id={id}
    >
        <Image
            src={image}
            alt='Unique Selling Point Image'
            width={321}
            height={321}
        />
        <motion.div
            className={clsx(
                'flex flex-col justify-center gap-5 px-5 max-w-[770px]',
                reverse && 'text-right'
            )}
            variants={childVariants}
        >
            <h3 className='text-3xl font-medium text-neutral-base'>{title}</h3>
            <p className='text-2xl text-neutral-40'>{description}</p>
        </motion.div>
    </motion.div>
)

import React from 'react'
import { Heading } from './heading'
import Image from 'next/image'
import { content } from '@/constant/content'
import { motion } from 'motion/react'
import { fadeInUp } from '@/constant/motion'

function About() {
    return (
        <motion.section
            className='flex justify-center items-center mt-24'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className='flex flex-col items-center gap-12'
                variants={fadeInUp}
            >
                <motion.div
                    className='flex flex-col-reverse md:flex-row items-center gap-12'
                    variants={fadeInUp}
                >
                    <Image
                        src='/images/about__one.svg'
                        alt='About Us Image'
                        width={432}
                        height={432}
                    />
                    <motion.div
                        className='flex flex-col justify-center px-5 max-w-[770px]'
                        variants={fadeInUp}
                    >
                        <Heading
                            id='about-us'
                            title={content.about_header_title}
                            description={content.about_header_description}
                            direction='left'
                        />
                        <p
                            className='text-2xl text-neutral-40'
                            dangerouslySetInnerHTML={{
                                __html: content.about_content_one,
                            }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className='flex flex-col-reverse md:flex-row-reverse items-center gap-12'
                    variants={fadeInUp}
                >
                    <Image
                        src='/images/about__two.svg'
                        alt='About Us Image'
                        width={432}
                        height={432}
                    />
                    <motion.div
                        className='flex flex-col justify-center text-start md:text-end gap-5 px-5 max-w-[770px]'
                        variants={fadeInUp}
                    >
                        <p
                            className='text-2xl text-neutral-40'
                            dangerouslySetInnerHTML={{
                                __html: content.about_content_two_first,
                            }}
                        />
                        <p
                            className='text-2xl text-neutral-40'
                            dangerouslySetInnerHTML={{
                                __html: content.about_content_two_second,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default About

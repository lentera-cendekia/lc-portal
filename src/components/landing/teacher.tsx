import { Swiper, SwiperSlide } from 'swiper/react'
import { Heading } from './heading'
import 'swiper/css'
import Image from 'next/image'
import { type Teacher } from '@/types/home'
import { content } from '@/constant/content'

export default function Teacher() {
    return (
        <section
            className='mt-24'
            id='teachers'
        >
            <Heading
                title='Guru Kami'
                description='Kenalan Sama Mentor Keren LC!'
            />
            <div className='max-w-full p-2 mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={false}
                    breakpoints={{
                        540: { slidesPerView: 1, centeredSlides: true },
                        640: { slidesPerView: 2, centeredSlides: false },
                        792: { slidesPerView: 3, centeredSlides: false },
                        992: { slidesPerView: 4, centeredSlides: false },
                    }}
                    className='p-3'
                >
                    {content.teachers.map((teacher, index) => (
                        <SwiperSlide key={index}>
                            <TeacherCard
                                image={teacher.image}
                                name={teacher.name}
                                role={teacher.role}
                                graduatedAt={teacher.graduatedAt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TeacherCard({ image, name, role, graduatedAt }: Teacher) {
    return (
        <div className='flex flex-col items-center w-full p-4 mx-4 rounded-xl'>
            <div className='relative flex items-center justify-center w-full h-full'>
                <div className='absolute w-[200px] h-[250px] bg-warning-base rounded-t-full'></div>
                <Image
                    src='/images/person__one.png'
                    alt='Profile Picture'
                    width={250}
                    height={250}
                    className='z-10 rounded-full'
                />
            </div>
            <div className='w-full bg-gray-800 text-white rounded-lg p-4 mt-[-40px] max-w-sm text-center mx-5 z-10'>
                <h3 className='text-lg font-bold'>{name}</h3>
                <p className='text-sm text-gray-300'>{role}</p>
                <p className='mt-2 text-sm'>Lulusan {graduatedAt}</p>
            </div>
        </div>
    )
}

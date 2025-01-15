import React from 'react'
import { Heading } from '@/components/landing/heading'
import Image from 'next/image'
import { AirVent, FlaskConical, User, Video } from 'lucide-react'
import { type IFacilityCard } from '@/types/home'

export default function Facility() {
    return (
        <section className='md:px-[60px] md:py-[60px] bg-neutral-0 px-5 py-8'>
            <div className='flex flex-col md:gap-[60px] gap-8 items-center'>
                <Heading
                    title='Fasilitas'
                    id='facilities'
                    description='Fasilitas yang dapat menunjang proses pembelajaran'
                />

                <div className='grid w-full grid-cols-1 gap-3 lg:grid-cols-3 md:gap-6'>
                    <div className='flex flex-col w-full gap-3 md:gap-6'>
                        <FacilityCard
                            icon={<AirVent size={40} />}
                            title='Full AC & Wifi'
                            description='Kelas dil lengkapi dengan Air Conditioner dan Wifi yang akan menunjang kenyamanan belajar anak'
                        />
                        <FacilityCard
                            icon={<FlaskConical size={40} />}
                            title='Praktikum Kelas Offline/Online'
                            description='Terdapat praktikum untuk dapat membantu siswa dalam memahami materi pembelajaran dengan mudah'
                        />
                    </div>
                    <div className="relative overflow-hidden flex items-end justify-center w-full h-[500px] md:h-full bg-cover bg-center rounded-xl bg-[url('/images/hero.png')] border-[1px] border-neutral-20">
                        <Image
                            src='/images/person__one.png'
                            alt='mockup1'
                            width={1000}
                            height={1000}
                            className='absolute object-contain w-11/12 top-20 h-fit'
                        />
                    </div>

                    <div className='flex flex-col w-full gap-3 md:gap-6'>
                        <FacilityCard
                            icon={<User size={40} />}
                            title='Kelas Eksklusif Pendampingan Ujian Sekolah'
                            description='Membuat kelompok belajar kecil dengan 5-6 anak, yang akan mendapatkan pendampingan khusus untuk memaksimalkan hasil ujian sekolah'
                        />
                        <FacilityCard
                            icon={<Video size={40} />}
                            title='Follow Up'
                            description='Bimbingan via Whatsapp, G-Meet atau perantara lain yang dapat membantu siswa memahami tugas atau pun materi yang diberikan'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function FacilityCard({ icon, title, description }: IFacilityCard) {
    return (
        <div className='flex flex-col justify-between w-full h-full gap-[48px] bg-neutral-10 rounded-xl md:p-6 p-3'>
            <div className='flex items-center justify-between w-full'>
                {icon}
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-medium md:text-[28px] text-xl text-neutral-base'>
                    {title}
                </p>
                <p className='text-base text-neutral-40'>{description}</p>
            </div>
        </div>
    )
}

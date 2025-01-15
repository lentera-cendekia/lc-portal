'use client'

import Navbar from '@/components/navigation/navbar'
import Hero from '@/components/landing/hero'
import UniqueSellingPoint from '@/components/landing/unique-selling-point'
import About from '@/components/landing/about'
import TopProgram from '@/components/landing/top-program'
import Facility from '@/components/landing/facility'
import Activity from '@/components/landing/activity'
import Teacher from '@/components/landing/teacher'
import Testimony from '@/components/landing/testimony'
import FrequentlyAskedQuestion from '@/components/landing/faq'
import Footer from '@/components/footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className='px-5'>
                <About />
                <UniqueSellingPoint />
                <TopProgram />
                <Facility />
                <Activity />
                <Teacher />
                <Testimony />
                <FrequentlyAskedQuestion />
            </div>
            <Footer />
        </div>
    )
}

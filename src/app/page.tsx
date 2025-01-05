import Footer from '@/components/Footer'
import About from '@/components/Landing/About'
import Activity from '@/components/Landing/Activity'
import Facility from '@/components/Landing/Facility'
import FrequentlyAskedQuestion from '@/components/Landing/FrequentlyAskedQuestion'
import Hero from '@/components/Landing/Hero'
import Teacher from '@/components/Landing/Teacher'
import Testimony from '@/components/Landing/Testimony'
import TopProgram from '@/components/Landing/TopProgram'
import UniqueSellingPoint from '@/components/Landing/UniqueSellingPoint'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <UniqueSellingPoint />
            <TopProgram />
            <Facility />
            <Activity />
            <Teacher />
            <Testimony />
            <FrequentlyAskedQuestion />
            <Footer />
        </div>
    )
}

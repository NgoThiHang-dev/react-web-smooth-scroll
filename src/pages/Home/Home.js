import React from 'react'
import { HeroSection } from '../../component/HeroSection/HeroSection'
import { InfoSection } from '../../component/InfoSection/InfoSection'
import { Navbar } from '../../component/Navbar/Navbar'
import { OurServices } from '../../component/OurServices/OurServices'
import { ServicesSection } from '../../component/ServicesSection/ServicesSection'
import { SignSection } from '../../component/SignSection/SignSection'
import { Footer } from '../../component/Footer/Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <InfoSection />
            <ServicesSection />
            <OurServices />
            <SignSection />
            <Footer />
        </div>
    )
}

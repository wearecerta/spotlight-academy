import Courses from '@/components/sections/Courses'
import FAQsection from '@/components/sections/FAQsection'
import HeroSection from '@/components/sections/HeroSection'
import InfoSection from '@/components/sections/InfoSection'
import LearningSteps from '@/components/sections/LearningSteps'
import OurPartners from '@/components/sections/OurPartners'
import StackCards from '@/components/sections/StackedCards'
import WeHelpSection from '@/components/sections/WeHelpSection'
import WhoAreWe from '@/components/sections/WhoAreWe'
import React from 'react'

const Home = () => {
  return (
    <main>
      <HeroSection/>
      <Courses/>
      <WeHelpSection/>
      {/* <WhoAreWe/> */}
      <StackCards/>
      <LearningSteps/>
      <OurPartners/>
      <InfoSection/>
      <FAQsection/>
    </main>
  )
}

export default Home

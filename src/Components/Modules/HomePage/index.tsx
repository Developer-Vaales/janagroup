import LetsWork from '@/Components/shared/LetsWork'
import Header from './Header'
import StaffDining from '@/Components/shared/StaffDining'
import WelcomeJanaCatering from '@/Components/shared/WelcomeJanaCatering'
import JanaCatering from '@/Components/shared/JanaCatering'
import Services from '@/Components/shared/Services'
import FadeInWhenVisibleY from '@/Components/Layout/FadeWhenVisibleY'

const HomePage = () => {
  return (
    <>
      <Header />
      <FadeInWhenVisibleY>
        <JanaCatering />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <WelcomeJanaCatering />
      </FadeInWhenVisibleY>
      <FadeInWhenVisibleY>
        <Services />
      </FadeInWhenVisibleY>
      <>
        <StaffDining />
      </>
      <FadeInWhenVisibleY>
        <LetsWork
          title="LET’S WORK TOGETHER"
          text="We provide a dedicated, high-end service supplying exclusively designed contemporary uniforms worldwide to hotels, hospitality, retail, business, beauty & leisure spas, airlines, events and luxury brands."
          bg_img=""
        />
      </FadeInWhenVisibleY>
    </>
  )
}

export default HomePage

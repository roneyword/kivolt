import Footer from '@/component/Footer';
import Header from '@/component/Header';
import Form from '@/sections/Form';
import Hero from '@/sections/Hero';
import HowKivolthelp from '@/sections/HowKivoltHelp';
import WhatIsIt from '@/sections/WhatIsIt';
import WhatfreeEnergy from '@/sections/WhatfreeEnergy';
import WhoisKivolt from '@/sections/WhoisKivolt';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhoisKivolt />
      <HowKivolthelp />
      <WhatfreeEnergy />
      <Form />
      <WhatIsIt />
      <Footer />
    </>
  )
}

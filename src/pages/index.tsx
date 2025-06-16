import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import Features from '../components/Features'
import Benefits from '../components/Benefits'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>VTRN - One Platform Many Solutions</title>
        <meta name="description" content="Instantly find bus timing, towing help, shared rooms, or rental spaces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SearchSection />
      <Features />
      <Benefits />
    </div>
  )
}

export default Home
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { Main } from '../components/Main'
import { NavBar } from '../components/NavBar'
import { Skills } from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar/>
      <Main/>
      <About/>
      <Skills/>
    </div>
   
  )
}

export default Home

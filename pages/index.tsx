import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Main } from '../components/Main'
import { NavBar } from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <NavBar/>
      <Main/>
    </div>
   
  )
}

export default Home

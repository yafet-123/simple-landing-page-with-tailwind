import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Hero />
            <Feature />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    )
}

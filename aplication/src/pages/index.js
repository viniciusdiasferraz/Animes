import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Sidebar from '../components/Header'
import Carrosel from '@/components/carrosel'
import Slider from '../components/Slider'


export default function Home() {
  const settings = {
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: true,
		loop: true,
		autoplay: {
			delay: 6500,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},
	}
	

  return (
    <>
    <Sidebar/> 
    <Slider settings={settings}/>
    </>
  )
}

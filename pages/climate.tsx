import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import hkmap from '../public/hurricane.jpg'

const Climate: NextPage = () => 
{
  	return (
		<div className={styles.container}>
			<Head>
				<title>出国留学</title>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<Navbar/>
			</header>
			<main className={styles.main}>
				<div>
					<h1 className={styles.title}>
						香港 - 天气
					</h1>
					<p className={styles.description}>
						香港天气比较热，夏天天气非常热最高温度可能达到。 但是，有时候冬天比较阴冷。 香港常常多云，偶尔有很厉害的台风。
					</p>
					<div className={styles.centerImage}>
                        <Image src={hkmap} width={500} height={500}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Climate
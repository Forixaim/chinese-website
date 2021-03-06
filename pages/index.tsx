import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import hkmap from '../public/hkmap.svg'

const Home: NextPage = () => 
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
						香港
					</h1>
					<p className={styles.description}>
						香港是一个小岛，在中国广东深圳南面。 香港面积有一千平方公里。靠近珠江三角洲。
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

export default Home

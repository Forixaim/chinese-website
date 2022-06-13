import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import disney from '../public/hkdisney.jpg'

const Tour: NextPage = () => 
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
						香港 - 旅游
					</h1>
					<p className={styles.description}>
						香港有很多旅游地方，你可以去上船去海边，和钓鱼。你也可以去澳门，他们有很多好玩的地方和非常好的酒店。
					</p>
                    <p className={styles.description}>
						香港也有迪斯尼，所以你可以去看很多卡通合作过山车。
					</p>
                    <div className={styles.centerImage}>
                        <Image src={disney} width={1000} height={500}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Tour
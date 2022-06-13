import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import haus from '../public/dimsum.jpg'
import tea from '../public/tea.jpg'

const Food: NextPage = () => 
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
						香港 - 美食
					</h1>
					<p className={styles.description}>
						香港有很多好吃的菜，他们有广东菜和英国菜。
					</p>
                    <p className={styles.description}>
						广东菜有：很多很好吃的肉，点心，和海鲜。英国菜有：奶茶，鸡蛋，和面包。
					</p>
                    <div className={styles.centerImage}>
                        <Image src={haus} width={500} height={350}/>
						<Image src={tea} width={500} height={350}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Food
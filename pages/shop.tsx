import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import haus from '../public/kowloon.webp'

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
						香港 - 购物
					</h1>
					<p className={styles.description}>
						购物在香港很方便，每个小商店有日用品，所以你可以治时代衣服去香港。
						因为你有很多地方旅游，你可以买很多东西。九龙有最好的地方买东西，他们有很多很多的商店。
					</p>
                    <div className={styles.centerImage}>
                        <Image src={haus} width={700} height={500}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Tour
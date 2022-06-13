import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import hku from '../public/hku.png'

const Study: NextPage = () => 
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
						香港 - 出国留学 - 香港大学
					</h1>
					<p className={styles.description}>
						我介绍的大学是香港大学， 因为我们是美国人，很多新同学不会说中文。
					</p>
                    <h2>为什么我选香港大学？</h2>
                    <p className={styles.description}>
						香港大学的厉害地方是他们用英文教课，所以美国同学没有语言障碍。
					</p>
                    <h2>有什么专业？</h2>
                    <p className={styles.description}>
						香港大学包括很多专业，强项有医学和电脑科学。
					</p>
                    <h2>学费</h2>
                    <p className={styles.description}>
						学费是每年十六万港币，相当于两万美元，所以不是太贵。
					</p>
					<div className={styles.centerImage}>
                        <Image src={hku} width={500} height={500}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Study
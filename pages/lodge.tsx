import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import haus from '../public/haus.jpg'

const Lodging: NextPage = () => 
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
						香港 - 住
					</h1>
					<p className={styles.description}>
						香港有很多地方住，他们比较贵，因为他们的房子是非常漂亮，和大门对香港大学非常近。香港也有很多你多酒店，所以很多人非常喜欢去香港。
					</p>
                    <p className={styles.description}>
						香港大学也有自己的宿舍，所以你可住在香港大学的校园。
					</p>
                    <div className={styles.centerImage}>
                        <Image src={haus} width={500} height={500}/>
                    </div>
				</div>
			</main>
			<footer>
				
			</footer>
		</div>
  	)
}

export default Lodging
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavLink}>地方</a></Link>
				<Link href="climate"><a className={styles.NavLink}>气候</a></Link>
				<Link href="study"><a className={styles.NavLink}>出国留学</a></Link>
				<Link href="lodge"><a className={styles.NavLink}>住</a></Link>
				<Link href="food"><a className={styles.NavLink}>美食</a></Link>
				<Link href="tour"><a className={styles.NavLink}>旅游</a></Link>
				<Link href="shop"><a className={styles.NavLink}>购物</a></Link>
			</div>
		</nav>
	)
}
export default Navbar
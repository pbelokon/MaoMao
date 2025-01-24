import React from 'react'
import styles from "./navbar.module.css"
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Image src="/logo.png"  width={50}
          height={50} alt='logo'></Image>


          <div className={styles.search}>
            <input type="text" />
            <Image className={styles.searchIcon} src="/search_paw.png"  width={25}
          height={25} alt="search icon"></Image>
          </div>
    </nav>
  )
}

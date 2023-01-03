import styles from './Header.module.css'

function Header (){


        return(
                 < >
                    <header className={styles.headerFlex}>
                <nav className={styles.naviGation}>
                  <span> 
                    <h1 className={styles.logo}>Portflow</h1>
                  </span>
           <ul>
           <li >Inicio </li>
           <li >Sobre </li>
           <li >Contatos </li>
           <li >Portifólio </li>
           </ul>
             </nav>
           </header>            
           
    </>
        )
}

export default Header
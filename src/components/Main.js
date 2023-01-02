
import styles from './Main.module.css'

import cafe  from "../img/cafe.png"



function Main (){

    return (
        <div>
        <section className={styles.banner}> 


        <p className={styles.text}> Imagine,Discuta,Desenhe.</p>



        <h2 className={styles.sloganFrase}> fale conosco </h2> 
        </section>




        <main>
            <section>
              <img  src="{cafe} " alt="cafe"  />
            </section>
            
        </main>
        

        </div>
    )
}


export default Main
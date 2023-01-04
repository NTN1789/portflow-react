import styles from "../components/footer.module.css"
import face from "../Assets/img/face.png"
import insta from "../Assets/img/insta.jpeg"



function footer (){

    return (

        <div>

            <footer >
                <div className={styles.redeSocial}>
                <img className={styles.imagem}  src={face}  alt="facebook" />
                <img className={styles.imagem} src={insta}  alt="instagram" />


                </div>


            </footer>

        </div>
    )

}


export default footer
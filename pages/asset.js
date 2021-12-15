import styles from '../styles/Home.module.css'
import AssetComponent from "../components/asset/AssetComponent";


const Asset = ()=>{

    return(
        <div className={styles.container}>

            <main className={styles.main}>
                <AssetComponent></AssetComponent>
            </main>


        </div>



    )

}

export default Asset;

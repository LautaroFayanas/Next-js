import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css';

export default function Nosotros () {
  return (
    <>  
        <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarrasLa'}
        > 
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
                <Image src='/img/nosotros.jpg' width={1000} height={800}  alt="Imagen sobre nosotros" />
              <div >
                  <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                  </p>

                  <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using   (injected humour and the like).
                  </p>
              </div>

          </div>
        </main>
        </Layout>
    </>
  )
}

import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from '../util/helpers'
import styles from '../styles/blog.module.css';


export default function Post({post}) {

    const { contenido , imagen , titulo , url , publishedAt } = post

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`Imangen blog ${titulo}`} width={600} height={400} />

        <div className={styles.contenido}>
            <h3> {titulo} </h3>
            <p className={styles.fecha}> {formatearFecha(publishedAt)} </p>
            <p className={styles.resumen}> {contenido} </p>
            <Link legacyBehavior href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer post
                </a>
            </Link>
        </div>

    </article>
  )
}

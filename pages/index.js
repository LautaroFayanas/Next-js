import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from '../styles/grid.module.css';
import Post from "../components/post";
import Curso from "../components/curso";


export default function Home({guitarras,post,curso}) {
  
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica , venta de guitarras y mas'}
      >

          <main className="contenedor">
                <h1 className="heading">Nuestra Coleccion</h1>

                <div className={styles.grid}> 
                  {
                    guitarras.map(guitarra => (
                      <Guitarra  
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                      />
                    ))
                  }
              </div>

          </main>

          <Curso curso={curso} />

          <section className="contenedor">
            <h2 className="heading">Blog</h2>

            <div className={styles.grid}>
                  {post?.map(post => ( 
                    <Post
                      key={post.id}
                      post={post.attributes}
                    />
                  ))}
                </div>

          </section>

      </Layout>
    </>
  )
}

export async function getStaticProps(){
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
    const urlPost =  `${process.env.API_URL}/posts?populate=imagen`;
    const urlCurso =  `${process.env.API_URL}/curso?populate=imagen`;

    //Esto se hace cuando tenemos mas de un consumo de api
    const [ resGuitarras, resPost , resCurso ] = await Promise.all([
      fetch(urlGuitarras), 
      fetch(urlPost),
      fetch(urlCurso)
    ])

    //Esto nos trae una data y lo puedo renombrar como guitarra o post en este caso.
    const [ {data: guitarras}, {data: post} , {data: curso} ] = await Promise.all([
      resGuitarras.json(),
      resPost.json(),
      resCurso.json()
    ])

    console.log(guitarras);
    console.log(post);

    return {
      props: {
        guitarras,
        post,
        curso
      }
    }
}

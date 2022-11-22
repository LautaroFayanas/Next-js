import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title={`Web Not Found`}
    >
        <p className="error">Pagina No Encontrada</p>
        <Link legacyBehavior href='/'>
            <a className='error-enlace'>Ir a Inicio</a>
        </Link>
    </Layout>
  )
}


import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children , title='' , description='' }) {
  return (
    <>
        <Head> 
            <title> {`GuitarLa - ${title} `} </title>
            <meta name="description" content={description} />
        </Head>

        <Header />

        <h1>Inicio</h1>
        {children}
        <Footer />
    </>
  )
}

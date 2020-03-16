import Head from 'next/head'
import Navbar from '../Navbar' 

const Layout = (props) => (
    <div className="root">
        <Head>
            <title>Using next yo</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Navbar />
        {props.children}
        <style jsx>{`
            .root {
                font-family: Roboto;
            }
        `}</style>
    </div>
)

export default Layout
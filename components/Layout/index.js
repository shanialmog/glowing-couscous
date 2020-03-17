import Head from 'next/head'
import Navbar from '../Navbar' 

const Layout = (props) => (
    <div className="root">
        <Head>
            <title>Using next yo</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <Navbar />
        <div className="children">
            {props.children}
        </div>
        <style jsx>{`
            .root {
                font-family: Roboto;
            }
            .children{
                margin: auto;
                width: 50%;
                padding: 10px;
                text-align: center;
            }
        `}</style>
    </div>
)

export default Layout
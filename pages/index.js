import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'


const Index = (props) => (
    <Layout>
        <h1>Home of Chuck</h1>
        {props.data.value}
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch
    ('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    return {
        data :data
    }
}



export default Index
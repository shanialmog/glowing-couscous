import Layout from '../components/Layout'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const Chuck = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
    <Layout>
        <h1>Think you can add another Chuck joke?</h1>
        <form  onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
                <TextField label="Joke" id="standard-adornment-amount" defaultValue="Enter joke here" />
            </div>
            <div>
                <Button type="submit" variant="contained">Add joke</Button>
            </div>
        </form>
    </Layout>
    )
}

export default Chuck
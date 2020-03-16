import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar = () => (
    <div className="root">
        <AppBar>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    <Button><Link href="/">Home</Link></Button>
                    <Button><Link href="/about">About</Link></Button>
                    <Button><Link href="/contact">Contact</Link></Button>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)


export default Navbar
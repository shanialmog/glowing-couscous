import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

const Navbar = () => (
    <div>
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                    </ul>
                </Typography>
            </Toolbar>
        </AppBar>
        <style jsx>{`
            ul {
                list-style: none;
                display: flex
            }
            ul li {
                margin-right: 30px;
            }
            ul li a {
             text-decoration: none;
             color: #fff
            }
            header {
                position: static;
            }
        `}</style>
    </div>
)


export default Navbar
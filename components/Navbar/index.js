import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
                list-style: none;
                align-items: left;
                padding: 0 0;
            }

            ul li {
                font-size: 17px;
                margin-right: 10px;
            }

            ul li a {
                text-decoration: none;
            }
        `}</style>
    </div>
)


export default Navbar
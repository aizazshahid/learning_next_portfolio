import Link from 'next/link';

const Layout = ({children, title}) => (
    <div className="root">
        <header>
            <Link href="/">Home</Link> {' '}
            <Link href="/about">About Me</Link> {' '}
            <Link href="/hireme">Hire Me</Link> {' '}
        </header>

        <h1>{ title }</h1>

        { children }

        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: indigo;
            }
            header a {
                color: darkgrey;
                text-decoration: none;
            }
            header a:hover {
                font-weight: bold;
                color: lightgrey;
            }
            footer {
                padding: 1em;
            }
        `}</style>
    </div>
)

export default Layout;
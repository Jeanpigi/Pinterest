import React, {Component} from 'react';
import Head from 'next/head';
import Link from 'next/link';

class Layout extends Component {
    render() {
        const { title } = this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <link rel="shortcut icon" href="../static/favicon.ico" />
                </Head>
                <div>
                    <header className="header">
                        <h1>
                            Probando conocimientos de next.js y React
                        </h1>
                        <Link href="/platzi">
                            <a>Platzi</a>
                        </Link>
                    </header>
                    <div className="container">
                        <div className="item level-1">
                            <img src="../static/landing.webp" alt="landing"></img>
                        </div>
                        <div className="item level-2">
                            <img src="../static/tshirt.webp" alt="tshirt"></img>
                        </div>
                        <div className="item level-3">
                            <img src="../static/house.webp" alt="house"></img>
                        </div>
                        <div className="item level-1">
                            <img src="../static/landing.webp" alt="landing"></img>
                        </div>
                        <div className="item level-2">
                            <img src="../static/tshirt.webp" alt="tshirt"></img>
                        </div>
                        <div className="item level-3">
                            <img src="../static/house.webp" alt="house"></img>
                        </div>
                        <div className="item level-1">
                            <img src="../static/landing.webp" alt="landing"></img>
                        </div>
                        <div className="item level-2">
                            <img src="../static/tshirt.webp" alt="tshirt"></img>
                        </div>
                        <div className="item level-3">
                            <img src="../static/house.webp" alt="house"></img>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .header{
                        border-radius: 5px;
                        padding: 10px;
                        background: #233F50;
                        color: white;
                        text-align: center;
                    }
                    .header a {
                        text-decoration: none;
                        color:white;
                    }
                    .container {
                        display:grid;
                        grid-template-columns: repeat(auto-fill, 250px);
                        gap: 5px;
                        justify-content: center;
                        margin-top:10px;
                    }
                    .item {
                        border-radius: 5px;
                        padding: 10px;
                        background: #f2f2f2;
                    }

                    .item img {
                        max-width: 100%
                    }

                    .level-1 {
                        grid-row-end: span 3;
                    }
                    .level-2 {
                        grid-row-end: span 2;
                    }
                    .level-3 {
                        grid-row-end: span 1;
                    }
                `}</style>
            </div>
        );
    }
}

export default Layout
import React from 'react';

import Link from 'next/link';
import Head from 'next/head'

const Home = () => (
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <Link href="/users">
            <a href="">Users</a>
        </Link>

        <h1>Hello World</h1>
    </div>
)

export default Home;
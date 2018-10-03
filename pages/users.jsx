import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head'

const Users = ({ users }) => (
    <div>
        <Head>
            <title>Usuários</title>
        </Head>

        <ul>
            {users.map(user => <li key={user.id}>{user.login}</li> )}
        </ul>

        <Link href="/">
            <a href="">Voltar</a>
        </Link>
    </div>
)

Users.getInitialProps = async () => {
    const response = await axios.get('http://api.github.com/orgs/rocketseat/members');

    return { users: response.data }
}

export default Users;
import Head from 'next/head';
import Header from './Header';

const Wrapper = ({ children }) => <>
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Hero's Haven DayZ Community</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    </Head>
    <div className="page">
        <Header />
        <div className="page-content">
            <div className="container">
            { children }
            </div>
        </div>
    </div>
</>;

export default Wrapper;
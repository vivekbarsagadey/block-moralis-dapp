import '../styles/globals.css'

import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import theme from '../util/theme';
import createEmotionCache from '../util/createEmotionCache';
import {AppWrapper} from "../context/AppContext";
import Layout from "../components/common/Layout";
import {MoralisProvider} from "react-moralis";

const clientSideEmotionCache = createEmotionCache();

function MyApp({Component, pageProps}) {

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <Head>
                <title>Block Moralis D-App</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <MoralisProvider appId="ywjcA6AYJoLITmAhTIXGjPeHUZmb0vb3q2d9w1Ea" serverUrl="https://tqh7ovolflzk.usemoralis.com:2053/server">
                <AppWrapper>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <CssBaseline/>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </AppWrapper>
            </MoralisProvider>

        </CacheProvider>
    )

}

export default MyApp

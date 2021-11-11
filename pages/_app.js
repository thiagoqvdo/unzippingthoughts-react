import Head from 'next/head'
import '../styles/css/global/global_style.css'
import '../styles/css/reset.css'
import styled from 'styled-components';
import particlesConfig from './components/particlesConfig.json'
import Particles from 'react-particles-js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        {/* LINKS  */}
        <link rel="shortcut icon" href="../static/assets/favicon.svg" type="image/x-icon" />

        {/* FONTS  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=block"
          rel="stylesheet"
        />

      </Head>

      <div id="container"> {/* NÃO ADICIONE NADA AQUI, A PÁGINA É EDITA EM index.js */}

        

        {/* PARTICLES BACKGROUND */}
        <Particles params={particlesConfig} />

        {/* PAGES */}
        <Component {...pageProps} />

      </div>
    </>
  );
}

export default MyApp

import { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/argon-design-system-react.css';
import '../styles/styles.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/nucleo/css/nucleo.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // Log no console sempre que o site é acessado ou uma página é carregada
    console.log(`Nova visita: Página ${router.pathname} foi acessada.`);

    // Verifica se o Google Analytics está carregado e envia um evento de página
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-95E9BXJVB3', { page_path: url });
      }
    };

    // Escuta as mudanças de rota do Next.js para acionar o Google Analytics
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Meu Site</title>
      </Head>

      {/* Script do Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-95E9BXJVB3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-95E9BXJVB3');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

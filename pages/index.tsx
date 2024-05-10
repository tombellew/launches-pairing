import Head from 'next/head';
import StylesHome from '../styles/Home.module.css';
import StylesLayout from '../styles/layout.module.css';
import LaunchCards from '../components/Launches/LaunchCards';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={StylesHome.background}>
      <Head>
        <title>Space-X Launch Data</title>
        <meta name="description" content="SpaceX Launch Data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={StylesHome.main}>
        <div className={StylesLayout.container}>
          <h1 className={StylesHome.title}>
            <Image
              src="/assets/space-x-logo.svg" 
              height={80}  
              width={400}  
              alt="SpaceX Logo"
            />
          </h1>

          <LaunchCards />
        </div>
      </main>
    </div>
  );
}

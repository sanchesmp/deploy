import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import styles from '@styles/Home.module.scss';
import { useState, useEffect } from 'react'; // Importando useState e useEffect

const DEFAULT_CENTER = [-22.917939, -43.338957]

export default function Home() {
  const [location, setLocation] = useState({
    center: DEFAULT_CENTER,
    markerPosition: DEFAULT_CENTER 
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          center: [position.coords.latitude, position.coords.longitude],
          markerPosition: [position.coords.latitude, position.coords.longitude]
        });
      },
      (error) => console.error('Erro ao obter localização:', error)
    );

    // Cleanup do watchPosition quando o componente for desmontado
    return () => navigator.geolocation.clearWatch(watchId);
  }, []); // Executa o useEffect apenas na montagem

  return (
    <Layout>
      <Head>
        <title>Teste de localização</title>
        <meta name="description" content="Teste de fazer um app de localização de veículos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Container>
          <h1 className={styles.title}>
            Teste de localização
          </h1>

          <Map className={styles.homeMap} width="800" height="400" center={location.center} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={location.markerPosition}> 
                  <Popup>
                    Você está aqui!
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

          {/* Resto do conteúdo da página ... */}
        </Container>
      </Section>
    </Layout>
  )
}


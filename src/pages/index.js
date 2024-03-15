import Head from 'next/head';
import Layout from '@components/Layout';
import Section from '@components/Section';
import Container from '@components/Container';
import Map from '@components/Map';
import Button from '@components/Button';
import styles from '@styles/Home.module.scss';
import { useState, useEffect } from 'react';

const DEFAULT_CENTER = [-22.4651, -43.4655];
const VAN_UPDATE_INTERVAL = 5000; // 5 segundos

export default function Home() {
  const [location, setLocation] = useState({
    center: DEFAULT_CENTER,
    markerPosition: DEFAULT_CENTER,
    vanPosition: DEFAULT_CENTER
  });

  useEffect(() => {
    // Obtém localização do usuário
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation((prevState) => ({
          ...prevState,
          center: [position.coords.latitude, position.coords.longitude],
          markerPosition: [position.coords.latitude, position.coords.longitude]
        }));
      },
      (error) => console.error('Erro ao obter localização:', error)
    );

    // Simula atualização da localização da van
    const vanIntervalId = setInterval(() => {
      setLocation((prevState) => ({
        ...prevState,
        vanPosition: simulateVanMovement(prevState.vanPosition)
      }));
    }, VAN_UPDATE_INTERVAL);

    // Cleanup 
    return () => {
      navigator.geolocation.clearWatch(watchId);
      clearInterval(vanIntervalId);
    };
  }, []); 

  // Função para simular um movimento aleatório da van 
  function simulateVanMovement(currentVanPosition) {
    const [lat, lng] = currentVanPosition;
    const latDelta = (Math.random() - 0.5) * 0.01; 
    const lngDelta = (Math.random() - 0.5) * 0.01; 
    return [lat + latDelta, lng + lngDelta];
  }

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
                  <Popup>Você está aqui!</Popup>
                </Marker>

                <Marker position={location.vanPosition}> 
                  <Popup>A van está aqui.</Popup>
                </Marker>
              </>
            )}
          </Map>
        </Container>
      </Section>
    </Layout>
  )
}


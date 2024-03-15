import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Teste de criação de um site de localização de transporte by Léo Sanches
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://www.linkedin.com/in/leonardo-sanches-a299412b7/" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;

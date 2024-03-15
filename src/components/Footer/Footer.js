import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <Container className={`${styles.footerContainer} ${styles.footerLegal}`}>
        <p>
          &copy; <a href="https://www.linkedin.com/in/leonardo-sanches-a299412b7/">Leonardo Sanches</a>, {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

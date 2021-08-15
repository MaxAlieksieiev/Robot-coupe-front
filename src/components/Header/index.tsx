import Container from '../../shared/Container';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header__top}>
      <Container>
        <div>HEader</div>
      </Container>
    </div>
  </div>
);

export default Header;

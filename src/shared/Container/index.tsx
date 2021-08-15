import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactChildren | React.ReactChild | React.ReactElement;
}
const Container: React.FC<ContainerProps> = ({ children }) => <div className={styles.container}>{children}</div>;

export default Container;

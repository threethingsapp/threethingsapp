import { Button, Header, Heading, Layout } from "../components";
import styles from './home.module.css';

type Props = {};

const Home = ({}: Props): JSX.Element => {
  return (
    <Layout>
      <Header />

      <Heading variant="v100">Hello</Heading>
      <Heading variant="v100">Erlich Bachman</Heading>

      <div className={styles['button-wrapper']}>
        <Button title="Overview" theme="primary"/>
        <Button title="Productivity" theme="outline" />
      </div>
    </Layout>
  )
};

export default Home;

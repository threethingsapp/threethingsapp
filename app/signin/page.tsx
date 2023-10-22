import Image from "next/image";
import css from 'classnames';
import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

type Props = {};

const SignIn = ({}: Props): JSX.Element => {
  return (
    <Layout>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Image
          src="/3d.png"
          alt="3d"
          style={{ margin: '0 auto' }}
          width={234}
          height={239}
          priority
        />
      </div>

      <Heading variant="v100" style={{ width: '320px', marginBottom: '120px' }}>The only productivity app you need</Heading>

      <Button title="Sign in with Email" theme="primary" style={{ margin: '18px 0' }} />

      <div style={{ display: 'flex', gap: '18px' }}>
        <Button style={{ flex: 1 }} title="Google" />
        <Button style={{ flex: 1 }} title="Apple ID" />
      </div>

      <p style={{ textAlign: 'center', marginTop: '8px', color: '#a8a8a8' }}>By Continuing you agree to the Terms and Condition</p>
    </Layout>
  );
};

export default SignIn;

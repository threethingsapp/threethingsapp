import Image from "next/image";

import { Layout } from "../components/Layout";
import { Heading } from "../components/Heading";

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

      <Heading variant="v100" style={{ width: '320px' }}>The only productivity app you need</Heading>
    </Layout>
  );
};

export default SignIn;

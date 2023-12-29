"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Layout, Heading, Button } from "../components";
import { Colors } from "../constants";

import styles from "./page.module.scss";

type Props = {};

const SignIn = ({}: Props): JSX.Element => {
  const router = useRouter();

  const handleNavigation = () => router.push('/home');

  return (
    <Layout>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Image
          src="/3d.png"
          alt="3d"
          style={{ margin: "0 auto" }}
          width={234}
          height={239}
          priority
        />
      </div>

      <Heading
        variant="v100"
        style={{ maxWidth: "320px", marginBottom: "80px" }}
      >
        The only productivity app you need
      </Heading>

      <div>
        <Button
          title="Sign in with Email"
          theme="primary"
          wrapperClassName={styles["sso-button"]}
          className={styles["sso-button"]}
          onClick={handleNavigation}
        />

        <div style={{ display: "flex", gap: "18px" }}>
          <Button
            wrapperClassName={styles["sso-button"]}
            className={styles["sso-button"]}
            title="Google"
            onClick={handleNavigation}
          />

          <Button
            wrapperClassName={styles["sso-button"]}
            className={styles["sso-button"]}
            title="Apple ID"
            onClick={handleNavigation}
          />
        </div>
      </div>

      <p style={{ textAlign: "center", marginTop: "18px", color: Colors.GREY }}>
        By Continuing you agree to the Terms and Condition
      </p>
    </Layout>
  );
};

export default SignIn;

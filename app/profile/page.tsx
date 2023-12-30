"use client";

import {
  Avatar,
  Button,
  Container,
  Heading,
  LoggedLayout,
} from "@/app/components";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

type Props = {};

const Profile = ({}: Props): JSX.Element => {
  const router = useRouter();

  const handleLogout = () => router.push("/signin");

  const userName = "Erlich Bachman";
  return (
    <LoggedLayout>
      <Avatar imageSize={240} className={styles.avatar} />

      <div style={{ textAlign: "center" }}>
        <Heading variant="v200">{userName}</Heading>
        <small>erlichbachman@piedpipier.com</small>
      </div>

      <Button title="Edit Profile" onClick={() => null} theme="primary" />

      <div>
        <label className={styles.label}>Notification</label>
        <Container className={styles.container}>
          <>Turn on Notification (O)</>
        </Container>
      </div>

      <div>
        <label className={styles.label}>Invite Link</label>
        <Container className={styles.container}>
          <>
            Invite People
            <Button
              title="invite"
              theme="primary"
              onClick={() => null}
              style={{ margin: "0 24px" }}
            />
          </>
        </Container>
      </div>

      <Button title="Log out" onClick={handleLogout} theme="clear" />
    </LoggedLayout>
  );
};

export default Profile;

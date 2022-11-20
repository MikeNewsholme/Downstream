import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Signin.module.css";

const userLogin = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <div>
          welcome, {session.user.name}
          <button onClick={() => signOut()}> Sign out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        you are not logged in
        <button onClick={() => signIn()}> Sign In</button>
      </div>
    );
  }
};

export default userLogin;

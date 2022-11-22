import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import {useRouter} from "next/router"

const userLogin = () => {
 
  const { data:session} = useSession();
  
  if (session) {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          Welcome, {session.user.name}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          You are no longer logged in
          <button onClick={() => signIn()}> Sign In</button>
        </div>
      </div>
    );
  }
};

export default userLogin;

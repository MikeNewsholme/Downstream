import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import styles from "../../styles/Signin.module.css"



const SignIn = (props) => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="mike@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
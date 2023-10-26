"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      console.log("registering error", error);
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="usesrname" className={styles.input} required></input>
        <input type="email" placeholder="email" className={styles.input} required></input>
        <input type="password" placeholder="password" className={styles.input} required></input>
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;

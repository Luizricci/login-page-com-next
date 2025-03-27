"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/root.module.css";


export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);
return (
    <div className={styles.container}>
        <div className={styles.spinner}></div>
        <p>Redirecionando...</p>
    </div>
)
}
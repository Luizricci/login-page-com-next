"use client";

import Link from "next/link";
import styles from "../create-account/page.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

export default function Login() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = (event) => {
    event.preventDefault();
    if (input3.length === 0){
      setMatch(false);
      setError("Preencha o campo de e-mail");
    }
    else if (input1.length === 0) {
      setMatch(false);
      setError("A senha não pode ser vazia");
    } else if (input2.length === 0) {
      setMatch(false);
      setError("Preencha o campo de repetir senha");
    } else if (input1.length < 5) {
      setMatch(false);
      setError("A senha deve ter no mínimo 5 caracteres");
    } else if (input1 !== input2) {
      setMatch(false);
      setError("As senhas não coincidem");
    }else {
      setMatch(true);
      setError("Sucesso");
    }
  };


  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.loginForm}>

            <legend className={styles.legend}>Digite seu E-mail</legend>
              <Input
                type="email"
                placeholder="Digite o e-mail"
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                className={styles.input}
                />

            <legend className={styles.legend}>Digite sua senha</legend>
              <Input
                type="password"
                placeholder="Digite a senha"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className={styles.input}
              />
              <legend className={styles.legend}>Repita sua senha</legend>
              <Input
                type="password"
                placeholder="Repita a senha"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className={styles.input}
              />
              <button onClick={handleCheck} className={styles.btnVerificar}>Verificar</button>{" "}
              {match !== null && <p>{error}</p>}{" "}
              <Link href="/first-page">
                <Button text="Criar conta" />
              </Link>
              <Link href="/login">
                Entrar
              </Link>
          </form>

        </main>
      </div>
    </div>
  );
}
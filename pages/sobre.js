import React from 'react';
import Link from "next/link";

function Title(props) {
  return <h1 style={{ color: props.color }}>{props.children}</h1>;
}

export default function Sobre() {
  return (
    <div>
      <header>
        <Title>Página sobre</Title>
        <img src="..." />
      </header>

      <Link href="/">
        <a>link para home</a>
      </Link>
    </div>
  );
}

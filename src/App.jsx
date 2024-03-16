import { useState } from 'react';
import './App.css';

import Link from './components/Link';
import LinkList from './components/LinkList';

const links = [
  {
    label: "Quero aprender a programar"
  },
  {
    label: "Quero aprender data analytics"
  },
  {
    label: "Quero aprender marketing digital"
  },
  {
    label: "Increva-se nos nossos cursos",
    title: "Curso intensivo",
    description: "Veja aqui quais os cursos intensivos estão com vagas abertas e garanta já a sua."
  },
  {
    label: "Clique e se inscreva",
    title: "Digital Plus",
    description: "Evento exclusivo para alunos!"
  }
];


function App() {
  return (
  <LinkList>
    { links.map(item => <Link {...item} />)}
  </LinkList>
  );
}

export default App;
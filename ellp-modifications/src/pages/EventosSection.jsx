import React, { useState } from 'react';
import styles from './Eventos.module.css'; // ajuste para o CSS correto que você usa

const eventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "Pessoas trabalhando",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop",
    categoria: "Work"
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "Exposição de tecnologia",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    categoria: "Tecnologia"
  },
  {
    id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "Feira de comida",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    categoria: "Culinária"
  },
  {
    id: 4,
    titulo: "Corrida e Saúde",
    descricao: "Esporte e bem-estar",
    imagem: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1170&auto=format&fit=crop",
    categoria: "Esporte"
  },
  {
    id: 5,
    titulo: "Oficina de Arte",
    descricao: "Atividade criativa",
    imagem: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop",
    categoria: "Cultura"
  }
];

export default function EventosSection() {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const evento = eventos[paginaAtual];
  const totalPaginas = eventos.length;

  return (
    <div className={styles.eventoContainer}>
      <img src={evento.imagem} alt={evento.titulo} className={styles.imagem} />
      <h2>{evento.titulo}</h2>
      <p>{evento.descricao}</p>
      <p><strong>Categoria:</strong> {evento.categoria}</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {paginaAtual > 0 && (
          <button className={styles.pageButton} onClick={() => setPaginaAtual(paginaAtual - 1)}>
            Anterior
          </button>
        )}
        {paginaAtual < totalPaginas - 1 && (
          <button className={styles.pageButton} onClick={() => setPaginaAtual(paginaAtual + 1)}>
            Próximo
          </button>
        )}
      </div>
    </div>
  );
}

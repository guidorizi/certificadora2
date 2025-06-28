import React, { useState } from 'react';
import styles from './Voluntarios.module.css'; // ajuste para o CSS correto

const voluntarios = [
  { 
    nome: "Ana Silva", 
    funcao: "Marketing", 
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop",
    bio: "Especialista em psicologia escolar e mediação emocional.",
  },
  { 
    nome: "Carlos Souza", 
    funcao: "Ensino", 
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop",
    bio: "Trabalha com inclusão educacional há mais de 10 anos.",
  },
  // Adicione mais voluntários conforme quiser
];

export default function VoluntariosSection() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.lista} style={{ filter: selecionado ? 'blur(4px)' : 'none' }}>
        {voluntarios.map((v, i) => (
          <div 
            key={i} 
            className={styles.cartao} 
            onClick={() => setSelecionado(v)}
            style={{ cursor: 'pointer' }}
          >
            <img src={v.foto} alt={v.nome} className={styles.foto} />
            <h2>{v.nome}</h2>
            <p>{v.funcao}</p>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className={styles.cardOverlay}>
          <div className={styles.cardContent}>
            <img src={selecionado.foto} alt={selecionado.nome} className={styles.cardFoto} />
            <h2>{selecionado.nome}</h2>
            <p><strong>Função:</strong> {selecionado.funcao}</p>
            <p>{selecionado.bio}</p>
            <button className={styles.cardClose} onClick={() => setSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

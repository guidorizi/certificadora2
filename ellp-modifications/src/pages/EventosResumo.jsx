import { Link } from 'react-router-dom';
import styles from './EventosResumo.module.css';

const eventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "(PESSOAS TRABALHANDO)",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop",
    categoria: "Work",
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "(EXPOSIÇÃO)",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1170&auto=format&fit=crop",
    categoria: "Tecnologia",
  },
  {
    id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "(FEIRA DE COMIDA)",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1170&auto=format&fit=crop",
    categoria: "Culinária",
  },
  // mais eventos aqui...
];

const EventosResumo = () => {
  // Pegando só os 3 primeiros eventos para o resumo
  const proximosEventos = eventos.slice(0, 3);

  return (
    <div className={styles.container}>
      {proximosEventos.map((evento) => (
        <div key={evento.id} className={styles.card}>
          <img src={evento.imagem} alt={evento.titulo} className={styles.imagem} />
          <h3 className={styles.titulo}>{evento.titulo}</h3>
          <p className={styles.descricao}>{evento.descricao}</p>
          <p className={styles.categoria}><strong>Categoria:</strong> {evento.categoria}</p>
          <Link to={`/eventos/${evento.id}`} className={styles.saibaMais}>
            Saiba mais &rarr;
          </Link>
        </div>
      ))}

      <Link to="/eventos" className={styles.verTodos}>
        Ver todos os eventos
      </Link>
    </div>
  );
};

export default EventosResumo;

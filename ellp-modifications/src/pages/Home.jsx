import { useCallback } from 'react';
import styles from './Home.module.css';
import EventosResumo from './EventosResumo';
import Voluntarios from './Voluntarios';

function Home() {
  // Função para rolar para a seção com id dado
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          onClick={() => scrollToSection('eventosSection')}
          className={styles.menuButton}
        >
          EVENTOS
        </button>

        <button
          onClick={() => scrollToSection('voluntariosSection')}
          className={styles.menuButton}
        >
          VOLUNTÁRIOS
        </button>
      </header>

      <h1 className={styles.brand}>ELLP</h1>

      <main className={styles.main}>
        <section id="eventosSection" className={styles.section}>
          <h2 className={styles.sectionTitle}>Próximos Eventos</h2>
          <EventosResumo />
        </section>

        <section id="voluntariosSection" className={styles.section}>
          <Voluntarios />
        </section>
      </main>
    </div>
  );
}

export default Home;

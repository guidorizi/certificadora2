import EventosSection from './EventosSection';
import VoluntariosSection from './VoluntariosSection';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <a href="#eventos" className={styles.link}>
          <div className={styles.menuItem}><h2>EVENTOS</h2></div>
        </a>
        <a href="#voluntarios" className={styles.link}>
          <div className={styles.menuItem}><h2>VOLUNTÁRIOS</h2></div>
        </a>
      </main>

      <h1 className={styles.brand}>ELLP</h1>

      <section id="eventos" className={styles.section}>
        <EventosSection />
      </section>

      <section id="voluntarios" className={styles.section}>
        <VoluntariosSection />
      </section>
    </div>
  );
}

export default Home;

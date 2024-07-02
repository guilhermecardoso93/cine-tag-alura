import styles from './styles.module.js';

export function Container({ children }) {
  return (
      <section className={styles.container}>
          {children}
      </section>
  )
}
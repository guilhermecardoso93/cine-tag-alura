import styles from './styles.module.js';

// eslint-disable-next-line react/prop-types
export function Container({ children }) {
  return (
      <section className={styles.container}>
          {children}
      </section>
  )
}
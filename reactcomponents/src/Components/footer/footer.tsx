import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        © 2026 My Website
      </span>
    </footer>
  );
}

import styles from "@/app/page.module.css";
import StartButton from "@/components/StartButton";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <StartButton />
    </main>
  );
}

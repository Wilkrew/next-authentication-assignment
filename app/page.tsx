import styles from "@/app/page.module.css";
import StartButton from "../components/StartButton";

//TODO: Add animation to the start button when routing to content/authenticated
//TODO: Add CTA:s and content for SEO

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <StartButton />
    </main>
  );
}

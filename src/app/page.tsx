import styles from "@/app/page.module.css";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <SignInButton />
    </main>
  );
}

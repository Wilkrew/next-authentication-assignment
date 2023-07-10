import SignInButton from "@/components/SignInButton";
import styles from "@/app/page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>Welcome</div>
      <SignInButton />
    </main>
  );
}

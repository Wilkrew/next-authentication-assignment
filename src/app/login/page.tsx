import SignInButton from "@/components/SignInButton";
import styles from "@/app/page.module.css";

export default async function Login() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <SignInButton />
    </main>
  );
}

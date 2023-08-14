import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/ssr">Go To SSR</Link>
        <br />
        <Link
          href={{
            pathname: "/isr",
            query: { keyword: "hello" },
          }}
        >
          Go To ISR
        </Link>
        <br />
        <Link href="/ssg">Go To SSG</Link>
        <br />
        <Link href="/ssg">
          <button>Jump To SSG</button>
        </Link>
        <br />
        <Link href="/posts/1">Go To 1</Link>
        <br />
      </div>
    </main>
  );
}

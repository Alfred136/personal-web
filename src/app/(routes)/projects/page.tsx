import Link from 'next/link';

export default function About() {
  return (
    <main>
      <section>
        <div>
          <h2>Hero</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Projects</h2>
          <Link href={'/home'}> to home</Link>
          <Link href={'/about'}> to about</Link>\ <Link href={'/contact'}> to contact</Link>
        </div>
      </section>
    </main>
  );
}

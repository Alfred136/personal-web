import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section>
        <div>
          <h2>Hero</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Home</h2>
          <Link href={'/about'}> to about</Link>
          <Link href={'/projects'}> to projects</Link>
          <Link href={'/contact'}> to contact</Link>
        </div>
      </section>
    </main>
  );
}

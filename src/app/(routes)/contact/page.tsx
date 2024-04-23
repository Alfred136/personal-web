import Link from 'next/link';

export default function ContactPage() {
  return (
    <main>
      <section>
        <div>
          <h2>Hero</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Contact</h2>
          <Link href={'/home'}> to home</Link>
          <Link href={'/about'}> to about</Link>
          <Link href={'/projects'}> to projects</Link>
        </div>
      </section>
    </main>
  );
}

import { ContactForm } from './components';
import { BackgroundImage } from '@/components/background-image';

export default function ContactPage() {
  return (
    <main>
      <section id='contact-form'>
        <ContactForm />
      </section>

      <BackgroundImage />
    </main>
  );
}

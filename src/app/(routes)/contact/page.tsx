import { ContactForm } from './components/contact-form';
import { Background } from '@/components';

const ContactPage = () => {
  return (
    <main>
      <section id='contact-form'>
        <ContactForm />
      </section>

      <Background />
    </main>
  );
};

export default ContactPage;

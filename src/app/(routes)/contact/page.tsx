import { ContactForm } from './components';
import { BackgroundImage } from '@/components';

const ContactPage = () => {
  return (
    <main>
      <section id='contact-form'>
        <ContactForm />
      </section>

      <BackgroundImage />
    </main>
  );
};

export default ContactPage;

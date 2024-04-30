import { ContactForm } from './components/contact-form';
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

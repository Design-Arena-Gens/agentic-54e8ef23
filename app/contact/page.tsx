import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from './sections/ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Get a tailored proposal from DREAM FINDS COMPANY.'
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Tell us about your goals. We’ll respond within one business day.</p>
        <div className="mt-8 max-w-xl">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}

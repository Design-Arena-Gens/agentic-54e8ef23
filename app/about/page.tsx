import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About',
  description: 'Meet DREAM FINDS COMPANY — a performance-first marketing partner.'
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16 container-prose">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-3 max-w-2xl">We are a team of strategists, analysts, and creative technologists who believe marketing should be accountable. We blend rigorous experimentation with storytelling to unlock durable growth.</p>
        <h2>Principles</h2>
        <ul className="list-disc list-inside text-slate-300">
          <li>Start with the customer journey</li>
          <li>Ship experiments weekly</li>
          <li>Measure what matters</li>
          <li>Be radically transparent</li>
        </ul>
      </main>
      <Footer />
    </>
  )
}

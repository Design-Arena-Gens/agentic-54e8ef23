import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Case Studies',
  description: 'Selected outcomes from DREAM FINDS COMPANY client work.'
}

const cases = [
  {
    logo: 'A',
    title: 'Ecommerce brand scales 4.1x in 6 months',
    result: 'ROAS +212%, revenue +310% via SEO + Google Ads',
  },
  {
    logo: 'B',
    title: 'B2B SaaS drops CAC by 38%',
    result: 'Qualified pipeline +71% with LinkedIn + landing tests',
  },
  {
    logo: 'C',
    title: 'Marketplace increases conversion 29%',
    result: 'Experimentation + UX research reduce friction across funnel',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">A snapshot of growth we have created across categories.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <div className="h-10 w-10 rounded bg-brand-500 text-white grid place-items-center font-bold">{c.logo}</div>
              <h3 className="text-lg font-semibold mt-4">{c.title}</h3>
              <p className="text-slate-300 mt-2">{c.result}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="container mx-auto py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Performance digital marketing
              <span className="block text-brand-400">for ambitious brands</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">We drive measurable growth with SEO, paid media, and conversion rate optimization. Transparent reporting. No fluff. Real results.</p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="px-5 py-3 rounded bg-brand-500 hover:bg-brand-400 text-white font-semibold">Get a proposal</Link>
              <Link href="/services" className="px-5 py-3 rounded border border-white/10 hover:border-white/20">Explore services</Link>
            </div>
            <p className="mt-4 text-xs text-slate-400">Average 3.4x ROAS across engagements last 12 months.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-500/20 to-white/5 ring-1 ring-white/10 p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
                <div className="bg-white/5 rounded-xl ring-1 ring-white/10"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'SEO & Content', desc: 'Technical SEO, editorial strategy, and content that ranks and converts.' },
              { title: 'Paid Media (PPC)', desc: 'Google, Meta, and LinkedIn ads with rigorous testing and ROAS focus.' },
              { title: 'Conversion Rate Optimization', desc: 'Landing page testing and analytics to turn traffic into revenue.' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto py-8">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  )
}

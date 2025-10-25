import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Services',
  description: 'SEO, PPC, and CRO services by DREAM FINDS COMPANY.'
}

export default function ServicesPage() {
  const services = [
    {
      title: 'SEO & Content Strategy',
      bullets: [
        'Technical audits and site architecture',
        'Editorial roadmap and content production',
        'Link earning and digital PR'
      ]
    },
    {
      title: 'Paid Media (PPC)',
      bullets: [
        'Full-funnel strategy across Google, Meta, LinkedIn',
        'Creative testing and landing pages',
        'Rigorous measurement, attribution, and ROAS optimization'
      ]
    },
    {
      title: 'Conversion Rate Optimization',
      bullets: [
        'Research, heatmaps, and journey analysis',
        'A/B testing and experimentation pipeline',
        'Analytics setup and dashboards'
      ]
    }
  ] as const

  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold tracking-tight">Services</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Choose the engagement model that fits your goals. We partner as an extension of your growth team with clear KPIs and weekly reporting.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((svc) => (
            <div key={svc.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-xl font-semibold">{svc.title}</h3>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
                {svc.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}

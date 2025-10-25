import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-brand-600 to-brand-400 rounded-2xl p-8 md:p-12 text-white">
      <div className="max-w-2xl">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to turn clicks into customers?</h3>
        <p className="mt-3 text-white/90">Partner with DREAM FINDS COMPANY to unlock growth with accountable, data-driven marketing.</p>
        <div className="mt-6 flex gap-4">
          <Link href="/contact" className="px-5 py-2.5 rounded bg-white text-brand-700 font-semibold">Get a proposal</Link>
          <Link href="/case-studies" className="px-5 py-2.5 rounded ring-2 ring-white/70 hover:bg-white/10">See our results</Link>
        </div>
      </div>
    </section>
  )
}

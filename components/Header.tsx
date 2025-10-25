import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-dark/70">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="font-black tracking-tight text-white text-lg">DREAM FINDS COMPANY</Link>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/contact" className="px-3 py-1.5 rounded bg-brand-500 hover:bg-brand-400 text-white font-medium">Get in touch</Link>
        </nav>
      </div>
    </header>
  )
}

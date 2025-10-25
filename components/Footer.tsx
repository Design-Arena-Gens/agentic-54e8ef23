export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto py-8 text-sm text-slate-400 flex flex-col md:flex-row gap-2 md:items-center justify-between">
        <p>© {new Date().getFullYear()} DREAM FINDS COMPANY. All rights reserved.</p>
        <p className="opacity-80">Performance digital marketing — SEO, PPC, and CRO.</p>
      </div>
    </footer>
  )
}

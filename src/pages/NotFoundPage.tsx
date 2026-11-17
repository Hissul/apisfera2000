import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold text-[#6A4A13]">Страница не найдена</h1>
      <p className="mt-4 text-[#29251F]">Проверьте адрес или вернитесь на главную страницу.</p>
      <Link className="mt-6 inline-flex items-center gap-2 text-[#6A4A13] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4" to="/">
        <ArrowLeft aria-hidden="true" size={18} />
        На главную
      </Link>
    </section>
  )
}

type PagePlaceholderProps = {
  title: string
}

export function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-semibold text-[#6A4A13]">{title}</h1>
      <p className="mt-4 text-[#29251F]">Раздел готовится.</p>
    </section>
  )
}

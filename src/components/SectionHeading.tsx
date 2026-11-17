type SectionHeadingProps = {
  title: string
  description?: string
}

export function SectionHeading({ title, description }: SectionHeadingProps) {

    return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-brand-bronze sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-brand-graphite">{description}</p>}
    </div>
    )

}

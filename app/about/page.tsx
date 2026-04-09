import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

// NOTE: This file previously failed type-checking because a `Feature` type
// required an `icon` field, but the provided feature objects did not include it.
// We keep the UI unchanged by making `icon` optional locally.

type Feature = {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground max-w-2xl">
          We teach in a way that respects real bodies and real lives—structure,
          breath, and options.
        </p>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {(
            [
              {
                title: 'Grounded heat',
                description:
                  'Hot yoga that supports mobility and strength without rushing.',
              },
              {
                title: 'Clear structure',
                description:
                  'Repeatable class arcs so you can track progress and feel safe.',
              },
              {
                title: 'Real options',
                description:
                  'Modifications and progressions for different bodies and days.',
              },
            ] satisfies Feature[]
          ).map((f) => (
            <div
              key={f.title}
              className="rounded-xl border bg-background p-6 shadow-sm"
            >
              <div className="text-lg font-medium">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

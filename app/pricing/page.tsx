import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { CTABanner } from '@/components/blocks/CTABanner'

export default function PricingPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-5xl md:text-6xl">
              Simple pricing. More practice.
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Choose what supports you now—drop in, build consistency, or go unlimited. Memberships
              are designed to be flexible so your practice can stay steady through real life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#trial"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              >
                Start a Trial
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
              >
                Compare Plans
              </a>
            </div>
          </div>

          <div id="trial" className="mt-14 rounded-2xl border border-border bg-muted p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8">
                <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
                  New here? Try 7 days of ZenFlow.
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  A low-pressure way to explore hot yoga, meditation, and breathwork—then choose
                  your rhythm. Many members start with 2–3 visits in the first week to find their
                  favorite format.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Note: This project has no built-in checkout. Link to your external booking/payment
                  provider.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-3">
                <a
                  href="https://example.com/trial"
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
                >
                  Get 7-Day Trial
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Memberships & passes"
            subheadline="Transparent options with no surprises."
            tiers={[
              {
                name: 'Drop-In',
                price: '$24',
                period: 'per class',
                features: ['Public classes', 'Great for occasional visits', 'No commitment'],
                ctaLabel: 'Buy Drop-In',
                ctaHref: 'https://example.com/dropin',
              },
              {
                name: 'Flow Member',
                price: '$129',
                period: 'per month',
                highlighted: true,
                features: ['8 classes / month', 'Early booking window', '10% off workshops'],
                ctaLabel: 'Join Flow',
                ctaHref: 'https://example.com/flow',
              },
              {
                name: 'Unlimited',
                price: '$169',
                period: 'per month',
                features: ['Unlimited classes', 'Priority waitlist', 'Monthly guest pass'],
                ctaLabel: 'Go Unlimited',
                ctaHref: 'https://example.com/unlimited',
              },
              {
                name: 'Private Session',
                price: '$120',
                period: 'per 60 min',
                features: ['1:1 coaching', 'Yoga, breathwork, or blend', 'By appointment'],
                ctaLabel: 'Request a Private',
                ctaHref: '/contact#private',
              },
            ]}
          />

          <div className="mt-10 rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                Quick comparison
              </h3>
              <p className="mt-2 text-muted-foreground">
                A simple way to choose: occasional, weekly rhythm, frequent practice, or personal
                goals.
              </p>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Drop-In',
                  rows: [
                    { k: 'Public classes included', v: 'Yes' },
                    { k: 'Booking window', v: 'Standard' },
                    { k: 'Workshops discount', v: '—' },
                    { k: 'Best for', v: 'Occasional' },
                  ],
                },
                {
                  title: 'Flow Member',
                  rows: [
                    { k: 'Public classes included', v: '8 / month' },
                    { k: 'Booking window', v: 'Early' },
                    { k: 'Workshops discount', v: '10% off' },
                    { k: 'Best for', v: 'Weekly rhythm' },
                  ],
                },
                {
                  title: 'Unlimited',
                  rows: [
                    { k: 'Public classes included', v: 'Unlimited' },
                    { k: 'Booking window', v: 'Priority' },
                    { k: 'Workshops discount', v: '15% off' },
                    { k: 'Best for', v: 'Frequent practice' },
                  ],
                },
                {
                  title: 'Private',
                  rows: [
                    { k: 'Public classes included', v: 'No (1:1)' },
                    { k: 'Booking window', v: 'By appointment' },
                    { k: 'Workshops discount', v: '—' },
                    { k: 'Best for', v: 'Personal goals' },
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="rounded-2xl border border-border bg-muted p-5">
                  <div className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-xl">
                    {col.title}
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    {col.rows.map((r) => (
                      <div key={r.k} className="flex items-start justify-between gap-4">
                        <span className="text-muted-foreground">{r.k}</span>
                        <span className="text-foreground font-medium text-right">{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="STUDIO SUPPORT"
            headline="What your membership supports"
            subheadline="A studio that feels calm, clean, and intentional."
            features={[
              {
                title: 'Infrared heat',
                description: 'Even warmth for a comfortable, breathable hot practice.',
              },
              {
                title: 'Thoughtful programming',
                description: 'Balanced strength, mobility, and recovery across the week.',
              },
              {
                title: 'Props + space',
                description: 'We encourage props so your practice meets your body.',
              },
              {
                title: 'Teacher development',
                description: 'Ongoing training for safer cues and better class experiences.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQs"
            subheadline="Helpful details before you commit."
            items={[
              {
                question: 'Can I cancel my membership?',
                answer:
                  'Yes. Memberships are designed to be flexible. When you connect your booking provider, add your exact cancellation window and effective date policy here so expectations stay clear.',
              },
              {
                question: 'Do unused classes roll over?',
                answer:
                  'For the 8-class plan, rollover depends on your booking system rules. Many studios allow a small rollover buffer to support consistency without encouraging overuse.',
              },
              {
                question: 'Are workshops included?',
                answer:
                  'Workshops are separate, with member discounts for Flow and Unlimited. Workshops are longer and more specific—mobility, technique, breathwork intensives, or seasonal resets.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Want help choosing a plan?"
        description="Tell us how often you realistically want to practice and what you’re working on (stress, strength, mobility, sleep). We’ll recommend a plan that matches your season."
        ctaLabel="Ask a Question"
        ctaHref="/contact#form"
      />
    </div>
  )
}

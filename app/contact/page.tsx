import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { CTABanner } from '@/components/blocks/CTABanner'

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-5xl md:text-6xl">
              Visit ZenFlow in Austin
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Questions about heat, breathwork, or where to start? Send a note—our team responds
              within 1–2 business days. If you’re looking for the fastest option, book directly
              through our live schedule.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              >
                Send a Message
              </a>
              <a
                href="https://example.com/book"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
              >
                Book a Class
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Contact the studio"
            subheadline="This is a client-side form (no database). For now, you can use the contact details below or connect a third-party form provider."
            contactInfo={[
              { label: 'Email', value: 'hello@zenflowaustin.com' },
              { label: 'Phone', value: '(512) 555-0198' },
              { label: 'Studio hours', value: 'Daily • mornings + evenings' },
            ]}
          />

          <div className="mt-8 rounded-2xl border border-border bg-card shadow-sm p-6">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
              Mailto fallback (recommended)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you’d like a guaranteed “send” without backend integration, add a mailto fallback
              in your form handling (e.g., open the user’s email client with a pre-filled subject
              like <span className="text-foreground font-medium">“ZenFlow inquiry: Private Session”</span>).
              This project intentionally avoids API routes and databases.
            </p>
            <div className="mt-4">
              <a className="underline text-foreground" href="mailto:hello@zenflowaustin.com">
                hello@zenflowaustin.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="PLAN YOUR VISIT"
            headline="Location & parking"
            subheadline="We’re located in Austin, TX. Add your exact address when ready."
            features={[
              {
                title: 'Address',
                description: 'ZenFlow Yoga Studio • Austin, TX (set exact street address in content).',
              },
              {
                title: 'Parking',
                description:
                  'Street parking and nearby lots. Arrive 10 minutes early for hot classes.',
              },
              {
                title: 'What to bring',
                description:
                  'Mat, towel, water. Props available. Wear breathable layers for heat.',
              },
              {
                title: 'Accessibility',
                description:
                  'Let us know what you need—we’ll do our best to support your visit.',
              },
              {
                title: 'First class tip',
                description:
                  'If you’re nervous about heat, start with Slow Heat + Stretch and take breaks. Consistency beats intensity.',
              },
              {
                title: 'Private sessions',
                description:
                  'Tell us your goals and preferred times. We’ll match you with the right teacher.',
              },
            ]}
          />
        </div>
      </section>

      <section id="private" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-border bg-card shadow-sm p-8">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              Want a private session?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us your goals (mobility, stress, sleep, strength) and preferred times. We’ll
              match you with the right teacher and suggest a format—yoga, breathwork, or a blend.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              >
                Request a Private
              </a>
              <a
                href="/pricing#plans"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-muted px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Get calm notes, not spam"
        description="Monthly schedule highlights, workshop announcements, and simple breath practices. Newsletter signup should use a third-party provider (no database)."
        ctaLabel="Join Newsletter"
        ctaHref="https://example.com/newsletter"
      />
    </div>
  )
}

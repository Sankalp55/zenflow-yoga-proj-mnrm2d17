import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">Contact</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-6xl">
            Visit ZenFlow in Austin
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Questions about classes, heat, or private sessions? Send a note—we’ll help you choose a starting
            point that feels doable. We typically respond within 1–2 business days.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Send a Message
            </a>
            <a
              href="/classes"
              className="inline-flex items-center justify-center rounded-xl border bg-card px-5 py-3 font-semibold hover:shadow-sm transition-shadow"
            >
              View Classes
            </a>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Contact the studio"
            subheadline="Client-side form only. We respond within 1–2 business days."
            contactInfo={[
              { label: 'Studio', value: 'ZenFlow Yoga Studio (Central Austin)' },
              { label: 'Email', value: 'hello@zenflowaustin.com' },
              { label: 'Phone', value: '(512) 555-0198' },
              { label: 'Hours', value: 'Mon–Thu: 6:30a–8:00p • Fri: 7:00a–7:00p • Sat–Sun: 8:00a–2:00p' },
            ]}
          />

          <div className="mt-8 rounded-3xl border bg-card p-7 shadow-sm">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
              What to include in your message
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you want a fast recommendation, tell us: (1) your experience level, (2) your comfort with heat,
              (3) your weekly availability, and (4) any injuries or stress/sleep goals. We’ll suggest a first class
              and a simple 2–3 class rhythm to start.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Logistics"
            headline="Getting here"
            subheadline="Simple logistics so your nervous system stays calm."
            features={[
              {
                title: 'Parking',
                description:
                  'Street parking and nearby lots available; arrive 10 minutes early for hot classes so you can settle in without rushing.',
              },
              {
                title: 'What to bring',
                description:
                  'Water + towel for hot classes. Mats and towels are available for rent, and props are included.',
              },
              {
                title: 'Studio etiquette',
                description:
                  'Phones on silent; enter quietly; rest anytime—child’s pose is always welcome.',
              },
              {
                title: 'Accessibility',
                description:
                  'Let us know what you need—our teachers can offer props and options, and we’ll help you choose the most supportive class.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="Get studio updates (gentle, not spammy)"
            description="Monthly schedule highlights, workshops, and community classes. If you’d like updates, send a message and we’ll add you."
            ctaLabel="Join Newsletter"
            ctaHref="#contact-form"
          />
          <div className="mt-4">
            <a className="text-sm text-muted-foreground underline underline-offset-4" href="#contact-form">
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Contact FAQs"
            subheadline="A few quick notes before you visit."
            items={[
              {
                question: 'Can beginners attend hot yoga?',
                answer:
                  'Yes. Our Hot Flow is all-levels with frequent options and rest cues. If you’re heat-new, arrive early and tell your teacher—we’ll help you pace.',
              },
              {
                question: 'Do you have showers?',
                answer:
                  'We have changing areas; reach out for current amenities and recommendations based on the time you’re visiting.',
              },
              {
                question: 'How do I book a private session?',
                answer:
                  'Send a message with your goals and availability. We’ll match you with a teacher and propose a plan (single session or a short series).',
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

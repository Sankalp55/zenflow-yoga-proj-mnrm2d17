import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">Pricing</p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-6xl">
            Memberships that make consistency easy
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Choose a plan that supports your rhythm—drop-in, packs, or unlimited. No contracts required.
            Upgrade anytime. If you’re unsure, message us and we’ll recommend the best starting point based
            on your schedule, heat comfort, and goals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start First Week Intro
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border bg-card px-5 py-3 font-semibold hover:shadow-sm transition-shadow"
            >
              Questions? Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Simple, grounded options"
            subheadline="No contracts required. Upgrade anytime."
            tiers={[
              {
                name: 'Drop-In',
                price: '$24',
                period: 'per class',
                features: ['Any public class', 'Props included', 'Same-day booking'],
                ctaLabel: 'Choose Drop-In',
                ctaHref: '/contact',
              },
              {
                name: '5-Class Pack',
                price: '$105',
                period: 'pack',
                features: ['Valid 60 days', 'Any public class', 'Shareable with family'],
                ctaLabel: 'Get 5-Pack',
                ctaHref: '/contact',
              },
              {
                name: 'Unlimited',
                price: '$169',
                period: 'per month',
                features: ['Unlimited public classes', 'Priority waitlist', 'Guest pass monthly'],
                ctaLabel: 'Go Unlimited',
                ctaHref: '/contact',
                highlighted: true,
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Need help choosing? Tell us how many days/week you realistically want to practice and we’ll
            recommend the best fit.
          </p>
        </div>
      </section>

      <section id="private-sessions" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="1:1 Support"
            headline="Private sessions (1:1)"
            subheadline="Personalized yoga, breath coaching, or a blended session designed around your goals."
            features={[
              {
                title: 'Private Yoga',
                description:
                  'Form, confidence, and a plan you can repeat at home. 60 min • from $110.',
              },
              {
                title: 'Breath Coaching',
                description:
                  'Nervous system regulation, focus, and recovery protocols. 60 min • from $110.',
              },
              {
                title: 'Yoga + Breath Blend',
                description:
                  'Movement to open + breath to integrate. 75 min • from $140.',
              },
            ]}
          />
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Request a Private Session
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Why members stay"
            subheadline="Consistency feels good when the space is supportive."
            testimonials={[
              {
                quote:
                  'Unlimited made me consistent for the first time in years. The studio feels calm, not performative.',
                name: 'Nora B.',
                role: 'Unlimited member',
              },
              {
                quote:
                  'The 5-pack is perfect. I can practice weekly without feeling like I’m wasting a membership.',
                name: 'Andre W.',
                role: 'Class pack',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQs"
            subheadline="Clear answers, no fine print vibes."
            items={[
              {
                question: 'Do you offer a first-time intro?',
                answer:
                  'Yes—ask about our First Week Intro when you contact us. We’ll match you to classes that fit your goals and heat comfort, and help you plan your first few visits.',
              },
              {
                question: 'Are memberships contract-free?',
                answer:
                  'Yes. You can change or pause with notice—reach out and we’ll help you choose the simplest option for your schedule.',
              },
              {
                question: 'Can I use packs for any class?',
                answer:
                  'Packs apply to public classes. Private sessions are booked separately so they can be tailored to your goals and needs.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="Ready to begin?"
            description="Tell us your goals and we’ll recommend the best starting point—your first class, a sustainable weekly rhythm, or a private session plan."
            ctaLabel="Get a Recommendation"
            ctaHref="/contact"
          />
          <div className="mt-4">
            <a className="text-sm text-muted-foreground underline underline-offset-4" href="/classes">
              Browse Classes
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

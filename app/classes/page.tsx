import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'

export default function ClassesPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-5xl md:text-6xl">
                Find your practice—by mood, not perfection.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
                Hot yoga for strength and clarity. Meditation for steadiness. Breathwork for a reset.
                Private sessions for personal goals. Our classes are designed to be practical and
                supportive: clear structure, calm room energy, and options that help you stay
                consistent.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
                >
                  Book a Class
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
                >
                  See Memberships
                </a>
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-muted p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tip for first-timers: for hot classes, arrive 10 minutes early, bring water and a
                  towel, and plan to take breaks. We’d rather you rest and return next week than
                  push through and disappear for a month.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
                <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                  What you’ll notice
                </h2>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>
                    <span className="text-foreground font-medium">Clear pacing:</span> you’ll know
                    what’s coming and why.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Options always:</span> teachers cue
                    levels without spotlighting anyone.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">Breath-led coaching:</span> effort
                    and recovery are both part of class.
                  </li>
                  <li>
                    <span className="text-foreground font-medium">A calm room:</span> doors close at
                    start time to protect stillness.
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-muted px-4 py-2 text-sm font-medium hover:shadow-sm transition-shadow"
                    href="https://example.com/book"
                  >
                    Open booking (live availability)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="CLASS TYPES"
            headline="Choose a format that matches your day"
            subheadline="Each format includes breath cues and modifications. You’ll be guided, not pushed."
            features={[
              {
                title: 'Hot Flow',
                description: 'Strength + mobility in infrared heat. A moving meditation.',
              },
              {
                title: 'Slow Heat + Stretch',
                description: 'Longer holds for hips, hamstrings, and shoulders.',
              },
              {
                title: 'Meditation Studio',
                description: 'Guided sit + quiet time + simple take-home practice.',
              },
              {
                title: 'Breathwork Reset',
                description: 'Structured breath patterns with integration and grounding.',
              },
              {
                title: 'Private Sessions',
                description: '1:1 yoga/breathwork tailored to your body and goals.',
              },
              {
                title: 'Workshops (seasonal)',
                description:
                  'Longer sessions for technique, mobility, and nervous-system tools. Announced monthly.',
              },
            ]}
          />
        </div>
      </section>

      <section id="schedule" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              Sample weekly schedule
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This is a preview. Final times may vary—use your booking link for live availability.
              We aim for a steady rhythm: energize in the morning, soften later in the day, and keep
              stillness on the calendar.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: 'Mon–Wed',
                  description:
                    'Hot Flow (AM) • Meditation Studio (Lunch) • Slow Heat (PM). A balanced cadence that makes consistency easier: build strength, then downshift.',
                },
                {
                  title: 'Thu',
                  description:
                    'Breathwork Reset (PM) • Slow Heat + Stretch (Late PM). Thursday is our nervous-system night—practice, then integrate.',
                },
                {
                  title: 'Fri',
                  description:
                    'Hot Flow (AM) • Candlelit Meditation (PM). A clean finish to the week, with a quieter landing before the weekend.',
                },
                {
                  title: 'Sat',
                  description:
                    'Hot Flow (AM) • Mobility + Stretch (Late AM). Community favorite: move, sweat, then open the joints.',
                },
                {
                  title: 'Sun',
                  description:
                    'Restorative Slow Heat • Breathwork + Journaling. Sunday is for reset—less effort, more recovery.',
                },
              ]}
            />
          </div>

          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              href="https://example.com/book"
            >
              Open Booking
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              What to expect
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A calm environment with clear structure—so you can relax into the work. If you’re
              unsure where to start, choose Slow Heat + Stretch or Meditation Studio and tell your
              teacher it’s your first visit.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Arrive 10 minutes early',
                description:
                  'Settle in, hydrate, and choose props. Doors close at start time to keep the room quiet.',
              },
              {
                title: 'Heat with intention',
                description:
                  'Our hot classes use infrared warmth. You’ll get options to scale intensity at any time.',
              },
              {
                title: 'Props are encouraged',
                description:
                  'Blocks, straps, bolsters, and blankets help you access shape without strain.',
              },
              {
                title: 'Leave with a practice',
                description:
                  'We offer simple breath or reflection prompts you can use at home between classes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion
            headline="Quick FAQs"
            subheadline="If you’re new, start here."
            items={[
              {
                question: 'Do I need yoga experience?',
                answer:
                  'No. We cue options and encourage rest whenever needed. Beginners are welcome in all classes, and our teachers will help you find a pace that feels supportive.',
              },
              {
                question: 'What should I bring?',
                answer:
                  'A mat, towel for hot classes, and water. If you forget something, rentals can be offered depending on current studio setup.',
              },
              {
                question: 'Is the heat safe?',
                answer:
                  'Most people adapt quickly. If you’re pregnant or have medical concerns, consult a clinician and let your teacher know. You can always step out or rest—listening to your body is part of the practice.',
              },
              {
                question: 'Can I do breathwork if I feel anxious?',
                answer:
                  'Yes—tell the facilitator. We offer grounding options and you can pause at any time. Breathwork is always invitational, never forced.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Not sure which class to book first?"
        description="Send us a quick note with your goals (stress, sleep, mobility, strength) and we’ll recommend a great first class."
        ctaLabel="Contact ZenFlow"
        ctaHref="/contact#form"
      />
    </div>
  )
}

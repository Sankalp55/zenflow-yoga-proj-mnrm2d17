import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function ClassesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Classes</p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              Classes designed for strength, softness, and steady breath
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Hot yoga, meditation, and breathwork—each taught with clear options and a calm pace. If you’re
              new to heat, we’ll help you find a sustainable effort level so you leave energized, not wiped.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Class
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border bg-card px-5 py-3 font-semibold hover:shadow-sm transition-shadow"
              >
                View Memberships
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-muted p-8">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                A simple promise
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We’ll cue rest, offer modifications, and keep the room temperature consistent. Your job is to
                show up, breathe, and practice listening.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="rounded-xl border bg-background px-4 py-3">Arrive 10 min early</li>
                <li className="rounded-xl border bg-background px-4 py-3">Hydrate + pace</li>
                <li className="rounded-xl border bg-background px-4 py-3">Towel helps in heat</li>
                <li className="rounded-xl border bg-background px-4 py-3">Options always offered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
              Pick your practice
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A quick menu to match what your body needs today—strength, recovery, regulation, or deep rest.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid>
              <BentoGridItem
                title="Hot Flow"
                description="Vinyasa-based, strength-forward, options for all levels. 60 min • 95–100°F • Core + balance emphasis."
              />
              <BentoGridItem
                title="Hot Slow + Deep Stretch"
                description="Long holds and mindful transitions in gentle heat. 75 min • 90–95°F • Hips/hamstrings/shoulders."
              />
              <BentoGridItem
                title="Breathwork Lab"
                description="Guided breath with integration—no hype, just regulation. 45 min • Room temp • Beginner-friendly."
              />
              <BentoGridItem
                title="Meditation + Sound"
                description="Breath-led meditation with bowls and calming sound. 45 min • Low light • Great for sleep support."
              />
              <BentoGridItem
                title="Private Sessions"
                description="1:1 yoga, breath coaching, or a blended session. 60 min • Customized plan • Great for injuries + goals."
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TracingBeam>
            <div className="max-w-3xl">
              <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
                Weekly schedule snapshot
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A simple, consistent cadence—so your practice becomes automatic. For the most up-to-date
                schedule and availability, message us and we’ll help you find the best first class.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Mon–Thu',
                  description: 'Morning Hot Flow + evening Hot Slow rotation.',
                  meta: ['Morning: 6:30a / 8:00a', 'Evening: 5:30p / 7:00p'],
                },
                {
                  title: 'Friday',
                  description: 'Breathwork Lab + gentle heat stretch to close the week.',
                  meta: ['Evening: 6:00p'],
                },
                {
                  title: 'Weekend',
                  description: 'Meditation + Sound plus longer Hot Flow blocks.',
                  meta: ['Sat: 9:00a / 11:00a', 'Sun: 10:00a'],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border bg-card/80 backdrop-blur shadow-sm p-7 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{card.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {card.meta.map((m) => (
                      <li key={m} className="rounded-xl border bg-background px-4 py-2">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Ask About Today’s Classes
              </a>
            </div>
          </TracingBeam>
        </div>
      </section>

      <section id="what-to-expect" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
              What to expect (especially if it’s your first hot class)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We keep it welcoming, clear, and grounded—no performance required. Heat can feel intense at
              first; your first win is learning how to pace and breathe.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Arrive 10 minutes early',
                description:
                  'We’ll get you set up, answer questions, and help you choose a spot that feels comfortable.',
              },
              {
                title: 'Hydrate + pace yourself',
                description:
                  'Heat is a tool—rest is part of the practice. Child’s pose is always welcome, anytime.',
              },
              {
                title: 'Bring a towel (or rent one)',
                description:
                  'For hot classes, you’ll want grip. A mat towel helps a lot, especially as you build heat tolerance.',
              },
              {
                title: 'Modifications are built-in',
                description:
                  'We cue options throughout so you can find your edge without strain—and keep showing up consistently.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border bg-card p-7 shadow-sm">
                <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Class FAQs"
            subheadline="Quick answers so you can show up with confidence."
            items={[
              {
                question: 'Do I need to be flexible to start?',
                answer:
                  'No. Flexibility is a result, not a requirement. We offer options and props-friendly cues so you can build range of motion over time.',
              },
              {
                question: 'How hot is “hot”?',
                answer:
                  'Most hot classes are 95–100°F. We keep airflow steady and encourage breaks. Your first goal is steady breathing, not pushing intensity.',
              },
              {
                question: 'What should I bring?',
                answer:
                  'Water, a mat, and a towel for hot classes. We have rentals and props in-studio, and we’ll help you get set up if it’s your first visit.',
              },
              {
                question: 'Is breathwork intense?',
                answer:
                  'We keep it regulated and supportive, with clear consent-based guidance and integration time so you leave grounded—not spun up.',
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

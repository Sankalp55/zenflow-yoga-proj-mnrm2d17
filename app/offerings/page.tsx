import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { CTABanner } from '@/components/blocks/CTABanner'

export default function OfferingsPage() {
  return (
    <div>
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-5xl md:text-6xl">
                Offerings for body, breath, and mind
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
                Choose a public class or go deeper with private sessions. Our offerings are designed
                to be practical, calming, and sustainable—so you can build a rhythm you actually
                keep.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/classes"
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
                >
                  Explore Classes
                </a>
                <a
                  href="/contact#private"
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:shadow-sm transition-shadow"
                >
                  Book a Private
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-muted p-6">
                <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                  A simple way to choose
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  If you want strength and clarity, start with Hot Flow. If you want recovery, start
                  with Slow Heat + Stretch. If you want steadiness, choose Meditation Studio. If you
                  want a reset, choose Breathwork Reset. If you want a plan, book a Private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hot-yoga" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="HOT YOGA"
            headline="Warmth that supports movement—without pressure"
            subheadline="Our hot classes use infrared warmth and steady pacing. You’ll be coached to work with your breath, take breaks when needed, and leave feeling clear—not crushed."
            features={[
              { title: 'Infrared warmth', description: 'Even heat for comfort and breathability.' },
              { title: 'Strength + mobility', description: 'Balanced sequences for stability and range.' },
              { title: 'Options built-in', description: 'Multiple levels are cued; rest is encouraged.' },
              { title: 'Consistency over intensity', description: 'The goal is a practice you can keep.' },
              { title: 'Joint-friendly progressions', description: 'Smart sequencing that respects real bodies.' },
              { title: 'Breath-forward pacing', description: 'Use breath to regulate effort and recovery.' },
            ]}
          />
        </div>
      </section>

      <section id="meditation" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="MEDITATION"
            headline="Simple formats to return to center"
            subheadline="Meditation Studio is designed for real life: clear guidance, a little quiet time, and a practical takeaway you can use at home—even on busy weeks."
            features={[
              { title: 'Guided sits', description: 'Clear prompts, gentle pacing, and grounded themes.' },
              { title: 'Silent time', description: 'Space to practice without pressure or performance.' },
              { title: 'Journaling prompts', description: 'Integrate insights into daily life.' },
              { title: 'Beginner-friendly', description: 'No special gear or experience needed.' },
              { title: 'Breath + attention training', description: 'Learn to steady focus with approachable techniques.' },
              { title: 'Calm closing', description: 'A quiet landing so you can return to your day with clarity.' },
            ]}
          />
        </div>
      </section>

      <section id="breathwork" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              Breathwork, structured and grounded
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Breathwork Reset is a guided practice for stress, energy, and focus—always with
              grounding and integration. You’ll get options to pause, soften, or shift technique at
              any time.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Arrive + settle', desc: 'Orientation, intention, and safety notes.', meta: '5–10 min' },
              { title: 'Guided breath practice', desc: 'A paced sequence with options to pause.', meta: '20–30 min' },
              { title: 'Integration', desc: 'Stillness, journaling, and gentle closing.', meta: '10–15 min' },
              { title: 'Take-home tool', desc: 'A short breath pattern for daily use.', meta: '2–5 min/day' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="text-sm text-muted-foreground">{s.meta}</div>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="privates" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="PRIVATE SESSIONS"
            headline="A plan built around your body and goals"
            subheadline="Personalized yoga, breathwork, or a blend—clear coaching, supportive pacing, and practical steps between sessions."
            features={[
              { title: 'Goal-based plan', description: 'Mobility, stress relief, sleep, strength, or recovery.' },
              { title: 'Technique + support', description: 'Clear coaching with props and modifications.' },
              { title: 'Flexible formats', description: 'Yoga-only, breathwork-only, or combined sessions.' },
              { title: 'Progress you can feel', description: 'Simple check-ins and between-session practices.' },
            ]}
          />

          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              href="/contact#private"
            >
              Request a Private
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to pick your first class?"
        description="If you tell us your goal (stress, sleep, mobility, strength), we’ll recommend a class format and a time that fits your week."
        ctaLabel="Contact ZenFlow"
        ctaHref="/contact#form"
      />
    </div>
  )
}

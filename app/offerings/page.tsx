import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function OfferingsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Offerings</p>
            <h1 className="mt-3 font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-6xl">
              Choose your path: heat, breath, stillness, or 1:1 support
            </h1>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Four ways to practice—each designed to meet you with clarity and care. Whether you want a
              strong sweat, a nervous-system reset, or a personalized plan, we’ll help you start in a way
              that feels sustainable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border bg-card px-5 py-3 font-semibold hover:shadow-sm transition-shadow"
              >
                Talk to Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-muted p-8">
            <div className="rounded-3xl border bg-card p-8 shadow-sm">
              <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                A calm studio, a clear method
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We keep the vibe grounded and the teaching precise. You’ll hear alignment cues, breath prompts,
                and permission to rest—so you can build consistency without burning out.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If you’re not sure what to choose, tell us your goals (mobility, strength, sleep, stress, injury
                confidence) and we’ll match you to a first class.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="What we offer"
            headline="Each modality supports a different kind of strength"
            subheadline="Choose what you need today—then repeat it until it becomes your baseline."
            features={[
              {
                title: 'Hot Yoga',
                description:
                  'Heated vinyasa and slow stretch classes that build strength, mobility, and focus—without forcing.',
              },
              {
                title: 'Meditation',
                description:
                  'Guided sessions that teach repeatable skills: attention, compassion, and returning to breath.',
              },
              {
                title: 'Breathwork',
                description:
                  'Regulation-focused breath practices with integration so you leave grounded, not spun up.',
              },
              {
                title: 'Private Sessions',
                description:
                  'Personalized plans for injuries, anxiety, performance goals, or rebuilding consistency.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
              Who ZenFlow is for
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you want a steady practice that fits your life, you’re in the right place.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid>
              <BentoGridItem
                title="Busy minds"
                description="Short practices that translate into calmer days—attention you can return to on demand."
              />
              <BentoGridItem
                title="Tight bodies"
                description="Mobility-forward sequencing and prop-friendly options that respect your joints."
              />
              <BentoGridItem
                title="Heat-curious beginners"
                description="Clear cues, pacing, and permission to rest—so heat becomes supportive, not scary."
              />
              <BentoGridItem
                title="Athletes + runners"
                description="Recovery, breath efficiency, and resilient joints to support training volume."
              />
              <BentoGridItem
                title="Stress + burnout recovery"
                description="Breath and stillness to downshift the system and rebuild steady energy."
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
              Tiny wins, repeated
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A steady stream of what students notice first—mobility, calmer focus, better sleep, and confidence in heat.
            </p>
          </div>

          <div className="mt-10">
            <InfiniteMovingCards
              direction="left"
              speed="slow"
              items={[
                { quote: 'My shoulders finally relaxed.', name: 'Studio member', title: 'Hot Slow' },
                { quote: 'I can breathe through stress now.', name: 'Studio member', title: 'Breathwork' },
                { quote: 'I sleep deeper after meditation.', name: 'Studio member', title: 'Meditation + Sound' },
                { quote: 'Heat helped my hips open safely.', name: 'Studio member', title: 'Hot Flow' },
                { quote: 'Private sessions made everything click.', name: 'Studio member', title: '1:1' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="Not sure where to start?"
            description="Tell us your goals and we’ll recommend a first class (or a private session) that fits your schedule and your body."
            ctaLabel="Get Matched"
            ctaHref="/contact"
          />
          <div className="mt-4">
            <a className="text-sm text-muted-foreground underline underline-offset-4" href="/classes">
              See Schedule
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

import { HeroGradientBlob } from '@/components/blocks/HeroGradientBlob'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroGradientBlob
        badge="Austin • Hot Yoga • Breathwork • Meditation"
        headline="Find your steady—hot yoga, breathwork, and meditation in Austin."
        subheadline="ZenFlow is a warm, plant-filled studio for strong bodies and calm minds. Drop in for heat, stay for breath, leave lighter."
        primaryCta={{ label: 'View Class Schedule', href: '/classes' }}
        secondaryCta={{ label: 'Try Your First Week', href: '/pricing' }}
      />

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl border bg-card/80 backdrop-blur shadow-sm p-8">
              <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
                Your practice, simplified
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                ZenFlow is designed for consistency. We keep the room warm (not punishing), the cues clear,
                and the pace grounded—so you can build strength, mobility, and focus without the “performative”
                vibe. If you’re new to heat, we’ll help you pace, rest, and modify from day one.
              </p>
              <div className="mt-8">
                <StatsCounter
                  stats={[
                    { label: 'Hot Yoga', value: 95, suffix: '–100°F' },
                    { label: 'Meditation', value: 7, suffix: ' days/wk' },
                    { label: 'Breathwork', value: 1, suffix: '+ /wk' },
                    { label: 'Private Sessions', value: 1, suffix: ':1' },
                  ]}
                />
              </div>
            </div>

            <div className="rounded-3xl border bg-muted p-8">
              <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl md:text-3xl">
                A weekly rhythm that meets you where you are
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Choose heat for strength, stillness for clarity, or breath to reset your nervous system.
                Our schedule is intentionally repetitive—so your practice becomes automatic.
              </p>

              <div className="mt-8">
                <StickyScrollReveal
                  content={[
                    {
                      title: 'Hot Flow (All Levels)',
                      description:
                        'Dynamic vinyasa in a heated room—build strength, balance, and stamina with options offered throughout. (60 min • Medium • Energy + mobility)',
                    },
                    {
                      title: 'Hot Slow + Deep Stretch',
                      description:
                        'Longer holds, mindful transitions, and deep opening in gentle heat to unwind tight hips and shoulders. (75 min • Low • Recovery + flexibility)',
                    },
                    {
                      title: 'Breathwork Lab',
                      description:
                        'Guided pranayama and modern breath techniques with integration—calm focus without forcing. (45 min • Low • Stress reset)',
                    },
                    {
                      title: 'Meditation + Sound',
                      description:
                        'Breath-led meditation with bowls and subtle soundscapes—practice returning to center. (45 min • Very low • Clarity + sleep)',
                    },
                  ]}
                />
              </div>

              <div className="mt-8">
                <a
                  href="/classes"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  See Full Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="Teachers who cue with care"
            subheadline="Trauma-informed, alignment-focused, and obsessed with helping you feel safe in your body."
            members={[
              {
                name: 'Maya Rivera',
                role: 'Hot Yoga + Mobility',
                bio: 'Athletic flow with precise alignment and joint-friendly options. E-RYT 500 • CPR/AED.',
              },
              {
                name: 'Jordan Lee',
                role: 'Breathwork Facilitator',
                bio: 'Science-meets-spirit breath sessions designed for regulation and resilience. Breathwork Certified • Trauma-informed training.',
              },
              {
                name: 'Asha Patel',
                role: 'Meditation + Sound',
                bio: 'Quiet, grounded guidance with gentle sound to support deep rest. Meditation Teacher • Nidra Training.',
              },
              {
                name: 'Sam Nguyen',
                role: 'Private Sessions',
                bio: '1:1 support for pain-aware movement, stress relief, and sustainable practice. RYT 500 • Functional movement coursework.',
              },
            ]}
          />

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border bg-card px-5 py-3 font-semibold hover:shadow-sm transition-shadow"
            >
              Meet the Studio
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-3xl md:text-4xl">
              Small rituals, big shifts
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Real members sharing what changed when they committed to a steady practice—more mobility,
              calmer focus, better sleep, and confidence in the heat.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/zenflow-ritual-1.jpg',
                '/images/zenflow-ritual-2.jpg',
                '/images/zenflow-ritual-3.jpg',
                '/images/zenflow-ritual-4.jpg',
                '/images/zenflow-ritual-5.jpg',
                '/images/zenflow-ritual-6.jpg',
              ]}
            />
          </div>

          <div className="mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Memberships
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="What Austin is saying"
            subheadline="A calm studio with real heat, real guidance, and real community."
            testimonials={[
              {
                quote:
                  'The heat is perfect, the cues are clear, and I never feel judged. I leave feeling strong and quiet inside.',
                name: 'Elena M.',
                role: 'Member · 6 months',
              },
              {
                quote:
                  'Breathwork Lab changed my week. I’m calmer at work and I sleep better on the nights I come in.',
                name: 'Chris T.',
                role: 'Drop-in',
              },
              {
                quote:
                  'Private sessions helped me rebuild confidence after an injury. Thoughtful, safe, and surprisingly empowering.',
                name: 'Rina S.',
                role: 'Private client',
              },
              {
                quote:
                  'Meditation + Sound is my favorite class in Austin. It’s like a reset for my whole nervous system.',
                name: 'Devon K.',
                role: 'Member · 1 year',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="Start with one class. Build a practice."
            description="Choose a drop-in, a class pack, or a first-week intro—whatever makes starting easy. Tell us what you’re working with and we’ll recommend a first class that fits."
            ctaLabel="See Pricing"
            ctaHref="/pricing"
          />
          <div className="mt-4">
            <a className="text-sm text-muted-foreground underline underline-offset-4" href="/contact">
              Prefer to talk first? Contact the Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

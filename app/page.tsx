import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTABanner } from '@/components/blocks/CTABanner'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function HomePage() {
  return (
    <div>
      <HeroSpotlight
        headline="Breathe. Warmth. Stillness."
        subheadline="ZenFlow is an earthy, light-filled studio in Austin, TX offering hot yoga, meditation, breathwork, and private sessions—designed to help you feel grounded in your body and calm in your mind."
        primaryCta={{ label: 'View Class Schedule', href: '/classes' }}
        secondaryCta={{ label: 'Start with a Trial', href: '/pricing#trial' }}
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
                Your practice, organized by intention
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Some days you want heat and momentum. Some days you want softness, longer holds, and
                a slower nervous system. ZenFlow is built around that reality—clear class formats,
                supportive cues, and options that help you stay consistent without burning out.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Hot Yoga', detail: 'Infrared warmth, steady pacing' },
                  { label: 'Meditation', detail: 'Guided + silent sits' },
                  { label: 'Breathwork', detail: 'Nervous-system reset' },
                  { label: 'Privates', detail: '1:1 sessions tailored to you' },
                ].map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-border bg-card shadow-sm p-4"
                  >
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      {h.label}
                    </div>
                    <div className="mt-1 font-medium">{h.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <TracingBeam>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Hot Flow',
                      description:
                        'Heat + vinyasa to build strength and clarity. Expect steady sequences and grounded transitions.',
                      meta: '45–60 min • All levels',
                    },
                    {
                      title: 'Slow Heat + Deep Stretch',
                      description:
                        'Long holds, mobility, and breath-led pacing in gentle warmth—ideal for recovery and flexibility.',
                      meta: '60 min • Beginner-friendly',
                    },
                    {
                      title: 'Meditation Studio',
                      description:
                        'Guided meditation with journaling prompts and a quiet closing. Come as you are—no experience needed.',
                      meta: '30–45 min • Low intensity',
                    },
                    {
                      title: 'Breathwork Reset',
                      description:
                        'A structured breath practice to downshift stress and increase focus. Includes integration time.',
                      meta: '45 min • Moderate intensity',
                    },
                    {
                      title: 'Private Sessions',
                      description:
                        '1:1 yoga, breathwork, or a blend—built around your goals, schedule, and body.',
                      meta: '60–90 min • By appointment',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-card shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-2xl">
                          {item.title}
                        </h3>
                        <div className="text-sm text-muted-foreground">{item.meta}</div>
                      </div>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="mt-4">
                        <a
                          className="inline-flex items-center justify-center rounded-xl border border-border bg-muted px-4 py-2 text-sm font-medium hover:shadow-sm transition-shadow"
                          href="/classes#schedule"
                        >
                          See Full Schedule
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </TracingBeam>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="THE ZENFLOW DIFFERENCE"
            headline="A calm studio with strong structure"
            subheadline="We keep things simple: clear class formats, consistent pacing, and teachers who offer options without making it a big deal."
            features={[
              {
                title: 'Infrared warmth (not chaos)',
                description:
                  'Even, breathable heat that supports mobility and focus—without feeling like a performance.',
              },
              {
                title: 'Breath cues you can use anywhere',
                description:
                  'We teach breath as a tool for effort and recovery, so the practice follows you off the mat.',
              },
              {
                title: 'Props are part of the plan',
                description:
                  'Blocks, straps, bolsters, and blankets help you find shape without strain—especially in heat.',
              },
              {
                title: 'Beginner-welcoming, not beginner-only',
                description:
                  'New students get clear foundations; regulars get smart progressions. Everyone gets options.',
              },
              {
                title: 'Recovery built into the week',
                description:
                  'Slow heat, stretch, and meditation formats make consistency realistic—not just intense.',
              },
              {
                title: 'Private sessions for real goals',
                description:
                  'Mobility, stress, sleep, strength, or recovery—1:1 sessions tailored to your body and schedule.',
              },
            ]}
          />
        </div>
      </section>

      <section id="trainers" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="Teachers who teach to the room"
            subheadline="Supportive, trauma-informed cues. Strong foundations. Space for your own experience. All teachers offer modifications and welcome beginners."
            members={[
              {
                name: 'Maya Rivera',
                role: 'Hot Yoga + Mobility',
                bio: 'Athletic sequencing with joint-friendly options. You’ll leave feeling steady and open.',
              },
              {
                name: 'Jordan Lee',
                role: 'Breathwork Facilitator',
                bio: 'Breath patterns for stress relief, energy, and focus—always with grounded integration.',
              },
              {
                name: 'Priya Nair',
                role: 'Meditation Guide',
                bio: 'Simple practices that fit real life. Practical, calm, and deeply kind.',
              },
              {
                name: 'Sam Bennett',
                role: 'Private Sessions',
                bio: 'Personalized sessions blending movement, breath, and recovery work for your goals.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Memberships that feel simple"
            subheadline="Pick a plan for your season—drop in, build a weekly rhythm, or go unlimited."
            tiers={[
              {
                name: 'Drop-In',
                price: '$24',
                period: 'per class',
                features: ['Any public class', 'Mat rental available', 'No commitment'],
                ctaLabel: 'Choose Drop-In',
                ctaHref: '/pricing#drop-in',
              },
              {
                name: 'Flow Member',
                price: '$129',
                period: 'per month',
                highlighted: true,
                features: ['8 classes / month', 'Member booking window', '10% off workshops'],
                ctaLabel: 'Join Flow Member',
                ctaHref: '/pricing#flow',
              },
              {
                name: 'Unlimited',
                price: '$169',
                period: 'per month',
                features: ['Unlimited classes', 'Priority waitlist', 'Guest pass monthly'],
                ctaLabel: 'Go Unlimited',
                ctaHref: '/pricing#unlimited',
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Note: This site does not include checkout. Plan buttons can link to your external
            booking/payment provider until you integrate payments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] uppercase tracking-tight text-4xl md:text-5xl">
              Small changes, felt daily
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Energy, sleep, posture, and calm—these are the shifts our community notices first.
              Practice doesn’t have to be dramatic to be transformative. It just has to be steady.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/interior.png',
                '/images/class-1.png',
                '/images/class-2.png',
                '/images/class-3.png',
                '/images/instructor-1.png',
                '/images/instructor-2.png',
              ]}
            />
          </div>

          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              href="/classes"
            >
              Explore Classes
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="What members say after a month"
            subheadline="Real notes from real people—no hype, just honest shifts."
            testimonials={[
              {
                quote:
                  'The heat is intense in the best way—my body feels more open and my mind is quieter.',
                name: 'Alyssa P.',
                role: 'Flow Member',
                company: 'ZenFlow',
              },
              {
                quote:
                  'Breathwork Reset helped me sleep through the night for the first time in weeks.',
                name: 'Daniel K.',
                role: 'Breathwork attendee',
                company: 'ZenFlow',
              },
              {
                quote:
                  'The teachers offer options without making it a big deal. I finally feel like yoga is for me.',
                name: 'Morgan S.',
                role: 'Beginner',
                company: 'ZenFlow',
              },
              {
                quote:
                  'Meditation Studio is the anchor of my week. I leave feeling like I can handle my life again.',
                name: 'Priya R.',
                role: 'Meditation regular',
                company: 'ZenFlow',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Ready to feel better this week?"
        description="Book a class, start with a 7-day trial, or reach out with questions. We’ll help you pick a first class that matches your energy."
        ctaLabel="Book Now"
        ctaHref="https://example.com/book"
      />
    </div>
  )
}

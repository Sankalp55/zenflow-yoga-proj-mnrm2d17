import type { ReactNode } from 'react'
import { FeaturesSection } from '@/components/blocks/FeaturesSection'
import { HeroSimple } from '@/components/blocks/HeroSimple'
import { Section } from '@/components/blocks/Section'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'

export default function AboutPage() {
  return (
    <main>
      <HeroSimple
        headline="About"
        subheadline="A steady, supportive practice—built for real life."
      />

      <Section>
        <FeaturesSection
          headline="How we teach"
          subheadline="We teach in a way that supports consistency: clear options, smart pacing, and breath-led focus."
          features={[
            {
              icon: '🔥' as unknown as ReactNode,
              title: 'Heat with intention',
              description:
                'We use warmth to support mobility and focus—not to push past your limits. Rest is part of the practice, not a failure.',
            },
            {
              icon: '🧘' as unknown as ReactNode,
              title: 'Options always',
              description:
                'Every sequence includes accessible variations so you can meet your body where it is today.',
            },
            {
              icon: '⏱️' as unknown as ReactNode,
              title: 'Smart pacing',
              description:
                'We balance effort and recovery so you leave feeling clear, not depleted.',
            },
          ]}
        />
      </Section>

      <Section>
        <TestimonialsAnimated />
      </Section>
    </main>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Anton, Montserrat } from 'next/font/google'
import { NavbarMinimal } from '@/components/blocks/NavbarMinimal'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
})

const headingFont = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'ZenFlow Yoga Studio — Hot Yoga, Meditation & Breathwork in Austin, TX',
  description:
    'ZenFlow Yoga Studio in Austin offers hot yoga, meditation, breathwork, and private sessions. A peaceful, natural studio with earthy tones and supportive teaching.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} ${headingFont.variable} bg-background text-foreground antialiased`}
      >
        <NavbarMinimal
          logo="ZenFlow"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Offerings', href: '/offerings' },
            { label: 'Classes', href: '/classes' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="ZenFlow Yoga Studio"
          description="ZenFlow is a warm, plant-filled studio in Central Austin offering hot yoga, breathwork, and meditation. Come for strength and mobility, stay for steadier breath and a calmer nervous system."
          columns={[
            {
              title: 'Explore',
              links: [
                { label: 'Offerings', href: '/offerings' },
                { label: 'Classes', href: '/classes' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
              ],
            },
            {
              title: 'Get Started',
              links: [
                { label: 'Book / Ask a Question', href: '/contact' },
                { label: 'First Week Intro', href: '/pricing' },
                { label: 'Private Sessions', href: '/pricing#private-sessions' },
              ],
            },
            {
              title: 'Studio',
              links: [
                { label: 'Hours + Location', href: '/contact' },
                { label: 'What to Bring', href: '/classes#what-to-expect' },
                { label: 'Class FAQs', href: '/classes#faq' },
              ],
            },
          ]}
          copyright="© 2026 ZenFlow Yoga Studio. All rights reserved."
        />
      </body>
    </html>
  )
}

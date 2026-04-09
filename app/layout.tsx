import './globals.css'
import type { Metadata } from 'next'
import { Anton, Montserrat } from 'next/font/google'
import { NavbarFloating } from '@/components/blocks/NavbarFloating'
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
    'ZenFlow Yoga Studio in Austin, TX offers hot yoga, meditation, breathwork, and private sessions. Earthy, peaceful studio vibes with supportive teachers and simple memberships.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'ZenFlow Yoga Studio — Hot Yoga, Meditation & Breathwork in Austin, TX',
    description:
      'Hot yoga, meditation, breathwork, and private sessions—rooted in Austin. Supportive teachers, calm studio, simple memberships.',
    url: 'https://example.com',
    siteName: 'ZenFlow Yoga Studio',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} ${bodyFont.variable} ${headingFont.variable} bg-background text-foreground`}
      >
        <NavbarFloating
          logo="ZenFlow Yoga Studio"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Offerings', href: '/offerings' },
            { label: 'Classes', href: '/classes' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book"
          ctaHref="https://example.com/book"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="ZenFlow Yoga Studio"
          description="Hot yoga, breathwork, and meditation—rooted in Austin. Come for the heat, stay for the steadiness: supportive teachers, thoughtful programming, and a studio that feels calm the moment you walk in."
          columns={[
            {
              title: 'Offerings',
              links: [
                { label: 'Hot Yoga', href: '/offerings#hot-yoga' },
                { label: 'Meditation', href: '/offerings#meditation' },
                { label: 'Breathwork', href: '/offerings#breathwork' },
                { label: 'Private Sessions', href: '/offerings#privates' },
              ],
            },
            {
              title: 'Plan your visit',
              links: [
                { label: 'Classes & Schedule', href: '/classes#schedule' },
                { label: 'Pricing', href: '/pricing#plans' },
                { label: 'Start a Trial', href: '/pricing#trial' },
                { label: 'Contact', href: '/contact#form' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About ZenFlow', href: '/about' },
                { label: 'Meet the Teachers', href: '/#trainers' },
                { label: 'Location & Parking', href: '/contact#location' },
              ],
            },
          ]}
          copyright="© 2026 ZenFlow Yoga Studio. All rights reserved."
        />
      </body>
    </html>
  )
}

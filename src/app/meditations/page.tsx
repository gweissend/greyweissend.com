import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function MusicSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve recently been trying out the handpan',
}

export default function Music() {
  return (
    <SimpleLayout
      title="Calm the body, heal the mind"
      intro="As I've explored different approaches to meditation and healing, I've discovered the resonance of music as a powerful force. These are some of my explorations."
    >
      <div className="space-y-20">
        <MusicSection title="YouTube">
          <Appearance
            href="https://youtu.be/cR4d61xWCqk?feature=shared"
            title="Spirals"
            description="A fun jam session in the jungles of Hawaii"
            event="Maui, Hawaii"
            cta="Watch video"
          />
          <Appearance
            href="https://youtu.be/OGSrq-OUgGE?feature=shared"
            title="Softening with Support"
            description="A fun jam session in the jungles of Hawaii"
            event="Maui, Hawaii"
            cta="Watch video"
          />
        </MusicSection>
        {/* <MusicSection title="Spotify">
          <Appearance
            href="#"
            title="Coming Soon"
            description=""
            event=""
            cta="Listen"
          />        
        </MusicSection> */}
      </div>
    </SimpleLayout>
  )
}

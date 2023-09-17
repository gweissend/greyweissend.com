import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'My Journey',
  description:
    'I’m Grey Weissend',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My Journey
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Lying on a bench outside a temple in Vietnam, my breath slowed to that of breathing through a paper straw that had prematurely disintegrated. It was taking all my energy to survive.
            </p>
            <p>
            This wasn’t my first allergic reaction, but it was my first where I was totally alone. No ambulance to take me to the hospital, no drugs to calm my body, no people to hold me. All I had was my breath.           
            </p>
            <p>
            Meditation and focused breathing provided a sanctuary of calm amidst chaos - extending beyond peanuts to my work and life. When I concentrated on each breath, I anchored my awareness in the present moment. 
            </p>
            <p>
            This mental shift allowed me to distance myself from the fear and discomfort associated with the allergic reaction, promoting a sense of peace and calmness. This shift allowed me to excel in 4 years of military academy, the trading floor of Wall Street, and the streets of 40+ foreign countries as I traveled and lived abroad.                    
            </p>
            <p>
            Opening up to my fears, especially those that create unconscious reactions and finding places of love and kindness helped me to find new patterns of behavior. Along the way I began to practice techniques like yoga, meditation, and music that I found helpful to this shift.
            </p>
            <p>
            This journey created a new source of meaning and healing in my life - and is a gift I want to share with others.    
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://www.instagram.com/gweissend/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/gweissend" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:greyweissend@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              greyweissend@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}


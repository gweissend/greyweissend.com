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
import portrait from '@/images/portrait.jpg'

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
              src={portrait}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I am a hybrid
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I innovate as an entrepreneur, but have worked in some of the largest and most bureaucratic organizations in the world. I spent my college life at a military institute as a civilian, much of my working life in one of the oldest banks in America, and my free time in refugee camps, ashrams and temples across the world. 
            </p>            
            <p>
            While these may seem like a paradoxical collection of experiences, in reality they represent the intersection of political, business, and thought leaders, whose coordination and perspective is required for global innovation and change.
            </p>
            <p>
            When I was 16, I worked with Chinese factories, big-box retailers in the U.S., and online companies such as eBay and Amazon to develop two successful businesses before I graduated high school. 
            </p>
            <p>
            I began to travel the East in my 20s and developed a deep affinity for ancient Eastern philosophy. This started with research in Syrian refugee communities and later led me to study and live in China, completing a masters degree as a Schwarzman Scholar, and India where I lived in an ashram in Himalaya and sat with the Dali Lama.  
            </p>
            <p>
            For the past 5 years, I built an incubation program inside J.P. Morgan Chase. I co-founded the program, helped grow the team from 2 to 40+ people with a global presence, and guided many ideas from 0 to 1 as a product manager (and sometimes designer, engineer, and QA). It was an incredible experience to develop and scale digital solutions for an institution started in 1799. 
            </p>
            <p>
            This juxtaposition of ancient wisdom and cutting-edge innovation has helped me find balance within myself and illuminated the path toward crafting meaningful, impactful products for a global user base. 
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


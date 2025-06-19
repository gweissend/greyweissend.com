import { type Metadata } from 'next'
import Image, { type ImageProps } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoIntelligence from '@/images/logos/intelligence.svg'
import logoRainbowKiss from '@/images/logos/theRainbowKiss.svg'
import logoAreaX from '@/images/logos/areaX.svg'
import logoPersonal from '@/images/logos/personal.svg'
import logoMyHealthApp from '@/images/logos/myhealthapp.svg'
import logoJustBurnt from '@/images/logos/burnt-logo.svg'
import logoReeBee from '@/images/logos/ReeBee.svg'
import kalidescope from '@/images/photos/kalidescope.jpg'

const projects = [
  {
    name: 'My Health App',
    description:
      'Health risk assessment platform with dynamic scoring and actionable insights',
    link: { href: 'https://myhealthapp.org/', label: 'myhealthapp.org' },
    logo: logoMyHealthApp,
  },
  {
    name: 'Burnt',
    description:
      'Private networking platform for top performers featuring vetted introductions and exclusive community access',
    link: { href: 'https://www.justburnt.com/', label: 'justburnt.com' },
    logo: logoJustBurnt,
  },
  {
    name: 'Reebee',
    description:
      'Symptom tracking platform for allergies, asthma, COPD, and eczema to help identify patterns and correlations',
    link: { href: 'https://www.reebee.org/', label: 'reebee.org' },
    logo: logoReeBee,
  },
  {
    name: 'AreaX',
    description:
      'Building digital solutions to critical business problems',
    link: { href: 'https://www.jpmorgan.com/technology/innovation-accelerator', label: 'AreaX Website' },
    logo: logoAreaX,
  },
  {
    name: 'Intelligence',
    description:
      'Real-time market info, curated news and research for JPM clients',
    link: { href: 'https://apps.apple.com/us/app/intelligence-by-j-p-morgan/id1635779814', label: 'Apple App Store' },
    logo: logoIntelligence,
  },
  {
    name: 'This Website',
    description:
      'Peak at this codebase',
    link: { href: 'https://github.com/gweissend/greyweissend.com', label: 'Github' },
    logo: logoPersonal,
  },
  // {
  //   name: 'The Rainbow Kiss',
  //   description:
  //     'Spreading messages of healing and resilience.',
  //   link: { href: 'https://therainbowkiss.com', label: 'Landing Page' },
  //   logo: logoRainbowKiss,
  // },
  
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I&apos;ve made.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I&apos;ve made"
      intro="I build web apps that solve real problems. From health platforms to networking tools, I focus on creating digital solutions that make a meaningful impact. Here are some recent projects."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
      
      <div className="mt-24 bg-zinc-50 dark:bg-zinc-900/5">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24 text-center">
          <hgroup>
            <h2 className="text-base/7 font-semibold text-teal-600 dark:text-teal-400">Ready to build?</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Let&apos;s create something amazing together.
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-zinc-600 dark:text-zinc-400">
            I specialize in building full-stack web applications from concept to deployment. 
            Whether you need a health platform, networking tool, or custom solution, let&apos;s discuss your project.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://calendly.com/greyweissend"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

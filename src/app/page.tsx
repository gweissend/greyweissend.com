import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import logoChase from '@/images/logos/chase.svg'
import logoEpistasis from '@/images/logos/epistasis.svg'
import logoAsiaGreenFund from '@/images/logos/asiaGreenFund.svg'
import logoRvaelectronics from '@/images/logos/rvaelectronics.svg'
import logoSeed from '@/images/logos/seed.svg'
import logoMyHealthApp from '@/images/logos/myhealthapp.svg'
import logoJustBurnt from '@/images/logos/burnt-logo.svg'
import logoReeBee from '@/images/logos/ReeBee.svg'
import logoPersonal from '@/images/logos/personal.svg'
import logoMylin from '@/images/logos/mylin-logo.png'
import peanut from '@/images/photos/peanut.jpg'
import work from '@/images/photos/work.jpg'
import buffalo from '@/images/photos/buffalo.jpg'
import mountains from '@/images/photos/mountains.jpg'
import kalidescope from '@/images/photos/kalidescope.jpg'
import rocktop from '@/images/photos/rocktop.jpg'
import wonder from '@/images/photos/wonder.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  href?: string
}

function Role({ role, projects }: { role: Role, projects?: Array<{logo: any, href: string, name: string}> }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.href ? (
              <Link 
                href={role.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-teal-500 transition-colors"
              >
                {role.company}
              </Link>
            ) : (
              role.company
            )}
          </dd>
          {role.title && (
            <>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
            </>
          )}
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </dl>
      </div>
      
      {projects && (
        <div className="relative ml-14 pb-2">
          {/* Vertical line from Mylin Studio through all projects */}
          <div className="absolute -left-7 top-0 bottom-2 w-px bg-zinc-200 dark:bg-zinc-700"></div>
          
          <div className="space-y-3">
            {projects.map((project, projectIndex) => (
              <div key={projectIndex} className="relative">
                {/* Horizontal connecting line */}
                <div className="absolute -left-7 top-1/2 w-7 h-px bg-zinc-200 dark:bg-zinc-700"></div>
                
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 p-2 rounded-lg transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-110">
                    <Image src={project.logo} alt={project.name} className="h-6 w-6" unoptimized />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {project.href.replace('https://', '').replace('www.', '')}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Mylin Studio',
      title: 'Founder',
      logo: logoMylin,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'J.P. Morgan Chase',
      title: 'VP, Product Management',
      logo: logoChase,
      start: '2018',
      end: '2023',
    },
    {
      company: 'Asia Green Fund',
      title: 'Research Analyst',
      logo: logoAsiaGreenFund,
      start: '2017',
      end: '2018',
    },
    {
      company: 'SEED',
      title: 'Chief Investment Officer',
      logo: logoSeed,
      start: '2015',
      end: '2017',
    },
    {
      company: 'RVA Electronics',
      title: 'Co-Founder',
      logo: logoRvaelectronics,
      start: '2012',
      end: '2013',
    },
  ]

  const projects = [
    { logo: logoReeBee, href: 'https://www.reebee.org/', name: 'Reebee' },
    { logo: logoJustBurnt, href: 'https://www.justburnt.com/', name: 'Burnt' },
    { logo: logoMyHealthApp, href: 'https://myhealthapp.org/', name: 'My Health App' },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role 
            key={roleIndex} 
            role={role} 
            projects={role.company === 'Mylin Studio' ? projects : undefined}
          />
        ))}
      </ol>
      
{/* Hidden for now
      <Button href="/grey_weissend_resume.pdf" variant="secondary" className="group mt-6 w-full" download>
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
      */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[buffalo, rocktop, kalidescope, work , mountains].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
           @ me
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
         The creative process and solving problems are some of my favorite parts of life. In my work building digital products, I have focused on going from 0 to 1.  
          </p>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          In my personal life, I have focused on connecting with the essential, basic elements of life - breath, meditation, and my own stories.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://www.instagram.com/gweissend/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/gweissend"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/grey-weissend-a652a8a3/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <div className="text-center">
                <h2 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                  Ready to build?
                </h2>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  Let&apos;s create something amazing together
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  I build full-stack web applications from concept to deployment. Let&apos;s discuss your project.
                </p>
                <a
                  href="https://calendly.com/greyweissend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

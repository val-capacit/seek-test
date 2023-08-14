import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpeg'
import imageBlakeReid from '@/images/team/blake-reid.jpeg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpeg'
import imageDriesVincent from '@/images/team/dries-vincent.jpeg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpeg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpeg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpeg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpeg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpeg'
import imageMichaelFoster from '@/images/team/michael-foster.jpeg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpeg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="What we stand for"
        title="Do you have specific IT needs?"
        invert
      >
        <p>
          We develop products, not projects. Contacts us to you help realise your vision.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Not another project" invert>
          Projects have a clear deadline and an expected result that is often defined and determined from the start. So it is what you have ordered and what you get - or at least you get it as far as possible within the agreed hours and the agreed period.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          When we make products, this means that we enter into a long-term collaboration with customers, where, with a "cradle to grave" perspective, we take responsibility for the entire process from the assessment of needs to design and development, but also after the product has been developed.
          </GridListItem>
          <GridListItem title="Trust" invert>
          Our experience is that when we, as a product supplier, take care of support and operation, and take responsibility without limitations and expiration dates, customers get an overall experience that lives up to our ambitions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [


  /*{
    title: 'Seek Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },*/
  {
    title: 'Seek Team',
    people: [
      {
        name: 'Mikkel Hempel',
        role: 'Partner, CPO',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Valdemar Østergaard',
        role: 'Associate Product Specialist',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Nicolai Lassen',
        role: 'Senior Developer',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Jonas Emil Gehrke',
        role: 'Analyst Developer',
        image: { src: imageBlakeReid },
      },
      /*
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },*/
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Our responsibility, shared value" title="A Capacit product">
        <p>
          Seek is a product of the Copenhagen based IT-Product House, Capacit. At Capacit we design, develop and operate IT-products with respect of business, needs and budget of our clients.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Our goal is to deliver better and more efficient IT products in a mutually rewarding community, where we focus on value creation and minimal Time to Market.
          </p>
          <p>
          We believe in the power of technology to transform businesses and create value in an increasingly competitive world. Our wide range of solutions includes AI-based systems, SaaS applications, automation technologies and more.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="10" label="Products" />
          <StatListItem value="52" label="Employees" />
          <StatListItem value="$1M" label="Annual Revenue" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Straight out from the blog"
        intro="Explore articles that uncover the AI-powered future, customer support excellence, and the art of leveraging data for transformative results. Join us on a journey of discovery and stay ahead in the dynamic world of technology and business.
        "
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}


import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
/*import imageDashboard from '@/images/dashboard.jpg'*/
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import ChatImage from '@/images/chatbot.png'
import Image from 'next/image'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            They are already empowering their data with Seek.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="The voice of your data"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Leverage AI to align your specific expertise, data and domain-knowledge to craft chatbots without coding to reduce development time and effort.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Features"
        title="Transform your data into a chatbot."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Leverage AI to align your specific expertise, data and domain-knowledge to craft chatbots without coding to reduce development time and effort.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
          
            <ListItem title="Intuitive Design Interface">
            Seek offers a user-friendly no-code web application with a drag-and-drop interface, eliminating the need for coding experience. Users can effortlessly assemble chatbots by selecting and arranging building blocks to create desired functionalities.
            </ListItem>
            <ListItem title="Data Integration">
            The platform allows users to integrate their data sources, including documents, webpages, and databases, directly into the chatbot's knowledge base. This ensures that the chatbot is well-versed in the user's specific domain.
            </ListItem>
            <ListItem title="Customized AI Expertise">
            Seek's chatbots learn from the user's data, becoming specialized AI experts in their respective fields. The chatbots respond intelligently to user queries ad data collections, offering accurate and relevant information.
            </ListItem>
            <ListItem title="Versatile Deployment Options">
            Seek supports various deployment options, including embedding chatbots as widgets on websites, integrating them within intranet systems, or deploying them as standalone full-page chatbot experiences.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Unleash your data to empower your conversations.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56 ">
        <FadeIn className="max-w-2/3">

          <div className='flex gap-24 items-center lg:flex-row flex-col'>

        <div>

   
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
      Unleash your <span style={{ color: '#6C72FF' }}>data</span> to empower your <span style={{ color: '#6C72FF' }}>conversations</span>.
        </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Seek allows you to create highly personalised chatbots that integrate seamlessly with your specific data, offering a customised and efficient customer engagement experience.          </p>
             </div>
          <Image
                            alt=""
                            {...ChatImage}
                            className="lg:w-[400px] w-96 object-cover shadow-lg rounded-lg
                            "
                          />
                            </div>
        </FadeIn>
      
      



        
      </Container>
 
      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Seek's AI chatbot has revolutionized our customer service operations. As a global corporation with diverse customer interactions, we needed a solution that could efficiently handle inquiries, provide accurate information, and enhance user engagement. Seek's chatbot exceeded our expectations
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}

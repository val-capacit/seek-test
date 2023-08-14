import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Sign up" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Click on the <strong className="font-semibold text-neutral-950">"Sign Up"</strong> button on the top right. 
        Provide your email address and create a secure password for your account. 
        Complete the registration process by verifying your email.
          {/*}
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their every day operations to understand
  what makes their business tick.*/}
        </p>
        {/*
        <p>
          Our team of private investigators shadow the company director’s for
          several weeks while our account managers focus on going through their
          trash. Our senior security experts then perform social engineering
          hacks to gain access to their{' '}
          <strong className="font-semibold text-neutral-950">business</strong>{' '}
          accounts — handing that information over to our forensic accounting
          team.
        </p>*/}
{/*
        <p>
          Once the full audit is complete, we report back with a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and,
          more importantly, a budget.
        </p>*/}

  </div>
{/* 
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>*/}
      </Section>
  )
}

function Build() {
  return (
    <Section title="Connect your data and build your chatbots" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Log in to your Seek account using the email and password you registered with. Once logged in, you'll be taken to your personalized dashboard. Here, you can seamlessly connect your existing data sources, such as documents, webpages, and databases. Choose the data types you want to integrate and follow the prompts to establish the connections. With your data in place, head over to the "Build Chatbot" section.
        </p>
        <p>
        In the Build Chatbot section, you'll discover Seek's user-friendly drag-and-drop interface. Use this intuitive platform to design your very own AI chatbot. Customize its responses, interactions, and appearance to match your brand's identity and user experience goals. Provide sample conversations and responses to train your chatbot, enabling it to better understand and assist users.
        </p>
      </div>
    {/* 
      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>*/}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Empowerment" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        With your AI chatbot created and trained, it's time to deploy it into action. Choose where you want your chatbot to be accessible: integrate it as a widget on your website, utilize it for internal customer service, or even set it up as a standalone chatbot page. Take advantage of Seek's customization options to fine-tune the chatbot's appearance and behavior to align perfectly with your brand and user preferences.
        </p>
        <p>
        Thorough testing is essential. Engage in sample conversations to ensure your chatbot is responsive and understands various queries accurately. Once you're satisfied with its performance, confidently hit the "Publish" button to make your AI chatbot live and ready to assist users.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        We are always here to help.
      </h3>
      <List className="mt-8">
        <ListItem title="Help">
          You are always welcome to contact us and we will do our utmost to help you.
        </ListItem>
        {/*<ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
  </ListItem>*/}
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Tiers"
        title="Pricing"
      >
        <p>
        At Seek, we understand that every business is unique, which is why we offer flexible pricing plans to match your specific requirements. Our pricing is designed to provide you with maximum value, regardless of your company's size or industry. Whether you're a startup, a growing enterprise, or an established corporation, Seek offers pricing options that ensure you get the most out of our AI chatbot solution.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Tier 1, 300 $/mo">
            Up to 20 MB data. The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Tier 2, 500 $/mo">
            Up to 1 GB data. We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Tier 3, 700 $/mo">
            Unlimited data. Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          {/* 
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>*/}
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Light it up" title="Get started">
        <p>
        Get started with Seek today and revolutionize your data interactions. 
        Unleash the power of AI chatbots tailored to your data, enhancing support, insights, and innovation for your business.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Quote, Heart } from "lucide-react";
import team1 from "../../assets/team.jpg";
import team2 from "../../assets/team2.jpg";
import drug from "../../assets/drug.jpg";
import h from "../../assets/h.jpg";
import h2 from "../../assets/homeless1.jpg";

// Animation variants
const fadeInUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleInVariant = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { delay: 0.4 } },
};

// In a real app, this would come from an API
const stories = {
  "from-homeless-to-hopeful": {
    title: "From Homeless to Hopeful: Sarah's Journey",
    image: team1,
    category: "Housing Assistance",
    location: "Boston, MA",
    date: "January 2024",
    quote:
      "Right Housing didn't just give me a place to stay – they gave me back my dignity and hope for the future.",
    content: [
      "Sarah's journey is one of resilience, courage, and transformation. Just a year ago, she was facing one of the toughest challenges of her life: losing her home. After an unexpected job loss and mounting medical bills, Sarah found herself unable to afford rent. With two young children depending on her, the experience of being evicted was devastating.",
      "For months, Sarah struggled to find a safe place to stay. She cycled through friends' couches, crowded shelters, and nights in her car. The uncertainty and instability were overwhelming, and she began to feel hopeless. However, everything changed when she was introduced to Right Housing's emergency assistance program.",
      "Right Housing offered Sarah and her children a temporary home, but more importantly, they gave her the tools and support to rebuild her life. The team helped her navigate government aid programs, access job training opportunities, and enroll her children in a safe, supportive school environment. They also worked with Sarah to create a sustainable financial plan to prevent future crises.",
      "Today, Sarah is thriving in a beautiful two-bedroom apartment in Boston. She has secured a steady job as an administrative assistant and is even pursuing online courses to advance her career. Her children are excelling in school and enjoying after-school programs designed to build confidence and foster learning. Sarah also volunteers her time to mentor other single parents who are facing similar challenges, giving back to the community that helped her during her time of need.",
      "Sarah’s story reminds us all that with the right support and resources, anyone can overcome even the most difficult circumstances. Her courage and determination inspire us to continue working toward a world where everyone has a safe place to call home.",
    ],
    impact: [
      "Secured permanent affordable housing",
      "Connected with a job training program and employment opportunities",
      "Children enrolled in supportive after-school programs",
      "Developed a financial stability plan for long-term success",
      "Established a peer support group for single parents in the community",
    ],
  },
  "building-future-martinez-family": {
    title: "Building a Future: The Martinez Family Story",
    image: team2,
    category: "Family Support",
    location: "Cambridge, MA",
    date: "December 2023",
    quote:
      "The support we received through this program was life-changing. It wasn’t just about housing—it was about giving our family a future.",
    content: [
      "The Martinez family—parents Luis and Elena and their three children—had always dreamed of owning a home and building a stable future. However, rising rents and stagnant wages in Cambridge, MA, made it nearly impossible for them to keep up. With five people living in a cramped one-bedroom apartment, the family was struggling to make ends meet and faced the looming threat of eviction.",
      "Everything changed when they connected with Right Housing’s affordable housing initiative. Through the program, the Martinez family was offered a spacious, affordable three-bedroom apartment in a safe neighborhood. For the first time in years, they could finally breathe a sigh of relief, knowing they had a stable roof over their heads.",
      "But the support didn’t stop there. Right Housing provided the family with access to financial literacy workshops, helping them create a budget and start saving for the future. Luis was also able to enroll in a job training program that led to a promotion at work, while Elena received support to launch a small home-based business making handmade crafts. Their children benefited from after-school tutoring and enrichment programs that helped improve their grades and confidence.",
      "With newfound stability, the Martinez family has begun to thrive. They’ve built strong connections within their community, participating in neighborhood events and support groups. Luis and Elena are now saving toward their long-term goal of homeownership, while their children are excelling in school and dreaming of college.",
      "The Martinez family’s story is a testament to the power of affordable housing and comprehensive family support. Their journey serves as an inspiration to other families striving for a better future, proving that with the right resources, anything is possible.",
    ],
    impact: [
      "Secured affordable three-bedroom housing",
      "Parents participated in job training and small business support programs",
      "Children received academic tutoring and enrichment opportunities",
      "Family established a long-term savings plan for homeownership",
      "Built a strong sense of community through local support networks",
    ],
  },
  "recovery-renewal-john": {
    title: "Recovery and Renewal: John's Path Home",
    image: drug,
    category: "Recovery Housing",
    location: "Somerville, MA",
    date: "November 2023",
    quote:
      "This program didn’t just help me recover—it gave me a purpose. I now have the strength to help others find their way home too.",
    content: [
      "John’s journey to stability was anything but straightforward. After battling addiction for over a decade, he had lost his job, his home, and many of his closest relationships. Living on the streets of Somerville, MA, John felt trapped in a cycle of hopelessness and despair.",
      "His turning point came when a social worker connected him with Right Housing's Recovery Support Program. John was provided with a safe and stable living environment where he could focus on his recovery. The program combined affordable housing with access to counseling, peer support groups, and resources for addiction recovery.",
      "Over time, John began to rebuild his life. Through the program’s structured support, he attended regular therapy sessions, participated in group meetings, and reconnected with family members who had previously distanced themselves. The stability of housing gave him the foundation he needed to focus on healing and personal growth.",
      "John didn’t just stop at recovery—he wanted to pay it forward. After completing the program, he began mentoring others in recovery and working with the local community to raise awareness about addiction and homelessness. Today, John has a full-time job with a local nonprofit organization and has helped over a dozen individuals navigate their own recovery journeys.",
      "John’s story demonstrates the profound impact of combining housing with recovery services. By addressing the root causes of homelessness and addiction, programs like these empower individuals to reclaim their lives and contribute meaningfully to their communities.",
    ],
    impact: [
      "Completed addiction recovery program",
      "Secured stable housing for 18 months",
      "Reconnected with estranged family members",
      "Helped mentor 12 individuals in recovery",
      "Joined a nonprofit organization to support others facing similar challenges",
    ],
  },
  "seniors-second-chapter": {
    title: "A Senior's Second Chapter",
    image: h,
    category: "Senior Housing",
    location: "Medford, MA",
    date: "October 2023",
    quote:
      "Finding a place where I’m surrounded by friends and support has given me a new lease on life.",
    content: [
      "Eleanor, a 72-year-old retiree, had spent years living alone in a small, outdated apartment in Medford, MA. After her husband passed away, loneliness became her constant companion, and her health began to decline due to the isolation and lack of support. Eleanor often worried about the future, wondering if she would ever feel connected to a community again.",
      "Everything changed when Eleanor was introduced to Right Housing’s Senior Housing Program. The program provided her with a comfortable, affordable apartment in a community specifically designed for seniors. For the first time in years, Eleanor felt a sense of belonging.",
      "The program offered more than just housing—it provided a vibrant community. Eleanor began participating in weekly activities such as gardening, book clubs, and exercise classes. She quickly formed close friendships with other residents and found herself looking forward to each new day. With access to wellness programs and community events, Eleanor’s health and happiness improved significantly.",
      "Eleanor also discovered new opportunities to contribute. She volunteered to organize social events and started a knitting circle that not only brought joy to participants but also donated handmade items to local charities. Her newfound sense of purpose reignited her passion for life.",
      "Today, Eleanor describes her experience as a second chapter filled with joy, connection, and growth. Her story reminds us of the importance of creating spaces where seniors can thrive, not just survive. Programs like these show that it’s never too late to build a fulfilling and meaningful life.",
    ],
    impact: [
      "Secured safe, affordable senior housing",
      "Participated in 15+ community activities and programs",
      "Made over 20 new friends and strengthened her social network",
      "Organized and led a volunteer knitting circle to give back to the community",
      "Improved physical and mental health through wellness and social activities",
    ],
  },
  "veterans-supporting-veterans": {
    title: "Veterans Supporting Veterans",
    image: h2,
    category: "Veteran Support",
    location: "Malden, MA",
    date: "September 2023",
    quote:
      "This program didn’t just give me a home—it gave me a family of people who truly understand and support me.",
    content: [
      "After serving his country for over a decade, Michael, a U.S. Army veteran, found himself facing a harsh reality. Transitioning back to civilian life proved to be more challenging than he had anticipated. Struggling with PTSD, unemployment, and a lack of stable housing, Michael felt like he was fighting a battle on his own.",
      "Michael’s life took a turn for the better when he discovered Right Housing’s Veteran Support Program. The program offered him and many others a safe, supportive place to call home. More than just a housing solution, the program focused on building a community where veterans could connect, heal, and grow together.",
      "Through this program, Michael not only secured stable housing but also gained access to career counseling and mental health support. With the help of job placement services, he found a meaningful role as a mechanic, a trade he had mastered during his military service. Group therapy sessions and peer support meetings allowed him to connect with other veterans who shared similar experiences, creating a sense of camaraderie and understanding.",
      "As Michael regained stability, he became an advocate for the program, organizing support groups and mentoring younger veterans who were navigating the same challenges he once faced. His leadership and dedication inspired others to take active roles in the community, fostering an environment of mutual support and encouragement.",
      "Today, Michael is thriving. He’s a homeowner, a mentor, and a passionate advocate for veteran-focused initiatives. His story is a powerful reminder of how programs like these can transform the lives of those who have sacrificed so much for their country, proving that no veteran has to face life’s challenges alone.",
    ],
    impact: [
      "Provided stable housing for 45 veterans",
      "Facilitated 28 job placements through career counseling and support",
      "Created four active peer support groups for ongoing connection and healing",
      "Empowered veterans to mentor and support each other",
      "Fostered a strong sense of community among program participants",
    ],
  },
};

const BackButton = React.memo(() => (
  <Link
    to="/impact"
    className="inline-flex items-center gap-2 text-gray-600 hover:text-success-600 transition-colors mb-8"
  >
    <ArrowLeft className="w-5 h-5" />
    <span>Back to Stories</span>
  </Link>
));

const StoryHero = React.memo(({ story }) => (
  <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-20">
    <div className="absolute inset-0">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative container mx-auto px-4">
      <Link
        to="/impact"
        className="inline-flex items-center gap-2 text-success/90 hover:text-success mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Stories
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-4 text-white/90 mb-6">
          <div className="flex items-center gap-1">
            <MapPin className="w-5 h-5" />
            {story.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-5 h-5" />
            {story.date}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {story.title}
        </h1>

        <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
          {story.category}
        </span>
      </motion.div>
    </div>
  </section>
));

const StoryImage = React.memo(({ story }) => (
  <motion.div
    variants={fadeInUpVariant}
    className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12"
  >
    <img
      src={story.image}
      alt={story.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </motion.div>
));

const StoryQuote = React.memo(({ quote }) => (
  <motion.blockquote
    variants={scaleInVariant}
    className="relative bg-white rounded-2xl p-8 mb-12 shadow-sm"
  >
    <Quote className="w-8 h-8 text-success-600 mb-4" />
    <p className="text-xl text-gray-900 italic mb-4">{quote}</p>
  </motion.blockquote>
));

const StoryContent = React.memo(({ content }) => (
  <div className="prose prose-lg max-w-none text-lg">
    {content.map((paragraph, index) => (
      <React.Fragment key={index}>
        <p>{paragraph}</p>
        <br />
      </React.Fragment>
    ))}
  </div>
));

const ImpactSection = React.memo(({ impact }) => (
  <div className="mt-12 bg-success-50 rounded-2xl p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Outcomes</h2>
    <ul className="space-y-4">
      {impact.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <Heart className="w-5 h-5 text-success-600 mt-1" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
));

const CallToAction = React.memo(() => (
  <div className="mt-12 text-center">
    <Link
      to="/donate"
      className="inline-flex items-center gap-2 bg-success-600 text-white px-6 py-3 rounded-full font-medium hover:bg-success-700 transition-colors"
    >
      Help Us Create More Success Stories
    </Link>
  </div>
));

const ImpactStory = () => {
  const { slug } = useParams();

  const story = useMemo(() => stories[slug], [slug]);

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl text-gray-900">Story not found</h1>
        <BackButton />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <StoryHero story={story} />

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Quote */}
            <StoryQuote quote={story.quote} />
            {/* Story Content */}
            <StoryContent content={story.content} />
            {/* Impact Section */}
            <ImpactSection impact={story.impact} />

            {/* CTA */}
            <CallToAction />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default React.memo(ImpactStory);

// Static mock content for Aerievo, matching the exact response shapes that
// src/lib/api.ts functions return (PageResponse, Setting[], MenusResponse,
// Testimonial[], TeamMember[], BlogPost[], SuccessStory[], etc.)
//
// This lets the app run fully on mock data with zero Sanity project
// configured. Once NEXT_PUBLIC_SANITY_PROJECT_ID is set, api.ts switches to
// live GROQ queries automatically — no code changes needed here.

// ─────────────────────────────────────────────────────────────────────────────
// Shared building blocks
// ─────────────────────────────────────────────────────────────────────────────

const now = new Date().toISOString();

export const mockSettings: Setting[] = [
  { id: "contact_phone", key: "contact_phone", value: "+1 (401) 555-0142" },
  { id: "contact_email", key: "contact_email", value: "hello@aerievo.com" },
  {
    id: "address",
    key: "address",
    value: "Ahmedabad, India · Rhode Island, USA",
  },
  {
    id: "default_meta_title",
    key: "default_meta_title",
    value: "Aerievo - Top Software, Mobile and Web App Development Company",
  },
  {
    id: "default_page_description",
    key: "default_page_description",
    value:
      "Aerievo designs and builds custom software, web, and mobile applications for ambitious companies across manufacturing, healthcare, finance, and more.",
  },
  { id: "social_linkedin", key: "social_linkedin", value: "https://www.linkedin.com/company/aerievo" },
  { id: "social_instagram", key: "social_instagram", value: "https://www.instagram.com/aerievo" },
  { id: "social_twitter", key: "social_twitter", value: "https://twitter.com/aerievo" },
  { id: "social_youtube", key: "social_youtube", value: "https://www.youtube.com/@aerievo" },
];

export const mockSocials: Social[] = [
  { id: "s1", socialKey: "linkedin", socialValue: "https://www.linkedin.com/company/aerievo", status: "active", createdAt: now, updatedAt: now },
  { id: "s2", socialKey: "instagram", socialValue: "https://www.instagram.com/aerievo", status: "active", createdAt: now, updatedAt: now },
  { id: "s3", socialKey: "twitter", socialValue: "https://twitter.com/aerievo", status: "active", createdAt: now, updatedAt: now },
  { id: "s4", socialKey: "youtube", socialValue: "https://www.youtube.com/@aerievo", status: "active", createdAt: now, updatedAt: now },
];

// ── Navigation menus ───────────────────────────────────────────────────────────

const solutionsDropdown: Menu[] = [
  { id: "sol-1", menuName: "Web App Development", link: "/services/web-app-development", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-2", menuName: "Dedicated Development Team", link: "/services/dedicated-development-team", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-3", menuName: "Custom Software Development", link: "/services/custom-software-development", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-4", menuName: "UI/UX Design", link: "/services/ui-ux-design-company", parentPageId: null, sortOrder: 4, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-5", menuName: "Mobile App Development", link: "/services/mobile-app-development", parentPageId: null, sortOrder: 5, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-6", menuName: "Game Development", link: "/services/game-development-service", parentPageId: null, sortOrder: 6, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "sol-7", menuName: "QA & Software Testing", link: "/services/qa-software-testing", parentPageId: null, sortOrder: 7, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
];

const industriesDropdown: Menu[] = [
  { id: "ind-1", menuName: "Manufacturing", link: "/industries/industry-manufacturing", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-2", menuName: "Transportation & Logistics", link: "/industries/transportation-logistics", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-3", menuName: "Healthcare", link: "/industries/healthcare", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-4", menuName: "Finance & Insurance", link: "/industries/finance-insurance", parentPageId: null, sortOrder: 4, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-5", menuName: "Real Estate", link: "/industries/real-estate", parentPageId: null, sortOrder: 5, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-6", menuName: "Restaurant & Cafe", link: "/industries/reastaurant-cafe", parentPageId: null, sortOrder: 6, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-7", menuName: "Ecommerce & Retail", link: "/industries/ecommerce-retail", parentPageId: null, sortOrder: 7, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "ind-8", menuName: "Media & Entertainment", link: "/industries/media-entertainment", parentPageId: null, sortOrder: 8, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
];

const resourcesDropdown: Menu[] = [
  { id: "res-1", menuName: "Case Studies", link: "/case-studies", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "res-2", menuName: "Blog", link: "/blog", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "res-3", menuName: "FAQ", link: "/faq", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
];

const companyDropdown: Menu[] = [
  { id: "co-1", menuName: "About", link: "/about", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "co-2", menuName: "Team", link: "/team", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "co-3", menuName: "Why Us", link: "/why-us", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  { id: "co-4", menuName: "Careers", link: "/careers", parentPageId: null, sortOrder: 4, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
];

export const mockHeaderMenu: MenusResponse = {
  success: true,
  status: 200,
  message: "Menu fetched",
  data: [
    { id: "m-home", menuName: "Home", link: "/", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
    { id: "m-solutions", menuName: "Solutions", link: "/services", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: solutionsDropdown },
    { id: "m-industries", menuName: "Industries", link: "/industries", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: industriesDropdown },
    { id: "m-resources", menuName: "Resources", link: "/blog", parentPageId: null, sortOrder: 4, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: resourcesDropdown },
    { id: "m-company", menuName: "Company", link: "/about", parentPageId: null, sortOrder: 5, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: companyDropdown },
    { id: "m-contact", menuName: "Contact Us", link: "/client-support", parentPageId: null, sortOrder: 6, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: [] },
  ],
};

export const mockFooterMenu: MenusResponse = {
  success: true,
  status: 200,
  message: "Menu fetched",
  data: [
    { id: "f-solutions", menuName: "Solutions", link: "/services", parentPageId: null, sortOrder: 1, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: solutionsDropdown },
    { id: "f-company", menuName: "Company", link: "/about", parentPageId: null, sortOrder: 2, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: companyDropdown },
    { id: "f-resources", menuName: "Resources", link: "/blog", parentPageId: null, sortOrder: 3, status: "active", isClickable: true, createdAt: now, updatedAt: now, parentPage: null, segment: null, children: resourcesDropdown },
  ],
};

// ── Testimonials ───────────────────────────────────────────────────────────────

export const mockTestimonials: Testimonial[] = [
  {
    id: "t1",
    title: "Nikhil Shah",
    companyName: "DCOM Web Solutions",
    designation: "Founder & CEO",
    description:
      "Aerievo rebuilt our sales operations platform from the ground up. Their engineering team understood our workflow better than we could explain it — the result was a system that cut our order processing time in half.",
    videoUrl: null,
    type: "text",
    status: 1,
    metaTitle: null,
    metaDescription: null,
    ogImage: null,
    isIndex: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "t2",
    title: "Dr. Ansh Patel",
    companyName: "Swasth Hriday Cardiac Care",
    designation: "Chief Cardiologist",
    description:
      "We needed a patient-monitoring application that clinicians would actually trust. Aerievo's UI/UX team ran real workshops with our doctors before writing a single line of code, and it shows in the final product.",
    videoUrl: null,
    type: "text",
    status: 1,
    metaTitle: null,
    metaDescription: null,
    ogImage: null,
    isIndex: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "t3",
    title: "Emily Carter",
    companyName: "Northbridge Logistics",
    designation: "VP of Technology",
    description:
      "The dedicated development team Aerievo assembled for us felt like an in-house extension within weeks. Communication, velocity, and code quality all exceeded what we got from our previous outsourcing partner.",
    videoUrl: null,
    type: "text",
    status: 1,
    metaTitle: null,
    metaDescription: null,
    ogImage: null,
    isIndex: true,
    createdAt: now,
    updatedAt: now,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Home page
// ─────────────────────────────────────────────────────────────────────────────

export const mockHomePage: PageResponse = {
  slug: "/",
  title: "Home",
  pageType: "home",
  metaTitle: "Aerievo - Top Software, Mobile and Web App Development Company",
  metaDescription:
    "Aerievo designs and builds custom software, web, and mobile applications for ambitious companies across manufacturing, healthcare, finance, and more.",
  sections: [
    {
      id: "home-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "We manage your IT, so you can manage your business.",
        subtitle: "Seize Control of Business Continuity Through Cutting Edge IT Solutions",
        image: { id: "home-hero-img", fileUrl: "/hero-home.jpg", altText: "Aerievo team working in a modern office" },
        primaryCta: { label: "Services", href: "/services" },
        secondaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "home-features",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        subtitle: "What we do",
        title: "Streamlining IT in a Complicated Landscape",
        columns: 4,
        variant: "dark",
        cards: [
          { image: "/icons/cost-effectiveness.svg", title: "Cost-effectiveness", description: "Delivering Cost-Effective IT Solutions to Enhance Your Financial Performance." },
          { image: "/icons/innovative.svg", title: "Innovative Technology", description: "Remaining Current with Emerging Technology Trends, Providing Progressive Solutions for a Competitive Edge." },
          { image: "/icons/industry.svg", title: "Industry Expertise", description: "Catering to Niche Sectors, Including Healthcare, Logistics, Energy, and Construction, Crafting Customized Solutions Aligned with Your Distinctive Requirements." },
          { image: "/icons/scalability.svg", title: "Scalability", description: "Our Solutions Scale Seamlessly, Evolving in Tandem with Your Business, Maximizing the Returns on Your Investment." },
        ],
      },
    },
    {
      id: "home-solutions",
      sectionType: "solutionsGrid",
      sortOrder: 3,
      content: {
        subtitle: "How we do",
        title: "Solutions",
        items: [
          { icon: "Globe", title: "Web Application Development", description: "Crafting tailored web applications that align seamlessly with your business goals. Our solutions blend functionality, design, and user experience for optimal results.", linkLabel: "Learn more", link: "/services/web-app-development" },
          { icon: "Users", title: "Dedicated Development Team", description: "Empower your projects with a dedicated development team. Collaborative expertise for efficient solutions, on-time delivery, and business growth.", linkLabel: "Learn more", link: "/services/dedicated-development-team" },
          { icon: "Wrench", title: "Custom Software Development", description: "Creating bespoke software solutions tailored to your business needs. From concept to deployment, we turn ideas into functional, impactful realities.", linkLabel: "Learn more", link: "/services/custom-software-development" },
          { icon: "Palette", title: "UI/UX Design", description: "Crafting intuitive UI/UX designs that enhance user experiences. From wireframes to polished interfaces, we create visually appealing and user-friendly designs.", linkLabel: "Learn more", link: "/services/ui-ux-design-company" },
          { icon: "Smartphone", title: "Mobile App Development", description: "Transforming ideas into impactful mobile apps. Our experts specialize in Android, iOS, and cross-platform development, delivering seamless user experiences.", linkLabel: "Learn more", link: "/services/mobile-app-development" },
          { icon: "Gamepad2", title: "Game Development", description: "Bringing your game ideas to life. Our team designs and develops captivating games across genres, offering engaging experiences for players worldwide.", linkLabel: "Learn more", link: "/services/game-development-service" },
        ],
      },
    },
    {
      id: "home-industries-strip",
      sectionType: "iconFeatureGrid",
      sortOrder: 4,
      content: {
        subtitle: "How we do",
        title: "Addressing IT Challenges Across Various Industries, Every Day.",
        columns: 3,
        variant: "photo",
        cards: [
          { image: "/industries/manufacturing.jpg", title: "Industry & Manufacturing", link: "/industries/industry-manufacturing" },
          { image: "/industries/transportation.jpg", title: "Transportation & Logistics", link: "/industries/transportation-logistics" },
          { image: "/industries/healthcare.jpg", title: "Healthcare", link: "/industries/healthcare" },
          { image: "/industries/finance.jpg", title: "Finance & Insurance", link: "/industries/finance-insurance" },
          { image: "/industries/real-estate.jpg", title: "Real Estate", link: "/industries/real-estate" },
          { image: "/industries/retail.jpg", title: "Retail", link: "/industries/ecommerce-retail" },
        ],
      },
    },
    {
      id: "home-tech-stack",
      sectionType: "contentWithImage",
      sortOrder: 5,
      content: {
        subtitle: "What we use",
        title: "Bringing the best technologies to you.",
        description: "Working only with the best, to ensure the quality of our services, and to bring state of the art technology to those who need it.",
        variant: "dark",
        imagePosition: "right",
        categories: [
          { title: "Front & Back End", items: ["React Js", "Next Js", "Babylon Js", "Node Js", "Unity 3D", "Unreal", "WordPress"] },
          { title: "Mobile Application", items: ["React Native", "iOS", "Android", "Flutter"] },
          { title: "Database", items: ["MsSQL", "Firebase", "PostgreSQL", "MongoDB"] },
          { title: "Cloud Platform", items: ["AWS", "Azure", "Google Cloud Platform (GCP)", "Godaddy", "Window Server"] },
        ],
      },
    },
    {
      id: "home-success-stories",
      sectionType: "successStories",
      sortOrder: 6,
      content: {
        subtitle: "How we do",
        title: "Success Stories",
        stories: [
          {
            title: "How Aerievo Transformed Sales Operations with DCOM",
            slug: "aerievo-transformed-sales-operations-dcom",
            image: "/case-studies/dcom.png",
            description: "Discover how Aerievo's DCOM transformed sales operations with real-time tracking and AI-driven insights.",
            stats: [
              "30% boost in sales conversions through data-driven decision-making.",
              "Automated expense tracking & secure device management for enhanced efficiency.",
            ],
          },
          {
            title: "Transforming Digital Heart Care: Aerievo's Collaboration with Swasth Hriday",
            slug: "transforming-digital-heart-care-swasth-hriday",
            image: "/case-studies/swasth-hriday.png",
            description: "Aerievo helped Swasth Hriday transform its vision into a high-performance, secure, and user-friendly healthcare platform.",
            stats: ["SEO Optimised Development", "Consulting services"],
          },
        ],
      },
    },
    {
      id: "home-logos",
      sectionType: "logoStrip",
      sortOrder: 7,
      content: {
        subtitle: "How we do",
        title: "Recognized by the best",
        logos: [
          { name: "Lenovo Business Partner", image: "/logos/lenovo.png" },
          { name: "Hewlett Packard Enterprise Silver Partner", image: "/logos/hpe.png" },
          { name: "Dell PartnerDirect Registered", image: "/logos/dell-partnerdirect.png" },
          { name: "Acronis Gold Service Provider", image: "/logos/acronis.png" },
          { name: "Cisco Partner", image: "/logos/cisco-partner.png" },
          { name: "Microsoft Gold Partner", image: "/logos/microsoft.png" },
          { name: "Intel Technology Provider", image: "/logos/intel.png" },
          { name: "Ubiquiti Networks", image: "/logos/ubiquiti.png" },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Services hub
// ─────────────────────────────────────────────────────────────────────────────

export const mockServicesHubPage: PageResponse = {
  slug: "services",
  title: "Solutions",
  pageType: "page",
  metaTitle: "Software Development Solutions | Aerievo",
  metaDescription:
    "Explore Aerievo's full range of software, web, mobile, and QA development solutions for growing businesses.",
  sections: [
    {
      id: "services-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Solutions Engineered Around Your Business",
        subtitle:
          "From a single MVP to a fleet of enterprise systems, Aerievo's teams cover the full software lifecycle — design, build, test, and scale.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "services-grid",
      sectionType: "solutionsGrid",
      sortOrder: 2,
      content: {
        title: "Our Solutions",
        items: [
          { icon: "Globe", title: "Web App Development", description: "Scalable, secure, and SEO-friendly web applications built with modern frameworks like React and Next.js.", linkLabel: "Learn more", link: "/services/web-app-development" },
          { icon: "Users", title: "Dedicated Development Team", description: "Hire vetted, full-time engineers who plug directly into your existing team and processes.", linkLabel: "Learn more", link: "/services/dedicated-development-team" },
          { icon: "Wrench", title: "Custom Software Development", description: "Bespoke enterprise software engineered around your exact operational workflow.", linkLabel: "Learn more", link: "/services/custom-software-development" },
          { icon: "Palette", title: "UI/UX Design", description: "Research-driven design systems that increase conversion and reduce support load.", linkLabel: "Learn more", link: "/services/ui-ux-design-company" },
          { icon: "Smartphone", title: "Mobile App Development", description: "Native iOS/Android and cross-platform apps built for performance and scale.", linkLabel: "Learn more", link: "/services/mobile-app-development" },
          { icon: "Gamepad2", title: "Game Development", description: "2D and 3D game design and development across mobile, web, and console.", linkLabel: "Learn more", link: "/services/game-development-service" },
          { icon: "ShieldCheck", title: "QA & Software Testing", description: "Manual and automated QA that catches issues before your users do.", linkLabel: "Learn more", link: "/services/qa-software-testing" },
        ],
      },
    },
    {
      id: "services-cta",
      sectionType: "ctaBanner",
      sortOrder: 3,
      content: {
        title: "Why Choose Us",
        description:
          "150+ shipped projects, an in-house senior engineering bench, and transparent fixed or time-and-materials pricing — no surprises, ever.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
        secondaryCta: { label: "See Case Studies", href: "/case-studies" },
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Service detail pages (7 total) — shared "cutting-edge tools" grid + shared
// testimonial carousel; iconFeatureGrid + narrativeSplit vary per service.
// ─────────────────────────────────────────────────────────────────────────────

const sharedToolsGrid = {
  id: "shared-tools",
  sectionType: "iconFeatureGrid" as const,
  sortOrder: 3,
  content: {
    title: "Cutting-Edge Tools We Use",
    columns: 5,
    cards: [
      { icon: "Figma", title: "Figma", description: "Collaborative design and prototyping." },
      { icon: "GitBranch", title: "GitHub", description: "Version control and CI/CD pipelines." },
      { icon: "Container", title: "Docker", description: "Consistent, portable environments." },
      { icon: "Cloud", title: "AWS", description: "Scalable, secure cloud infrastructure." },
      { icon: "Bug", title: "Jira", description: "Agile sprint planning and tracking." },
    ],
  },
};

function serviceTestimonialSection(sortOrder: number) {
  return {
    id: "shared-testimonials",
    sectionType: "testimonialCarousel" as const,
    sortOrder,
    content: {
      title: "What Our Clients Say",
      testimonials: mockTestimonials,
    },
  };
}

export const mockWebAppDevelopmentPage: PageResponse = {
  slug: "services/web-app-development",
  title: "Web App Development",
  pageType: "page",
  metaTitle: "Web App Development Company | Aerievo",
  metaDescription:
    "Aerievo builds scalable, secure web applications using React, Next.js, and modern cloud architecture.",
  sections: [
    {
      id: "wad-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Web App Development",
        subtitle:
          "We design and engineer fast, secure, and scalable web applications that turn browsers into your best sales channel.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "wad-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our Web Development Process",
        columns: 4,
        cards: [
          { icon: "Search", title: "Discovery & Planning", description: "We map your requirements, users, and success metrics before writing code." },
          { icon: "PenTool", title: "UI/UX Design", description: "Wireframes and prototypes validated with real users before development starts." },
          { icon: "Code2", title: "Agile Development", description: "Two-week sprints with demos, so you see working software constantly." },
          { icon: "Rocket", title: "Launch & Support", description: "Production deployment, monitoring, and ongoing feature iteration." },
        ],
      },
    },
    {
      id: "wad-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for Web App Development",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-1',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-1-s', text: "Our web engineering team ships production-grade applications on React, Next.js, and Node.js — architectures chosen for performance, SEO, and long-term maintainability. Every project starts with a technical audit of your requirements so we recommend the right stack instead of the one we know best." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockDedicatedDevelopmentTeamPage: PageResponse = {
  slug: "services/dedicated-development-team",
  title: "Dedicated Development Team",
  pageType: "page",
  metaTitle: "Dedicated Development Team | Aerievo",
  metaDescription:
    "Hire a dedicated, vetted development team from Aerievo that integrates directly into your existing workflow.",
  sections: [
    {
      id: "ddt-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Dedicated Development Team",
        subtitle:
          "Scale your engineering capacity with vetted developers who work exclusively on your product, under your management, on your timeline.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "ddt-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "How Our Dedicated Teams Work",
        columns: 4,
        cards: [
          { icon: "ClipboardList", title: "Define Requirements", description: "We scope the roles, seniority, and skills your roadmap actually needs." },
          { icon: "UserSearch", title: "Vetted Matching", description: "You interview pre-screened candidates from our senior engineering bench." },
          { icon: "Users2", title: "Seamless Onboarding", description: "Your new team plugs into your tools, standups, and sprint cadence." },
          { icon: "LineChart", title: "Transparent Reporting", description: "Weekly velocity and progress reports, no black-box billing." },
        ],
      },
    },
    {
      id: "ddt-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for a Dedicated Development Team",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-2',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-2-s', text: "Unlike staffing agencies that hand off resumes, Aerievo manages the entire hiring, onboarding, and performance loop for your dedicated team. Engineers report to your product leads day-to-day, but we retain accountability for quality, retention, and technical mentorship in the background." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockCustomSoftwareDevelopmentPage: PageResponse = {
  slug: "services/custom-software-development",
  title: "Custom Software Development",
  pageType: "page",
  metaTitle: "Custom Software Development Company | Aerievo",
  metaDescription:
    "Aerievo designs and builds bespoke enterprise software engineered around your exact operational workflow.",
  sections: [
    {
      id: "csd-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Custom Software Development",
        subtitle:
          "When off-the-shelf software forces you to bend your process to fit the tool, we build the tool to fit your process instead.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "csd-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our Custom Software Process",
        columns: 4,
        cards: [
          { icon: "Search", title: "Process Mapping", description: "We shadow your operations to document the workflow software must support." },
          { icon: "Blocks", title: "System Architecture", description: "A technical blueprint covering data model, integrations, and scaling plan." },
          { icon: "Code2", title: "Iterative Build", description: "Modular delivery so core workflows go live before edge cases are polished." },
          { icon: "LifeBuoy", title: "Change Management", description: "Training and rollout support so your team actually adopts the new system." },
        ],
      },
    },
    {
      id: "csd-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for Custom Software Development",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-3',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-3-s', text: "We've built custom platforms for manufacturers, clinics, and logistics operators — each with workflows too specific for generic SaaS. Our discovery process front-loads the domain research, so the software we ship reflects how your business actually runs, not a generic template with your logo on it." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockUiUxDesignPage: PageResponse = {
  slug: "services/ui-ux-design-company",
  title: "UI/UX Design",
  pageType: "page",
  metaTitle: "UI/UX Design Company | Aerievo",
  metaDescription:
    "Aerievo's UI/UX design team builds research-driven design systems that increase conversion and reduce support load.",
  sections: [
    {
      id: "uiux-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "UI/UX Design",
        subtitle:
          "Good design isn't decoration — it's the difference between a product people tolerate and one they recommend.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "uiux-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our Design Process",
        columns: 4,
        cards: [
          { icon: "Search", title: "User Research", description: "Interviews and usage data uncover what your users actually need." },
          { icon: "Layers", title: "Wireframing", description: "Low-fidelity flows validated before a single pixel is polished." },
          { icon: "Palette", title: "Visual Design", description: "A cohesive design system covering every screen and state." },
          { icon: "TestTube2", title: "Usability Testing", description: "Real users test prototypes before development begins." },
        ],
      },
    },
    {
      id: "uiux-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for UI/UX Design",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-4',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-4-s', text: "Our designers work embedded alongside engineering from day one, so every interface decision accounts for technical feasibility and timeline — not just aesthetics. The result is a design system your developers can actually ship, not just admire in Figma." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockMobileAppDevelopmentPage: PageResponse = {
  slug: "services/mobile-app-development",
  title: "Mobile App Development",
  pageType: "page",
  metaTitle: "Mobile App Development Company | Aerievo",
  metaDescription:
    "Aerievo builds native and cross-platform mobile apps for iOS and Android engineered for performance and scale.",
  sections: [
    {
      id: "mad-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Mobile App Development",
        subtitle:
          "From consumer apps to field-service tools, we ship native and cross-platform mobile experiences that hold up at scale.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "mad-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our Mobile Development Process",
        columns: 4,
        cards: [
          { icon: "Search", title: "Platform Strategy", description: "We recommend native, React Native, or Flutter based on your goals." },
          { icon: "PenTool", title: "Mobile-First Design", description: "Interfaces designed for thumbs, offline states, and small screens." },
          { icon: "Code2", title: "Development & QA", description: "Sprints validated on real devices, not just simulators." },
          { icon: "Rocket", title: "App Store Launch", description: "Submission, review handling, and post-launch monitoring." },
        ],
      },
    },
    {
      id: "mad-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for Mobile App Development",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-5',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-5-s', text: "We've shipped apps that need to work in dead zones on a factory floor and apps that need to feel instant on a flagship phone — the constraints are different every time. Our mobile team designs for the real conditions your users are in, not just the demo environment." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockGameDevelopmentPage: PageResponse = {
  slug: "services/game-development-service",
  title: "Game Development",
  pageType: "page",
  metaTitle: "Game Development Company | Aerievo",
  metaDescription:
    "Aerievo designs and develops 2D and 3D games across mobile, web, and console platforms.",
  sections: [
    {
      id: "gd-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Game Development",
        subtitle:
          "From concept art to launch on the app stores, our game studio builds playable experiences that keep players coming back.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "gd-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our Game Development Process",
        columns: 4,
        cards: [
          { icon: "Lightbulb", title: "Concept & Design", description: "Game mechanics, art direction, and monetization strategy defined up front." },
          { icon: "Boxes", title: "Prototyping", description: "Playable prototypes validate the core loop before full production." },
          { icon: "Code2", title: "Full Production", description: "Engineering, art, sound, and level design run in parallel sprints." },
          { icon: "Rocket", title: "Launch & Live-Ops", description: "Store submission plus post-launch updates and content drops." },
        ],
      },
    },
    {
      id: "gd-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for Game Development",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-6',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-6-s', text: "Our game developers work in Unity and Unreal across mobile, web, and console targets, with a track record of shipping titles that hit performance budgets on low-end devices, not just flagship hardware. We treat game development as software engineering with an art department, not the other way around." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

export const mockQaSoftwareTestingPage: PageResponse = {
  slug: "services/qa-software-testing",
  title: "QA & Software Testing",
  pageType: "page",
  metaTitle: "QA & Software Testing Services | Aerievo",
  metaDescription:
    "Aerievo provides manual and automated QA services that catch issues before your users do.",
  sections: [
    {
      id: "qa-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "QA & Software Testing",
        subtitle:
          "Ship with confidence. Our QA engineers combine manual exploratory testing with automated regression suites to keep quality high as you move fast.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "qa-process",
      sectionType: "iconFeatureGrid",
      sortOrder: 2,
      content: {
        title: "Our QA Process",
        columns: 4,
        cards: [
          { icon: "ClipboardCheck", title: "Test Planning", description: "Test cases mapped to your critical user journeys and edge cases." },
          { icon: "Bug", title: "Manual QA", description: "Exploratory testing that catches the bugs automation misses." },
          { icon: "Cog", title: "Test Automation", description: "Regression suites that run on every deploy, not just before release." },
          { icon: "BarChart3", title: "Reporting & Triage", description: "Clear bug reports prioritized by user impact, not just severity labels." },
        ],
      },
    },
    {
      id: "qa-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 3,
      content: {
        sectionTitle: "Why Aerievo for QA & Software Testing",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-7',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-7-s', text: "Our QA engineers are embedded in the same sprints as your developers, not bolted on at the end. That means issues get caught while they're cheap to fix, and your release cadence doesn't get held hostage by a testing bottleneck two days before launch." }],
              },
              ],
          },
        ],
      },
    },
    sharedToolsGrid,
    serviceTestimonialSection(5),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Exported helper collections used by api.ts — populated further below as
// additional batches are appended to this file.
// ─────────────────────────────────────────────────────────────────────────────

export const mockServiceDetailPages: Record<string, PageResponse> = {
  "services/web-app-development": mockWebAppDevelopmentPage,
  "services/dedicated-development-team": mockDedicatedDevelopmentTeamPage,
  "services/custom-software-development": mockCustomSoftwareDevelopmentPage,
  "services/ui-ux-design-company": mockUiUxDesignPage,
  "services/mobile-app-development": mockMobileAppDevelopmentPage,
  "services/game-development-service": mockGameDevelopmentPage,
  "services/qa-software-testing": mockQaSoftwareTestingPage,
};

// ─────────────────────────────────────────────────────────────────────────────
// Industries hub
// ─────────────────────────────────────────────────────────────────────────────

export const mockIndustriesHubPage: PageResponse = {
  slug: "industries",
  title: "Industries",
  pageType: "page",
  metaTitle: "Industries We Serve | Aerievo",
  metaDescription:
    "Aerievo builds software for manufacturing, healthcare, finance, retail, logistics, and more.",
  sections: [
    {
      id: "industries-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Software Expertise Across Industries",
        subtitle:
          "Every industry has its own compliance rules, workflows, and edge cases. We've built for enough of them to know the difference.",
        primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      },
    },
    {
      id: "industries-grid",
      sectionType: "solutionsGrid",
      sortOrder: 2,
      content: {
        title: "Industries We Serve",
        items: [
          { icon: "Factory", title: "Manufacturing", description: "Plant floor visibility, ERP integrations, and predictive maintenance.", linkLabel: "Learn more", link: "/industries/industry-manufacturing" },
          { icon: "Truck", title: "Transportation & Logistics", description: "Fleet tracking, route optimization, and warehouse management systems.", linkLabel: "Learn more", link: "/industries/transportation-logistics" },
          { icon: "HeartPulse", title: "Healthcare", description: "Patient platforms, telehealth, and clinical workflow applications.", linkLabel: "Learn more", link: "/industries/healthcare" },
          { icon: "Landmark", title: "Finance & Insurance", description: "Secure fintech platforms, underwriting tools, and payment integrations.", linkLabel: "Learn more", link: "/industries/finance-insurance" },
          { icon: "Building2", title: "Real Estate", description: "Listing platforms, CRM tools, and property management software.", linkLabel: "Learn more", link: "/industries/real-estate" },
          { icon: "UtensilsCrossed", title: "Restaurant & Cafe", description: "Ordering systems, reservation platforms, and loyalty programs.", linkLabel: "Learn more", link: "/industries/reastaurant-cafe" },
          { icon: "ShoppingCart", title: "Ecommerce & Retail", description: "Storefronts, inventory systems, and personalization engines.", linkLabel: "Learn more", link: "/industries/ecommerce-retail" },
          { icon: "Clapperboard", title: "Media & Entertainment", description: "Streaming platforms, content management, and audience analytics.", linkLabel: "Learn more", link: "/industries/media-entertainment" },
          { icon: "Plane", title: "Hospitality & Travel", description: "Booking engines, guest experience apps, and itinerary tools.", linkLabel: "Learn more", link: "/industries/hospitality-travel" },
        ],
      },
    },
    {
      id: "industries-cta",
      sectionType: "ctaBanner",
      sortOrder: 3,
      content: {
        title: "Don't See Your Industry?",
        description:
          "We've likely built something adjacent. Tell us about your business and we'll show you relevant work.",
        primaryCta: { label: "Get in Touch", href: "/client-support" },
      },
    },
    {
      id: "industries-why-expertise",
      sectionType: "iconFeatureGrid",
      sortOrder: 4,
      content: {
        title: "Why Industry Expertise Matters",
        columns: 3,
        cards: [
          { icon: "ShieldCheck", title: "Compliance", description: "We build with your regulatory requirements — HIPAA, PCI-DSS, SOC 2 — designed in from day one, not bolted on later." },
          { icon: "Layers", title: "Purpose-Built Applications", description: "Generic software forces workarounds. We design for the specific workflows your industry runs on." },
          { icon: "Lock", title: "Security", description: "Industry-specific threat models mean we harden the right attack surfaces, not a generic checklist." },
        ],
      },
    },
  ],
};

function industryChallengesServices(
  challengesTitle: string,
  challenges: IconTextItem[],
  servicesTitle: string,
  services: IconTextItem[],
) {
  return {
    id: "industry-lists",
    sectionType: "iconListPair" as const,
    sortOrder: 2,
    content: {
      lists: [
        { title: challengesTitle, items: challenges },
        { title: servicesTitle, items: services },
      ],
    },
  };
}

function industryCtaBanner(industryName: string) {
  return {
    id: "industry-cta",
    sectionType: "ctaBanner" as const,
    sortOrder: 3,
    content: {
      title: "Elevating Efficiency Across " + industryName,
      description:
        "Let's discuss how a purpose-built platform can remove the manual work slowing your team down.",
      primaryCta: { label: "Schedule a Free Consultation", href: "/client-support" },
      secondaryCta: { label: "See Case Studies", href: "/case-studies" },
    },
  };
}

export const mockHealthcareIndustryPage: PageResponse = {
  slug: "industries/healthcare",
  title: "Healthcare",
  pageType: "page",
  metaTitle: "Healthcare Software Development | Aerievo",
  metaDescription:
    "Aerievo builds HIPAA-aware patient platforms, telehealth applications, and clinical workflow software.",
  sections: [
    {
      id: "healthcare-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Healthcare",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-8',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-8-s', text: "Healthcare software has to earn clinicians' trust before it earns their adoption. We design patient and provider tools around real clinical workflows, with HIPAA-aware data handling built into the architecture from the first sprint, not retrofitted before audit." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Healthcare",
      [
        { icon: "FileWarning", title: "Fragmented Patient Data", description: "Records scattered across legacy systems that don't talk to each other." },
        { icon: "ShieldAlert", title: "Compliance Overhead", description: "HIPAA and data residency requirements slow down every new feature." },
        { icon: "Clock", title: "Clinician Time Pressure", description: "Software that adds clicks instead of saving time gets abandoned." },
      ],
      "Our Services for Healthcare",
      [
        { icon: "HeartPulse", title: "Telehealth Platforms", description: "Video consultation and remote monitoring applications." },
        { icon: "Database", title: "EHR Integrations", description: "Interoperable systems that consolidate fragmented patient records." },
        { icon: "ClipboardCheck", title: "Clinical Workflow Tools", description: "Software designed around how care teams actually work." },
      ],
    ),
    industryCtaBanner("Healthcare"),
  ],
};

export const mockEcommerceRetailIndustryPage: PageResponse = {
  slug: "industries/ecommerce-retail",
  title: "Ecommerce & Retail",
  pageType: "page",
  metaTitle: "Ecommerce & Retail Software Development | Aerievo",
  metaDescription:
    "Aerievo builds storefronts, inventory systems, and personalization engines for ecommerce and retail brands.",
  sections: [
    {
      id: "ecommerce-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Ecommerce & Retail",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-9',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-9-s', text: "Retail margins are won or lost on conversion rate and inventory accuracy. We build storefronts and back-office systems engineered for speed, personalization, and real-time stock visibility across every channel you sell on." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Ecommerce & Retail",
      [
        { icon: "PackageX", title: "Inventory Mismatches", description: "Overselling and stockouts from disconnected channel inventories." },
        { icon: "Gauge", title: "Slow Storefronts", description: "Page speed directly impacting conversion and search ranking." },
        { icon: "UserX", title: "Generic Experiences", description: "One-size-fits-all storefronts losing to personalized competitors." },
      ],
      "Our Services for Ecommerce & Retail",
      [
        { icon: "ShoppingCart", title: "Storefront Development", description: "High-performance storefronts built for conversion." },
        { icon: "Boxes", title: "Inventory Systems", description: "Real-time stock sync across every sales channel." },
        { icon: "Sparkles", title: "Personalization Engines", description: "Recommendation systems tailored to shopper behavior." },
      ],
    ),
    industryCtaBanner("Ecommerce & Retail"),
  ],
};

export const mockHospitalityTravelIndustryPage: PageResponse = {
  slug: "industries/hospitality-travel",
  title: "Hospitality & Travel",
  pageType: "page",
  metaTitle: "Hospitality & Travel Software Development | Aerievo",
  metaDescription:
    "Aerievo builds booking engines, guest experience apps, and itinerary tools for hospitality and travel brands.",
  sections: [
    {
      id: "hospitality-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Hospitality & Travel",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-10',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-10-s', text: "Guests decide whether to return based on the friction — or lack of it — in booking, check-in, and support. We build booking engines and guest experience platforms designed to remove that friction at every step of the journey." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Hospitality & Travel",
      [
        { icon: "CalendarX2", title: "Booking Friction", description: "Clunky reservation flows that lose guests before checkout." },
        { icon: "MessagesSquare", title: "Fragmented Guest Support", description: "Support requests scattered across channels with no shared context." },
        { icon: "Percent", title: "Static Pricing", description: "Missed revenue from pricing that doesn't respond to demand." },
      ],
      "Our Services for Hospitality & Travel",
      [
        { icon: "CalendarCheck2", title: "Booking Engines", description: "Fast, mobile-first reservation and payment flows." },
        { icon: "Smartphone", title: "Guest Experience Apps", description: "Digital check-in, concierge, and itinerary tools." },
        { icon: "TrendingUp", title: "Dynamic Pricing Tools", description: "Revenue management systems that respond to demand in real time." },
      ],
    ),
    industryCtaBanner("Hospitality & Travel"),
  ],
};

export const mockRestaurantCafeIndustryPage: PageResponse = {
  slug: "industries/reastaurant-cafe",
  title: "Restaurant & Cafe",
  pageType: "page",
  metaTitle: "Restaurant & Cafe Software Development | Aerievo",
  metaDescription:
    "Aerievo builds ordering systems, reservation platforms, and loyalty programs for restaurants and cafes.",
  sections: [
    {
      id: "restaurant-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Restaurant & Cafe",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-11',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-11-s', text: "Thin margins mean every minute of staff time and every abandoned online order matters. We build ordering, reservation, and loyalty software that reduces friction for guests and manual work for staff." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Restaurant & Cafe",
      [
        { icon: "Utensils", title: "Order Chaos", description: "Multiple ordering channels with no single view of the kitchen queue." },
        { icon: "UserMinus", title: "Low Repeat Visits", description: "No structured loyalty program to bring guests back." },
        { icon: "Clock4", title: "Manual Reservations", description: "Phone-based booking that overwhelms front-of-house staff." },
      ],
      "Our Services for Restaurant & Cafe",
      [
        { icon: "UtensilsCrossed", title: "Ordering Systems", description: "Unified online, in-app, and kiosk ordering into one kitchen queue." },
        { icon: "Gift", title: "Loyalty Programs", description: "Points and rewards systems that drive repeat visits." },
        { icon: "CalendarCheck2", title: "Reservation Platforms", description: "Self-service table booking that reduces phone volume." },
      ],
    ),
    industryCtaBanner("Restaurant & Cafe"),
  ],
};

export const mockRealEstateIndustryPage: PageResponse = {
  slug: "industries/real-estate",
  title: "Real Estate",
  pageType: "page",
  metaTitle: "Real Estate Software Development | Aerievo",
  metaDescription:
    "Aerievo builds listing platforms, CRM tools, and property management software for real estate businesses.",
  sections: [
    {
      id: "realestate-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Real Estate",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-12',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-12-s', text: "Real estate deals move fast and involve too many stakeholders to track in spreadsheets. We build listing platforms, CRM tools, and property management systems that keep agents, owners, and tenants aligned in one system of record." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Real Estate",
      [
        { icon: "FileStack", title: "Manual Paperwork", description: "Lease and listing documents tracked across email and spreadsheets." },
        { icon: "SearchX", title: "Poor Lead Visibility", description: "No unified view of which leads are actually ready to transact." },
        { icon: "Wrench", title: "Maintenance Backlogs", description: "Tenant maintenance requests falling through the cracks." },
      ],
      "Our Services for Real Estate",
      [
        { icon: "Building2", title: "Listing Platforms", description: "Searchable, media-rich listing sites built for lead capture." },
        { icon: "Contact", title: "CRM Tools", description: "Pipeline tracking purpose-built for real estate sales cycles." },
        { icon: "ClipboardList", title: "Property Management Software", description: "Maintenance requests, rent collection, and tenant communication." },
      ],
    ),
    industryCtaBanner("Real Estate"),
  ],
};

export const mockFinanceInsuranceIndustryPage: PageResponse = {
  slug: "industries/finance-insurance",
  title: "Finance & Insurance",
  pageType: "page",
  metaTitle: "Finance & Insurance Software Development | Aerievo",
  metaDescription:
    "Aerievo builds secure fintech platforms, underwriting tools, and payment integrations for finance and insurance companies.",
  sections: [
    {
      id: "finance-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Finance & Insurance",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-13',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-13-s', text: "Trust is the product in finance and insurance. We build platforms with security and auditability designed in from the architecture stage, so your compliance team is a partner in the build, not a blocker at the end." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Finance & Insurance",
      [
        { icon: "ShieldAlert", title: "Regulatory Complexity", description: "Compliance requirements that shift by product line and region." },
        { icon: "FileClock", title: "Slow Underwriting", description: "Manual risk assessment processes that delay approvals." },
        { icon: "Lock", title: "Security Exposure", description: "Legacy systems that widen the attack surface for sensitive data." },
      ],
      "Our Services for Finance & Insurance",
      [
        { icon: "Landmark", title: "Fintech Platforms", description: "Secure, compliant applications for lending, payments, and banking." },
        { icon: "Calculator", title: "Underwriting Tools", description: "Automated risk assessment that speeds up approvals." },
        { icon: "CreditCard", title: "Payment Integrations", description: "PCI-compliant payment processing built into your workflow." },
      ],
    ),
    industryCtaBanner("Finance & Insurance"),
  ],
};

export const mockTransportationLogisticsIndustryPage: PageResponse = {
  slug: "industries/transportation-logistics",
  title: "Transportation & Logistics",
  pageType: "page",
  metaTitle: "Transportation & Logistics Software Development | Aerievo",
  metaDescription:
    "Aerievo builds fleet tracking, route optimization, and warehouse management systems for transportation and logistics companies.",
  sections: [
    {
      id: "logistics-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Transportation & Logistics",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-14',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-14-s', text: "Every mile and every square foot of warehouse space costs money. We build fleet tracking, route optimization, and warehouse management software that turns operational data into fewer empty miles and faster turnarounds." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Transportation & Logistics",
      [
        { icon: "MapPinOff", title: "Limited Fleet Visibility", description: "No real-time view of vehicle location and status." },
        { icon: "Route", title: "Inefficient Routing", description: "Manual dispatch decisions leaving fuel and time on the table." },
        { icon: "Warehouse", title: "Warehouse Blind Spots", description: "Inventory counts that don't match what's actually on the shelf." },
      ],
      "Our Services for Transportation & Logistics",
      [
        { icon: "Truck", title: "Fleet Tracking", description: "Real-time GPS and telematics dashboards." },
        { icon: "Route", title: "Route Optimization", description: "Algorithmic dispatch that cuts fuel and delivery time." },
        { icon: "Warehouse", title: "Warehouse Management Systems", description: "Accurate, real-time inventory across every location." },
      ],
    ),
    industryCtaBanner("Transportation & Logistics"),
  ],
};

export const mockManufacturingIndustryPage: PageResponse = {
  slug: "industries/industry-manufacturing",
  title: "Manufacturing",
  pageType: "page",
  metaTitle: "Manufacturing Software Development | Aerievo",
  metaDescription:
    "Aerievo builds plant floor visibility, ERP integrations, and predictive maintenance tools for manufacturers.",
  sections: [
    {
      id: "manufacturing-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Manufacturing",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-15',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-15-s', text: "Downtime on the plant floor is the single most expensive thing that can happen to a manufacturer. We build visibility and predictive maintenance tools that surface problems before they become costly stoppages." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Manufacturing",
      [
        { icon: "EyeOff", title: "Limited Plant Visibility", description: "No real-time view of machine status and throughput." },
        { icon: "PlugZap", title: "Disconnected Systems", description: "ERP, MES, and shop floor tools that don't share data." },
        { icon: "AlertTriangle", title: "Reactive Maintenance", description: "Equipment failures discovered only after they cause downtime." },
      ],
      "Our Services for Manufacturing",
      [
        { icon: "Factory", title: "Plant Floor Dashboards", description: "Real-time visibility into machine status and output." },
        { icon: "Plug", title: "ERP Integrations", description: "Unified data flow between shop floor and back office." },
        { icon: "Wrench", title: "Predictive Maintenance", description: "Sensor-driven alerts before equipment fails." },
      ],
    ),
    industryCtaBanner("Manufacturing"),
  ],
};

export const mockMediaEntertainmentIndustryPage: PageResponse = {
  slug: "industries/media-entertainment",
  title: "Media & Entertainment",
  pageType: "page",
  metaTitle: "Media & Entertainment Software Development | Aerievo",
  metaDescription:
    "Aerievo builds streaming platforms, content management systems, and audience analytics tools for media and entertainment brands.",
  sections: [
    {
      id: "media-why-us",
      sectionType: "narrativeSplit",
      sortOrder: 1,
      content: {
        sectionTitle: "Why Aerievo for Media & Entertainment",
        columns: [
          {
            content: [
              {
                _type: 'block' as const,
                _key: 'ns-16',
                style: 'normal' as const,
                children: [{ _type: 'span' as const, _key: 'ns-16-s', text: "Audiences churn the moment buffering or a clunky interface gets in the way of the content. We build streaming, content management, and analytics platforms engineered for reliability at scale and clear signal on what keeps viewers watching." }],
              },
              ],
          },
        ],
      },
    },
    industryChallengesServices(
      "Current Challenges in Media & Entertainment",
      [
        { icon: "WifiOff", title: "Streaming Reliability", description: "Buffering and downtime during peak viewership moments." },
        { icon: "FolderKanban", title: "Content Sprawl", description: "Assets scattered across systems with no unified catalog." },
        { icon: "BarChart3", title: "Unclear Audience Signal", description: "Limited visibility into what content actually retains viewers." },
      ],
      "Our Services for Media & Entertainment",
      [
        { icon: "Clapperboard", title: "Streaming Platforms", description: "Scalable video delivery built for peak-traffic reliability." },
        { icon: "FolderKanban", title: "Content Management Systems", description: "Unified catalogs across every distribution channel." },
        { icon: "BarChart3", title: "Audience Analytics", description: "Engagement data that informs content and programming decisions." },
      ],
    ),
    industryCtaBanner("Media & Entertainment"),
  ],
};

export const mockIndustryDetailPages: Record<string, PageResponse> = {
  "industries/healthcare": mockHealthcareIndustryPage,
  "industries/ecommerce-retail": mockEcommerceRetailIndustryPage,
  "industries/hospitality-travel": mockHospitalityTravelIndustryPage,
  "industries/reastaurant-cafe": mockRestaurantCafeIndustryPage,
  "industries/real-estate": mockRealEstateIndustryPage,
  "industries/finance-insurance": mockFinanceInsuranceIndustryPage,
  "industries/transportation-logistics": mockTransportationLogisticsIndustryPage,
  "industries/industry-manufacturing": mockManufacturingIndustryPage,
  "industries/media-entertainment": mockMediaEntertainmentIndustryPage,
};

// ─────────────────────────────────────────────────────────────────────────────
// Team members (documents) + Team hub page
// ─────────────────────────────────────────────────────────────────────────────

export const mockTeamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Rahul Makahaniya",
    slug: "rahul-makahaniya",
    role: "Managing Director",
    isLeadership: true,
    photo: null,
    bio: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Rahul founded Aerievo with a simple premise: software agencies fail their clients most often on communication, not code. He has spent over a decade building engineering teams that ship reliably and explain their decisions in plain language.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Before Aerievo, Rahul led delivery for enterprise software projects across manufacturing and logistics, which shaped his conviction that domain expertise matters as much as technical skill.",
          },
        ],
      },
    ],
    socialLinks: [{ platform: "linkedin", url: "https://www.linkedin.com/company/aerievo" }],
    sortOrder: 1,
    status: 1,
  },
  {
    id: "team-2",
    name: "Jay Joshi",
    slug: "megan-palms",
    role: "Chief Technology Officer",
    isLeadership: true,
    photo: null,
    bio: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Jay leads Aerievo's engineering organization, setting technical standards across every project from architecture reviews to code quality gates. He believes the best technology choice is usually the boring one that will still be maintainable in five years.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Jay has architected systems across fintech, healthcare, and ecommerce, and mentors Aerievo's engineering leads on scaling teams without sacrificing delivery speed.",
          },
        ],
      },
    ],
    socialLinks: [{ platform: "linkedin", url: "https://www.linkedin.com/company/aerievo" }],
    sortOrder: 2,
    status: 1,
  },
  {
    id: "team-3",
    name: "Maya Makahaniya",
    slug: "maya-makahaniya",
    role: "Co-Founder & Head of Design",
    isLeadership: true,
    photo: null,
    bio: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Maya co-founded Aerievo to prove that agency design work doesn't have to be an afterthought bolted on before launch. She leads the UI/UX practice, embedding designers directly into engineering sprints from day one.",
          },
        ],
      },
      {
        _type: "block",
        _key: "b2",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s2",
            text: "Her background spans product design for consumer and enterprise software, with a particular focus on research-driven design systems that hold up as products scale.",
          },
        ],
      },
    ],
    socialLinks: [{ platform: "linkedin", url: "https://www.linkedin.com/company/aerievo" }],
    sortOrder: 3,
    status: 1,
  },
  {
    id: "team-4",
    name: "Priya Nair",
    slug: "priya-nair",
    role: "Senior Frontend Engineer",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 4,
    status: 1,
  },
  {
    id: "team-5",
    name: "Daniel Okafor",
    slug: "daniel-okafor",
    role: "Senior Backend Engineer",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 5,
    status: 1,
  },
  {
    id: "team-6",
    name: "Sara Mehta",
    slug: "sara-mehta",
    role: "Product Designer",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 6,
    status: 1,
  },
  {
    id: "team-7",
    name: "Kevin Liu",
    slug: "kevin-liu",
    role: "Mobile Engineer",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 7,
    status: 1,
  },
  {
    id: "team-8",
    name: "Aisha Rahman",
    slug: "aisha-rahman",
    role: "QA Lead",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 8,
    status: 1,
  },
  {
    id: "team-9",
    name: "Tom Bennett",
    slug: "tom-bennett",
    role: "DevOps Engineer",
    isLeadership: false,
    photo: null,
    bio: [],
    socialLinks: [],
    sortOrder: 9,
    status: 1,
  },
];

export const mockTeamHubPage: PageResponse = {
  slug: "team",
  title: "Team",
  pageType: "page",
  metaTitle: "Meet the Aerievo Team | Aerievo",
  metaDescription:
    "Meet the leadership and engineering team behind Aerievo's software, web, and mobile app development work.",
  sections: [
    {
      id: "team-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Meet the People Behind Aerievo",
        subtitle:
          "A team of engineers, designers, and strategists who've spent their careers shipping software that ships on time and holds up under load.",
      },
    },
    {
      id: "team-leadership",
      sectionType: "teamGrid",
      sortOrder: 2,
      content: {
        title: "Leadership",
        variant: "leadership",
        members: mockTeamMembers.filter((m) => m.isLeadership).map((m) => ({
          name: m.name,
          slug: m.slug,
          role: m.role,
          photo: m.photo ?? undefined,
          isLeadership: m.isLeadership,
        })),
      },
    },
    {
      id: "team-all",
      sectionType: "teamGrid",
      sortOrder: 3,
      content: {
        title: "80+ Team Members",
        subtitle: "The engineers, designers, and QA specialists shipping every day",
        variant: "all",
        members: mockTeamMembers.map((m) => ({
          name: m.name,
          slug: m.slug,
          role: m.role,
          photo: m.photo ?? undefined,
          isLeadership: m.isLeadership,
        })),
      },
    },
    {
      id: "team-cta",
      sectionType: "ctaBanner",
      sortOrder: 4,
      content: {
        title: "Our Team Is Here to Support Your Team",
        description: "Whether you need to join us or hire us, we'd love to talk.",
        primaryCta: { label: "We Are Hiring", href: "/careers" },
        secondaryCta: { label: "Get in Touch", href: "/client-support" },
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────────────────────

export const mockAboutPage: PageResponse = {
  slug: "about",
  title: "About",
  pageType: "page",
  metaTitle: "About Aerievo | Software Development Company",
  metaDescription:
    "Learn about Aerievo's beginning, mission, and global team building software for ambitious companies.",
  sections: [
    {
      id: "about-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "About Aerievo",
        subtitle:
          "We started as three engineers frustrated with how agencies deliver software. We've grown into a team that ships it differently.",
      },
    },
    {
      id: "about-narrative",
      sectionType: "narrativeSplit",
      sortOrder: 2,
      content: {
        sectionTitle: "Our Story",
        columns: [
          {
            title: "The Beginning",
            content: [
              {
                _type: "block",
                _key: "b1",
                style: "normal",
                children: [{ _type: "span", _key: "s1", text: "Aerievo started in a shared workspace with three founders and one shared frustration: too many software projects failed not from bad code, but from bad communication between agency and client." }],
              },
            ],
          },
          {
            title: "Our Mission",
            content: [
              {
                _type: "block",
                _key: "b1",
                style: "normal",
                children: [{ _type: "span", _key: "s1", text: "We exist to build software that actually gets used — engineered around real workflows, delivered with transparent communication, and maintained long after launch day." }],
              },
            ],
          },
          {
            title: "We Are Global",
            content: [
              {
                _type: "block",
                _key: "b1",
                style: "normal",
                children: [{ _type: "span", _key: "s1", text: "With engineering hubs in Ahmedabad, India and a client-facing office in Rhode Island, USA, our teams work across time zones to keep projects moving around the clock." }],
              },
            ],
          },
        ],
      },
    },
    {
      id: "about-culture",
      sectionType: "iconFeatureGrid",
      sortOrder: 3,
      content: {
        title: "Our Culture",
        columns: 4,
        cards: [
          { icon: "Flame", title: "Passionate", description: "We care about the outcome, not just the ticket being closed." },
          { icon: "HeartHandshake", title: "Respectful", description: "Direct, honest communication — with clients and with each other." },
          { icon: "Target", title: "Ownership", description: "Every engineer owns their outcomes, not just their assigned tasks." },
          { icon: "Globe2", title: "Unified", description: "One team across time zones, working toward the same goal." },
        ],
      },
    },
    {
      id: "about-cta",
      sectionType: "ctaBanner",
      sortOrder: 4,
      content: {
        title: "Together, Better",
        description: "See how we work, meet the people behind it, or start a conversation.",
        primaryCta: { label: "Learn More", href: "/why-us" },
        secondaryCta: { label: "Meet the Team", href: "/team" },
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Why Us
// ─────────────────────────────────────────────────────────────────────────────

export const mockWhyUsPage: PageResponse = {
  slug: "why-us",
  title: "Why Us",
  pageType: "page",
  metaTitle: "Why Choose Aerievo | Software Development Company",
  metaDescription:
    "Aerievo combines the right people, purpose-driven process, and transparent execution to deliver software that works.",
  sections: [
    {
      id: "whyus-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Why Companies Choose Aerievo",
        subtitle: "It comes down to three things: the people, the purpose, and the process.",
        columns: 3,
        cards: [
          { icon: "Users", title: "People", description: "Senior engineers and designers who've shipped production software before." },
          { icon: "Compass", title: "Purpose", description: "We build for your business outcomes, not just the ticket in front of us." },
          { icon: "Workflow", title: "Process", description: "Agile delivery with weekly visibility into progress and blockers." },
        ],
      },
    },
    {
      id: "whyus-how",
      sectionType: "contentWithImage",
      sortOrder: 2,
      content: {
        title: "How We Do It",
        subtitle: "Our Approach",
        description:
          "Every engagement starts with a discovery phase that maps your business goals to a technical plan, followed by agile sprints with demos every two weeks — so you always know exactly where your project stands.",
        imagePosition: "right",
        points: [
          "Fixed-scope discovery before any code is written",
          "Two-week sprints with live demos, not status decks",
          "Direct access to your engineering lead, not just a project manager",
          "Post-launch support plans so the relationship doesn't end at go-live",
        ],
      },
    },
    {
      id: "whyus-cta",
      sectionType: "ctaBanner",
      sortOrder: 3,
      content: {
        title: "See It For Yourself",
        description: "Explore our services, meet the team delivering them, or book time on our calendar.",
        primaryCta: { label: "Explore Services", href: "/services" },
        secondaryCta: { label: "Schedule a Consultation", href: "/client-support" },
      },
    },
    {
      id: "whyus-leadership",
      sectionType: "teamGrid",
      sortOrder: 4,
      content: {
        title: "Executive Management",
        variant: "leadership",
        members: mockTeamMembers.filter((m) => m.isLeadership).map((m) => ({
          name: m.name,
          slug: m.slug,
          role: m.role,
          photo: m.photo ?? undefined,
          isLeadership: m.isLeadership,
        })),
      },
    },
    {
      id: "whyus-logos",
      sectionType: "logoStrip",
      sortOrder: 5,
      content: {
        title: "We Work With the Best",
        logos: [
          { name: "DCOM" },
          { name: "Swasth Hriday" },
          { name: "Northbridge Logistics" },
          { name: "Vantage Retail" },
          { name: "Clearwater Finance" },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Contact (nav label "Contact Us", slug /client-support)
// ─────────────────────────────────────────────────────────────────────────────

export const mockContactPage: PageResponse = {
  slug: "client-support",
  title: "Contact Us",
  pageType: "page",
  metaTitle: "Contact Aerievo | Schedule a Free Consultation",
  metaDescription:
    "Get in touch with Aerievo's software development team in Ahmedabad, India and Rhode Island, USA.",
  sections: [
    {
      id: "contact-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "How Can We Help You?",
        subtitle:
          "Tell us about your project and we'll get back to you within one business day.",
      },
    },
    {
      id: "contact-section",
      sectionType: "contactSection",
      sortOrder: 2,
      content: {
        title: "Get in Touch",
        form: {
          _id: "form-contact",
          name: "Contact Form",
          slug: "contact-form",
          description: "General enquiry form",
          notificationEmail: "hello@aerievo.com",
          isActive: true,
          fields: [
            { id: "f1", name: "first_name", label: "First Name", fieldType: "TEXT", isRequired: true, placeholder: "John" },
            { id: "f2", name: "last_name", label: "Last Name", fieldType: "TEXT", isRequired: true, placeholder: "Doe" },
            { id: "f3", name: "email", label: "Email", fieldType: "EMAIL", isRequired: true, placeholder: "john@company.com" },
            { id: "f4", name: "phone", label: "Phone", fieldType: "TEXT", isRequired: false, placeholder: "+1 (555) 000-0000" },
            { id: "f5", name: "message", label: "Message", fieldType: "TEXTAREA", isRequired: true, placeholder: "Tell us about your project" },
          ],
        },
        locations: [
          {
            label: "India",
            address: "Aerievo Technologies, Ahmedabad, Gujarat, India",
            phone: "+91 79 4000 1234",
            directionsUrl: "https://maps.google.com/?q=Ahmedabad+Gujarat+India",
          },
          {
            label: "USA",
            address: "Aerievo Technologies, Providence, Rhode Island, USA",
            phone: "+1 (401) 555-0142",
            directionsUrl: "https://maps.google.com/?q=Providence+Rhode+Island+USA",
          },
        ],
      },
    },
    {
      id: "contact-faq-link",
      sectionType: "ctaBanner",
      sortOrder: 3,
      content: {
        title: "Have Questions Before You Reach Out?",
        description: "Check our FAQ for answers on pricing, timelines, and how we work.",
        primaryCta: { label: "Visit FAQ", href: "/faq" },
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const mockFaqPage: PageResponse = {
  slug: "faq",
  title: "FAQ",
  pageType: "page",
  metaTitle: "Frequently Asked Questions | Aerievo",
  metaDescription:
    "Answers to common questions about working with Aerievo — pricing, timelines, tech stack, and support.",
  sections: [
    {
      id: "faq-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know before starting a project with Aerievo.",
      },
    },
    {
      id: "faq-accordion",
      sectionType: "faqAccordion",
      sortOrder: 2,
      content: {
        title: "Common Questions",
        items: [
          {
            question: "What are your two primary services?",
            answer:
              "Custom Web and Mobile App Development: Aerievo offers comprehensive solutions for designing, developing, and deploying tailored web and mobile applications that cater to your unique business needs. We bring your ideas to life with cutting-edge technology and user-centric design. Dedicated Development Team: Aerievo provides you with a skilled and dedicated software development team that becomes an extension of your organization. From project inception to completion, our team works exclusively on your projects, ensuring timely delivery and optimal results.",
          },
          {
            question: "What other services do you offer?",
            answer:
              "UI/UX Design, Game Development, QA & Software Testing, E-commerce Solutions, Enterprise Solutions, Content Management Systems, Virtual Reality (VR) & Augmented Reality (AR) Development, IT Consultation, Mobile Backend & APIs, Software Product Development, Industry-Specific Solutions, Maintenance & Support, IT Infrastructure Services, Digital Marketing, and Cloud Solutions. This comprehensive suite covers a broad spectrum of technological requirements across industries.",
          },
          {
            question: "What business problems do you solve?",
            answer:
              "By spearheading IT strategy and compliance counsel, Aerievo addresses crucial voids in the service provider sector. Our proficiency aids clients in: Enhancing Efficiency (saving time, costs, and boosting profitability), Elevating Morale (reducing employee frustration and enhancing team spirit), Fortifying Security (strengthening defenses against breaches, attacks, and legal concerns), and Mitigating Risks (lowering cybersecurity and compliance vulnerabilities).",
          },
          {
            question: "How are you different?",
            answer:
              "Holistic Approach: We approach challenges comprehensively, merging technology, design, and strategy for impactful solutions. Experience: With a decade of experience, we tackle diverse projects, delivering on-time and within budget. Tailored Solutions: We customize solutions to fit your unique needs, ensuring efficiency and effectiveness. Transparency: Open communication and clear processes ensure you're involved at every stage. Skilled Team: Our seasoned experts bring a blend of technical prowess and creative innovation. Agile Methodology: Our agile practices ensure adaptability, swift response, and seamless collaboration. Customer-Centric: Your satisfaction is our priority; we work to exceed your expectations.",
          },
          {
            question: "How do you maximize responsiveness?",
            answer:
              "Prompt Communication: We ensure quick and clear communication throughout the project lifecycle. Agile Methodology: Our agile approach enables swift adjustments and prioritization of tasks. Dedicated Teams: We allocate dedicated experts to each project, ensuring immediate attention. Regular Updates: Regular progress updates keep you informed and engaged. Collaborative Tools: We use collaborative platforms to streamline communication and feedback. 24/7 Support: Our round-the-clock support ensures assistance whenever you need it.",
          },
          {
            question: "What is your industry focus?",
            answer:
              "Healthcare: Transforming patient care through innovative digital solutions. Logistics & Transportation: Enhancing supply chain efficiency and visibility. Real Estate: Revolutionizing property management and customer experiences. Finance & Insurance: Providing secure and user-friendly financial solutions. Retail & E-commerce: Elevating online shopping experiences and operations. Manufacturing: Optimizing production processes and resource management. Restaurant & Cafe: Enhancing customer service and operational efficiency. Hospitality & Travel: Enriching guest experiences through digital innovation. Media & Entertainment: Delivering engaging and immersive digital content.",
          },
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Careers
// ─────────────────────────────────────────────────────────────────────────────

export const mockCareersPage: PageResponse = {
  slug: "careers",
  title: "Careers",
  pageType: "page",
  metaTitle: "Careers at Aerievo | Join Our Team",
  metaDescription:
    "Explore open roles and benefits at Aerievo, a software, mobile, and web app development company.",
  sections: [
    {
      id: "careers-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: {
        title: "Aerievo Is a Place to Grow",
        subtitle:
          "We invest in engineers and designers who want to do the best work of their career on real products, not busywork.",
      },
    },
    {
      id: "careers-benefits",
      sectionType: "benefitsGrid",
      sortOrder: 2,
      content: {
        title: "Benefits & Perks",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        benefits: [
          { icon: "HeartPulse", title: "Health Insurance", description: "Comprehensive medical coverage for you and your family." },
          { icon: "Home", title: "Remote Flexibility", description: "Hybrid and remote options across most roles." },
          { icon: "BookOpen", title: "Learning Budget", description: "Annual budget for courses, books, and conferences." },
          { icon: "TrendingUp", title: "Performance Bonus", description: "Bi-annual bonuses tied to individual and company performance." },
          { icon: "Palmtree", title: "Paid Time Off", description: "Generous PTO policy plus company holidays." },
          { icon: "Users", title: "Team Retreats", description: "Annual company-wide retreats to connect in person." },
          { icon: "Gift", title: "Referral Bonus", description: "Cash bonus for every successful engineering referral." },
        ],
      },
    },
    {
      id: "careers-cta",
      sectionType: "ctaBanner",
      sortOrder: 3,
      content: {
        title: "Explore Open Positions",
        description: "See current openings or learn more about what it's like to work here.",
        primaryCta: { label: "Explore Open Positions", href: "/client-support" },
        secondaryCta: { label: "Learn About the Company", href: "/about" },
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Legal pages (Privacy Policy, Terms & Conditions) — sample/placeholder copy
// ─────────────────────────────────────────────────────────────────────────────

function legalParagraphBlock(text: string, key: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    children: [{ _type: "span" as const, _key: `${key}-s`, text }],
  };
}

export const mockPrivacyPolicyPage: PageResponse = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  pageType: "page",
  metaTitle: "Privacy Policy | Aerievo",
  metaDescription: "Aerievo's privacy policy covering how we collect, use, and protect your data.",
  sections: [
    {
      id: "privacy-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: { title: "Privacy Policy", subtitle: "Last updated: January 1, 2026" },
    },
    {
      id: "privacy-content",
      sectionType: "paragraphEditor",
      sortOrder: 2,
      content: {
        title: "Sample Placeholder Text — Replace Before Launch",
        content: [
          legalParagraphBlock(
            "This Privacy Policy is placeholder sample text describing, in general terms, how Aerievo Technologies (\"Aerievo\", \"we\", \"us\") would typically handle personal data collected through this website and our client engagements. It is provided as a structural template only and should be reviewed by qualified legal counsel before publication.",
            "p1",
          ),
          legalParagraphBlock(
            "Information We Collect. We may collect information you provide directly, such as your name, email address, phone number, and company details when you submit a contact form or request a consultation. We may also collect usage data automatically, including IP address, browser type, and pages visited, via cookies and similar technologies.",
            "p2",
          ),
          legalParagraphBlock(
            "How We Use Information. Collected information is typically used to respond to inquiries, deliver requested services, improve our website and offerings, and communicate updates relevant to a prospective or existing client relationship. We do not sell personal information to third parties.",
            "p3",
          ),
          legalParagraphBlock(
            "Data Sharing. We may share information with service providers who support our operations (such as hosting, analytics, or email delivery providers), each bound by confidentiality obligations, or when required by law.",
            "p4",
          ),
          legalParagraphBlock(
            "Data Retention & Security. We retain personal data only as long as necessary for the purposes described above and apply reasonable technical and organizational measures to protect it against unauthorized access, alteration, or disclosure.",
            "p5",
          ),
          legalParagraphBlock(
            "Your Rights & Contact. Depending on your jurisdiction, you may have rights to access, correct, or delete your personal data. For any privacy-related requests, contact hello@aerievo.com. This placeholder policy should be replaced with counsel-reviewed language reflecting your actual data practices and applicable law (e.g., GDPR, CCPA) before this site goes live.",
            "p6",
          ),
        ],
      },
    },
  ],
};

export const mockTermsConditionsPage: PageResponse = {
  slug: "terms-conditions",
  title: "Terms & Conditions",
  pageType: "page",
  metaTitle: "Terms & Conditions | Aerievo",
  metaDescription: "Aerievo's terms and conditions governing use of this website and our services.",
  sections: [
    {
      id: "terms-hero",
      sectionType: "hero",
      sortOrder: 1,
      content: { title: "Terms & Conditions", subtitle: "Last updated: January 1, 2026" },
    },
    {
      id: "terms-content",
      sectionType: "paragraphEditor",
      sortOrder: 2,
      content: {
        title: "Sample Placeholder Text — Replace Before Launch",
        content: [
          legalParagraphBlock(
            "These Terms & Conditions are placeholder sample text outlining, in general structure, the terms that would typically govern use of the Aerievo Technologies (\"Aerievo\") website and engagement of our software development services. This is a structural template only and must be reviewed by qualified legal counsel before publication.",
            "t1",
          ),
          legalParagraphBlock(
            "Acceptance of Terms. By accessing this website or engaging Aerievo for services, you agree to be bound by these terms and any statement of work or master services agreement executed between the parties, which shall govern in the event of any conflict.",
            "t2",
          ),
          legalParagraphBlock(
            "Services. Aerievo provides custom software, web, and mobile application development services as described in individual proposals or statements of work. Specific deliverables, timelines, and fees are defined per engagement, not by this general terms page.",
            "t3",
          ),
          legalParagraphBlock(
            "Intellectual Property. Except as otherwise agreed in a signed statement of work, work product delivered and paid for under a client engagement is owned by the client upon final payment. Aerievo retains rights to general methodologies, frameworks, and pre-existing tools used in delivery.",
            "t4",
          ),
          legalParagraphBlock(
            "Limitation of Liability. To the maximum extent permitted by law, Aerievo's liability arising from any engagement is limited to the fees paid for the specific service giving rise to the claim, except in cases of gross negligence or willful misconduct.",
            "t5",
          ),
          legalParagraphBlock(
            "Governing Law & Contact. These terms are governed by the laws of the jurisdiction specified in your executed agreement with Aerievo. For questions about these terms, contact hello@aerievo.com. This placeholder text should be replaced with counsel-reviewed terms before this site goes live.",
            "t6",
          ),
        ],
      },
    },
  ],
};

export const mockLegalAndSimplePages: Record<string, PageResponse> = {
  about: mockAboutPage,
  "why-us": mockWhyUsPage,
  "client-support": mockContactPage,
  faq: mockFaqPage,
  careers: mockCareersPage,
  "privacy-policy": mockPrivacyPolicyPage,
  "terms-conditions": mockTermsConditionsPage,
  services: mockServicesHubPage,
  industries: mockIndustriesHubPage,
  team: mockTeamHubPage,
};

// ─────────────────────────────────────────────────────────────────────────────
// Blog posts (also reused as Case Studies per spec point 15)
// ─────────────────────────────────────────────────────────────────────────────

function blogParagraph(text: string, key: string) {
  return {
    _type: "block" as const,
    _key: key,
    style: "normal" as const,
    children: [{ _type: "span" as const, _key: `${key}-s`, text }],
  };
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "How Aerievo Transformed Sales Operations with DCOM",
    slug: "aerievo-transformed-sales-operations-dcom",
    excerpt:
      "When DCOM's sales team was drowning in spreadsheets and disconnected tools, Aerievo built a unified operations platform that cut order processing time in half.",
    content: [
      blogParagraph(
        "DCOM Web Solutions came to Aerievo with a familiar problem: a fast-growing sales team held together by spreadsheets, email threads, and a CRM nobody trusted. Orders slipped through the cracks, reporting took days to assemble, and the sales leadership had no real-time view into pipeline health.",
        "p1",
      ),
      blogParagraph(
        "Our team started with two weeks of discovery, shadowing DCOM's sales reps and operations staff to map every step of the order lifecycle — from lead capture through fulfillment handoff. That process surfaced a critical insight: the bottleneck wasn't a lack of tools, it was too many disconnected ones.",
        "p2",
      ),
      blogParagraph(
        "We designed and built a single sales operations platform that consolidated lead tracking, quote generation, and order handoff into one system, integrated directly with DCOM's existing fulfillment tools via API rather than requiring a disruptive full migration.",
        "p3",
      ),
      blogParagraph(
        "The result: order processing time dropped by roughly 50%, sales reporting that used to take three days now generates in real time, and DCOM's leadership team credits the platform with directly supporting their next stage of growth.",
        "p4",
      ),
    ],
    publishedAt: new Date("2026-05-12").toISOString(),
    authorName: "Aerievo Team",
    authorLink: undefined,
    status: "published",
    featuredImage: null,
    categories: [{ id: "cat-case-studies", name: "Case Studies", slug: "case-studies" }],
    tags: [{ id: "tag-sales", name: "Sales Operations", slug: "sales-operations" }],
    metaTitle: "How Aerievo Transformed Sales Operations with DCOM",
    metaDescription:
      "See how Aerievo built a unified sales operations platform for DCOM, cutting order processing time in half.",
  },
  {
    id: "blog-2",
    title: "Transforming Digital Heart Care: Aerievo's Collaboration with Swasth Hriday",
    slug: "transforming-digital-heart-care-swasth-hriday",
    excerpt:
      "Aerievo partnered with Swasth Hriday Cardiac Care to build a patient-monitoring platform that clinicians actually trust, validated directly with practicing cardiologists.",
    content: [
      blogParagraph(
        "Swasth Hriday Cardiac Care approached Aerievo with a challenge many healthcare technology vendors underestimate: building software that clinicians will actually use requires designing with them, not just for them.",
        "p1",
      ),
      blogParagraph(
        "Rather than starting from a generic patient-monitoring template, our UI/UX team ran structured workshops with Swasth Hriday's cardiology staff to understand exactly how they review patient vitals, flag anomalies, and hand off cases between shifts.",
        "p2",
      ),
      blogParagraph(
        "The resulting platform surfaces the clinical signals doctors care about first, with HIPAA-aware data handling built into the architecture from day one rather than retrofitted before a compliance audit.",
        "p3",
      ),
      blogParagraph(
        "Since launch, Swasth Hriday's care teams have reported faster review cycles and higher confidence in remote patient monitoring — proof that healthcare software succeeds when compliance and clinical usability are treated as equally important from the start.",
        "p4",
      ),
    ],
    publishedAt: new Date("2026-04-03").toISOString(),
    authorName: "Aerievo Team",
    authorLink: undefined,
    status: "published",
    featuredImage: null,
    categories: [{ id: "cat-case-studies", name: "Case Studies", slug: "case-studies" }],
    tags: [{ id: "tag-healthcare", name: "Healthcare", slug: "healthcare" }],
    metaTitle: "Transforming Digital Heart Care: Aerievo x Swasth Hriday",
    metaDescription:
      "How Aerievo built a clinician-trusted patient monitoring platform in collaboration with Swasth Hriday Cardiac Care.",
  },
  {
    id: "blog-3",
    title: "7 Things to Consider While Choosing the Tech Stack for Your Web Application",
    slug: "7-things-consider-choosing-tech-web-application",
    excerpt:
      "Choosing a tech stack isn't about chasing trends — it's about matching technology to your team, timeline, and growth plans. Here's our framework.",
    content: [
      blogParagraph(
        "Every founder eventually asks the same question: what tech stack should we build on? The honest answer is that there's no universally 'best' stack — only the right one for your specific constraints. Here are the seven factors we walk clients through before recommending anything.",
        "p1",
      ),
      blogParagraph(
        "1. Team expertise. The most elegant architecture is worthless if your team can't maintain it. We weigh what your in-house or future hires can realistically support long-term.",
        "p2",
      ),
      blogParagraph(
        "2. Time to market. Some frameworks trade long-term flexibility for faster initial delivery. If you're validating a market, that trade-off is often worth making.",
        "p3",
      ),
      blogParagraph(
        "3. Expected scale. A stack that comfortably serves 10,000 users may need significant rearchitecting at 10 million. We plan for your 18-month horizon, not just launch day.",
        "p4",
      ),
      blogParagraph(
        "4. Ecosystem and community. Mature ecosystems mean more libraries, more available talent, and faster troubleshooting when something breaks in production.",
        "p5",
      ),
      blogParagraph(
        "5. Integration requirements. If you're integrating with legacy systems, payment processors, or specific hardware, that can eliminate certain stacks outright.",
        "p6",
      ),
      blogParagraph(
        "6. Total cost of ownership. Licensing, hosting, and hiring costs vary significantly across stacks — factor in the full lifecycle cost, not just development.",
        "p7",
      ),
      blogParagraph(
        "7. Security and compliance needs. Regulated industries like healthcare and finance often narrow the field considerably before performance is even considered.",
        "p8",
      ),
      blogParagraph(
        "At Aerievo, we default to React/Next.js and Node.js for most web applications because of the ecosystem maturity and talent pool, but we'll recommend something else entirely if your constraints call for it.",
        "p9",
      ),
    ],
    publishedAt: new Date("2026-03-18").toISOString(),
    authorName: "Aerievo Team",
    authorLink: undefined,
    status: "published",
    featuredImage: null,
    categories: [{ id: "cat-engineering", name: "Engineering", slug: "engineering" }],
    tags: [{ id: "tag-tech-stack", name: "Tech Stack", slug: "tech-stack" }],
    metaTitle: "7 Things to Consider While Choosing Your Web App Tech Stack",
    metaDescription:
      "A practical framework for choosing the right tech stack for your web application, from Aerievo's engineering team.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Case Studies — reuse the first 2 blog posts (WP site pulls "Case Studies"
// category posts) modeled as successStory documents, per spec point 15.
// ─────────────────────────────────────────────────────────────────────────────

export const mockSuccessStories: SuccessStory[] = [
  {
    id: "case-1",
    name: "How Aerievo Transformed Sales Operations with DCOM",
    slug: "aerievo-transformed-sales-operations-dcom",
    content: mockBlogPosts[0].content,
    sortDescription:
      "When DCOM's sales team was drowning in spreadsheets and disconnected tools, Aerievo built a unified operations platform that cut order processing time in half.",
    client: "DCOM Web Solutions",
    industry: "Software / SaaS",
    status: 1,
    metaTitle: "How Aerievo Transformed Sales Operations with DCOM",
    metaDescription:
      "See how Aerievo built a unified sales operations platform for DCOM, cutting order processing time in half.",
    ogImage: null,
    isIndex: true,
    featuredImage: null,
    media: null,
    createdAt: new Date("2026-05-12").toISOString(),
    updatedAt: new Date("2026-05-12").toISOString(),
  },
  {
    id: "case-2",
    name: "Transforming Digital Heart Care: Aerievo's Collaboration with Swasth Hriday",
    slug: "transforming-digital-heart-care-swasth-hriday",
    content: mockBlogPosts[1].content,
    sortDescription:
      "Aerievo partnered with Swasth Hriday Cardiac Care to build a patient-monitoring platform that clinicians actually trust, validated directly with practicing cardiologists.",
    client: "Swasth Hriday Cardiac Care",
    industry: "Healthcare",
    status: 1,
    metaTitle: "Transforming Digital Heart Care: Aerievo x Swasth Hriday",
    metaDescription:
      "How Aerievo built a clinician-trusted patient monitoring platform in collaboration with Swasth Hriday Cardiac Care.",
    ogImage: null,
    isIndex: true,
    featuredImage: null,
    media: null,
    createdAt: new Date("2026-04-03").toISOString(),
    updatedAt: new Date("2026-04-03").toISOString(),
  },
];

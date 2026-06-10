// Edit this file to update everything on the site — no component changes needed.

export const site = {
  name: "Andy Volpe",
  initials: "AV",
  role: "Design Leader",
  tagline:
    "I design user-intuitive experiences for large, complex platforms — developer tools, application security, compliance, DevOps, and infrastructure.",
  email: "hello@example.com", // TODO: real email
  resumeUrl: "", // e.g. "/resume.pdf" — drop the file in /public and set the path; empty hides the button

  about: [
    "I'm a Design Leader specializing in user-intuitive experiences for large, complex platforms, focusing particularly on Developer Experiences, Application Security, Compliance, DevOps, and Infrastructure applications.",
    "My work involves close collaboration with cross-functional teams, simplifying intricate challenges into intuitive, effective solutions that genuinely enhance users' workflows.",
  ],

  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/your-handle" }, // TODO: real handle
    { label: "GitHub", url: "https://github.com/mnmlwzrd" },
  ],

  skills: [
    "Design Leadership",
    "UX Strategy",
    "Developer Experience",
    "AppSec & DevSecOps",
    "Compliance",
    "JTBD / ODI",
    "UX Metrics",
    "Prototyping",
    "Design Systems",
  ],

  experience: [
    {
      company: "Invert",
      role: "Lead Product Designer",
      period: "2025 — Present",
      summary: "Leading product design at Invert.",
      highlights: [],
    },
    {
      company: "GitLab",
      role: "Manager, Product Design · Developer Experiences",
      period: "2023 — 2025",
      summary:
        "Led the Developer Experience design team, overseeing code review, source control, and developer collaboration tools.",
      highlights: [
        "Led and developed a team of product designers, providing structured career development, coaching, and feedback to foster critical thinking, leadership, and strategic problem-solving.",
        "Defined long-term design direction for GitLab's developer tools, aligning design with product and engineering roadmaps to improve efficiency, usability, and reliability.",
        "Integrated JTBD & ODI methodologies into team workflows so roadmap decisions were rooted in real developer needs, improving adoption of underserved outcomes.",
        "Introduced task completion, usability friction, and flow efficiency metrics — going beyond CSAT and SUS to measure developer productivity and design impact.",
        "Led design critiques, cross-functional UX reviews, and process improvements, ensuring research-driven insights shaped design decisions.",
      ],
    },
    {
      company: "GitLab",
      role: "Staff Product Designer · Security & Compliance",
      period: "2021 — 2023",
      summary:
        "Led the design and implementation of GitLab's Application Security capabilities within the world's first end-to-end DevSecOps platform.",
      highlights: [
        "Designed security experiences that balanced usability and risk mitigation, helping enterprise teams secure their software supply chain without slowing development.",
        "Partnered with security engineers, product managers, and compliance leaders to embed security into CI/CD pipelines, cloud-native environments, and automation workflows.",
        "Developed UX frameworks for vulnerability management, compliance enforcement, and security policy automation, enabling scalable security solutions for large development teams.",
      ],
    },
    {
      company: "GitLab",
      role: "Product & Sr. Product Designer · Security & Compliance",
      period: "2018 — 2021",
      summary:
        "Designed enterprise-grade security experiences for threat detection, risk assessment, and proactive security enforcement.",
      highlights: [
        "Created intuitive workflows that balanced security enforcement with developer velocity, reducing friction in security scanning and compliance automation.",
        "Led UX strategy for vulnerability management, risk mitigation, and secure code review, embedding security best practices without disrupting developer productivity.",
        "Developed security automation and compliance tools, making it easier for teams to scale security operations efficiently.",
      ],
    },
    {
      company: "American Greetings",
      role: "Sr. Product Designer · Innovation & New Ventures",
      period: "2017 — 2018",
      summary:
        "Drove the design and development of innovative digital products using Lean Startup methodologies.",
      highlights: [
        "Designed and prototyped new digital products, creating wireframes and interactive prototypes for rapid iteration and testing.",
        "Led market and competitor research, identifying consumer needs and industry trends to inform product strategy and innovation.",
        "Collaborated with engineering, marketing, and business stakeholders to launch and scale new digital ventures.",
      ],
    },
  ],

  education: [
    {
      school: "Kent State University",
      degree: "Master's Degree · User Experience Design",
      period: "2012 — 2014",
    },
    {
      school: "Northern Michigan University",
      degree: "Bachelor of Fine Arts · Human-Centered Design",
      period: "2005 — 2010",
    },
  ],

  beyond: [
    "I'm happily married with two young daughters, who keep me on my toes and add plenty of joy to everyday life. I'm also an ex-college hockey player (goalie) from Northern Michigan University, and while I've hung up the skates, I've traded the rink for the golf course whenever I get a chance.",
    "In my free time, I love reading historical fiction and sci-fi — I'm always on the lookout for the next page-turner. One of my long-term goals is to earn my private pilot's license, and I've got a soft spot for F1 and GT3 racing (though I secretly find GT3 to be better racing). I also enjoy tinkering with my home server and self-managed applications, feeding my curiosity for technology and hands-on experimentation.",
  ],
} as const;

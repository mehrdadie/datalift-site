import { about, profile } from "@/content/profile"

/** Person + ProfessionalService schema, rendered once on the home page. */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${profile.url}/#person`,
        name: profile.name,
        url: profile.url,
        jobTitle: profile.role,
        email: `mailto:${profile.email}`,
        description: about.paragraphs[0],
        /* A real image on the Person node is one of the strongest signals for
           resolving this name to a single entity rather than a guess. */
        image: {
          "@type": "ImageObject",
          "@id": `${profile.url}/#portrait`,
          url: `${profile.url}/images/mehrdad-fashami.jpg`,
          contentUrl: `${profile.url}/images/mehrdad-fashami.jpg`,
          width: 1229,
          height: 1536,
          caption: `${profile.name}, ${profile.role}`,
        },
        sameAs: [profile.linkedin],
        knowsAbout: about.tags,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${profile.url}/#service`,
        name: `${profile.name} — ${profile.role}`,
        url: profile.url,
        description:
          "Independent consulting and implementation across data integration, business intelligence, marketing analytics, CRM architecture, revenue operations and automation.",
        provider: { "@id": `${profile.url}/#person` },
        areaServed: "Worldwide",
        serviceType: [
          "Data integration",
          "Business intelligence",
          "Marketing analytics",
          "Revenue attribution",
          "CRM architecture",
          "Workflow automation",
          "AI implementation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${profile.url}/#website`,
        url: profile.url,
        name: profile.name,
        publisher: { "@id": `${profile.url}/#person` },
        inLanguage: "en",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

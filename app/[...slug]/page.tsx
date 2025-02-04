export const dynamicParams = false

export async function generateStaticParams() {
  return [
    { slug: ["about", "company"] },
    { slug: ["about", "people"] },
    { slug: ["about", "history"] },
    { slug: ["about", "certifications"] },
    { slug: ["infrastructure", "tooling"] },
    { slug: ["infrastructure", "inspection-training"] },
    { slug: ["infrastructure", "production"] },
    { slug: ["success-stories", "clients"] },
    { slug: ["success-stories", "awards"] },
    { slug: ["success-stories", "end-users"] },
    { slug: ["corporate-csr", "annual-day"] },
    { slug: ["corporate-csr", "blood-donation"] },
    { slug: ["corporate-csr", "community"] },
    { slug: ["careers", "openings"] },
  ]
}

export default function Page({ params }: { params: { slug: string[] } }) {
  // Your page component logic here
  // This is just a placeholder, replace with your actual component
  return <div>Dynamic page for: {params.slug.join("/")}</div>
}

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  // Add your metadata logic here
  return {
    title: `Sudeep Polymers - ${params.slug.join("")}`,
  }
}


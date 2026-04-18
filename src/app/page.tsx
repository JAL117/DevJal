import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { StackStrip } from "@/components/home/stack-strip";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <StackStrip />
      <ContactCTA />
    </>
  );
}

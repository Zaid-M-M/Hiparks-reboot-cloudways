import HomeWrapper from "./HomeWrapper";
import { fetchTestimonials } from "@/src/lib/fetchTestimonials";
import TestimonialsSchemaServer from "./ClientTestimonials/TestimonialsSchemaServer";

export const revalidate = 3600; // Revalidate every hour

export default async function HomeWrapperServer() {
  // Fetch with caching
  const testimonials = await fetchTestimonials();

  return (
    <>
      <TestimonialsSchemaServer
        testimonials={testimonials}
        siteName="Your Site Name"
      />
      <HomeWrapper testimonials={testimonials} />
    </>
  );
}

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <Heading
            title="Building software that lasts."
            subtitle="A modern portfolio engineered with performance, accessibility and craftsmanship."
          />
        </Container>
      </Section>
    </main>
  );
}
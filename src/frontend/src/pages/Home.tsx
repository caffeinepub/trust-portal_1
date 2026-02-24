import { Link } from '@tanstack/react-router';
import { Heart, Users, Leaf, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-trust/10 via-background to-nature/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/hero-banner.dim_1200x600.png"
            alt="Community helping"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Building a Better Tomorrow, Together
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              GreenStripe Trust is dedicated to creating lasting positive change through community-driven initiatives,
              sustainable development, and compassionate service.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Our Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg leading-relaxed text-foreground">
              To empower communities through sustainable initiatives, education, and compassionate service. We believe
              in creating opportunities that foster growth, dignity, and hope for all individuals, while preserving our
              environment for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">What We Do</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-trust/10">
                <Heart className="h-8 w-8 text-trust" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Community Support</h3>
              <p className="text-muted-foreground">
                Providing essential resources, education, and support to underserved communities, helping families
                thrive and build better futures.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-nature/10">
                <Leaf className="h-8 w-8 text-nature" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Environmental Care</h3>
              <p className="text-muted-foreground">
                Implementing sustainable practices and conservation projects that protect our planet and promote
                eco-friendly living in our communities.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">Empowerment Programs</h3>
              <p className="text-muted-foreground">
                Offering skill development, mentorship, and opportunities that enable individuals to achieve their full
                potential and contribute to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary/5 to-trust/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Join Us in Making a Difference</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Every contribution, big or small, helps us create lasting positive change in our community.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Us Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

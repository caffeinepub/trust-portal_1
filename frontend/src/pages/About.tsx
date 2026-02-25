import { Target, Award, Heart, User, Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-trust/10">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/about-background.dim_1200x400.png"
            alt="About background"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our journey, values, and the dedicated team working to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="border-b border-border/40 bg-gradient-to-br from-trust/5 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-trust/10">
                <User className="h-6 w-6 text-trust" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Founder</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-trust to-primary text-3xl font-bold text-white">
                  AD
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-1 text-2xl font-bold text-card-foreground">Anjani Dwivedi (Kavya)</h3>
                  <p className="mb-1 text-base font-medium italic text-trust">Teacher, Writer and Social Worker</p>
                  <p className="mb-4 text-lg text-muted-foreground">Founder & Visionary</p>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex items-center justify-center gap-2 md:justify-start">
                      <Phone className="h-5 w-5 text-trust" />
                      <a
                        href="tel:9651044109"
                        className="text-lg font-medium text-foreground transition-colors hover:text-trust"
                      >
                        9651044109
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    With a deep commitment to community service and social welfare, Anjani Dwivedi (Kavya) founded
                    Manavdeep Seva Trust to create meaningful impact in the lives of those who need it most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our History</h2>
            </div>
            <div className="space-y-6 text-foreground">
              <p className="leading-relaxed">
                Founded in 2015, GreenStripe Trust emerged from a simple yet powerful vision: to create meaningful,
                lasting change in communities that need it most. What began as a small group of dedicated volunteers
                has grown into a comprehensive organization serving thousands of individuals each year.
              </p>
              <p className="leading-relaxed">
                Over the years, we've expanded our reach and impact, launching innovative programs in education,
                environmental conservation, and community development. Our journey has been marked by countless stories
                of transformation, resilience, and hope.
              </p>
              <p className="leading-relaxed">
                Today, we continue to build on our foundation of compassion and service, adapting to meet the evolving
                needs of our communities while staying true to our core values of dignity, sustainability, and
                empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-trust/10">
                <Target className="h-6 w-6 text-trust" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              We envision a world where every individual has access to the resources, opportunities, and support they
              need to thrive. A world where communities are resilient, sustainable, and united in their commitment to
              the common good. Through our work, we strive to be a catalyst for positive change, inspiring others to
              join us in building a more just, compassionate, and sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-nature/10">
                <Heart className="h-6 w-6 text-nature" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Values</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Compassion</h3>
                <p className="text-muted-foreground">
                  We approach every interaction with empathy, understanding, and genuine care for the well-being of
                  others.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of honesty, transparency, and ethical conduct in all our operations.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Sustainability</h3>
                <p className="text-muted-foreground">
                  We are committed to practices that protect our environment and ensure resources for future
                  generations.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in enabling individuals and communities to take charge of their own development and
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from '@tanstack/react-router';
import { Heart, Users, Leaf, ArrowRight, Award, BookOpen } from 'lucide-react';

const founderBooks = [
  {
    src: '/assets/BOOK (1).jpeg',
    title: 'गंगा की वाणी',
  },
  {
    src: '/assets/BOOK (2).jpeg',
    title: 'मन के मोती',
  },
  {
    src: '/assets/BOOK (3).jpeg',
    title: 'श्री कृष्ण दर्शन',
  },
  {
    src: '/assets/BOOK (4).jpeg',
    title: 'वृद्धाश्रम',
  },
];

const founderAwards = [
  {
    cover: '/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM (3).jpeg',
    title: 'आचार्य अकादमी प्रमाण-पत्र',
    subtitle: 'Acharya Academy, Chuliana, Rohtak (Haryana)',
  },
  {
    cover: '/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM (3).jpeg',
    title: 'उत्तर प्रदेश महिला रत्न सम्मान',
    subtitle: 'Neeraj Smriti Kavya Mahotsav, Jhansi (UP)',
  },
  {
    cover: '/assets/WhatsApp Image 2026-02-24 at 4.46.16 PM.jpeg',
    title: 'मानव दीप सेवा ट्रस्ट उद्घाटन',
    subtitle: 'Book Release – Vridhaashram, Deoria',
  },
];

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

      {/* Founder Section */}
      <section className="border-y border-border/40 bg-gradient-to-br from-trust/5 via-background to-nature/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Founder Profile */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              {/* Founder Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-trust/20 to-nature/20 blur-xl"></div>
                  <img
                    src="/assets/generated/founder-anjani.dim_400x500.jpeg"
                    alt="Anjani Dwivedi - Founder"
                    width={256}
                    height={256}
                    className="relative h-64 w-64 rounded-full border-4 border-background object-cover object-top shadow-2xl"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h2 className="mb-2 text-4xl font-bold text-primary md:text-5xl">मानव सेवा परमो धर्मः</h2>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">Anjani Dwivedi (Kavya)</h3>
                  <p className="text-base font-medium italic text-trust">Teacher, Writer and Social Worker</p>
                  <p className="text-lg text-muted-foreground">Founder & President</p>
                  <p className="leading-relaxed text-foreground">
                    Guided by the principle that service is the highest duty, our founder has dedicated her life to
                    uplifting communities and creating meaningful change through compassionate action and sustainable
                    initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Books by Our Founder */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Books by Our Founder</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
                {founderBooks.map((book, index) => (
                  <div
                    key={index}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-[5/7] overflow-hidden bg-muted">
                      <img
                        src={book.src}
                        alt={book.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-trust/10');
                            const placeholder = document.createElement('div');
                            placeholder.className = 'text-center p-4';
                            placeholder.innerHTML = `<div class="text-3xl mb-2">📖</div><p class="text-sm text-muted-foreground">${book.title}</p>`;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-sm font-semibold text-card-foreground leading-tight">{book.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Awards & Recognition</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
                {founderAwards.map((award, index) => (
                  <div
                    key={index}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-[5/7] overflow-hidden bg-muted">
                      <img
                        src={award.cover}
                        alt={award.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-trust/10');
                            const placeholder = document.createElement('div');
                            placeholder.className = 'text-center p-4';
                            placeholder.innerHTML = `<div class="text-3xl mb-2">🏆</div><p class="text-sm text-muted-foreground">${award.title}</p>`;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-sm font-semibold text-card-foreground leading-tight">{award.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground leading-tight">{award.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="border-b border-border/40 bg-muted/30 py-16">
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

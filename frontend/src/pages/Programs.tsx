import { Leaf, BookOpen, Users, Heart, Sprout, GraduationCap } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education & Literacy',
      description:
        'Providing access to quality education, literacy programs, and learning resources for children and adults in underserved communities.',
      details: [
        'After-school tutoring programs',
        'Adult literacy classes',
        'Scholarship opportunities',
        'Digital learning resources',
      ],
      color: 'primary',
    },
    {
      icon: Leaf,
      title: 'Environmental Conservation',
      description:
        'Leading initiatives to protect and restore natural ecosystems while promoting sustainable practices in local communities.',
      details: [
        'Tree plantation drives',
        'Waste management programs',
        'Clean water initiatives',
        'Renewable energy projects',
      ],
      color: 'nature',
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description:
        'Ensuring communities have access to essential healthcare services, health education, and preventive care programs.',
      details: [
        'Free health camps',
        'Nutrition programs',
        'Mental health support',
        'Health awareness campaigns',
      ],
      color: 'trust',
    },
    {
      icon: Users,
      title: 'Community Development',
      description:
        'Building stronger, more resilient communities through infrastructure development and social support programs.',
      details: [
        'Community centers',
        'Infrastructure projects',
        'Social support networks',
        'Emergency relief services',
      ],
      color: 'primary',
    },
    {
      icon: GraduationCap,
      title: 'Skill Development',
      description:
        'Empowering individuals with vocational training and skill development programs to enhance employability and entrepreneurship.',
      details: [
        'Vocational training courses',
        'Entrepreneurship workshops',
        'Job placement assistance',
        'Mentorship programs',
      ],
      color: 'trust',
    },
    {
      icon: Sprout,
      title: 'Sustainable Agriculture',
      description:
        'Supporting farmers with sustainable farming techniques, resources, and market access to improve livelihoods and food security.',
      details: [
        'Organic farming training',
        'Seed distribution programs',
        'Irrigation support',
        'Market linkage initiatives',
      ],
      color: 'nature',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'nature':
        return 'bg-nature/10 text-nature';
      case 'trust':
        return 'bg-trust/10 text-trust';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-nature/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Our Programs</h1>
            <p className="text-lg text-muted-foreground">
              Discover the diverse initiatives and projects we're implementing to create lasting positive change in
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg"
                >
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full ${getColorClasses(program.color)}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">{program.title}</h3>
                  <p className="mb-4 text-muted-foreground">{program.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-card-foreground">Key Activities:</p>
                    <ul className="space-y-1">
                      {program.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-primary">Our Impact</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-primary">10,000+</div>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-nature">50+</div>
                <p className="text-muted-foreground">Active Projects</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 text-4xl font-bold text-trust">25+</div>
                <p className="text-muted-foreground">Communities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-gradient-to-br from-primary/10 to-trust/10 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-primary">Get Involved</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Want to support our programs or learn more about how you can contribute? We'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

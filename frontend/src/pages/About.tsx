import { Target, Award, Heart, User, Phone, BookOpen } from 'lucide-react';

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

            {/* Founder Profile Card */}
            <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                <div className="flex-shrink-0 text-center">
                  <div className="relative inline-block">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-trust/20 to-primary/20 blur-lg"></div>
                    <img
                      src="/assets/generated/founder-anjani.dim_400x500.jpeg"
                      alt="Anjani Dwivedi"
                      className="relative h-48 w-48 rounded-full border-4 border-background object-cover object-top shadow-xl"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-2xl font-bold text-foreground">Anjani Dwivedi (Kavya)</h3>
                  <p className="mb-1 text-base font-medium italic text-trust">Teacher, Writer and Social Worker</p>
                  <p className="mb-4 text-muted-foreground">Founder & President, Manavdeep Seva Trust</p>
                  <p className="mb-4 leading-relaxed text-foreground">
                    With a deep commitment to social welfare and community development, Anjani Dwivedi founded
                    Manavdeep Seva Trust to serve the underprivileged and create sustainable change. Her work spans
                    education, women empowerment, elder care, and environmental conservation.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-trust" />
                    <span>9651044109</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Books by Our Founder */}
            <div className="mt-10">
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
            <div className="mt-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Awards & Recognition</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">

                {/* Award 1 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 11.48.57 AM.jpeg"
                      alt="आचार्य अकादमी प्रमाण-पत्र"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">आचार्य अकादमी प्रमाण-पत्र</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Acharya Academy, Chuliana, Rohtak (Haryana)</p>
                  </div>
                </div>

                {/* Award 2 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 11.49.14 AM.jpeg"
                      alt="उत्तर प्रदेश महिला रत्न सम्मान"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">उत्तर प्रदेश महिला रत्न सम्मान</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Neeraj Smriti Kavya Mahotsav, Jhansi (UP)</p>
                  </div>
                </div>

                {/* Award 3 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 11.49.15 AM.jpeg"
                      alt="मानव दीप सेवा ट्रस्ट उद्घाटन"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">मानव दीप सेवा ट्रस्ट उद्घाटन</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Book Release – Vridhaashram, Deoria</p>
                  </div>
                </div>

                {/* Award 4 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 11.49.16 AM.jpeg"
                      alt="विद्या भारती सप्त शक्ति संगम"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">विद्या भारती सप्त शक्ति संगम</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Vidya Bharati Akhil Bharatiya Shiksha Sansthan</p>
                  </div>
                </div>

                {/* Award 5 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 12.45.41 PM (1).jpeg"
                      alt="एक्सीलेंट कवियत्री अवार्ड"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">एक्सीलेंट कवियत्री अवार्ड</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">उत्तर प्रदेश कवियत्री अवार्ड सेरेमनी, लखनऊ 2025</p>
                  </div>
                </div>

                {/* Award 6 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 12.45.41 PM.jpeg"
                      alt="शिक्षक सम्मान समारोह"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">शिक्षक सम्मान समारोह</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Innerwheel Club of Deoria Srijan – Certificate of Appreciation</p>
                  </div>
                </div>

                {/* Award 7 */}
                <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src="/assets/WhatsApp Image 2026-02-25 at 12.45.42 PM (1).jpeg"
                      alt="Acharya Academy Praman Patra"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-card-foreground leading-tight">Acharya Academy Praman Patra</p>
                    <p className="mt-1 text-xs text-muted-foreground leading-tight">Acharya Academy Chuliana, Rohtak – Praman Patra</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="border-b border-border/40 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-4 leading-relaxed">
                Manavdeep Seva Trust was founded with a vision to serve humanity and create a society where every
                individual has access to basic necessities, education, and opportunities for growth. Rooted in the
                belief that "मानव सेवा परमो धर्मः" (Service to humanity is the highest duty), the trust has been
                working tirelessly to uplift communities across Uttar Pradesh.
              </p>
              <p className="leading-relaxed">
                From humble beginnings in Deoria, the trust has grown into a recognized organization that touches
                thousands of lives through its diverse programs spanning education, healthcare, women empowerment,
                elder care, and environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Vision & Values</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-trust/10">
                  <Heart className="h-7 w-7 text-trust" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  Serving every individual with empathy, dignity, and unconditional care regardless of background or
                  circumstance.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Purpose</h3>
                <p className="text-sm text-muted-foreground">
                  Every initiative is driven by a clear mission to create sustainable, long-lasting positive change in
                  the communities we serve.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-nature/10">
                  <Award className="h-7 w-7 text-nature" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Operating with full transparency, accountability, and ethical standards in all our programs and
                  financial dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

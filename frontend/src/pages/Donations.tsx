import { Link } from '@tanstack/react-router';
import { Heart, HandHeart, Users, Leaf, CreditCard, Building2, Smartphone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Donations() {
  const donationAmounts = [
    { amount: 500, impact: 'Provides educational materials for 5 children' },
    { amount: 1000, impact: 'Supports a family with essential supplies for a month' },
    { amount: 2500, impact: 'Funds a community health camp' },
    { amount: 5000, impact: 'Sponsors skill development training for 10 individuals' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-trust/10 via-background to-nature/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/assets/generated/donation-hero.dim_1200x600.png"
            alt="Support our cause"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Your Generosity Changes Lives
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Every donation to Manavdeep Seva Trust helps us continue our mission of serving communities,
              protecting the environment, and empowering individuals to build better futures.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-y border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Your Impact</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-trust/10">
                <Heart className="h-8 w-8 text-trust" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">5000+</h3>
              <p className="text-sm text-muted-foreground">Lives Touched</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-nature/10">
                <Leaf className="h-8 w-8 text-nature" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">50+</h3>
              <p className="text-sm text-muted-foreground">Environmental Projects</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">200+</h3>
              <p className="text-sm text-muted-foreground">Families Supported</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-trust/10">
                <HandHeart className="h-8 w-8 text-trust" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">100+</h3>
              <p className="text-sm text-muted-foreground">Community Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary">Choose Your Contribution</h2>
            <p className="mb-12 text-center text-muted-foreground">
              Select an amount or enter a custom donation to support our initiatives
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {donationAmounts.map((option) => (
                <Card key={option.amount} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">₹{option.amount.toLocaleString('en-IN')}</CardTitle>
                    <CardDescription>{option.impact}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Select Amount
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Custom Amount</CardTitle>
                <CardDescription>Enter any amount you wish to contribute</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button>Donate</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="border-t border-border/40 bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-primary">Payment Details</h2>
            <p className="mb-12 text-center text-muted-foreground">
              You can make your donation through bank transfer or UPI
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Bank Details */}
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Bank Transfer</CardTitle>
                  <CardDescription>Direct bank account transfer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Account Name</p>
                    <p className="text-base font-semibold text-foreground">Manavdeep Seva Trust</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Account Number</p>
                    <p className="text-base font-semibold text-foreground">1234567890</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">IFSC Code</p>
                    <p className="text-base font-semibold text-foreground">SBIN0001234</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Bank Name</p>
                    <p className="text-base font-semibold text-foreground">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Branch</p>
                    <p className="text-base font-semibold text-foreground">Main Branch, Delhi</p>
                  </div>
                </CardContent>
              </Card>

              {/* UPI Details */}
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-trust/10">
                    <Smartphone className="h-6 w-6 text-trust" />
                  </div>
                  <CardTitle>UPI Payment</CardTitle>
                  <CardDescription>Quick and easy UPI transfer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">UPI ID</p>
                    <p className="text-base font-semibold text-foreground">manavdeeptrust@upi</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Payment Apps</p>
                    <p className="text-sm text-muted-foreground">
                      Google Pay, PhonePe, Paytm, or any UPI-enabled app
                    </p>
                  </div>
                  <div className="mt-6 rounded-lg border border-border bg-background p-4">
                    <p className="text-sm font-medium text-foreground">Scan QR Code</p>
                    <div className="mt-3 flex h-32 items-center justify-center rounded-md bg-muted">
                      <CreditCard className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">QR code for UPI payment</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transaction Details Notice */}
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-5 text-center shadow-sm">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-foreground md:text-base">
                After making your donation, please send the transaction details to{' '}
                <a href="tel:9651044109" className="font-semibold text-primary hover:underline">
                  9651044109
                </a>{' '}
                or email us at{' '}
                <a
                  href="mailto:manavdeepsevatrust@gmail.com"
                  className="font-semibold text-primary hover:underline"
                >
                  manavdeepsevatrust@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary/5 to-trust/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">Have Questions?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our team is here to help you with any queries about donations or our programs.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

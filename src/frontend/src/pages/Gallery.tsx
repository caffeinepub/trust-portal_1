import { ImageOff, VideoOff } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Gallery() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-nature/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore moments from our journey of service, compassion, and community impact through photos and videos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="mx-auto mb-12 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            {/* Photo Gallery */}
            <TabsContent value="photos" className="mt-0">
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <ImageOff className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">No Photos Available</h3>
                <p className="mt-2 max-w-md text-center text-muted-foreground">
                  Photos from our events and activities will be added here soon. Stay tuned for updates!
                </p>
              </div>
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="videos" className="mt-0">
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <VideoOff className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">No Videos Available</h3>
                <p className="mt-2 max-w-md text-center text-muted-foreground">
                  Videos showcasing our work and impact will be shared here soon. Check back later for updates!
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

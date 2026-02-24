import { ImageOff, VideoOff, Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetAllPhotos, useGetAllVideos } from '../hooks/useQueries';

// Static gallery photos using the actual uploaded asset filenames
const STATIC_PHOTOS = [
  { id: 'static-1', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.17 PM.jpeg', title: 'Activity Photo 1' },
  { id: 'static-2', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM.jpeg', title: 'Activity Photo 2' },
  { id: 'static-3', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (1).jpeg', title: 'Activity Photo 3' },
  { id: 'static-4', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (2).jpeg', title: 'Activity Photo 4' },
  { id: 'static-5', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (3).jpeg', title: 'Activity Photo 5' },
  { id: 'static-6', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM.jpeg', title: 'Activity Photo 6' },
  { id: 'static-7', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM (1).jpeg', title: 'Activity Photo 7' },
  { id: 'static-8', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM (2).jpeg', title: 'Activity Photo 8' },
  { id: 'static-9', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM.jpeg', title: 'Activity Photo 9' },
  { id: 'static-10', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM (1).jpeg', title: 'Activity Photo 10' },
  { id: 'static-11', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM (2).jpeg', title: 'Activity Photo 11' },
  { id: 'static-12', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM.jpeg', title: 'Activity Photo 12' },
  { id: 'static-13', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM (1).jpeg', title: 'Activity Photo 13' },
  { id: 'static-14', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM (2).jpeg', title: 'Activity Photo 14' },
  { id: 'static-15', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM.jpeg', title: 'Activity Photo 15' },
  { id: 'static-16', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM (1).jpeg', title: 'Activity Photo 16' },
  { id: 'static-17', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM (2).jpeg', title: 'Activity Photo 17' },
  { id: 'static-18', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM.jpeg', title: 'Activity Photo 18' },
  { id: 'static-19', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM (1).jpeg', title: 'Activity Photo 19' },
  { id: 'static-20', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM (2).jpeg', title: 'Activity Photo 20' },
  { id: 'static-21', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.24 PM.jpeg', title: 'Activity Photo 21' },
  { id: 'static-22', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.24 PM (1).jpeg', title: 'Activity Photo 22' },
  { id: 'static-23', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.25 PM.jpeg', title: 'Activity Photo 23' },
  { id: 'static-24', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM.jpeg', title: 'Activity Photo 24' },
  { id: 'static-25', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM (1).jpeg', title: 'Activity Photo 25' },
  { id: 'static-26', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM (2).jpeg', title: 'Activity Photo 26' },
  { id: 'static-27', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM.jpeg', title: 'Activity Photo 27' },
  { id: 'static-28', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM (1).jpeg', title: 'Activity Photo 28' },
  { id: 'static-29', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM (2).jpeg', title: 'Activity Photo 29' },
  { id: 'static-30', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM.jpeg', title: 'Activity Photo 30' },
  { id: 'static-31', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM (1).jpeg', title: 'Activity Photo 31' },
  { id: 'static-32', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM (2).jpeg', title: 'Activity Photo 32' },
  { id: 'static-33', src: '/assets/WhatsApp Image 2026-02-24 at 4.46.29 PM (1).jpeg', title: 'Activity Photo 33' },
];

export default function Gallery() {
  const { data: backendPhotos = [], isLoading: photosLoading } = useGetAllPhotos();
  const { data: videos = [], isLoading: videosLoading } = useGetAllVideos();

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
              {photosLoading ? (
                <div className="flex min-h-[400px] items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {/* Backend-uploaded photos (shown first, most recent first) */}
                  {backendPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={photo.image.getDirectURL()}
                          alt={photo.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-1">{photo.title}</h3>
                      </div>
                    </div>
                  ))}

                  {/* Static activity photos */}
                  {STATIC_PHOTOS.map((photo) => (
                    <div
                      key={photo.id}
                      className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty state only when no photos at all */}
              {!photosLoading && backendPhotos.length === 0 && STATIC_PHOTOS.length === 0 && (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <ImageOff className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">No Photos Available</h3>
                  <p className="mt-2 max-w-md text-center text-muted-foreground">
                    Photos from our events and activities will be added here soon. Stay tuned for updates!
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="videos" className="mt-0">
              {videosLoading ? (
                <div className="flex min-h-[400px] items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : videos.length === 0 ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <VideoOff className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">No Videos Available</h3>
                  <p className="mt-2 max-w-md text-center text-muted-foreground">
                    Videos showcasing our work and impact will be shared here soon. Check back later for updates!
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-video overflow-hidden">
                        <video
                          src={video.videoUrl}
                          className="h-full w-full object-cover"
                          controls
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{video.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

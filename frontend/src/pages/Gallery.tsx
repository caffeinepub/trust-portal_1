import { ImageOff, VideoOff, Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetAllPhotos, useGetAllVideos } from '../hooks/useQueries';

export default function Gallery() {
  const { data: photos = [], isLoading: photosLoading } = useGetAllPhotos();
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
              ) : photos.length === 0 ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 p-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <ImageOff className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">No Photos Available</h3>
                  <p className="mt-2 max-w-md text-center text-muted-foreground">
                    Photos from our events and activities will be added here soon. Stay tuned for updates!
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo) => (
                    <div key={photo.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={photo.image.getDirectURL()}
                          alt={photo.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{photo.title}</h3>
                      </div>
                    </div>
                  ))}
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
                    <div key={video.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
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

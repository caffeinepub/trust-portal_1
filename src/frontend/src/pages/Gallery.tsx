import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ImageOff,
  Loader2,
  Music,
  Sparkles,
  VideoOff,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGetAllPhotos, useGetAllVideos } from "../hooks/useQueries";

// Static gallery photos using the actual uploaded asset filenames
const STATIC_PHOTOS = [
  {
    id: "static-1",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.17 PM.jpeg",
    title: "Activity Photo 1",
  },
  {
    id: "static-2",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM.jpeg",
    title: "Activity Photo 2",
  },
  {
    id: "static-3",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (1).jpeg",
    title: "Activity Photo 3",
  },
  {
    id: "static-4",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (2).jpeg",
    title: "Activity Photo 4",
  },
  {
    id: "static-5",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.18 PM (3).jpeg",
    title: "Activity Photo 5",
  },
  {
    id: "static-6",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM.jpeg",
    title: "Activity Photo 6",
  },
  {
    id: "static-7",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM (1).jpeg",
    title: "Activity Photo 7",
  },
  {
    id: "static-8",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.19 PM (2).jpeg",
    title: "Activity Photo 8",
  },
  {
    id: "static-9",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM.jpeg",
    title: "Activity Photo 9",
  },
  {
    id: "static-10",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM (1).jpeg",
    title: "Activity Photo 10",
  },
  {
    id: "static-11",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.20 PM (2).jpeg",
    title: "Activity Photo 11",
  },
  {
    id: "static-12",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM.jpeg",
    title: "Activity Photo 12",
  },
  {
    id: "static-13",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM (1).jpeg",
    title: "Activity Photo 13",
  },
  {
    id: "static-14",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.21 PM (2).jpeg",
    title: "Activity Photo 14",
  },
  {
    id: "static-15",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM.jpeg",
    title: "Activity Photo 15",
  },
  {
    id: "static-16",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM (1).jpeg",
    title: "Activity Photo 16",
  },
  {
    id: "static-17",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.22 PM (2).jpeg",
    title: "Activity Photo 17",
  },
  {
    id: "static-18",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM.jpeg",
    title: "Activity Photo 18",
  },
  {
    id: "static-19",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM (1).jpeg",
    title: "Activity Photo 19",
  },
  {
    id: "static-20",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.23 PM (2).jpeg",
    title: "Activity Photo 20",
  },
  {
    id: "static-21",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.24 PM.jpeg",
    title: "Activity Photo 21",
  },
  {
    id: "static-22",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.24 PM (1).jpeg",
    title: "Activity Photo 22",
  },
  {
    id: "static-23",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.25 PM.jpeg",
    title: "Activity Photo 23",
  },
  {
    id: "static-24",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM.jpeg",
    title: "Activity Photo 24",
  },
  {
    id: "static-25",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM (1).jpeg",
    title: "Activity Photo 25",
  },
  {
    id: "static-26",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.26 PM (2).jpeg",
    title: "Activity Photo 26",
  },
  {
    id: "static-27",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM.jpeg",
    title: "Activity Photo 27",
  },
  {
    id: "static-28",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM (1).jpeg",
    title: "Activity Photo 28",
  },
  {
    id: "static-29",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.27 PM (2).jpeg",
    title: "Activity Photo 29",
  },
  {
    id: "static-30",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM.jpeg",
    title: "Activity Photo 30",
  },
  {
    id: "static-31",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM (1).jpeg",
    title: "Activity Photo 31",
  },
  {
    id: "static-32",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.28 PM (2).jpeg",
    title: "Activity Photo 32",
  },
  {
    id: "static-33",
    src: "/assets/WhatsApp Image 2026-02-24 at 4.46.29 PM (1).jpeg",
    title: "Activity Photo 33",
  },
];

// MutedVideo: always muted via ref to ensure DOM attribute is set (React muted bug workaround)
function MutedVideo({
  src,
  className,
  controls,
}: { src: string; className?: string; controls?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      controls={controls}
      className={className}
      playsInline
    >
      <track kind="captions" />
    </video>
  );
}

export default function Gallery() {
  const { data: backendPhotos = [], isLoading: photosLoading } =
    useGetAllPhotos();
  const { data: videos = [], isLoading: videosLoading } = useGetAllVideos();
  const [activeTab, setActiveTab] = useState("photos");

  const isVideosTab = activeTab === "videos";

  // Bansuri background audio element ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play/pause bansuri background music based on active tab
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isVideosTab) {
      audio.play().catch(() => {
        // Autoplay may be blocked by browser; silently ignore
      });
    } else {
      audio.pause();
    }
  }, [isVideosTab]);

  // Pause and reset audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hidden bansuri background audio — plays only when Videos tab is active */}
      <audio
        ref={audioRef}
        src="/assets/generated/bansuri-background.mp3"
        loop
        preload="auto"
        style={{ display: "none" }}
      >
        <track kind="captions" />
      </audio>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-nature/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore moments from our journey of service, compassion, and
              community impact through photos and videos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="photos"
            className="w-full"
            onValueChange={(val) => setActiveTab(val)}
          >
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
                <div className="space-y-12">
                  {/* ── Birthday Celebration Event Highlight Section ── */}
                  <div className="rounded-2xl border border-yellow-300/40 bg-gradient-to-br from-yellow-50/60 via-background to-orange-50/40 p-6 shadow-md md:p-8">
                    {/* Section header */}
                    <div className="mb-6 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-600">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="mb-1 inline-block rounded-full bg-yellow-400/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-yellow-700">
                          Event Highlight
                        </span>
                        <h2 className="text-xl font-bold text-foreground md:text-2xl">
                          School के बच्चों का जन्मदिन — मानवदीप सेवा ट्रस्ट
                        </h2>
                      </div>
                    </div>

                    {/* Hindi descriptive text */}
                    <div className="rounded-xl border border-border bg-card/60 p-5 text-base leading-relaxed text-foreground/90 shadow-sm">
                      <p>
                        मानवदीप सेवा ट्रस्ट द्वारा school के बच्चों का जन्मदिन मनाया
                        गया।
                      </p>
                    </div>
                  </div>

                  {/* ── Holi Event Highlight Section ── */}
                  <div className="rounded-2xl border border-trust/20 bg-gradient-to-br from-trust/5 via-background to-nature/5 p-6 shadow-md md:p-8">
                    {/* Section header */}
                    <div className="mb-6 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-trust/15 text-trust">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="mb-1 inline-block rounded-full bg-trust/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-trust">
                          Event Highlight
                        </span>
                        <h2 className="text-xl font-bold text-foreground md:text-2xl">
                          Holi Celebration at Bal Sanrakshan Griha, Deoria
                        </h2>
                      </div>
                    </div>

                    {/* Hindi descriptive text */}
                    <div className="mb-8 rounded-xl border border-border bg-card/60 p-5 text-base leading-relaxed text-foreground/90 shadow-sm">
                      <p className="mb-3">
                        बाल संरक्षण गृह देवरिया में अंजनी द्विवेदी (काव्या) का मानवदीप सेवा
                        ट्रस्ट द्वारा होली बच्चों के साथ मनाया गया।
                      </p>
                      <p className="mb-3">
                        जिसमे बच्चों को गुलाल लगाकर मिठाई खिलाई गई और खेल सामग्री जैसे
                        कैरम बोर्ड, बैडमिंटन, गेंद, लुडो, बैट इत्यादि दिया गया।
                      </p>
                      <p>बाद में बच्चों को भोजन भी ट्रस्ट द्वारा कराया गया।</p>
                    </div>

                    {/* Holi event photo grid — using actual uploaded WhatsApp images from March 2, 2026 */}
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.40 PM.jpeg"
                          alt="होली उत्सव - अंजनी द्विवेदी बच्चों के साथ"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.41 PM.jpeg"
                          alt="होली उत्सव - बच्चों को गुलाल लगाया गया"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.41 PM (1).jpeg"
                          alt="होली उत्सव - बच्चों को मिठाई खिलाई गई"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.41 PM (2).jpeg"
                          alt="होली उत्सव - खेल सामग्री वितरण"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.42 PM.jpeg"
                          alt="होली उत्सव - मानवदीप सेवा ट्रस्ट बैनर के साथ"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="w-full overflow-hidden rounded-lg bg-muted">
                        <img
                          src="/assets/WhatsApp Image 2026-03-02 at 3.59.42 PM (1).jpeg"
                          alt="होली उत्सव - बाल संरक्षण गृह देवरिया"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── All other photos grid ── */}
                  <div>
                    {(backendPhotos.length > 0 || STATIC_PHOTOS.length > 0) && (
                      <h2 className="mb-6 text-xl font-bold text-foreground">
                        Activity Photos
                      </h2>
                    )}
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
                            <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                              {photo.title}
                            </h3>
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
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          </div>
                          <div className="p-3">
                            <h3 className="text-sm font-semibold text-foreground line-clamp-1">
                              {photo.title}
                            </h3>
                          </div>
                        </div>
                      ))}

                      {backendPhotos.length === 0 &&
                        STATIC_PHOTOS.length === 0 && (
                          <div className="col-span-full flex min-h-[300px] flex-col items-center justify-center gap-3 text-muted-foreground">
                            <ImageOff className="h-12 w-12 opacity-40" />
                            <p className="text-lg font-medium">No photos yet</p>
                            <p className="text-sm">
                              Photos will appear here once uploaded
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            {/* Video Gallery */}
            <TabsContent value="videos" className="mt-0">
              {/* Bansuri background music indicator */}
              <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Music className="h-4 w-4 text-trust animate-pulse" />
                <span>बांसुरी संगीत बज रहा है…</span>
              </div>

              {videosLoading ? (
                <div className="flex min-h-[400px] items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="space-y-10">
                  {/* ── Holi Event Highlight Video Section ── */}
                  <div className="rounded-2xl border border-trust/20 bg-gradient-to-br from-trust/5 via-background to-nature/5 p-6 shadow-md md:p-8">
                    {/* Section header */}
                    <div className="mb-6 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-trust/15 text-trust">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="mb-1 inline-block rounded-full bg-trust/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-trust">
                          Event Highlight
                        </span>
                        <h2 className="text-xl font-bold text-foreground md:text-2xl">
                          Holi Celebration at Bal Sanrakshan Griha, Deoria
                        </h2>
                      </div>
                    </div>

                    {/* Hindi descriptive text */}
                    <div className="mb-6 rounded-xl border border-border bg-card/60 p-5 text-base leading-relaxed text-foreground/90 shadow-sm">
                      <p className="mb-3">
                        बाल संरक्षण गृह देवरिया में अंजनी द्विवेदी (काव्या) का मानवदीप सेवा
                        ट्रस्ट द्वारा होली बच्चों के साथ मनाया गया।
                      </p>
                      <p className="mb-3">
                        जिसमे बच्चों को गुलाल लगाकर मिठाई खिलाई गई और खेल सामग्री जैसे
                        कैरम बोर्ड, बैडमिंटन, गेंद, लुडो, बैट इत्यादि दिया गया।
                      </p>
                      <p>बाद में बच्चों को भोजन भी ट्रस्ट द्वारा कराया गया।</p>
                    </div>

                    {/* Holi celebration videos */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                        <div className="aspect-video overflow-hidden bg-muted">
                          <MutedVideo
                            src="/assets/WhatsApp Video 2026-03-02 at 3.59.41 PM.mp4"
                            controls
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground">
                            होली उत्सव - बाल संरक्षण गृह देवरिया
                          </h3>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <VolumeX className="h-3 w-3" />
                            <span>Original audio muted</span>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                        <div className="aspect-video overflow-hidden bg-muted">
                          <MutedVideo
                            src="/assets/WhatsApp Video 2026-03-02 at 9.13.12 PM (1).mp4"
                            controls
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground">
                            होली उत्सव - मानवदीप सेवा ट्रस्ट
                          </h3>
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <VolumeX className="h-3 w-3" />
                            <span>Original audio muted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Backend-uploaded videos ── */}
                  {videos.length > 0 && (
                    <div>
                      <h2 className="mb-6 text-xl font-bold text-foreground">
                        More Videos
                      </h2>
                      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video) => (
                          <div
                            key={video.id}
                            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                          >
                            <div className="aspect-video overflow-hidden bg-muted">
                              <MutedVideo
                                src={video.videoUrl}
                                controls
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-foreground line-clamp-2">
                                {video.title}
                              </h3>
                              <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                                <VolumeX className="h-3 w-3" />
                                <span>Original audio muted</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Image as ImageIcon,
  Info,
  Loader2,
  Trash2,
  Upload,
  Video as VideoIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ExternalBlob } from "../backend";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useDeletePhoto,
  useDeleteVideo,
  useGetAllPhotos,
  useGetAllVideos,
  usePhotoUpload,
  useVideoUpload,
} from "../hooks/useQueries";

export default function Admin() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  // Photo upload state
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoUploadProgress, setPhotoUploadProgress] = useState(0);

  // Video upload state
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState("");

  // Mutations and queries
  const photoUpload = usePhotoUpload();
  const videoUpload = useVideoUpload();
  const { data: photos = [], isLoading: photosLoading } = useGetAllPhotos();
  const { data: videos = [], isLoading: videosLoading } = useGetAllVideos();
  const deletePhoto = useDeletePhoto();
  const deleteVideo = useDeleteVideo();

  const getErrorMessage = (error: unknown) =>
    error instanceof Error ? error.message : String(error);

  const handlePhotoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile || !photoTitle.trim()) {
      toast.error("Please select a photo and enter a title");
      return;
    }

    try {
      const arrayBuffer = await photoFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const externalBlob = ExternalBlob.fromBytes(
        uint8Array,
      ).withUploadProgress((percentage) => {
        setPhotoUploadProgress(percentage);
      });

      console.log("Uploading photo...", {
        title: photoTitle,
        fileSize: photoFile.size,
      });

      await photoUpload.mutateAsync({
        title: photoTitle,
        image: externalBlob,
      });

      toast.success("Photo uploaded successfully!");
      setPhotoFile(null);
      setPhotoTitle("");
      setPhotoUploadProgress(0);
      const fileInput = document.getElementById(
        "photo-file",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Photo upload error:", error);
      toast.error(`Upload failed: ${getErrorMessage(error)}`);
    }
  };

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile || !videoTitle.trim()) {
      toast.error("Please select a video and enter a title");
      return;
    }

    try {
      const videoUrl = URL.createObjectURL(videoFile);

      await videoUpload.mutateAsync({
        title: videoTitle,
        videoUrl: videoUrl,
      });

      toast.success("Video uploaded successfully!");
      setVideoFile(null);
      setVideoTitle("");
      const fileInput = document.getElementById(
        "video-file",
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Video upload error:", error);
      toast.error(`Upload failed: ${getErrorMessage(error)}`);
    }
  };

  const handleDeletePhoto = async (id: string) => {
    try {
      await deletePhoto.mutateAsync(id);
      toast.success("Photo deleted successfully!");
    } catch (error) {
      console.error("Delete photo error:", error);
      toast.error(`Delete failed: ${getErrorMessage(error)}`);
    }
  };

  const handleDeleteVideo = async (id: string) => {
    try {
      await deleteVideo.mutateAsync(id);
      toast.success("Video deleted successfully!");
    } catch (error) {
      console.error("Delete video error:", error);
      toast.error(`Delete failed: ${getErrorMessage(error)}`);
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Panel</CardTitle>
            <CardDescription>
              Login karein apni gallery mein photos aur videos upload karne ke
              liye
              <br />
              <span className="text-xs text-muted-foreground">
                Please login to upload photos and videos to the gallery
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Button
              data-ocid="admin.login.button"
              onClick={login}
              disabled={isLoggingIn}
              size="lg"
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

            {/* Helper info card for custom domain issues */}
            <div
              className="w-full rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm dark:border-blue-800 dark:bg-blue-950"
              data-ocid="admin.domain.panel"
            >
              <div className="mb-2 flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300">
                <Info className="h-4 w-4 shrink-0" />
                <span>Admin Panel नहीं खुल रहा?</span>
              </div>
              <p className="mb-3 text-blue-700 dark:text-blue-300">
                अगर website का link काम नहीं कर रहा, तो नीचे दिए steps follow करें:
              </p>
              <ol className="space-y-1.5 text-blue-600 dark:text-blue-400">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold">1.</span>
                  <span>
                    <strong>caffeine.ai</strong> पर जाएं और अपने account में login
                    करें
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold">2.</span>
                  <span>
                    अपना project <strong>&quot;Trust Portal&quot;</strong> खोलें
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold">3.</span>
                  <span>
                    ऊपर <strong>Preview</strong> button दबाएं — एक नया link खुलेगा
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold">4.</span>
                  <span>
                    उस link के अंत में{" "}
                    <strong className="rounded bg-blue-100 px-1 font-mono text-xs dark:bg-blue-900">
                      /admin
                    </strong>{" "}
                    लगाएं और वहाँ से login करें
                  </span>
                </li>
              </ol>
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100"
              >
                caffeine.ai पर जाएं →
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-trust/10 via-background to-nature/10 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Admin Panel
          </h1>
          <p className="mt-2 text-muted-foreground">
            Upload and manage photos and videos for the gallery
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upload" data-ocid="admin.upload.tab">
                Upload
              </TabsTrigger>
              <TabsTrigger value="manage" data-ocid="admin.manage.tab">
                Manage
              </TabsTrigger>
            </TabsList>

            {/* Upload Tab */}
            <TabsContent value="upload" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Photo Upload */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" />
                      Upload Photo
                    </CardTitle>
                    <CardDescription>
                      Upload photos to the gallery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePhotoUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="photo-title">Title *</Label>
                        <Input
                          id="photo-title"
                          data-ocid="admin.photo.title.input"
                          value={photoTitle}
                          onChange={(e) => setPhotoTitle(e.target.value)}
                          placeholder="Enter photo title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="photo-file">Photo File *</Label>
                        <Input
                          id="photo-file"
                          data-ocid="admin.photo.upload_button"
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          onChange={(e) =>
                            setPhotoFile(e.target.files?.[0] || null)
                          }
                          required
                        />
                      </div>
                      {photoUploadProgress > 0 && photoUploadProgress < 100 && (
                        <div
                          className="space-y-2"
                          data-ocid="admin.photo.loading_state"
                        >
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Uploading...</span>
                            <span>{photoUploadProgress}%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-primary transition-all duration-300"
                              style={{ width: `${photoUploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      <Button
                        type="submit"
                        data-ocid="admin.photo.submit_button"
                        disabled={photoUpload.isPending}
                        className="w-full"
                      >
                        {photoUpload.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Photo
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Video Upload */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <VideoIcon className="h-5 w-5" />
                      Upload Video
                    </CardTitle>
                    <CardDescription>
                      Upload videos to the gallery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleVideoUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="video-title">Title *</Label>
                        <Input
                          id="video-title"
                          data-ocid="admin.video.title.input"
                          value={videoTitle}
                          onChange={(e) => setVideoTitle(e.target.value)}
                          placeholder="Enter video title"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="video-file">Video File *</Label>
                        <Input
                          id="video-file"
                          data-ocid="admin.video.upload_button"
                          type="file"
                          accept="video/mp4,video/webm"
                          onChange={(e) =>
                            setVideoFile(e.target.files?.[0] || null)
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        data-ocid="admin.video.submit_button"
                        disabled={videoUpload.isPending}
                        className="w-full"
                      >
                        {videoUpload.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Video
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Manage Tab */}
            <TabsContent value="manage" className="space-y-8">
              {/* Photos Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Manage Photos</CardTitle>
                  <CardDescription>
                    View and delete uploaded photos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {photosLoading ? (
                    <div
                      className="flex items-center justify-center py-12"
                      data-ocid="admin.photos.loading_state"
                    >
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : photos.length === 0 ? (
                    <div
                      className="py-12 text-center text-muted-foreground"
                      data-ocid="admin.photos.empty_state"
                    >
                      No photos uploaded yet
                    </div>
                  ) : (
                    <div
                      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      data-ocid="admin.photos.list"
                    >
                      {photos.map((photo, index) => (
                        <div
                          key={photo.id}
                          className="group relative overflow-hidden rounded-lg border border-border"
                          data-ocid={`admin.photos.item.${index + 1}`}
                        >
                          <img
                            src={photo.image.getDirectURL()}
                            alt={photo.title}
                            className="aspect-video w-full object-cover"
                          />
                          <div className="p-3">
                            <h3 className="font-medium text-foreground">
                              {photo.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(photo.uploadedAt)}
                            </p>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="mt-2 w-full"
                                  data-ocid={`admin.photos.delete_button.${index + 1}`}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent data-ocid="admin.photos.dialog">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Photo?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete &quot;
                                    {photo.title}&quot;? This action cannot be
                                    undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel data-ocid="admin.photos.cancel_button">
                                    Cancel
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    data-ocid="admin.photos.confirm_button"
                                    onClick={() => handleDeletePhoto(photo.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Videos Management */}
              <Card>
                <CardHeader>
                  <CardTitle>Manage Videos</CardTitle>
                  <CardDescription>
                    View and delete uploaded videos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {videosLoading ? (
                    <div
                      className="flex items-center justify-center py-12"
                      data-ocid="admin.videos.loading_state"
                    >
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : videos.length === 0 ? (
                    <div
                      className="py-12 text-center text-muted-foreground"
                      data-ocid="admin.videos.empty_state"
                    >
                      No videos uploaded yet
                    </div>
                  ) : (
                    <div
                      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      data-ocid="admin.videos.list"
                    >
                      {videos.map((video, index) => (
                        <div
                          key={video.id}
                          className="group relative overflow-hidden rounded-lg border border-border"
                          data-ocid={`admin.videos.item.${index + 1}`}
                        >
                          <video
                            src={video.videoUrl}
                            className="aspect-video w-full object-cover"
                            controls
                          >
                            <track kind="captions" />
                          </video>
                          <div className="p-3">
                            <h3 className="font-medium text-foreground">
                              {video.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(video.uploadedAt)}
                            </p>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  className="mt-2 w-full"
                                  data-ocid={`admin.videos.delete_button.${index + 1}`}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent data-ocid="admin.videos.dialog">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete Video?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete &quot;
                                    {video.title}&quot;? This action cannot be
                                    undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel data-ocid="admin.videos.cancel_button">
                                    Cancel
                                  </AlertDialogCancel>
                                  <AlertDialogAction
                                    data-ocid="admin.videos.confirm_button"
                                    onClick={() => handleDeleteVideo(video.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

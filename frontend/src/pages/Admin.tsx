import { useState } from 'react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { usePhotoUpload, useVideoUpload, useGetAllPhotos, useGetAllVideos, useDeletePhoto, useDeleteVideo } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Loader2, Upload, Trash2, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { ExternalBlob } from '../backend';
import { toast } from 'sonner';

export default function Admin() {
  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  // Photo upload state
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoUploadProgress, setPhotoUploadProgress] = useState(0);

  // Video upload state
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState('');

  // Mutations and queries
  const photoUpload = usePhotoUpload();
  const videoUpload = useVideoUpload();
  const { data: photos = [], isLoading: photosLoading } = useGetAllPhotos();
  const { data: videos = [], isLoading: videosLoading } = useGetAllVideos();
  const deletePhoto = useDeletePhoto();
  const deleteVideo = useDeleteVideo();

  const handlePhotoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile || !photoTitle.trim()) {
      toast.error('Please select a photo and enter a title');
      return;
    }

    try {
      const arrayBuffer = await photoFile.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const externalBlob = ExternalBlob.fromBytes(uint8Array).withUploadProgress((percentage) => {
        setPhotoUploadProgress(percentage);
      });

      await photoUpload.mutateAsync({
        title: photoTitle,
        image: externalBlob,
      });

      toast.success('Photo uploaded successfully!');
      setPhotoFile(null);
      setPhotoTitle('');
      setPhotoUploadProgress(0);
      // Reset file input
      const fileInput = document.getElementById('photo-file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Photo upload error:', error);
      toast.error('Failed to upload photo');
    }
  };

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile || !videoTitle.trim()) {
      toast.error('Please select a video and enter a title');
      return;
    }

    try {
      const videoUrl = URL.createObjectURL(videoFile);
      
      await videoUpload.mutateAsync({
        title: videoTitle,
        videoUrl: videoUrl,
      });

      toast.success('Video uploaded successfully!');
      setVideoFile(null);
      setVideoTitle('');
      // Reset file input
      const fileInput = document.getElementById('video-file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Video upload error:', error);
      toast.error('Failed to upload video');
    }
  };

  const handleDeletePhoto = async (id: string) => {
    try {
      await deletePhoto.mutateAsync(id);
      toast.success('Photo deleted successfully!');
    } catch (error) {
      console.error('Delete photo error:', error);
      toast.error('Failed to delete photo');
    }
  };

  const handleDeleteVideo = async (id: string) => {
    try {
      await deleteVideo.mutateAsync(id);
      toast.success('Video deleted successfully!');
    } catch (error) {
      console.error('Delete video error:', error);
      toast.error('Failed to delete video');
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Panel</CardTitle>
            <CardDescription>Please login to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button onClick={login} disabled={isLoggingIn} size="lg">
              {isLoggingIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login with Internet Identity'
              )}
            </Button>
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Admin Panel</h1>
          <p className="mt-2 text-muted-foreground">Upload and manage photos and videos for the gallery</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="manage">Manage</TabsTrigger>
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
                    <CardDescription>Upload photos to the gallery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePhotoUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="photo-title">Title *</Label>
                        <Input
                          id="photo-title"
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
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      {photoUploadProgress > 0 && photoUploadProgress < 100 && (
                        <div className="space-y-2">
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
                      <Button type="submit" disabled={photoUpload.isPending} className="w-full">
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
                    <CardDescription>Upload videos to the gallery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleVideoUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="video-title">Title *</Label>
                        <Input
                          id="video-title"
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
                          type="file"
                          accept="video/mp4,video/webm"
                          onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                          required
                        />
                      </div>
                      <Button type="submit" disabled={videoUpload.isPending} className="w-full">
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
                  <CardDescription>View and delete uploaded photos</CardDescription>
                </CardHeader>
                <CardContent>
                  {photosLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : photos.length === 0 ? (
                    <div className="py-12 text-center text-muted-foreground">No photos uploaded yet</div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {photos.map((photo) => (
                        <div key={photo.id} className="group relative overflow-hidden rounded-lg border border-border">
                          <img
                            src={photo.image.getDirectURL()}
                            alt={photo.title}
                            className="aspect-video w-full object-cover"
                          />
                          <div className="p-3">
                            <h3 className="font-medium text-foreground">{photo.title}</h3>
                            <p className="text-sm text-muted-foreground">{formatDate(photo.uploadedAt)}</p>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" className="mt-2 w-full">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Photo?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{photo.title}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeletePhoto(photo.id)}>
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
                  <CardDescription>View and delete uploaded videos</CardDescription>
                </CardHeader>
                <CardContent>
                  {videosLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  ) : videos.length === 0 ? (
                    <div className="py-12 text-center text-muted-foreground">No videos uploaded yet</div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {videos.map((video) => (
                        <div key={video.id} className="group relative overflow-hidden rounded-lg border border-border">
                          <video
                            src={video.videoUrl}
                            className="aspect-video w-full object-cover"
                            controls
                          />
                          <div className="p-3">
                            <h3 className="font-medium text-foreground">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">{formatDate(video.uploadedAt)}</p>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="destructive" size="sm" className="mt-2 w-full">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Video?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{video.title}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeleteVideo(video.id)}>
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

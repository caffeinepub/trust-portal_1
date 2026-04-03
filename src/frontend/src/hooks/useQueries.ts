import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ExternalBlob } from "../backend";
import type { Photo, Video } from "../backend";
import { useActor } from "./useActor";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitContactForm(
        data.name,
        data.email,
        data.subject,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact-messages"] });
    },
    onError: (error) => {
      console.error("Contact form error:", error);
    },
  });
}

interface PhotoUploadData {
  title: string;
  image: ExternalBlob;
}

export function usePhotoUpload() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: PhotoUploadData) => {
      if (!actor) throw new Error("Actor not initialized");
      console.log("usePhotoUpload: calling actor.uploadPhoto", {
        title: data.title,
      });
      await actor.uploadPhoto(data.title, data.image);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPhotos"] });
    },
    onError: (error) => {
      console.error(
        "Photo upload mutation error:",
        error instanceof Error ? error.message : String(error),
      );
    },
  });
}

interface VideoUploadData {
  title: string;
  videoUrl: string;
}

export function useVideoUpload() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: VideoUploadData) => {
      if (!actor) throw new Error("Actor not initialized");
      console.log("useVideoUpload: calling actor.uploadVideo", {
        title: data.title,
      });
      await actor.uploadVideo(data.title, data.videoUrl);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allVideos"] });
    },
    onError: (error) => {
      console.error(
        "Video upload mutation error:",
        error instanceof Error ? error.message : String(error),
      );
    },
  });
}

export function useGetAllPhotos() {
  const { actor, isFetching } = useActor();

  return useQuery<Photo[]>({
    queryKey: ["allPhotos"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPhotos();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllVideos() {
  const { actor, isFetching } = useActor();

  return useQuery<Video[]>({
    queryKey: ["allVideos"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllVideos();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDeletePhoto() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error("Actor not initialized");
      const result = await actor.deletePhoto(id);
      if (!result) throw new Error("Failed to delete photo");
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allPhotos"] });
    },
    onError: (error) => {
      console.error(
        "Delete photo mutation error:",
        error instanceof Error ? error.message : String(error),
      );
    },
  });
}

export function useDeleteVideo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error("Actor not initialized");
      const result = await actor.deleteVideo(id);
      if (!result) throw new Error("Failed to delete video");
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allVideos"] });
    },
    onError: (error) => {
      console.error(
        "Delete video mutation error:",
        error instanceof Error ? error.message : String(error),
      );
    },
  });
}

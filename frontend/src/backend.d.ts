import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Video {
    id: string;
    title: string;
    videoUrl: string;
    uploadedAt: Time;
}
export interface Photo {
    id: string;
    title: string;
    image: ExternalBlob;
    uploadedAt: Time;
}
export interface ContactMessage {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export type Time = bigint;
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deletePhoto(id: string): Promise<boolean>;
    deleteVideo(id: string): Promise<boolean>;
    getAllMessagesSortedByName(): Promise<Array<ContactMessage>>;
    getAllPhotos(): Promise<Array<Photo>>;
    getAllVideos(): Promise<Array<Video>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<[string, string, string]>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<void>;
    uploadPhoto(title: string, image: ExternalBlob): Promise<void>;
    uploadVideo(title: string, videoUrl: string): Promise<void>;
}

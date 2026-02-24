import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    getAllMessagesSortedByName(): Promise<Array<[string, string, string, string]>>;
    getContactInfo(): Promise<[string, string, string]>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<void>;
}

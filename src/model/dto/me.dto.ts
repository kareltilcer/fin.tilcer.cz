export interface MeDto {
    id: number;
    documentId: string;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    publishedAt: string; // ISO 8601 date string
    firstName: string;
    lastName: string;
}
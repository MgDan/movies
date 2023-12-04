export interface MovieModel{
    id: number;
    title: string;
    image?: string;
    description?: string;
    releaseDate?: Date;
    rating?: number;
    duration?: string;
    genre?: string;
    trailer?: string;
}
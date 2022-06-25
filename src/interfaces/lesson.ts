export interface ILesson{
    id: string;
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: 'live' | 'class';
}
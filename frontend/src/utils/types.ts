import type { JSX } from "react";



export interface SideBarLinkType {
    title: string;
    link: string;
    icon: JSX.Element;
}


export interface UserType{
    id:string;
    username:string;
    avatar:string;
}

export interface UserState {
    user: UserType
}
export interface QuizType {
    id: string;
    title: string;
    topic: string;
    course: string;
    dueDate: string;
}

export interface QuizState {
    quizzes: QuizType[]
}

export interface AnnouncementType {
    id:string;
    topic: string;
    content: string;
    author: string;
}


export interface AnnouncementState {
    announcements: AnnouncementType[]
}

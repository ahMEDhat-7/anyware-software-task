import type { JSX } from "react";



export interface SideBarLinkType {
    title: string;
    link: string;
    icon: JSX.Element;
}


export interface UserType{
    username:string;
    avatar:string;
}

export interface UserState {
    user: UserType
}
export interface QuizType {
    _id: string;
    title: string;
    topic: string;
    course: string;
    dueDate: string;
}

export interface QuizState {
    quizzes: QuizType[]
}

export interface AnnouncementType {
    topic: string;
    content: string;
    author: string;
}


export interface AnnouncementState {
    announcements: AnnouncementType[]
}

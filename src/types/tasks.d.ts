
export type FirebaseTaskApi = Record<string, FirebaseTaskItem>;

export interface FirebaseTaskItem {
    title: string;
    status: 'TODO' | 'INPROGRESS' | 'DONE';
}
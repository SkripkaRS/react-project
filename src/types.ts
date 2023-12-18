export interface Course {
  id: number;
  image: string;
  level: string;
  title: string;
  user: User;
  students: number;
  modules: number;
  duration: number;
  finishedModules: number;
  rating?: number;
  isMyCource?: boolean;
}

export interface User {
  avatar: string;
  name: string;
}

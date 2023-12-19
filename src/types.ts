export interface CourseInfo {
  id: number;
  image: string;
  level: string;
  title: string;
  user: UserInfo;
  students: number;
  modules: number;
  duration: number;
  finishedModules: number;
  rating?: number;
  isMyCourse?: boolean;
}

export interface UserInfo {
  avatar: string;
  name: string;
}

export const courses: CourseInfo[] = [
  {
    id: 1,
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Beginner",
    title: "Introduction Basic Programming HTML & CSS",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "First Name",
    },
    rating: 4.5,
    students: 1234,
    modules: 5,
    finishedModules: 2,
    duration: 5400,
  },
  {
    id: 2,
    image:
      "https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png",
    level: "Intermediate",
    title: "Introduction Basic Programming React & Typescript",
    user: {
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      name: "Second Name",
    },
    students: 5678,
    modules: 5,
    finishedModules: 3,
    duration: 5600,
    isMyCourse: true,
  },
];

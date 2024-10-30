export interface Route {
  name: string;
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export interface NavLink {
  name: string;
  path: string;
}

export type NavLinks = NavLink[];

export type Routes = Route[];

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  subscriptions: Subscription[];
  enrolledCourses: Course[];
}

export interface Course {
  id: number;
  title: string;
  price: number;
  offPrice: number;
  thumbnailUrl: string;
  description: string;
  demoVideoUrl: string;
  courseVideoUrl: string;
}

export interface Subscription {
  id: number;
  userId: number;
  user: User;
  courseId: number;
  course: Course;
  price: number;
  startDate: Date;
  endDate: Date;
  purchaseDate: Date;
  numberOfDays: Date;
}

export interface Session {
  id: number;
  title: string;
  description: string;
  sessionLink: string;
  sessionTime: Date;
  course: Course;
}

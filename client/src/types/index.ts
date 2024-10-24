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
  message?: string;
  data?: T;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
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

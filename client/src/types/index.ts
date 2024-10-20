export interface Route {
  name: string;
  path: string;
  component: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export type NavLinks = NavLink[];

export type Routes = Route[];

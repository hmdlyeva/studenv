/* eslint-disable no-use-before-define */
export interface OurTeam {
  heroImage: string;
  about: About;
  founders: Founders;
  designTeam: DesignTeam;
  officeManager: OfficeManager;
  installationManager: InstallationManager;
}

export interface About {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Founders {
  title: string;
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  position: string;
  tel: string;
  contact: string;
  email: string;
  image: string;
}

export interface DesignTeam {
  title: string;
  items: Item2[];
}

export interface Item2 {
  id: string;
  name: string;
  position: string;
  tel: string;
  contact: string;
  email: string;
  image: string;
}

export interface OfficeManager {
  title: string;
  items: Item3[];
}

export interface Item3 {
  id: string;
  name: string;
  position: string;
  tel: string;
  contact: string;
  email: string;
  image: string;
}

export interface InstallationManager {
  title: string;
  items: Item4[];
}

export interface Item4 {
  id: string;
  name: string;
  position: string;
}

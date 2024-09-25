/* eslint-disable no-use-before-define */
export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  id: string;
}

export interface NavItemWithChildren extends NavItem {
  submenu?: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  submenu?: NavItemWithChildren[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export interface SwiperImages extends NavItem {
  image: string;
  description: string;
  message?: {
    title: string;
    message: string;
  };
}

export interface Channel {
  id: number;
  parentId: number | null;
  name: string;
  description: string;
  cover: string;
  coverMobile: string;
  slug: string;
  additionalName: string;
}
type ChannelResponse = Channel[];

export default ChannelResponse;

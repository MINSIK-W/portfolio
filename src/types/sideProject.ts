import React from 'react';

export interface SideProjectBase {
  title: string;
  detail: string;
}
export interface SideProjectToggle {
  switch: boolean;
  date: number;
}
export interface SideProjectDetail extends SideProjectBase {
  icon: React.ComponentType<any>;
}
export interface SideProjectIntro {
  details: SideProjectDetail[];
  description: string[];
}

export interface SideProjectItem {
  exposure: boolean;
  toggle: SideProjectToggle[];
  title: string;
  note: string[];
  intro: SideProjectIntro[];
  path: string;
  pathLive: string;
  technologies: string[];
  githubUrl: string;
  features: SideProjectDetail[];
  challenges?: string[];
  learnings?: string[];
  improvement?: SideProjectDetail[];
}

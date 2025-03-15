import React from 'react';

export interface IndexItem {
  title: string;
}
export interface NavigationItems extends IndexItem {
  path: string;
  icon?: React.ComponentType<any>;
  subItems?: NavigationItems[];
}
export interface MainEffectTypingItem extends IndexItem {
  subTyping: string[];
  backgroundTyping: string[];
}

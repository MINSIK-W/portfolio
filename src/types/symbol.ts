import React from 'react';

export interface SymbolItem {
  show: boolean;
  title: string;
  icon: React.ComponentType<any>;
}
export interface SymbolItems {
  label?: string;
  skills?: string[];
  items?: {
    [key: string]: SymbolItem;
  };
}
export interface SymbolData {
  frontend: SymbolItems;
  backend: SymbolItems;
  database: SymbolItems;
  devops: SymbolItems;
  tools: SymbolItems;
}

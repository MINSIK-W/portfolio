import React from 'react';

interface SymbolItems {
  switch: boolean;
  title: string;
  label: string;
  icon: React.ComponentType<any>;
}
export type SymbolType = {
  [key: string]: SymbolItems; // "배열"이 아니라 "객체"임
};

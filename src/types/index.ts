export interface IndexItem {
  title: string;
}
export interface NavigationItems extends IndexItem {
  path: string;
}
export interface MainEffectTypingItem extends IndexItem {
  subTyping: string[];
  backgroundTyping: string[];
}

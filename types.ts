export interface Accommodation {
  name: string;
  subName?: string; // 新增副標題欄位
  url: string;
  date: string;
  location: string;
}

export type ActivityCategory = '食' | '玩' | '買' | '其他';

export interface Activity {
  id: string;
  time?: string;
  title: string;
  note?: string;
  mapsUrl?: string;
  category?: ActivityCategory;
}

export interface DailyPlan {
  date: string;
  accommodation: Accommodation;
  activities: Activity[];
  reminder?: string;
}

export interface DailySummary {
  date: string;
  location: string;
  title: string;
  highlights: string[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  priceTwd?: string;
  isCompleted: boolean;
  image?: string;
  category: string;
}

export type TabType = 'home' | 'schedule' | 'shopping';
export type ShoppingListType = 'personal' | 'proxy';
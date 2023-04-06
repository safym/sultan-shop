import { Product } from "../app/slices/productsSlice"

export interface manufacturerItem {
  manufacturer: string;
  count: number;
}

export const getManufacturersList = (productsItems: Product[]): manufacturerItem[] => {
  const manufacturers = new Map<string, number>();

  productsItems.forEach((item) => {
    const count = manufacturers.get(item.manufacturer) || 0;
    manufacturers.set(item.manufacturer, count + 1);
  });

  return Array.from(manufacturers).map(([manufacturer, count]) => ({ manufacturer, count }))
}
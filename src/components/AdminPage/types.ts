export interface formData {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  imageURL?: string;
  measurement?: {
    type?: string;
    value?: string;
  };
  barcode?: string;
  manufacturer?: string;
  brand?: string;
  category?: Array<string>
};
export class Activity {
  id: number
  name: string
  category: string
  subcategory: string
  price: number
  language: string
  minimumCapacity: number
  limitCapacity: number
  userId: number
  cancelled?: boolean
  date?: Date
  description?: string

  constructor(name: string, category: string, subcategory: string, price: number, language: string, minimumCapacity: number, limitCapacity: number, userId: number) {
    this.name = name;
    this.category = category;
    this.subcategory = subcategory;
    this.price = price;
    this.language = language;
    this.minimumCapacity = minimumCapacity;
    this.limitCapacity = limitCapacity;
    this.userId = userId;
  }
}

export function generateMockActivity(): Activity {
  return {
    id: 0,
    name: '',
    category: '',
    subcategory: '',
    price: 50,
    language: '',
    minimumCapacity: 5,
    limitCapacity: 15,
    userId: 0
  }
}
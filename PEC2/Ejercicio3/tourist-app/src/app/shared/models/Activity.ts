export class Activity {
  id: number
  name: string
  category: string
  subcategory: string
  price: number
  language: string
  minimumCapacity: number
  limitCapacity: number
  userId?: number
  cancelled?: boolean
  date?: Date
  description?: string

  constructor(name: string, category: string, subcategory: string, price: number, language: string, minimumCapacity: number, limitCapacity: number) {
    this.name = name;
    this.category = category;
    this.subcategory = subcategory;
    this.price = price;
    this.language = language;
    this.minimumCapacity = minimumCapacity;
    this.limitCapacity = limitCapacity;
  }
}

export function generateMockActivity(): Activity {
  return {
    id: 1,
    name: 'Actividad',
    category: 'Playa',
    subcategory: 'Submarinismo',
    price: 50,
    language: 'Castellano',
    minimumCapacity: 5,
    limitCapacity: 15
  }
}
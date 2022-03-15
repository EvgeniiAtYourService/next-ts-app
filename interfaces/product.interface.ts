export interface ProductCharacteristic {
  name: string
  value: string
}

export interface Blog {
  text: string
  bigImage: string
  _id: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createAt: Date
}

export interface ProductModel {
  _id: string
  categories: string[]
  tags: string[]
  title: string
  image: string
  description: string
  link: string
  price: number
  credit: number
  oldPrice: number
  characteristics: ProductCharacteristic[]
  advantages: string
  initialRating: number
  createdAt: Date
  updatedAt: Date
  __v: number
  html: string
  reviews: ReviewModel[]
  reviewCount: number
  reviewAvg?: number
  blog: Blog
}

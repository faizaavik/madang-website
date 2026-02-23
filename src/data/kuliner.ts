export interface KulinerItem {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export const kulinerData: KulinerItem[] = [
  {
    id: '1',
    name: 'Gudeg Yu Djum',
    location: 'Sleman, Daerah Istimewa Yogyakarta',
    price: 15000,
    rating: 4.9,
    reviews: 100,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'Sate Klatak Pak Pong',
    location: 'Bantul, Daerah Istimewa Yogyakarta',
    price: 25000,
    rating: 4.8,
    reviews: 250,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'Mi Jowo Mbah Gito',
    location: 'Kota Yogyakarta, DIY',
    price: 15000,
    rating: 4.7,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=600'
  }
];

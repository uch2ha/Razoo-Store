import { IProduct } from '../types'

export const mockProducts: IProduct[] = [
  {
    productId: '7d77ebf6-563a-4f2e-8bc3-3c9be0fb3c10',
    name: 'Clarifying',
    description:
      'This clarifying shampoo is designed to remove build-up and impurities from hair, leaving it feeling fresh and clean. Formulated with gentle cleansing agents and a blend of essential oils, it helps to purify and balance the scalp while promoting healthy hair growth.',
    instruction:
      'To use, apply a small amount to wet hair and massage into the scalp and roots. Rinse thoroughly and repeat if necessary. For best results, follow with a conditioner or hair mask.',
    size: '200ml',
    price: 12.99,
    category: 'SHAMPOO',
    imgBlob: 'blob:https://razoo-store.netlify.app/8c13da89-a7f0-4687-8de9-529162750db0'
  },
  {
    productId: 'f4c78b10-2a9c-4f4c-bd30-18f26a7d1504',
    name: 'Smoothing',
    description:
      'This lightweight, non-greasy hair serum is designed to smooth frizz, tame flyaways, and add shine to hair. Formulated with a blend of nourishing oils and vitamins, it helps to protect hair from heat damage and environmental stressors.',
    instruction:
      'To use, apply a small amount to clean, damp hair and work through from mid-lengths to ends. Style as desired.',
    size: '150ml',
    price: 16.99,
    category: 'HAIRMASK',
    imgBlob: 'blob:https://razoo-store.netlify.app/b22d9fbf-b5d5-4ef0-bdd1-0c75f7df23c0'
  },
  {
    productId: '6af5cfbb-3b3d-4634-aa77-eb7bf6f855c0',
    name: 'Nourishing',
    description:
      'This deeply nourishing hair mask is designed to revive and restore dry, damaged hair. Formulated with a blend of natural oils and proteins, it helps to strengthen and protect hair while delivering intense moisture to each strand.',
    instruction:
      'To use, apply a generous amount to clean, damp hair and comb through from root to tip. Leave on for 5-10 minutes, then rinse thoroughly with warm water. For best results, use once or twice a week.',
    size: '100ml',
    price: 24.99,
    category: 'HAIRMASK',
    imgBlob: 'blob:https://razoo-store.netlify.app/977785e2-025e-4bc3-a560-f1d1642a47cb'
  }
]

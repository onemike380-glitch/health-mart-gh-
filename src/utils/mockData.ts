import { Medication, Hospital } from '@/types'

export const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'Korle-Bu Teaching Hospital',
    location: 'Accra, Ghana',
    phone: '+233 30 267 4401',
    email: 'info@kbth.gov.gh',
    verified: true,
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=100&h=100&fit=crop&crop=center',
    description: 'Leading tertiary healthcare facility in Ghana'
  },
  {
    id: '2',
    name: '37 Military Hospital',
    location: 'Accra, Ghana',
    phone: '+233 30 277 7111',
    email: 'info@37mh.mil.gh',
    verified: true,
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop&crop=center',
    description: 'Premium military healthcare facility'
  },
  {
    id: '3',
    name: 'Ridge Hospital',
    location: 'Accra, Ghana',
    phone: '+233 30 222 9212',
    email: 'info@ridgehospital.gov.gh',
    verified: true,
    logo: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=100&h=100&fit=crop&crop=center',
    description: 'Specialized maternal and child health services'
  }
]

export const mockMedications: Medication[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    description: 'Pain reliever and fever reducer commonly used for headaches, muscle aches, and fever.',
    price: 15.50,
    category: 'Pain Relief',
    manufacturer: 'Ernest Chemists Ltd',
    dosage: '500mg tablets',
    sideEffects: 'Rare: skin rash, allergic reactions',
    instructions: 'Take 1-2 tablets every 4-6 hours. Maximum 8 tablets in 24 hours.',
    inStock: true,
    stockQuantity: 150,
    hospitalId: '1',
    hospital: mockHospitals[0],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    ],
    requiresPrescription: false,
    expiryDate: '2025-12-31'
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    description: 'Antibiotic used to treat bacterial infections including pneumonia, bronchitis, and infections of the ear, nose, throat, urinary tract, and skin.',
    price: 45.00,
    category: 'Antibiotics',
    manufacturer: 'Danadams Pharmaceuticals',
    dosage: '250mg capsules',
    sideEffects: 'Common: nausea, vomiting, diarrhea. Rare: allergic reactions',
    instructions: 'Take one capsule every 8 hours for 7-10 days as prescribed.',
    inStock: true,
    stockQuantity: 85,
    hospitalId: '1',
    hospital: mockHospitals[0],
    images: [
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1550572017-edd951ea0ca4?w=400&h=300&fit=crop'
    ],
    requiresPrescription: true,
    expiryDate: '2025-08-15'
  },
  {
    id: '3',
    name: 'Vitamin C 1000mg',
    description: 'Essential vitamin supplement that supports immune system function and helps with iron absorption.',
    price: 28.75,
    category: 'Vitamins & Supplements',
    manufacturer: 'Phyto-Riker',
    dosage: '1000mg tablets',
    sideEffects: 'Rare: stomach upset, kidney stones with excessive use',
    instructions: 'Take one tablet daily with food.',
    inStock: true,
    stockQuantity: 200,
    hospitalId: '2',
    hospital: mockHospitals[1],
    images: [
      'https://images.unsplash.com/photo-1550572017-edd951ea0ca4?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    ],
    requiresPrescription: false,
    expiryDate: '2026-03-20'
  },
  {
    id: '4',
    name: 'Omeprazole 20mg',
    description: 'Proton pump inhibitor used to treat gastroesophageal reflux disease (GERD), stomach ulcers, and other conditions involving excessive stomach acid.',
    price: 62.25,
    category: 'Gastrointestinal',
    manufacturer: 'Ernest Chemists Ltd',
    dosage: '20mg capsules',
    sideEffects: 'Common: headache, stomach pain, nausea, diarrhea',
    instructions: 'Take one capsule daily before breakfast.',
    inStock: true,
    stockQuantity: 60,
    hospitalId: '2',
    hospital: mockHospitals[1],
    images: [
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop'
    ],
    requiresPrescription: true,
    expiryDate: '2025-10-12'
  },
  {
    id: '5',
    name: 'Metformin 500mg',
    description: 'Oral diabetes medication that helps control blood sugar levels in people with type 2 diabetes.',
    price: 38.50,
    category: 'Diabetes',
    manufacturer: 'Kinapharma Ltd',
    dosage: '500mg tablets',
    sideEffects: 'Common: nausea, diarrhea, stomach upset, metallic taste',
    instructions: 'Take with meals as prescribed by your doctor.',
    inStock: false,
    stockQuantity: 0,
    hospitalId: '3',
    hospital: mockHospitals[2],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    ],
    requiresPrescription: true,
    expiryDate: '2025-07-30'
  },
  {
    id: '6',
    name: 'Ibuprofen 400mg',
    description: 'Nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever.',
    price: 22.00,
    category: 'Pain Relief',
    manufacturer: 'Ayrton Drug Manufacturing',
    dosage: '400mg tablets',
    sideEffects: 'Common: stomach upset, heartburn. Rare: ulcers, kidney problems',
    instructions: 'Take with food. Do not exceed 3 tablets daily.',
    inStock: true,
    stockQuantity: 120,
    hospitalId: '3',
    hospital: mockHospitals[2],
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    ],
    requiresPrescription: false,
    expiryDate: '2025-11-18'
  }
]

export const medicationCategories = [
  'All Categories',
  'Pain Relief',
  'Antibiotics',
  'Vitamins & Supplements',
  'Gastrointestinal',
  'Diabetes',
  'Cardiovascular',
  'Respiratory',
  'Dermatology',
  'Mental Health'
]

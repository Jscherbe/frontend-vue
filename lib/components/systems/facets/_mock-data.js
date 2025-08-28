export const initialMockFacets = [
  {
    name: 'Category',
    uid: 'category',
    open: true,
    children: [
      { uid: 'cat1', label: 'Design' },
      { uid: 'cat2', label: 'Development' },
      { uid: 'cat3', label: 'Marketing' },
      { uid: 'cat4', label: 'Business' },
      { uid: 'cat5', label: 'Lifestyle' },
      { uid: 'cat6', label: 'Technology' },
    ]
  },
  {
    name: 'Author',
    uid: 'author',
    open: true,
    children: [
      { uid: 'jane-doe', label: 'Jane Doe' },
      { uid: 'john-smith', label: 'John Smith' },
      { uid: 'peter-jones', label: 'Peter Jones' },
    ]
  }
];

export const mockItems = [
  { id: 1, title: 'The Art of UI Design', description: 'A deep dive into creating beautiful user interfaces.', category: ['cat1', 'cat2'], author: ['jane-doe'], date: new Date(2023, 5, 15) },
  { id: 2, title: 'Vue.js for Beginners', description: 'Getting started with the popular JavaScript framework.', category: ['cat2', 'cat6'], author: ['john-smith'], date: new Date(2023, 8, 22) },
  { id: 3, title: 'Content Marketing Strategies', description: 'How to attract and retain customers with great content.', category: ['cat3'], author: ['peter-jones'], date: new Date(2022, 11, 10) },
  { id: 4, title: 'Startup Funding 101', description: 'A guide to raising capital for your new venture.', category: ['cat4'], author: ['jane-doe'], date: new Date(2024, 1, 5) },
  { id: 5, title: 'Minimalist Living', description: 'Declutter your life and find more happiness.', category: ['cat5'], author: ['john-smith'], date: new Date(2023, 3, 30) },
  { id: 6, title: 'The Future of AI', description: 'Exploring the impact of artificial intelligence on society.', category: ['cat6'], author: ['peter-jones'], date: new Date(2024, 0, 1) },
  { id: 7, title: 'Advanced CSS Techniques', description: 'Take your styling skills to the next level.', category: ['cat1', 'cat2'], author: ['jane-doe'], date: new Date(2023, 10, 18) },
  { id: 8, title: 'Building a Scalable API', description: 'Best practices for designing and implementing APIs.', category: ['cat2', 'cat6'], author: ['john-smith'], date: new Date(2023, 7, 3) },
  { id: 9, title: 'Social Media for Business', description: 'Leveraging social platforms for growth.', category: ['cat3'], author: ['peter-jones'], date: new Date(2022, 9, 14) },
  { id: 10, title: 'Negotiation and Deal Making', description: 'Master the art of getting what you want.', category: ['cat4'], author: ['jane-doe'], date: new Date(2023, 6, 25) },
  { id: 11, title: 'Healthy Eating Habits', description: 'A guide to a balanced and nutritious diet.', category: ['cat5'], author: ['john-smith'], date: new Date(2024, 2, 12) },
  { id: 12, title: 'Quantum Computing Explained', description: 'A simple introduction to a complex topic.', category: ['cat6'], author: ['peter-jones'], date: new Date(2023, 9, 9) },
];

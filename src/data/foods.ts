export interface Food {
  id: string;
  name: string;
  category: 'protein' | 'carbs' | 'fats' | 'vegetables' | 'sauce';
  servingSize: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export const FOOD_DATABASE: Food[] = [
  // PROTEINS
  { id: 'chicken-breast', name: 'Chicken Breast (cooked)', category: 'protein', servingSize: '100g', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0 },
  { id: 'lean-ground-beef', name: 'Lean Ground Beef (90/10)', category: 'protein', servingSize: '100g', calories: 173, protein: 22, carbs: 0, fat: 9, fiber: 0 },
  { id: 'pork-loin', name: 'Pork Loin', category: 'protein', servingSize: '100g', calories: 242, protein: 27, carbs: 0, fat: 14, fiber: 0 },
  { id: 'salmon', name: 'Salmon (cooked)', category: 'protein', servingSize: '100g', calories: 280, protein: 25, carbs: 0, fat: 20, fiber: 0 },
  { id: 'turkey', name: 'Turkey Breast', category: 'protein', servingSize: '100g', calories: 165, protein: 29, carbs: 0, fat: 3.5, fiber: 0 },
  { id: 'eggs', name: 'Eggs', category: 'protein', servingSize: '1 large', calories: 78, protein: 6, carbs: 0.6, fat: 5, fiber: 0 },
  { id: 'egg-whites', name: 'Egg Whites', category: 'protein', servingSize: '1 large', calories: 17, protein: 3.6, carbs: 0.2, fat: 0.1, fiber: 0 },
  { id: 'greek-yogurt', name: 'Greek Yogurt (0%)', category: 'protein', servingSize: '100g', calories: 59, protein: 10, carbs: 3.3, fat: 0.4, fiber: 0 },
  { id: 'cottage-cheese', name: 'Cottage Cheese (2%)', category: 'protein', servingSize: '100g', calories: 88, protein: 11, carbs: 3.5, fat: 2, fiber: 0 },
  { id: 'protein-powder', name: 'Protein Powder (whey)', category: 'protein', servingSize: '30g scoop', calories: 120, protein: 25, carbs: 2, fat: 1.5, fiber: 0 },

  // CARBS
  { id: 'rice-white', name: 'White Rice (cooked)', category: 'carbs', servingSize: '150g', calories: 195, protein: 4, carbs: 43, fat: 0.3, fiber: 0.6 },
  { id: 'potato', name: 'Potato (cooked)', category: 'carbs', servingSize: '150g', calories: 128, protein: 2.7, carbs: 29, fat: 0.1, fiber: 2.6 },
  { id: 'sweet-potato', name: 'Sweet Potato (cooked)', category: 'carbs', servingSize: '150g', calories: 128, protein: 2.6, carbs: 29, fat: 0.1, fiber: 4.7 },
  { id: 'oats', name: 'Oats (dry)', category: 'carbs', servingSize: '40g', calories: 150, protein: 5, carbs: 27, fat: 3, fiber: 4 },
  { id: 'pasta', name: 'Pasta (cooked)', category: 'carbs', servingSize: '100g', calories: 131, protein: 5, carbs: 25, fat: 1, fiber: 1.5 },
  { id: 'bread', name: 'Whole Wheat Bread', category: 'carbs', servingSize: '1 slice (30g)', calories: 80, protein: 4, carbs: 14, fat: 1, fiber: 2.4 },
  { id: 'tortilla', name: 'Whole Wheat Tortilla', category: 'carbs', servingSize: '1 (55g)', calories: 170, protein: 5, carbs: 30, fat: 3, fiber: 5 },
  { id: 'rice-cakes', name: 'Rice Cakes', category: 'carbs', servingSize: '1 (9g)', calories: 35, protein: 0.8, carbs: 7.3, fat: 0.3, fiber: 0.1 },
  { id: 'beans', name: 'Black Beans (cooked)', category: 'carbs', servingSize: '100g', calories: 132, protein: 8.9, carbs: 24, fat: 0.5, fiber: 6 },
  { id: 'banana', name: 'Banana', category: 'carbs', servingSize: '1 medium', calories: 105, protein: 1.3, carbs: 27, fat: 0.3, fiber: 3.1 },
  { id: 'apple', name: 'Apple', category: 'carbs', servingSize: '1 medium', calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4 },
  { id: 'berries', name: 'Mixed Berries', category: 'carbs', servingSize: '100g', calories: 57, protein: 1.1, carbs: 14, fat: 0.3, fiber: 2.4 },

  // FATS
  { id: 'olive-oil', name: 'Olive Oil', category: 'fats', servingSize: '1 tbsp (14g)', calories: 119, protein: 0, carbs: 0, fat: 13.5, fiber: 0 },
  { id: 'peanut-butter', name: 'Peanut Butter', category: 'fats', servingSize: '2 tbsp (32g)', calories: 188, protein: 8, carbs: 7, fat: 16, fiber: 2.6 },
  { id: 'avocado', name: 'Avocado', category: 'fats', servingSize: '1/2 avocado', calories: 120, protein: 1.5, carbs: 6, fat: 11, fiber: 4.8 },
  { id: 'nuts-almonds', name: 'Almonds', category: 'fats', servingSize: '23 nuts (28g)', calories: 161, protein: 6, carbs: 6, fat: 14, fiber: 3.5 },
  { id: 'cheese', name: 'Cheddar Cheese', category: 'fats', servingSize: '28g', calories: 113, protein: 7, carbs: 0.4, fat: 9.3, fiber: 0 },

  // VEGETABLES
  { id: 'broccoli', name: 'Broccoli (cooked)', category: 'vegetables', servingSize: '100g', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.4 },
  { id: 'green-beans', name: 'Green Beans (cooked)', category: 'vegetables', servingSize: '100g', calories: 30, protein: 2.1, carbs: 7, fat: 0.1, fiber: 2.7 },
  { id: 'bell-pepper', name: 'Bell Pepper', category: 'vegetables', servingSize: '100g', calories: 30, protein: 0.9, carbs: 7, fat: 0.3, fiber: 2 },
  { id: 'onion', name: 'Onion', category: 'vegetables', servingSize: '100g', calories: 40, protein: 1.1, carbs: 9, fat: 0.1, fiber: 1.7 },
  { id: 'salad-greens', name: 'Salad Greens', category: 'vegetables', servingSize: '100g', calories: 23, protein: 2.2, carbs: 3.7, fat: 0.4, fiber: 2.2 },
  { id: 'frozen-veg', name: 'Frozen Mixed Vegetables', category: 'vegetables', servingSize: '100g', calories: 54, protein: 2.5, carbs: 12, fat: 0.2, fiber: 2.4 },

  // SAUCES
  { id: 'salsa', name: 'Salsa', category: 'sauce', servingSize: '2 tbsp (30g)', calories: 10, protein: 0, carbs: 2, fat: 0, fiber: 0 },
  { id: 'marinara', name: 'Marinara Sauce', category: 'sauce', servingSize: '100g', calories: 39, protein: 1.5, carbs: 7, fat: 0.7, fiber: 1.2 },
  { id: 'mustard', name: 'Mustard', category: 'sauce', servingSize: '1 tbsp (10g)', calories: 3, protein: 0.2, carbs: 0, fat: 0, fiber: 0 },
  { id: 'teriyaki', name: 'Teriyaki Sauce', category: 'sauce', servingSize: '1 tbsp (18g)', calories: 15, protein: 1, carbs: 3, fat: 0, fiber: 0 },
];

export const EMERGENCY_MEALS = [
  {
    name: 'Quick Rotisserie Chicken & Rice',
    items: [
      { name: 'Rotisserie Chicken', quantity: 150, unit: 'g', calories: 248, protein: 46.5, carbs: 0, fat: 5.4, fiber: 0 },
      { name: 'White Rice (microwaveable)', quantity: 150, unit: 'g', calories: 195, protein: 4, carbs: 43, fat: 0.3, fiber: 0.6 },
    ],
    total: { calories: 443, protein: 50.5, carbs: 43, fat: 5.7, fiber: 0.6 }
  },
  {
    name: 'Protein Shake & Banana',
    items: [
      { name: 'Protein Powder', quantity: 30, unit: 'g', calories: 120, protein: 25, carbs: 2, fat: 1.5, fiber: 0 },
      { name: 'Milk', quantity: 240, unit: 'ml', calories: 149, protein: 7.7, carbs: 12, fat: 5, fiber: 0 },
      { name: 'Banana', quantity: 1, unit: 'medium', calories: 105, protein: 1.3, carbs: 27, fat: 0.3, fiber: 3.1 },
    ],
    total: { calories: 374, protein: 34, carbs: 41, fat: 6.8, fiber: 3.1 }
  },
  {
    name: 'Turkey Sandwich',
    items: [
      { name: 'Turkey Breast Deli', quantity: 100, unit: 'g', calories: 110, protein: 24, carbs: 0, fat: 1, fiber: 0 },
      { name: 'Whole Wheat Bread', quantity: 2, unit: 'slices', calories: 160, protein: 8, carbs: 28, fat: 2, fiber: 4.8 },
      { name: 'Mustard', quantity: 1, unit: 'tbsp', calories: 3, protein: 0.2, carbs: 0, fat: 0, fiber: 0 },
      { name: 'Lettuce & Tomato', quantity: 50, unit: 'g', calories: 12, protein: 0.8, carbs: 2.5, fat: 0, fiber: 0.7 },
    ],
    total: { calories: 285, protein: 33, carbs: 30.5, fat: 3, fiber: 5.5 }
  },
  {
    name: 'Tuna Packet & Rice Cakes',
    items: [
      { name: 'Tuna in Water (canned)', quantity: 142, unit: 'g', calories: 120, protein: 25, carbs: 0, fat: 1, fiber: 0 },
      { name: 'Rice Cakes', quantity: 3, unit: 'pieces', calories: 105, protein: 2.4, carbs: 22, fat: 0.9, fiber: 0.3 },
      { name: 'Mustard', quantity: 1, unit: 'tbsp', calories: 3, protein: 0.2, carbs: 0, fat: 0, fiber: 0 },
    ],
    total: { calories: 228, protein: 27.6, carbs: 22, fat: 1.9, fiber: 0.3 }
  },
];

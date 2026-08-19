export interface UserProfile {
  id: string;
  name: string;
  sex: 'male' | 'female';
  age: number;
  height: string; // e.g., "5'11.5""
  startingWeight: number;
  startingBodyFat: number;
  trainingHistory: number; // years
  objective: string;
  workSchedule: string;
  sleepHours: number;
  dailySteps: number;
  siJointStatus: boolean;
  createdAt: Date;
}

export interface DailyWeight {
  date: Date;
  weight: number;
  notes?: string;
}

export interface DailyWaist {
  date: Date;
  waist: number;
  notes?: string;
}

export interface Exercise {
  id: string;
  name: string;
  targetMuscles: string[];
  primaryWorkout: string;
  notes?: string;
  alternatives?: string[];
  siAlternative?: string;
  siAlternativeReason?: string;
}

export interface WorkoutSet {
  exerciseId: string;
  weight: number;
  reps: number;
  rir: number; // Reps In Reserve
  notes?: string;
  painScore?: number;
  formNotes?: string;
  timestamp: Date;
}

export interface Workout {
  id: string;
  date: Date;
  type: 'UPPER_A' | 'LOWER_A' | 'UPPER_B' | 'LOWER_B';
  exercises: WorkoutExercise[];
  duration: number; // minutes
  notes?: string;
  completed: boolean;
}

export interface WorkoutExercise {
  exerciseId: string;
  plannedSets: number;
  plannedReps: string; // e.g., "6-10"
  plannedRIR: string; // e.g., "2-3"
  plannedRest: string; // e.g., "2-3 min"
  previousLoad: number | null;
  previousReps: number | null;
  previousRIR: number | null;
  sets: WorkoutSet[];
}

export interface DailyNutrition {
  date: Date;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  hydration: number; // oz
  sodium: number; // mg
  meals: Meal[];
}

export interface Meal {
  id: string;
  name: string;
  time: string; // HH:MM
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  items: FoodItem[];
}

export interface FoodItem {
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

export interface DailyActivity {
  date: Date;
  steps: number;
  zone2Minutes?: number;
  notes?: string;
}

export interface DailyRecovery {
  date: Date;
  sleepHours: number;
  sleepQuality: 1 | 2 | 3 | 4 | 5; // 1=poor, 5=excellent
  energy: 1 | 2 | 3 | 4 | 5;
  recoveryScore: 1 | 2 | 3 | 4 | 5;
  hunger: 1 | 2 | 3 | 4 | 5;
  stress: 1 | 2 | 3 | 4 | 5;
  siPain: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  siRadiation: boolean;
  siNumbness: boolean;
  siTingling: boolean;
  siWeakness: boolean;
  notes?: string;
}

export interface WeeklyCheckIn {
  week: number;
  date: Date;
  averageWeight: number;
  waist: number;
  averageCalories: number;
  averageProtein: number;
  averageSteps: number;
  zone2Sessions: number;
  averageSleep: number;
  hunger: 1 | 2 | 3 | 4 | 5;
  energy: 1 | 2 | 3 | 4 | 5;
  recoveryScore: 1 | 2 | 3 | 4 | 5;
  bestExerciseImprovement?: string;
  biggestRegression?: string;
  siPain: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  siRadiation: boolean;
  siNumbness: boolean;
  siTingling: boolean;
  siWeakness: boolean;
  notes?: string;
  coachRecommendation?: string;
}

export interface ProgressData {
  bodyweight: DailyWeight[];
  waist: DailyWaist[];
  nutrition: DailyNutrition[];
  activity: DailyActivity[];
  recovery: DailyRecovery[];
  workouts: Workout[];
  checkIns: WeeklyCheckIn[];
}

export interface AppState {
  user: UserProfile | null;
  currentWeek: number;
  phase: string;
  progress: ProgressData;
  isLoading: boolean;
}

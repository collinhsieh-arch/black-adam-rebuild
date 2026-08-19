import { AppState, UserProfile, DailyWeight, DailyWaist, Workout, DailyNutrition, DailyActivity, DailyRecovery, WeeklyCheckIn } from '../types';

const STORAGE_KEY = 'black-adam-rebuild-app';

const DEFAULT_STATE: AppState = {
  user: null,
  currentWeek: 1,
  phase: '12-WEEK REBUILD',
  progress: {
    bodyweight: [],
    waist: [],
    nutrition: [],
    activity: [],
    recovery: [],
    workouts: [],
    checkIns: [],
  },
  isLoading: false,
};

export const storage = {
  getState: (): AppState => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }
    return DEFAULT_STATE;
  },

  setState: (state: AppState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  },

  saveUser: (user: UserProfile) => {
    const state = storage.getState();
    state.user = user;
    storage.setState(state);
  },

  addWeight: (weight: DailyWeight) => {
    const state = storage.getState();
    state.progress.bodyweight.push(weight);
    storage.setState(state);
  },

  addWaist: (waist: DailyWaist) => {
    const state = storage.getState();
    state.progress.waist.push(waist);
    storage.setState(state);
  },

  addWorkout: (workout: Workout) => {
    const state = storage.getState();
    state.progress.workouts.push(workout);
    storage.setState(state);
  },

  addNutrition: (nutrition: DailyNutrition) => {
    const state = storage.getState();
    // Replace if already exists for this date
    const existingIndex = state.progress.nutrition.findIndex(
      n => new Date(n.date).toDateString() === new Date(nutrition.date).toDateString()
    );
    if (existingIndex >= 0) {
      state.progress.nutrition[existingIndex] = nutrition;
    } else {
      state.progress.nutrition.push(nutrition);
    }
    storage.setState(state);
  },

  addActivity: (activity: DailyActivity) => {
    const state = storage.getState();
    const existingIndex = state.progress.activity.findIndex(
      a => new Date(a.date).toDateString() === new Date(activity.date).toDateString()
    );
    if (existingIndex >= 0) {
      state.progress.activity[existingIndex] = activity;
    } else {
      state.progress.activity.push(activity);
    }
    storage.setState(state);
  },

  addRecovery: (recovery: DailyRecovery) => {
    const state = storage.getState();
    const existingIndex = state.progress.recovery.findIndex(
      r => new Date(r.date).toDateString() === new Date(recovery.date).toDateString()
    );
    if (existingIndex >= 0) {
      state.progress.recovery[existingIndex] = recovery;
    } else {
      state.progress.recovery.push(recovery);
    }
    storage.setState(state);
  },

  addCheckIn: (checkIn: WeeklyCheckIn) => {
    const state = storage.getState();
    state.progress.checkIns.push(checkIn);
    storage.setState(state);
  },

  clear: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};

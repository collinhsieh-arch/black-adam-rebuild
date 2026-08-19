import { DailyWeight, DailyWaist } from '../types';

export const calculations = {
  // Calculate 7-day rolling average
  calculate7DayAverage: (data: { date: Date; value: number }[]): number => {
    if (data.length === 0) return 0;
    const last7 = data.slice(-7);
    const sum = last7.reduce((acc, item) => acc + item.value, 0);
    return sum / last7.length;
  },

  // Calculate weekly weight change
  getWeeklyChange: (data: DailyWeight[]): { current: number; previous: number; change: number } => {
    if (data.length < 7) return { current: 0, previous: 0, change: 0 };
    
    const current7DayAvg = calculations.calculate7DayAverage(
      data.slice(-7).map(d => ({ date: d.date, value: d.weight }))
    );
    const previous7DayAvg = calculations.calculate7DayAverage(
      data.slice(-14, -7).map(d => ({ date: d.date, value: d.weight }))
    );
    
    return {
      current: current7DayAvg,
      previous: previous7DayAvg,
      change: current7DayAvg - previous7DayAvg,
    };
  },

  // Calculate percentage of bodyweight
  percentageOfBodyweight: (value: number, weight: number): number => {
    return (value / weight) * 100;
  },

  // Check if in target weight loss range
  isWeightLossOnTarget: (weightData: DailyWeight[], currentWeight: number): boolean => {
    if (weightData.length < 14) return true; // Not enough data
    
    const change = calculations.getWeeklyChange(weightData).change;
    const targetMin = -0.0075 * currentWeight; // 0.75%
    const targetMax = -0.005 * currentWeight;  // 0.5%
    
    return change >= targetMin && change <= targetMax;
  },

  // Get SI pain status
  getSIPainStatus: (painScore: number): 'GREEN' | 'YELLOW' | 'RED' => {
    if (painScore <= 2) return 'GREEN';
    if (painScore <= 4) return 'YELLOW';
    return 'RED';
  },

  // Calculate recovery score
  calculateRecoveryScore: (sleep: number, energy: 1|2|3|4|5, recoveryScore: 1|2|3|4|5): number => {
    const sleepScore = Math.min(sleep / 8 * 5, 5); // Normalize to 5
    return (sleepScore + energy + recoveryScore) / 3;
  },

  // Determine calorie adjustment
  determineCalorieAdjustment: (
    currentCalories: number,
    weightLossPercentage: number,
    adherence: number,
    strengthDecline: boolean
  ): { recommended: number; reason: string } => {
    if (adherence < 0.85) {
      return { recommended: currentCalories, reason: 'Adherence below 85%. Improve consistency before adjusting calories.' };
    }

    if (weightLossPercentage > 0.01) { // More than 1%
      if (strengthDecline) {
        return { recommended: currentCalories + 150, reason: 'Weight loss too aggressive and strength declining. Increase calories by 150.' };
      }
    }

    if (weightLossPercentage < 0.0025 && weightLossPercentage > -0.005) { // Less than target for 2 weeks
      return { recommended: currentCalories - 150, reason: 'Below target weight loss. Reduce calories by 150 or increase steps by 1500.' };
    }

    return { recommended: currentCalories, reason: 'Weight loss on target. Maintain current calories.' };
  },

  // Format time duration
  formatDuration: (minutes: number): string => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  },
};

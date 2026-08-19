import { Exercise } from '../types';

export const EXERCISES: Exercise[] = [
  // UPPER A
  {
    id: 'machine-chest-press',
    name: 'Machine Chest Press',
    targetMuscles: ['Chest', 'Triceps'],
    primaryWorkout: 'UPPER_A',
    notes: 'Stable shoulder blades, controlled eccentric, pain-free ROM',
    siAlternative: 'N/A',
  },
  {
    id: 'chest-supported-row',
    name: 'Chest-Supported Row',
    targetMuscles: ['Upper Back', 'Lats'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'incline-db-press',
    name: 'Incline Dumbbell Press',
    targetMuscles: ['Upper Chest'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'neutral-grip-lat-pd',
    name: 'Neutral-Grip Lat Pulldown',
    targetMuscles: ['Lats'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'cable-lateral-raise',
    name: 'Cable Lateral Raise',
    targetMuscles: ['Side Delts'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'reverse-pec-deck',
    name: 'Reverse Pec Deck',
    targetMuscles: ['Rear Delts'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'cable-curl',
    name: 'Cable Curl',
    targetMuscles: ['Biceps'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'rope-triceps-pd',
    name: 'Rope Triceps Pressdown',
    targetMuscles: ['Triceps'],
    primaryWorkout: 'UPPER_A',
    siAlternative: 'N/A',
  },

  // LOWER A
  {
    id: 'hack-squat',
    name: 'Hack Squat',
    targetMuscles: ['Quads', 'Glutes'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'Belt Squat or Leg Press',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    targetMuscles: ['Quads'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'Supported Split Squat',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Supported Bulgarian Split Squat',
    targetMuscles: ['Quads', 'Glutes'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'Supported Reverse Lunge or Step-Up',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'seated-leg-curl',
    name: 'Seated Leg Curl',
    targetMuscles: ['Hamstrings'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'leg-extension',
    name: 'Leg Extension',
    targetMuscles: ['Quads'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'seated-calf-raise',
    name: 'Seated Calf Raise',
    targetMuscles: ['Calves'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'N/A',
  },
  {
    id: 'pallof-press',
    name: 'Pallof Press',
    targetMuscles: ['Core', 'Anti-Rotation'],
    primaryWorkout: 'LOWER_A',
    siAlternative: 'N/A',
  },

  // UPPER B
  {
    id: 'incline-machine-press',
    name: 'Incline Machine Press',
    targetMuscles: ['Upper Chest', 'Shoulders'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'single-arm-cable-pd',
    name: 'Single-Arm Cable Pulldown',
    targetMuscles: ['Lats'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'cable-machine-lr',
    name: 'Cable/Machine Lateral Raise',
    targetMuscles: ['Side Delts'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'rear-delt-cable-fly',
    name: 'Rear-Delt Cable Fly',
    targetMuscles: ['Rear Delts'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'incline-db-curl',
    name: 'Incline Dumbbell Curl',
    targetMuscles: ['Biceps'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'overhead-cable-ext',
    name: 'Overhead Cable Triceps Extension',
    targetMuscles: ['Triceps'],
    primaryWorkout: 'UPPER_B',
    siAlternative: 'N/A',
  },

  // LOWER B
  {
    id: 'belt-squat',
    name: 'Belt Squat',
    targetMuscles: ['Quads', 'Glutes'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'Leg Press',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'db-rdl',
    name: 'Dumbbell Romanian Deadlift',
    targetMuscles: ['Hamstrings', 'Glutes', 'Lower Back'],
    primaryWorkout: 'LOWER_B',
    notes: 'Optional based on SI tolerance',
    siAlternative: 'Cable Pull-Through or Additional Leg Curl',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'reverse-lunge',
    name: 'Reverse Lunge',
    targetMuscles: ['Quads', 'Glutes'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'Supported Step-Up',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'lying-leg-curl',
    name: 'Lying Leg Curl',
    targetMuscles: ['Hamstrings'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'hip-thrust',
    name: 'Hip Thrust/Glute Bridge',
    targetMuscles: ['Glutes', 'Hamstrings'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'Cable Glute Extension',
    siAlternativeReason: 'Reduces SI stress',
  },
  {
    id: 'standing-calf-raise',
    name: 'Standing Calf Raise',
    targetMuscles: ['Calves'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'N/A',
  },
  {
    id: 'anti-rotation-core',
    name: 'Anti-Rotation Core',
    targetMuscles: ['Core', 'Anti-Rotation'],
    primaryWorkout: 'LOWER_B',
    siAlternative: 'N/A',
  },
];

export const UPPER_A_EXERCISES = [
  { id: 'machine-chest-press', sets: 3, reps: '6-10', rir: '2-3', rest: '2-3 min' },
  { id: 'chest-supported-row', sets: 3, reps: '8-12', rir: '2', rest: '2 min' },
  { id: 'incline-db-press', sets: 2, reps: '8-12', rir: '2', rest: '2 min' },
  { id: 'neutral-grip-lat-pd', sets: 3, reps: '8-12', rir: '2', rest: '2 min' },
  { id: 'cable-lateral-raise', sets: 3, reps: '12-20', rir: '1-2', rest: '60-90 sec' },
  { id: 'reverse-pec-deck', sets: 2, reps: '12-20', rir: '1-2', rest: '60-90 sec' },
  { id: 'cable-curl', sets: 3, reps: '10-15', rir: '1-2', rest: '60-90 sec' },
  { id: 'rope-triceps-pd', sets: 3, reps: '10-15', rir: '1-2', rest: '60-90 sec' },
];

export const LOWER_A_EXERCISES = [
  { id: 'hack-squat', sets: 3, reps: '6-10', rir: '2-3', rest: '2-3 min' },
  { id: 'leg-press', sets: 2, reps: '10-15', rir: '2', rest: '2 min' },
  { id: 'bulgarian-split-squat', sets: 2, reps: '8-12 per leg', rir: '2', rest: '90-120 sec' },
  { id: 'seated-leg-curl', sets: 3, reps: '8-12', rir: '2', rest: '90 sec' },
  { id: 'leg-extension', sets: 3, reps: '10-15', rir: '1-2', rest: '90 sec' },
  { id: 'seated-calf-raise', sets: 3, reps: '10-15', rir: '1-2', rest: '90 sec' },
  { id: 'pallof-press', sets: 3, reps: '10-15 per side', rir: '2', rest: '90 sec' },
];

export const UPPER_B_EXERCISES = [
  { id: 'incline-machine-press', sets: 3, reps: '8-12', rir: '2', rest: '2 min' },
  { id: 'chest-supported-row', sets: 3, reps: '8-12', rir: '2', rest: '2 min' },
  { id: 'single-arm-cable-pd', sets: 3, reps: '10-15', rir: '1-2', rest: '90 sec' },
  { id: 'machine-chest-press', sets: 2, reps: '10-15', rir: '1-2', rest: '90 sec' },
  { id: 'cable-machine-lr', sets: 4, reps: '12-20', rir: '1-2', rest: '90 sec' },
  { id: 'rear-delt-cable-fly', sets: 2, reps: '12-20', rir: '1-2', rest: '90 sec' },
  { id: 'incline-db-curl', sets: 3, reps: '8-12', rir: '1-2', rest: '90 sec' },
  { id: 'overhead-cable-ext', sets: 3, reps: '10-15', rir: '1-2', rest: '90 sec' },
];

export const LOWER_B_EXERCISES = [
  { id: 'seated-leg-curl', sets: 3, reps: '8-12', rir: '2', rest: '90 sec' },
  { id: 'belt-squat', sets: 3, reps: '8-12', rir: '2-3', rest: '2 min' },
  { id: 'db-rdl', sets: 2, reps: '8-12', rir: '3', rest: '2 min' },
  { id: 'reverse-lunge', sets: 2, reps: '8-12 per leg', rir: '2', rest: '90 sec' },
  { id: 'lying-leg-curl', sets: 2, reps: '10-15', rir: '1-2', rest: '90 sec' },
  { id: 'hip-thrust', sets: 2, reps: '8-12', rir: '2', rest: '90 sec' },
  { id: 'standing-calf-raise', sets: 3, reps: '8-15', rir: '1-2', rest: '90 sec' },
  { id: 'anti-rotation-core', sets: 3, reps: '10-15 per side', rir: '2', rest: '90 sec' },
];

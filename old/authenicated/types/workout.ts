type Workout = {
    workoutId: string,
    createdAt: string | null,
    userId: string,
    desc: string | null,
    duration: number | null,
    capture: string | null,
  };
  
  export default Workout;
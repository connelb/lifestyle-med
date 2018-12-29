// type Measurement = {
//   measurementId: string,
//   createdAt: string | null,
//   chest: number | null,
//   hips: number | null
//   leftArm: number | null,
//   leftThigh: number | null,
//   rightArm: number | null,
//   rightThigh: number | null,
//   waist: number | null,
//   weight: number | null,
// };

// export default Measurement;

export interface Measurement {
  measurementId: string,
  createdAt: string | null,
  chest: number | null,
  hips: number | null
  leftArm: number | null,
  leftThigh: number | null,
  rightArm: number | null,
  rightThigh: number | null,
  waist: number | null,
  weight: number | null,
}

// export interface Doctor {
//   sno: number;
//   doctorName: string;
//   department: string;
//   floor: string;
//   roomNo: string;
//   timings: string;
// }


export interface Doctor {
  sno: number;
  doctorName: string;
  department: string;
  floor: string;
  roomNo: string;
  timings: string;

  // Optional properties
  roomType?: 'doctor' | 'label' | 'empty';
  label?: string;
}
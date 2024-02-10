export interface ResponseOneCourse {
  course: Course;
  students: Student[];
}

export interface Course {
  teacherCouserId: number;
  start_date: Date;
  end_date: Date;
  days: string[];
  cycle: number;
  couserId: number;
  name: string;
  credit: number;
  description: string;
  isActive: boolean;
  numberHours: number;
}

export interface Student {
  id: number;
  typeDocument: string;
  proffesion: string[] | null;
  gradeLevel: string;
  document: string;
  isActive: boolean;
  user: User;
}

export interface User {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phones: null;
  address: null | string;
  isActive: boolean;
  photo: null | string;
}

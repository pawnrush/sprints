// src/lib/types.ts

// Defines the shape of a User object
export interface User {
    id: number;
    name: string;
    role: string;
    studentIds: number[];
  }
  
  // Defines the shape of a Student object
  export interface Student {
    id: number;
    name: string;
    grade: string;
  }
  
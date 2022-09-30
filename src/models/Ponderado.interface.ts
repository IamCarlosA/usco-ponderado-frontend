export interface PonderadoSent {
  lecturaCritica: number;
  cienciasNaturales: number;
  matematicas: number;
  ingles: number;
  socialesYCiudadanas: number;
}

export interface Faculty {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Career {
  _id: string;
  title: string;
  estimatedProgramDuration: string;
  numberOfAcademicCredits: number;
  academicLevel: string;
  levelOfEducation: string;
  admissionPeriodicity: string;
  trainingModality: string;
  degreeAwarded: string;
  sniesRegistry: string;
  faculty: Faculty;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Ponderado {
  ponderado: number;
  career: Career;
}

export interface PonderadoResponse {
  faculty: string;
  ponderados: Ponderado[];
}
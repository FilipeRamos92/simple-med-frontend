export interface Doctor {
    firstName: string;
    lastName: string;
    localService: string;
    speciality: { id: number, name: string };
    gender: string
} 
export interface Task {

    id?: number; // Cuando creamos una task tiene que tener un ID pero podría no venir
    text: string;
    day: string; 
    reminder: boolean;
    
    }
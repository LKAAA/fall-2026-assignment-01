import * as fs from 'fs';



interface students {
    // Key: Student Name - class dictionary
    [student_name: string]: {
      [class_name: string]: number
    };
}

type classes_dict = Record<string, string>;
type student_dict = Record<string, classes_dict>;

let students_matrix: student_dict;



const rawData = fs.readFileSync("data/gradebook.json", 'utf-8');

  try {
    // Parse the JSON and cast it to our double-layer dictionary type
    students_matrix = JSON.parse(rawData);
    
    // Now TypeScript knows the exact structure!
    console.log("Successfully parsed:", students_matrix);
    
    
} catch (error) {
    console.error("Invalid JSON format:", error);
}


export function calculateSubjectAverage(subject: string): number {
  
  let count: number = 0;
  let total: number = 0;

  for (const studentName in students_matrix) {
    const studentClasses = students_matrix[studentName];
    const grade = studentClasses?.[subject];
    if (grade) {
      total += Number(grade); 
      count++;
    }
  }

  return count > 0 ? total / count : 0;
}

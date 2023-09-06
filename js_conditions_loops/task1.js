const averageGrade = 90;

if (averageGrade < 60) {
    console.log ("Unsatisfactorily")
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Satisfactorily")
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log("Fine")
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log ("Very good")
} else if (averageGrade >= 91 && averageGrade <= 100) {
    console.log("Perfectly")
} else {
    console.log("Invalid Grade")
}
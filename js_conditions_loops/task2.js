const averageGrade = 100;

switch (true) {
    case (averageGrade <= 60):
        console.log ("Unsatisfactorily");
        break
    case (averageGrade <= 70):
        console.log("Satisfactorily");
        break
    case (averageGrade <= 80):
        console.log("Fine");
        break
    case (averageGrade <= 90):
        console.log ("Very good");
        break
    case (averageGrade <= 100):
        console.log("Perfectly")
        break
    default:
        console.log("Invalid Grade");
}
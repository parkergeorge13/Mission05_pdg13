//Receives grade percents and calculates them into an overall grade and letter grade*/*/
$("#btnSend").click(function () {
    //Calculation for percentage
    var finalGrade = ($("#txtAssignments").val() * .5) + ($("#txtProject").val() * .1) + ($("#txtQuizzes").val() * .1)
        + ($("#txtMidExam").val() * .1) + ($("#txtFinalExam").val() * .1) + ($("#txtIntex").val() * .1)
    var finalGradeP = finalGrade + '%'
    var finalGradeL

    //Puts the grade percent into a letter grade category
    switch (true) {
        case finalGrade >= 94:
            finalGradeL = 'A'
            break;
        case finalGrade >= 90:
            finalGradeL = 'A-'
            break;
        case finalGrade >= 87:
            finalGradeL = 'B+'
            break;
        case finalGrade >= 84:
            finalGradeL = 'B'
            break;
        case finalGrade >= 80:
            finalGradeL = 'B-'
            break;
        case finalGrade >= 77:
            finalGradeL = 'C+'
            break;
        case finalGrade >= 74:
            finalGradeL = 'C'
            break;
        case finalGrade >= 70:
            finalGradeL = 'C-'
            break;
        case finalGrade >= 67:
            finalGradeL = 'D+'
            break;
        case finalGrade >= 64:
            finalGradeL = 'D'
            break;
        case finalGrade >= 60:
            finalGradeL = 'D-'
            break;
        case finalGrade < 60:
            finalGradeL = 'E'
            break;
    }
    alert("Final Percent: " + finalGradeP + "\nFinal Letter Grade: " + finalGradeL)
    $("#GradePercent").html(finalGradeP)
    $("#GradeLetter").html(finalGradeL)

})
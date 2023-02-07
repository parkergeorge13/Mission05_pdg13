using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_pdg13.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100)]
        public string Assignments { get; set; }
        [Range(0, 100)]
        public string Project { get; set; }
        [Range(0, 100)]
        public string Quizzes { get; set; }
        [Range(0, 100)]
        public string MidExam { get; set; }
        [Range(0, 100)]
        public string FinalExam { get; set; }
        [Range(0, 100)]
        public string Intex { get; set; }
    }
}

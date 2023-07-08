using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace aspnetapitest.model
{
    public class Student
    { //edit done 
        [Required]
        public string? StudentId { get; set; }

        [Required]
        public string? StudentFirstName { get; set; }

        [Required]
        public string? StudentLastName { get; set; }

        [Required]
        public DateTime? StudentBirthDate { get; set; }

        [Required]
        public string? StudentEmail { get; set; }

        [Required]
        public string? StudentPhoneNumber { get; set; }

        [Required]
        public string? CVFileName { get; set; }
        [Required]
        public int? TaskId { get; set; }

    }
}

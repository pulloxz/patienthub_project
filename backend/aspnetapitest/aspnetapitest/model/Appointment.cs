using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.model
{
        public class Appointment
        {
            [Key]
            public string AppointmentId { get; set; }

            [Required]
            public string? PatientFirstName { get; set; }
            [Required]
            public string? PatientLastName { get; set; }

            [Required]
            public string? PatientPhoneNumber { get; set; }

            [Required]
            public DateTime? AppointmentDate { get; set; }

            //[Required]
            //public TimeSpan? AppointmentTime { get; set; }

            [Required]

            public int? TaskId { get; set; }

            [ForeignKey("Student")]
            public string StudentId { get; set; }
            public virtual Student Student { get; set; }

        }
}

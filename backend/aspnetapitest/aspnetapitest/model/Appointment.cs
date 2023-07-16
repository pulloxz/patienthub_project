using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.model
{
        public class Appointment
        {
            [Key]
           public string AppointmentId { get; set; } = null!;

            
            public string PatientFirstName { get; set; } = null!;
           
            public string PatientLastName { get; set; } = null!;

            public int age { get; set; }
            public string location { get; set; } = null!;

            public string PatientPhoneNumber { get; set; } = null!;

            public string AppointmentDate { get; set; } = null!;

            public string TaskId { get; set; } = null!;

            [ForeignKey("Student")]
            public string StudentId { get; set; }
            public virtual Student Student { get; set; }

        }
}

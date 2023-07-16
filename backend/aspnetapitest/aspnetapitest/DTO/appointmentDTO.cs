using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.DTO
{
    public class appointmentDTO
    {
        public string PatientFirstName { get; set; } = null!;
        public string PatientLastName { get; set; } = null!;
        public int age { get; set; }
        public string location { get; set; } = null!;
        public string PatientPhoneNumber { get; set; } = null!;
        public string AppointmentDate { get; set; } = null!;
        public string Task { get; set; } = null!;

    }
}

using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.DTO
{
    public class StudentDTO
    {
        [Required]
   
            public string? FirstName { get; set; }
        [Required]
            public string? LastName { get; set; }
        [Required]
            public DateTime? BirthDate { get; set; }
        [Required]
            public string? Email { get; set; }
        [Required]
            public string? PhoneNumber { get; set; }
        [Required]
        public int? Task { get; set; }
            // Include only the properties you want to expose to the user

    }
}

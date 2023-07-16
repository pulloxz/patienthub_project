using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.DTO
{
    public class StudentDTO
    {
        public string FirstName { get; set; } = null!;
        
        public string LastName { get; set; } = null!;
        
        public DateTime BirthDate { get; set; } 
        
        public string Email { get; set; } = null!;
        
        public string PhoneNumber { get; set; } = null!;
        public string Task { get; set; } = null!;
            // Include only the properties you want to expose to the user

    }
}

using aspnetapitest.DTO;
using aspnetapitest.Interfaces;
using aspnetapitest.model;
using Microsoft.AspNetCore.Mvc;

namespace aspnetapitest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentRegController : ControllerBase
    {
        private readonly IStudentRepository _studentRepository;

        public StudentRegController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }
        [HttpPost("students")]
        public IActionResult Addstudent([FromForm]StudentDTO studentdto, IFormFile cvFile)
        {
            var student = new Student { 
                StudentFirstName = studentdto.FirstName, 
                StudentLastName = studentdto.LastName,
                StudentEmail = studentdto.Email,
                StudentBirthDate = studentdto.BirthDate,
                StudentPhoneNumber = studentdto.PhoneNumber,
                TaskId = studentdto.Task
            };

            if (cvFile != null && cvFile.Length > 0) {
                string cvFileName = Guid.NewGuid().ToString() + Path.GetExtension(cvFile.FileName);
                string cvFilePath = Path.Combine("CVs", cvFile.FileName);
                using (var steam = new FileStream(cvFilePath, FileMode.Create))
                {
                    cvFile.CopyTo(steam);
                
                }
                student.CVFileName = cvFileName;
            }
            _studentRepository.Addstudent(student);
            return Ok("student sucssesfuly created");
        }
    }
}

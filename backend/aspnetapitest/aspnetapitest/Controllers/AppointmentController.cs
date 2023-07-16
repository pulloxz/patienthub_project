using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using aspnetapitest.model;
using aspnetapitest.Interfaces;
using aspnetapitest.DTO;
using aspnetapitest.repository;

namespace aspnetapitest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentRepo _appointmentRepo;
        private readonly IStudentRepository _studentRegRepository;

        public AppointmentController(IAppointmentRepo appointmentRepo, IStudentRepository studentRegRepository)
        {
            _appointmentRepo = appointmentRepo;
            _studentRegRepository = studentRegRepository;
        }

        [HttpPost("appointments")]
        public IActionResult CreateAppointment([FromForm] appointmentDTO appointmentDTO)
        {
            string appointmentId = Guid.NewGuid().ToString();
            var student = _studentRegRepository.GetByTaskId(appointmentDTO.Task);
            if (student == null)
            {
                return BadRequest("no dentist for now please try l8r");
            }
            var appointment = new Appointment
            {
                AppointmentId = appointmentId,
                PatientFirstName = appointmentDTO.PatientFirstName,
                PatientLastName = appointmentDTO.PatientLastName,
                age = appointmentDTO.age,
                location = appointmentDTO.location,
                PatientPhoneNumber = appointmentDTO.PatientPhoneNumber,
                AppointmentDate = appointmentDTO.AppointmentDate,
                TaskId = appointmentDTO.Task,
                StudentId = student.StudentId
            };

            _appointmentRepo.createappointment(appointment);
            return Ok("Appointment created successfully!");
        }
    }
}

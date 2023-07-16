using aspnetapitest.Interfaces;
using aspnetapitest.model;
using Microsoft.EntityFrameworkCore;

namespace aspnetapitest.repository
{
    public class StudentRegRepository : IStudentRepository
    {
        private readonly AppDatabaseContaxt _dbContaxt;

        public StudentRegRepository(AppDatabaseContaxt dbContaxt) {

            _dbContaxt = dbContaxt;
        }
        public Student GetByTaskId(String? taskId)
        {
            return _dbContaxt.Students.FirstOrDefault(s => s.TaskId == taskId);
        }

        public void Addstudent(Student student)
        {
            student.StudentId = Guid.NewGuid().ToString();
            _dbContaxt.Students.Add(student);
            _dbContaxt.SaveChanges();
        }
    }
}

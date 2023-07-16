using aspnetapitest.model;

namespace aspnetapitest.Interfaces
{
    public interface IStudentRepository
    {
        void Addstudent (Student student);
        Student GetByTaskId (string? TaskId);

    }
}

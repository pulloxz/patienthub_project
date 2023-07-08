using aspnetapitest.model;

namespace aspnetapitest.Interfaces
{
    public interface IAppointmentRepo
    {
        public void createappointment(Appointment appointment);
    }
}

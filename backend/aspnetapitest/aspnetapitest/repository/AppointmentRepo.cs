using aspnetapitest.Interfaces;
using aspnetapitest.model;

namespace aspnetapitest.repository
{
    public class AppointmentRepo : IAppointmentRepo
    {
        private readonly AppDatabaseContaxt _dbcontaxt;

        public AppointmentRepo(AppDatabaseContaxt dbcontaxt)
        {
            _dbcontaxt = dbcontaxt;

        }
        public void createappointment (Appointment appointment)
        {
            appointment.AppointmentId = Guid.NewGuid().ToString();
            _dbcontaxt.Appointments.Add(appointment);
            _dbcontaxt.SaveChanges();

        }

    }
}

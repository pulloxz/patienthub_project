using aspnetapitest.model;
using Microsoft.EntityFrameworkCore;

public class AppDatabaseContaxt : DbContext
{
    public AppDatabaseContaxt(DbContextOptions<AppDatabaseContaxt> options) : base(options) { }
    public DbSet<Student> Students { get; set; }
    public DbSet<Appointment> Appointments { get; set; }

}


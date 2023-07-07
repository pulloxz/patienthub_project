﻿using System.ComponentModel.DataAnnotations;

namespace aspnetapitest.DTO
{
    public class appointmentDTO
    {
        [Required]
        public string? PatientName { get; set; }

        [Required]
        public string? PatientPhoneNumber { get; set; }

        [Required]
        public DateTime? AppointmentDate { get; set; }

        //[Required]
       // public TimeSpan? AppointmentTime { get; set; }

        [Required]

        public int? Task { get; set; }

    }
}

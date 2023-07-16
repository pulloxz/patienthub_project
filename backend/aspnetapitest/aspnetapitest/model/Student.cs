using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace aspnetapitest.model
{
    public class Student
    { //edit done 
       public string StudentId { get; set; }

        
        public string StudentFirstName { get; set; }

        
        public string StudentLastName { get; set; }

        
        public DateTime StudentBirthDate { get; set; }

        
        public string StudentEmail { get; set; }

        
        public string StudentPhoneNumber { get; set; }

        
        public string CVFileName { get; set; }
       
        public string TaskId { get; set; }

    }
}

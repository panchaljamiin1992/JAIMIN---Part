//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace transporterQuote.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Transporter
    {
        public int TransporterID { get; set; }
        public string CompanyName { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string AlternateMobile { get; set; }
        public string Password { get; set; }
        public string Notes { get; set; }
        public System.DateTime CreatedDT { get; set; }
        public System.DateTime UpdatedDT { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsDomestic { get; set; }
        public bool IsExport { get; set; }
        public string ServiceTypeID { get; set; }
    }
}

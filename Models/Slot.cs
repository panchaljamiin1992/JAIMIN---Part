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
    
    public partial class Slot
    {
        public int SlotID { get; set; }
        public System.TimeSpan SlotFrom { get; set; }
        public System.TimeSpan SlotTo { get; set; }
        public int Capacity { get; set; }
        public int ServiceTypeID { get; set; }
        public System.DateTime CreatedDT { get; set; }
        public int CreatedByUserID { get; set; }
        public Nullable<System.DateTime> UpdatedDT { get; set; }
        public int UpdatedByUserID { get; set; }
        public bool IsDeleted { get; set; }
    }
}

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
    
    public partial class sp_getAllocatedSlotDetail_Result
    {
        public int containerID { get; set; }
        public int shipmentID { get; set; }
        public Nullable<System.TimeSpan> scheduleTime { get; set; }
        public string transporterName { get; set; }
        public string customerName { get; set; }
    }
}

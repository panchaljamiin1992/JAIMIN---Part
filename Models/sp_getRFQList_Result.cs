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
    
    public partial class sp_getRFQList_Result
    {
        public int reqForQuoteID { get; set; }
        public Nullable<int> customerID { get; set; }
        public string customerName { get; set; }
        public System.DateTime quoteByDT { get; set; }
        public string details { get; set; }
        public string status { get; set; }
        public string transporterIDs { get; set; }
        public bool isCloseEarly { get; set; }
        public string orderNo { get; set; }
        public string fileName { get; set; }
        public Nullable<System.DateTime> timeSlotFromDT { get; set; }
        public Nullable<System.DateTime> timeSlotToDT { get; set; }
        public int vehReadyByUserID { get; set; }
        public Nullable<System.DateTime> vehicleEntryDT { get; set; }
        public Nullable<System.DateTime> clearanceDT { get; set; }
        public string vehicleNumber { get; set; }
        public int paymentTerm { get; set; }
        public string fixedTerm { get; set; }
        public Nullable<System.DateTime> reminderSentDate { get; set; }
        public string fields { get; set; }
        public string transporterDetail { get; set; }
        public string response { get; set; }
        public string createdBy { get; set; }
        public string dispatchedBy { get; set; }
        public string destinationAddress { get; set; }
        public System.DateTime deliveryDT { get; set; }
        public Nullable<System.DateTime> dispatchDT { get; set; }
        public System.DateTime pickUpDT { get; set; }
        public decimal budget { get; set; }
        public string serviceName { get; set; }
        public Nullable<System.DateTime> startWorkDT { get; set; }
    }
}
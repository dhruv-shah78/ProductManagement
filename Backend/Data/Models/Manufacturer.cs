using System;
using System.Collections.Generic;

#nullable disable

namespace Backend.Models
{
    public partial class Manufacturer
    {
        public int Id { get; set; }
        public string ManufactureName { get; set; }
        public string Vehicle { get; set; }
    }
}

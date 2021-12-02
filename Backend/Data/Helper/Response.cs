using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Helper
{
    public class Response
    {
        public string Msg { get; set; }

        public object Data { get; set; }

        public bool Status { get; set; }
    }
}

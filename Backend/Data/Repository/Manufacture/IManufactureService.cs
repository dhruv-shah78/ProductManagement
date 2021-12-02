using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository.Manufacture
{
    public interface IManufactureService
    {
        List<Manufacturer> GetManufacturers();

        Task<Manufacturer> AddManufacturers(Manufacturer manufacture);

        Task<Manufacturer> DeleteManufacture(int? manufactureId);

        Task<Manufacturer> UpdateManufacturers(Manufacturer manufacture);
    }
}

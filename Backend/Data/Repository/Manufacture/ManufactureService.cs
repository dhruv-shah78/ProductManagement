using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Repository.Manufacture
{
    public class ManufactureService:IManufactureService
    {
        #region Fields

        private ProductManagementTestContext _dbContext;

        public ManufactureService()
        {
            _dbContext = new ProductManagementTestContext();
        }

        #endregion
        public List<Manufacturer> GetManufacturers()
        {
            return _dbContext.Manufacturers.ToList();
        }

        public async Task<Manufacturer> AddManufacturers(Manufacturer manufacturer)
        {
            if (_dbContext != null)
            {
                await _dbContext.Manufacturers.AddAsync(manufacturer);
                await _dbContext.SaveChangesAsync();

                return manufacturer;
            }

            return null;
        }

        public async Task<Manufacturer> UpdateManufacturers(Manufacturer manufacturer)
        {
            var manufacture = await _dbContext.Manufacturers.FirstOrDefaultAsync(x => x.Id == manufacturer.Id);

            if (_dbContext != null && manufacture!=null)
            {
                _dbContext.Manufacturers.Update(manufacturer);
                await _dbContext.SaveChangesAsync();

                return manufacturer;
            }

            return null;
        }

        public async Task<Manufacturer> DeleteManufacture(int? manufactureId)
        {
            int result = 0;

            if (_dbContext != null)
            {
                var manufacture = await _dbContext.Manufacturers.FirstOrDefaultAsync(x => x.Id == manufactureId);

                if (manufacture != null)
                {
                    _dbContext.Manufacturers.Remove(manufacture);
                    result = await _dbContext.SaveChangesAsync();
                    return manufacture;
                }
                else
                {
                    return null;
                }
            }

            return null;
        }
    }
}

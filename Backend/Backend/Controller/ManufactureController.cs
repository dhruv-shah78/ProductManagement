using Backend.Helper;
using Backend.Models;
using Backend.Repository.Manufacture;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Backend.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufactureController : ControllerBase
    {
        private readonly IManufactureService _manufacurerService;
        public ManufactureController(IManufactureService manufactureService)
        {
            _manufacurerService = manufactureService;
        }
        [HttpGet("GetManufacturers")]
        public async Task<Object> Get()
        {
            Response response = new Response();
            try
            {
                var list = _manufacurerService.GetManufacturers();
                if (list == null)
                {
                    response.Status = false;
                    response.Msg = "No records found";
                    return Ok(response);
                }
                response.Data = list;
                response.Status = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Msg = ex.Message;
                return response;
            }
        }

        [HttpPost]
        [Route("AddManufacturer")]
        public async Task<Object> AddManufacturer([FromBody]Manufacturer manufacture)
        {
            Response response = new Response();
            try
            {
                var savedRecord = _manufacurerService.AddManufacturers(manufacture);
                if (savedRecord!=null)
                {
                    response.Status = true;
                    response.Msg = "Successfully Saved records";
                    return Ok(response);
                }
                response.Msg = "Something went wrong";
                response.Status = false;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Msg = ex.Message;
                return response;
            }
        }


        [HttpDelete]
        [Route("DeleteManufacturer")]
        public async Task<Object> DeleteManufacturer(int? manufactureId)
        {
            Response response = new Response();
            try
            {
                var deleteRecord = _manufacurerService.DeleteManufacture(manufactureId);
                if (deleteRecord != null)
                {
                    response.Status = true;
                    response.Msg = "Delete record successfully";
                    return Ok(response);
                }
                else
                {
                    response.Msg = "No records found";
                    response.Status = false;
                }
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Msg = ex.Message;
                return response;
            }
        }

        [HttpPost]
        [Route("UpdateManufacturer")]
        public async Task<Object> UpdateManufacturer([FromBody] Manufacturer manufacture)
        {
            Response response = new Response();
            try
            {
                var savedRecord = _manufacurerService.UpdateManufacturers(manufacture);
                if (savedRecord != null)
                {
                    response.Status = true;
                    response.Msg = "Update the records successfully";
                    return Ok(response);
                }
                response.Msg = "Something went wrong";
                response.Status = false;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Status = false;
                response.Msg = ex.Message;
                return response;
            }
        }

    }
}

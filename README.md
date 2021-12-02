# ProductManagement

Setup Instructions:

Step 1: Execute dbscript.sql file on your SQL server database

Step 2: Change the connection string as per your SQL Server requirements in the appsettings.json file

For ex:
    "ConnectionStrings": {
      "DBConnection": "Server=PCI201\\SQL2017;Database=ProductManagementTest;UID=sa;PWD=Tatva@123;"
    }

Step 3: Before the angular project run, exectue the "npm install" command and then execute "ng serve" command    
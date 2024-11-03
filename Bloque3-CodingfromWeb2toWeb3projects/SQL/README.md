URL northwind: https://github.com/Jviejo/curso-dbs-14/tree/master/northwind

CREAR BD MYSQL
docker run -d --name curso-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 mysql:8.0.28

CREAR BD POSTGRES
docker run -d --name curso-pg -e POSTGRES_PASSWORD=my-secret-pw -p 5432:5432 postgres:13

CREAR BD SQLSERVER
docker run -d --name curso-sqlserver -e ACCEPT_EULA=Y -e SA_PASSWORD=my-s3cr3t-pw -p 1433:1433 mcr.microsoft.com/mssql/server:2019-CU15-ubuntu-20.04

CREAR BD ORACLE
docker run -d --name curso-oracle -e ORACLE_PWD=my-secret-pw -p 1521:1521 container-registry.oracle.com/database/express:21.3.0-xe

    CREAR USUARIO
    CREATE USER c##datos IDENTIFIED BY datos;

        "c##datos" es el nombre de usuario
        "datos" es la contraseña

    CONCEDER PERMISOS DE BASE DE DATOS AL USUARIO
    GRANT dba TO c##datos;
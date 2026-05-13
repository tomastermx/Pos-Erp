-- Crear base de datos
CREATE DATABASE IF NOT EXISTS erp_database;

-- Crear usuario accesible desde cualquier contenedor
CREATE USER IF NOT EXISTS 'erp_user'@'%' IDENTIFIED BY 'erp_password';

-- Dar permisos
GRANT ALL PRIVILEGES ON erp_database.* TO 'erp_user'@'%';

-- Aplicar cambios
FLUSH PRIVILEGES;
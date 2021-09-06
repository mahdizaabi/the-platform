CREATE DATABASE tpf_dev;
CREATE DATABASE tpf_prod;

CREATE USER 'tpf_dev_user'@'localhost' IDENTIFIED BY 'tpfd';
CREATE USER 'tpf_prod_user'@'localhost' IDENTIFIED BY 'tpfp';

GRANT SELECT ON tpf_dev.* to 'tpf_dev_user'@'localhost';
GRANT INSERT ON tpf_dev.* to 'tpf_dev_user'@'localhost';
GRANT UPDATE ON tpf_dev.* to 'tpf_dev_user'@'localhost';
GRANT DELETE ON tpf_dev.* to 'tpf_dev_user'@'localhost';

GRANT SELECT ON tpf_prod.* to 'tpf_prod_user'@'localhost';
GRANT INSERT ON tpf_prod.* to 'tpf_prod_user'@'localhost';
GRANT UPDATE ON tpf_prod.* to 'tpf_prod_user'@'localhost';
GRANT DELETE ON tpf_prod.* to 'tpf_prod_user'@'localhost';
#--> for Docker, the user is not coming from the localhost!# % wild card means from any host
GRANT SELECT ON tpf_dev.* to 'tpf_dev_user'@'%';
GRANT INSERT ON tpf_dev.* to 'tpf_dev_user'@'%';
GRANT UPDATE ON tpf_dev.* to 'tpf_dev_user'@'%';
GRANT DELETE ON tpf_dev.* to 'tpf_dev_user'@'%';

GRANT SELECT ON tpf_prod.* to 'tpf_prod_user'@'%';
GRANT INSERT ON tpf_prod.* to 'tpf_prod_user'@'%';
GRANT UPDATE ON tpf_prod.* to 'tpf_prod_user'@'%';
GRANT DELETE ON tpf_prod.* to 'tpf_prod_user'@'%';



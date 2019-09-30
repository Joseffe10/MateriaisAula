create table tb_login(
	id int not null auto_increment primary key,
    login varchar(255),
    login_password varchar(255)
)

insert tb_login (login, login_password) values ('joseffe', '123456')
insert tb_login (login, login_password) values ('joao', '111222')


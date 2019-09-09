create database db_agenda_contato;

use db_agenda_contato;

create table tb_contato(
	id int not null auto_increment primary key
   ,nome varchar(255) not null
   ,telefone varchar(15) null
   ,email varchar(255) null
);

show fields from tb_contato;

select *
from tb_contato;

insert tb_contato (nome, telefone, email) values ('Joseffe', '+5513996034563', 'joseffe.oliveira@docente.unip.br');
insert tb_contato (nome, telefone, email) values ('MacGyver', '+131295647876', 'mac@macgyver.com');

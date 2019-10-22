use db_esamc

-- Criação de Tabela
create table tb_curso
(
	id_curso int auto_increment not null
   ,nm_curso varchar(50) not null
   ,nota_mec float null
   ,primary key (id_curso)
)

-- Exclusão de Tabela
drop table tb_curso

-- Inclusão de Registro na Tabela
insert into tb_curso (id_curso, nm_curso, nota_mec) values (3, 'PETROLEO E GAZ', null)

-- Exclusão de Registro na Tabela
delete from tb_curso where id_curso = 2

-- Apresenta todas as tabelas do Banco de Dados
show tables

select *
from tb_curso
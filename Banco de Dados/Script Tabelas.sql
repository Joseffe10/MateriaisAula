-- Criação do Banco de Dados
create database db_esamc

-- Utiliza o Banco de Dados criado
use db_esamc

-- Criação de Tabela
create table tb_curso
(
	id_curso int not null
   ,nm_curso varchar(50) not null
   ,nota_mec float null
   ,primary key (id_curso)
)

-- Inclusão de Registro na Tabela
insert into tb_curso (id_curso, nm_curso, nota_mec) values (1, 'ENGENHARIA DA COMPUTAÇÃO', 4)
insert into tb_curso (id_curso, nm_curso, nota_mec) values (2, 'ENGENHARIA DE PRODUÇÃO', 4)
insert into tb_curso (id_curso, nm_curso, nota_mec) values (3, 'PETROLEO E GAZ', null)

-- Exclusão de Registro na Tabela (Apenas se quiser excluir)
delete from tb_curso where id_curso = 2

-- Apresenta os registros que estão na Tabela
select *
from tb_curso
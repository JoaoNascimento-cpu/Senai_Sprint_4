--Cria��o do DML do banco de dados 'Clinica'
USE Clinica;
GO

--inserindo valores 'idClinica, nome fantasia, raz�o social, cnpj e endere�o na tabela Clinica 
INSERT INTO clinica(nomeFantasia, razaoSocial, cnpj, endereco)
VALUES ('Clinica Possarle', 'SP Medicinal Group ', '84.400.902/0001-30', 'Al Bar�o de Limeira, 532, SP');
GO

--incers�o de valores na tabela tipoUsuario como id do Tipo do Usuario e titulo deste mesmo id
INSERT INTO tipoUsuario(tituloTipoUsuario)
VALUES	('ADM'),
		('M�dico'),
		('Paciente');
GO

--Incers�o de valores na tabela Usuario
INSERT INTO usuario(idTipoUsuario, email, senha)
VALUES	(1,'ADM@spmedicinalgroup.com','12345'),
		(2,'Ricardo.Lemos@spmedicalgroup.com','12345'),
		(2,'Helena.souza@spmedicalgroup.com','12345'),
		(3,'jo�o@gmail.com','12345'),
		(3,'Mateus@gmail.com','12345');
GO

--Inser��o de valores da 'tabela paciente'
INSERT INTO paciente(idUsuario,rg, cpf, telefone)
VALUES	(4,'00.658.000-8', '000.000.000-00', '123456789'), 
		(5,'00.000.000-0 ', '000.000.000-10', '987654321');
GO

--Inser��o de valores da tabela 'Situa��o' da consulta
INSERT INTO situacao(situacaoNome)
VALUES	('Agendado'),
		('Confirmado'),
		('Cancelado');
GO

--Inser��o de valores na tebela 'especialidade'
INSERT INTO especialidade(nomeEspecialidade)
VALUES	('Acupuntura'),
		('Anestesiologia '),
		('Angiologia'),
		('Cardiologia'),
		('Cirurgia Cardiovascular'),
		('Cirurgia da M�o'),
		('Cirurgia do Aparelho Digestivo'),
		('Cirurgia Geral'),
		('Cirurgia Pedi�trica'),
		('Cirurgia Pl�stica'),
		('Cirurgia Tor�cica'),
		('Cirurgia Vascular'),
		('Dermatologia'),
		('Radioterapia'),
		('Urologia'),
		('Pediatria'),
		('Psiquiatria');
GO

--Inser��o de valores na tabela 'm�dico'
INSERT INTO medico(idUsuario, idEspecialidade, idClinica, crm, nomeMedico)
VALUES	(2, 17, 1,'54356-SP', 'Ricardo Lemos'),
		(3, 16, 1,'53452-SP', 'Helena Strada');
GO

--Inser��o de valores na table 'consulta'
INSERT INTO consulta(idMedico, idPaciente, idSituacao, dataConsulta, descricao)
VALUES	(1, 2, 2, 2021-03-11 19:00:00, 'Tratamento de gonorr�ia'),
		(2, 1, 1, 2021-03-13 16:00:00, 'Tratamento de gripe'),
		(1, 2, 3, 2021-03-12 17:00:00, 'Tratamento na coluna ');
GO 
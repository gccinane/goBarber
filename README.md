__Este prosejo é uma aplicação baseada um uma barbearia. Contendo agendamento, compromissos, sessão e autenticação__

Para iniciar tem como requisito Docker,
Instalação

git clone https://github.com/gccinane/goBarber

Acessar o repositório

docker-compose up (Backend)

yarn start (Frontend)

Rotas no Backend

post('/users') - Criar um usuário
post('/sessions') - Log in de usuário

A partir daqui, autenticação é necessária

put('/users') - Editar usuário

get('/providers') - Listar provedores

get('/providers/:providerId/available') - Verificar disponibilidade de provedor

post('/appointments') - Criar um agendamento

get('/appointments') - Listagem de todos agendamentos do usuário logado

delete('/appointments/:id') - Excluir agendamento

get('/schedule') - Marcar serviços

post('/files') - Fotos de perfil

get('/notifications') - Listagem de notificação do usuário logado

put('/notifications/:id') - Confirmação de notificação visualizada

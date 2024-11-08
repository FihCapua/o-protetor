# O Protetor Web App 🏡❤️

Bem-vindo ao repositório do O Protetor!
Este é um projeto criado para oferecer tranquilidade e segurança, sempre ao seu alcance. O objetivo é ajudar os usuários a gerenciar lembretes de medicamentos e fornecer meios fáceis de contato em situações de emergência, utilizando tecnologias modernas e acessíveis.

## 🚀 Sobre o Projeto

O Protetor é uma aplicação web desenvolvida com foco na simplicidade e segurança do usuário. Ela permite que você:
- Cadastre lembretes para tomar medicamentos nos horários certos. ⏰
- Receba notificações via SMS como lembrete para seus medicamentos. 📩
- Adicione um número de telefone de emergência para situações de urgência. 🚑
- Veja dicas diárias sobre saúde, segurança e bem-estar 💡
- Conheça jogos que estimulam a cognição e ajudam a memória 🧠

## 🥇 Principais Tecnologias Utilizadas

- React/Next.js: Desenvolvimento do front-end.
- Firebase: Autenticação e banco de dados.
- Textbelt: API para envio de sms's programados para lembretes e avisos em caso de emergência.
- EmailJS: API para envio de emails em caso de emergência.
- Open Street Map: Serviço de mapa para auxiliar com as coordenadas de latitude e longitude.

## 🛠️ Como Configurar e Rodar o Projeto Localmente

Quer colaborar ou testar o projeto? Siga os passos abaixo:

1. Clone o Repositório

```sh
git clone https://github.com/seu-usuario/o-protetor.git
cd o-protetor
```
2. Instale as Dependências

```sh
npm install
```
3. Configuração do Firebase

Para utilizar os serviços do Firebase, é necessário configurar as credenciais:
*  1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/) .
*  2. Crie um arquivo ```.env.local``` na raiz do projeto e adicione as seguintes variáveis:

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_USER_ID=YOUR_EMAILJS_USER_ID
NEXT_PUBLIC_NOMINATIM_BASE_URL=YOUR_NOMINATIM_BASE_URL
NEXT_PUBLIC_TEXT_BELT_BASE_URL=YOUR_TEXT_BELT_BASE_URL
TEXTBELT_KEY=YOUR_TEXTBELT_API_KEY
```
4.  Inicialize o Firebase Functions
Para configurar as funções do Firebase:
```
cd functions
npm install
firebase deploy --only functions
```
5.  Inicie o projeto

Agora, é só iniciar o servidor local:
```
npm run dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000.).

## 🔗 Links Úteis
[Firebase Console](https://console.firebase.google.com/)
[Documentação do TextBelt](https://textbelt.com/)
[Documentação OpenStreetMap](https://www.openstreetmap.org/)
[Documentação EmailJS](https://www.emailjs.com/docs/)

## 🌱 Como Contribuir
Ficamos felizes com sua ajuda para melhorar este projeto! Siga os passos abaixo para contribuir:

Faça um fork do repositório.
Crie uma nova branch com sua feature ou correção:
```
git checkout -b minha-feature
```
Faça o commit das suas mudanças:
```
git commit -m 'Adiciona minha feature'
```
Faça o push para a branch:
```
git push origin minha-feature
```
Abra um Pull Request 🚀

## 💌 Contato
Se precisar de ajuda ou tiver qualquer dúvida, fique à vontade para abrir uma issue

Feito com ❤️ por [FihCapua](https://github.com/FihCapua)



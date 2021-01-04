<p align="center">
  </br>
  <a href="https://github.com/marmitoTH/happy-nlw">
    <img src="https://user-images.githubusercontent.com/25598040/96660779-e2ce8a80-1320-11eb-891a-503fd72dfbe1.png" />
  </a>
  <h3 align="center">happy</h3></br>
  <p align="center">
    <a href='https://nodejs.org' target='__blank'>
    	<img src="https://img.shields.io/badge/Backend-Node.js-green?style=flat-square&link=https://nodejs.org">
    </a>
    <a href='https://reactjs.org' target='__blank'>
        <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&link=https://reactjs.org">
    </a>
    <a href='https://www.postgresql.org' target='__blank'>
        <img src="https://img.shields.io/badge/Database-PostgreSQL-blue?style=flat-square&link=https://www.postgresql.org">
    </a>
    <a href='https://www.linkedin.com/in/lucas-rodrigues-985918197' target='__blank'>
        <img src="https://img.shields.io/badge/Lucas-social-green?logo=linkedin&style=social&link=https://www.linkedin.com/in/lucas-rodrigues-985918197">
    </a>
  </p>
</p>

## 🔍 About

<img src="https://user-images.githubusercontent.com/25598040/96660681-9be09500-1320-11eb-81cc-841e90fb9196.png">

happy is an website created during The Next Level Week from Rocketseat. The purpose of the project was learning how to build a responsive web application, with both frontend and backend, from scratch in one week, using some of the main technologies currently in use by the market.

The idea behind the app is to register non-governmental organizations responsible  to take care of children's victims of rights violation or any special conditions, this way people can easily find where they are and support with what they're needing. To achieve this result the application provides interactive maps with Leaflet and integration with WhatsApp and Google Maps api.

Due to the time constraints of the challenge the application ended up with a big margin for improvements, like a proper authentication system for both the application and the api.

## 👀 Demo

<p align="center">
  <img src="https://user-images.githubusercontent.com/25598040/96724514-4c34b480-1386-11eb-9c30-4207c68f805b.gif" />
  <img src="https://user-images.githubusercontent.com/25598040/96729019-12b27800-138b-11eb-9bf7-c3bba1117b93.gif">
</p>

## 🔧 Made With

### Frontend
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Styled Components](https://styled-components.com/)
- [Leaflet](https://leafletjs.com/)
- [React Leaflet](https://react-leaflet.js.org/)

### Backend
- [Node.js (v12.18.4)](https://nodejs.org/)
- [npm (6.14.6)](https://www.npmjs.com/)
- [yarn (v1.22.5)](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [Sequelize](https://sequelize.org/)

## 🔌 Installation

`git clone https://github.com/marmitoTH/happy-nlw.git`

### Backend

This project uses PostgreSQL, so make sure to have it installed on your machine and change the credentials to match yours in `src/config/database.js`. The server will be listening the port `3001`.

```
npm install
yarn sequelize db:create
yarn sequelize db:migrate
npm start
```

### Frontend

```
npm install
npm start
```

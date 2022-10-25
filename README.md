# Music-Library

An Express.js API that interacts with a mySQL database via CRUD requests to store and interact with data containing artists, albums and song information.

Implements Test-Driven development using Mocha and Chai.

Created as part of the Manchester Codes full-stack web development boot-camp.

## Table of Contents

1. [Dependencies](#dependencies)
2. [Setup](#setup)
3. [Commands](#commands)
4. [Routes](#routes)
5. [Attribution](#attribution)

## Dependencies

- [Express.js](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)

### Dev Dependencies

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Faker](https://www.npmjs.com/package/@faker-js/faker)
- [Sinon](https://www.npmjs.com/package/sinon)

## Setup

### Install Dependencies

```
$ npm i
```

### Database

If you have [Docker](https://docs.docker.com/) installed, To set the database up, pull and run a MySQL image with:

```
$ docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql
```

### Environment variables

You will need to create a file to store your environment variables. These credentials allow you to connect to the database. Two environments will need to be created, one for production and one for testing.

Create a `.env` file in the root of the repo with the following values:

```
DB_PASSWORD=password
DB_NAME=music_library_dev
DB_USER=root
DB_HOST=localhost
DB_PORT=3307
PORT=3000
```

Create a `.env.test` file in the root of the repo with the following values:

```bash
DB_PASSWORD=password
DB_NAME=music_library_test
DB_USER=root
DB_HOST=localhost
DB_PORT=3307
PORT=3000
```

## Commands

To run the server use:

```
$ npm start
```

To run all tests use:

```
$ npm test
```

To just run unit tests use:

```
$ npm run unit-test
```

To run prettier use:

```
$ npm run prettier
```

## Routes

<sub>? In Schema represents optional field</sub>

### /artist

| Method | Route                    | Description                                                              | Schema (JSON)                                                |
| ------ | ------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| POST   | /artist                  | Creates a new artist                                                     | <pre>{<br /> "name": STRING,<br /> "genre": STRING <br />}   |
| GET    | /artist                  | Returns all artists                                                      | N/A                                                          |
| GET    | /artist/{artistId}       | Returns artist with specified ID                                         | N/A                                                          |
| PATCH  | /artist/{artistId}       | Updates artist with specified ID                                         | <pre>{<br /> "name"?: STRING,<br /> "genre"?: STRING <br />} |
| DELETE | /artist/{artistId}       | Deletes artist with specified ID                                         | N/A                                                          |
| POST   | /artist/{artistId}/album | Creates a new album and links it to the artist with the specified ID     | <pre>{<br /> "name": STRING,<br /> "year": INTEGER<br />}    |
| GET    | /artist/{artistId}/album | Returns all albums that are linked with the artist with the specified ID | N/A                                                          |
| GET    | /artist/{artistId}/song  | Returns all songs that are linked with the artist with the specified ID  | N/A                                                          |

### /album

| Method | Route                 | Description                                                            | Schema (JSON)                                                 |
| ------ | --------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| GET    | /album                | Returns all albums                                                     | N/A                                                           |
| GET    | /album/{albumId}      | Returns album with specified ID                                        | N/A                                                           |
| PATCH  | /album/{albumId}      | Updates album with specified ID                                        | <pre>{<br /> "name"?: STRING,<br /> "year"?: INTEGER<br />}   |
| DELETE | /album/{albumId}      | Deletes album with specified ID                                        | N/A                                                           |
| POST   | /album/{albumId}/song | Creates a new song and links it to the album with the specified ID     | <pre>{<br /> "name": STRING,<br /> "position": INTEGER<br />} |
| GET    | /album/{albumId}/song | Returns all songs that are linked with the album with the specified ID | N/A                                                           |

### /song

| Method | Route          | Description                    | Schema (JSON)                                                   |
| ------ | -------------- | ------------------------------ | --------------------------------------------------------------- |
| GET    | /song          | Returns all songs              | N/A                                                             |
| GET    | /song/{songId} | Returns song with specified ID | N/A                                                             |
| PATCH  | /song/{songId} | Updates song with specified ID | <pre>{<br /> "name"?: STRING,<br /> "position"?: INTEGER<br />} |
| DELETE | /song/{songId} | Deletes song with specified ID | N/A                                                             |

## Attribution

Created by **Perry Baran**.

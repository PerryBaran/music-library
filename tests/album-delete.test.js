const { expect } = require('chai');
const request = require('supertest');
const getDb = require('../src/services/db');
const app = require('../src/app');

describe('delete album', () => {
  let db;
  let artists;
  let albums;

  beforeEach(async () => {
    db = await getDb();

    await Promise.all([
      db.query(`INSERT INTO Artist (name, genre) VALUES(?, ?)`, [
        'Jenico',
        'Electronic',
      ]),
      db.query(`INSERT INTO Artist (name, genre) VALUES(?, ?)`, [
        'Tame Impala',
        'rock',
      ]),
      db.query(`INSERT INTO Artist (name, genre) VALUES(?, ?)`, [
        'Jasmine Myra',
        'Jazz',
      ]),
    ]);

    [artists] = await db.query('SELECT * from Artist');

    await Promise.all([
      db.query(`INSERT INTO Album (name, year, artistId) VALUE (?, ?, ?)`, [
        'Dreaming of Detuned Love',
        2021,
        artists[0].id,
      ]),
      db.query(`INSERT INTO Album (name, year, artistId) VALUE (?, ?, ?)`, [
        'Ethereal',
        2019,
        artists[0].id,
      ]),
      db.query(`INSERT INTO Album (name, year, artistId) VALUE (?, ?, ?)`, [
        'Currents',
        2015,
        artists[1].id,
      ]),
      db.query(`INSERT INTO Album (name, year, artistId) VALUE (?, ?, ?)`, [
        'Horizons',
        2022,
        artists[2].id,
      ]),
    ]);

    [albums] = await db.query('SELECT * from Album');
  });

  afterEach(async () => {
    await db.query('DELETE FROM Artist');
    await db.query('DELETE FROM Album');
    await db.close();
  });

  describe('/album/:albumId', () => {
    it('deletes a single album with the correct id', async () => {
      const { id: albumId } = albums[0];
      const res = await request(app).delete(`/album/${albumId}`).send();

      expect(res.status).to.equal(200);

      const [[deletedAlbumRecord]] = await db.query(
        'SELECT * FROM Album WHERE id = ?',
        [albumId]
      );

      expect(!!deletedAlbumRecord).to.be.false;
    });

    it('returns a 404 if the album is not in the database', async () => {
      const res = await request(app).delete('/album/999999').send();

      expect(res.status).to.equal(404);
    });
  });
});

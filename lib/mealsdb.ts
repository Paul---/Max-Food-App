import sql from 'better-sqlite3';

const db = sql('meals.db');

// async to simulate fetching data from a remote database
export async function getMeals() {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare('SELECT * FROM meals').all();
}

import sql from 'better-sqlite3';

const db = sql('meals.db');

interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

// async to simulate fetching data from a remote database
export async function getMeals() {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM meals').all();
}

function isMeal(value: unknown): value is Meal {
  if (!value || typeof value !== 'object') return false;

  return (
    'title' in value &&
    typeof value.title === 'string' &&
    'slug' in value &&
    typeof value.slug === 'string' &&
    'image' in value &&
    typeof value.image === 'string' &&
    'summary' in value &&
    typeof value.summary === 'string' &&
    'instructions' in value &&
    typeof value.instructions === 'string' &&
    'creator' in value &&
    typeof value.creator === 'string' &&
    'creator_email' in value &&
    typeof value.creator_email === 'string'
  );
}

export async function getMeal(slug: string) {
  // eslint-disable-next-line no-undef
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  return isMeal(result) ? (result as Meal) : null;
}

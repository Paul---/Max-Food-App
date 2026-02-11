import Image from 'next/image';
import classes from './mealSlug.module.css';
import { getMeal } from '@/lib/mealsdb';

export default async function MealsDetailsPage({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;
  const meal = await getMeal(mealSlug);
  if (!meal) {
    return <div>Meal not found</div>;
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <h2>Preparation Instructions:</h2>
        <p className={classes.instructions}>{meal.instructions}</p>
      </main>
    </>
  );
}

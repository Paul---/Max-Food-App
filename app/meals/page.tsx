import Link from 'next/link';
import classes from './meals.module.css';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/mealsdb';
import { Suspense } from 'react';

async function Recipes() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Awesome meals created <span className={classes.highlight}>by you!</span>
        </h1>
        <p>Choose your favorite meal from the list below and cook it yourself</p>
        <div className={classes.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </div>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
          <Recipes />
        </Suspense>
      </main>
    </>
  );
}

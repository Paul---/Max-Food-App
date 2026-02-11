import Link from 'next/link';
import classes from './meals.module.css';
import MealsGrid from '@/components/meals/mealsGrid';
import { getMeals } from '@/lib/mealsdb';


export default async function Meals() {
  const meals = await getMeals();
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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

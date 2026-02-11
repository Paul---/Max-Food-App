import MealItem from './mealItem';
import classes from './mealsGrid.module.css';

// add meals[] type later
export default function MealsGrid({ meals }: { meals: any[] }) {
  return (
    <ul className={classes.meals}>
      {meals.length > 0 &&
        meals.map((meal) => {
          return (
            <li key={meal.title}>
              <MealItem {...meal} />
            </li>
          );
        })}
    </ul>
  );
}

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Samosa',
    description: 'Snack of potato filled inside',
    price: 20,
  },
  {
    id: 'm2',
    name: 'Chole Bhature',
    description: 'Punjabi chole speciality',
    price: 150,
  },
  {
    id: 'm3',
    name: 'Aloo Tikki Burger',
    description: 'Patty of potato inside',
    price: 70,
  },
  {
    id: 'm4',
    name: 'Masala Dosa',
    description: 'South Indian special',
    price: 190,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

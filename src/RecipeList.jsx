import React from 'react';
import RecipeCard from './RecipeCard';
import spaghettiImage from './assets/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg';
import pieImage from './assets/images (1).jpeg';
import curryImage from './assets/images.jpeg';

const RecipeList = () => {
  const recipes = [
    {
      title: 'Spaghetti Carbonara',
      image: spaghettiImage,
      description: 'A delicious Italian pasta dish.',
      ingredients: [
        '200g spaghetti',
        '100g pancetta',
        '2 large eggs',
        '50g grated Parmesan cheese',
        '2 cloves of garlic, minced',
        'Salt and black pepper to taste',
      ],
      cookingTime: '20 minutes',
      instructions: [
        'Cook the spaghetti in a large pot of salted boiling water until al dente.',
        'In a pan, cook the pancetta until crispy, then add the minced garlic and cook for 1 minute.',
        'Whisk the eggs and Parmesan cheese in a bowl until combined.',
        'Drain the pasta and reserve 1/2 cup of the cooking water.',
        'Combine the pasta with the pancetta, remove from heat, and mix in the egg and cheese mixture.',
        'Add reserved pasta water as needed for a creamy sauce.',
        'Season with salt and black pepper, then serve immediately.'
      ],
    },
    {
      title: 'Chicken Curry',
      image: curryImage,
      description: 'A spicy and savory chicken curry.',
      ingredients: [
        '500g chicken breast, diced',
        '1 onion, finely chopped',
        '3 cloves of garlic, minced',
        '1 tbsp ginger, grated',
        '2 tbsp curry powder',
        '400ml coconut milk',
        '2 tbsp vegetable oil',
        'Salt and pepper to taste',
        'Fresh cilantro for garnish',
      ],
      cookingTime: '40 minutes',
      instructions: [
        'Heat the oil in a large pan over medium heat.',
        'Sauté the onion, garlic, and ginger until fragrant.',
        'Add the curry powder and cook for 1 minute to release its flavors.',
        'Add the diced chicken and cook until browned on all sides.',
        'Pour in the coconut milk and simmer for 20-25 minutes, stirring occasionally.',
        'Season with salt and pepper, then garnish with fresh cilantro before serving.'
      ],
    },
    {
      title: 'Apple Pie',
      image: pieImage,
      description: 'A sweet and warm apple dessert.',
      ingredients: [
        '6 apples, peeled, cored, and sliced',
        '1/2 cup granulated sugar',
        '1/4 cup brown sugar',
        '2 tsp ground cinnamon',
        '1/4 tsp nutmeg',
        '2 tbsp all-purpose flour',
        '1 package refrigerated pie crusts',
        '1 egg, beaten',
      ],
      cookingTime: '1 hour',
      instructions: [
        'Preheat the oven to 180°C (350°F).',
        'In a bowl, mix the apples, granulated sugar, brown sugar, cinnamon, nutmeg, and flour.',
        'Roll out one pie crust and place it into a pie dish.',
        'Fill the crust with the apple mixture.',
        'Cover with the second pie crust, seal the edges, and cut small slits in the top to allow steam to escape.',
        'Brush the top crust with the beaten egg.',
        'Bake for 45-50 minutes or until the crust is golden brown.',
        'Cool for 15 minutes before serving.'
      ],
    },
    {
        title: 'Spaghetti Carbonara',
        image: spaghettiImage,
        description: 'A delicious Italian pasta dish.',
        ingredients: [
          '200g spaghetti',
          '100g pancetta',
          '2 large eggs',
          '50g grated Parmesan cheese',
          '2 cloves of garlic, minced',
          'Salt and black pepper to taste',
        ],
        cookingTime: '20 minutes',
        instructions: [
          'Cook the spaghetti in a large pot of salted boiling water until al dente.',
          'In a pan, cook the pancetta until crispy, then add the minced garlic and cook for 1 minute.',
          'Whisk the eggs and Parmesan cheese in a bowl until combined.',
          'Drain the pasta and reserve 1/2 cup of the cooking water.',
          'Combine the pasta with the pancetta, remove from heat, and mix in the egg and cheese mixture.',
          'Add reserved pasta water as needed for a creamy sauce.',
          'Season with salt and black pepper, then serve immediately.'
        ],
      },
      {
        title: 'Apple Pie',
        image: pieImage,
        description: 'A sweet and warm apple dessert.',
        ingredients: [
          '6 apples, peeled, cored, and sliced',
          '1/2 cup granulated sugar',
          '1/4 cup brown sugar',
          '2 tsp ground cinnamon',
          '1/4 tsp nutmeg',
          '2 tbsp all-purpose flour',
          '1 package refrigerated pie crusts',
          '1 egg, beaten',
        ],
        cookingTime: '1 hour',
        instructions: [
          'Preheat the oven to 180°C (350°F).',
          'In a bowl, mix the apples, granulated sugar, brown sugar, cinnamon, nutmeg, and flour.',
          'Roll out one pie crust and place it into a pie dish.',
          'Fill the crust with the apple mixture.',
          'Cover with the second pie crust, seal the edges, and cut small slits in the top to allow steam to escape.',
          'Brush the top crust with the beaten egg.',
          'Bake for 45-50 minutes or until the crust is golden brown.',
          'Cool for 15 minutes before serving.'
        ],
      },
      {
        title: 'Apple Pie',
        image: pieImage,
        description: 'A sweet and warm apple dessert.',
        ingredients: [
          '6 apples, peeled, cored, and sliced',
          '1/2 cup granulated sugar',
          '1/4 cup brown sugar',
          '2 tsp ground cinnamon',
          '1/4 tsp nutmeg',
          '2 tbsp all-purpose flour',
          '1 package refrigerated pie crusts',
          '1 egg, beaten',
        ],
        cookingTime: '1 hour',
        instructions: [
          'Preheat the oven to 180°C (350°F).',
          'In a bowl, mix the apples, granulated sugar, brown sugar, cinnamon, nutmeg, and flour.',
          'Roll out one pie crust and place it into a pie dish.',
          'Fill the crust with the apple mixture.',
          'Cover with the second pie crust, seal the edges, and cut small slits in the top to allow steam to escape.',
          'Brush the top crust with the beaten egg.',
          'Bake for 45-50 minutes or until the crust is golden brown.',
          'Cool for 15 minutes before serving.'
        ],
      },
      {
        title: 'Apple Pie',
        image: pieImage,
        description: 'A sweet and warm apple dessert.',
        ingredients: [
          '6 apples, peeled, cored, and sliced',
          '1/2 cup granulated sugar',
          '1/4 cup brown sugar',
          '2 tsp ground cinnamon',
          '1/4 tsp nutmeg',
          '2 tbsp all-purpose flour',
          '1 package refrigerated pie crusts',
          '1 egg, beaten',
        ],
        cookingTime: '1 hour',
        instructions: [
          'Preheat the oven to 180°C (350°F).',
          'In a bowl, mix the apples, granulated sugar, brown sugar, cinnamon, nutmeg, and flour.',
          'Roll out one pie crust and place it into a pie dish.',
          'Fill the crust with the apple mixture.',
          'Cover with the second pie crust, seal the edges, and cut small slits in the top to allow steam to escape.',
          'Brush the top crust with the beaten egg.',
          'Bake for 45-50 minutes or until the crust is golden brown.',
          'Cool for 15 minutes before serving.'
        ],
      },{
        title: 'Apple Pie',
        image: pieImage,
        description: 'A sweet and warm apple dessert.',
        ingredients: [
          '6 apples, peeled, cored, and sliced',
          '1/2 cup granulated sugar',
          '1/4 cup brown sugar',
          '2 tsp ground cinnamon',
          '1/4 tsp nutmeg',
          '2 tbsp all-purpose flour',
          '1 package refrigerated pie crusts',
          '1 egg, beaten',
        ],
        cookingTime: '1 hour',
        instructions: [
          'Preheat the oven to 180°C (350°F).',
          'In a bowl, mix the apples, granulated sugar, brown sugar, cinnamon, nutmeg, and flour.',
          'Roll out one pie crust and place it into a pie dish.',
          'Fill the crust with the apple mixture.',
          'Cover with the second pie crust, seal the edges, and cut small slits in the top to allow steam to escape.',
          'Brush the top crust with the beaten egg.',
          'Bake for 45-50 minutes or until the crust is golden brown.',
          'Cool for 15 minutes before serving.'
        ],
      },
  ];

  return (
    <div className="recipe-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
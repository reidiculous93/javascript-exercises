const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {},
  set appetizers(appetizerIn) {},
  get mains() {},
  set mains(mainIn) {},
  get desserts() {},
  set desserts(dessertIn) {},
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    if (courseName === "appetizers") {
      this._courses["appetizers"].push(dish);
    } else if (courseName === "mains") {
      this._courses["mains"].push(dish);
    } else {
      this._courses["desserts"].push(dish);
    }
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");

    let totalPrice = appetizer.price + main.price + dessert.price;
    return `The three courses of your meal are ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price of your meal is: ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "Casesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Fried Pickels", 3.5);
menu.addDishToCourse("appetizers", "French Fries", 3.0);
menu.addDishToCourse("mains", "Ribeye Steak", 11.0);
menu.addDishToCourse("mains", "Grilled Salmon", 16.5);
menu.addDishToCourse("mains", "Hamburger", 8.5);
menu.addDishToCourse("desserts", "Key Lime Pie", 3.0);
menu.addDishToCourse("desserts", "Ice Cream", 2.5);
menu.addDishToCourse("desserts", "Brownie", 1.75);

let meal = menu.generateRandomMeal();
console.log(meal);

public class Pizzeria {

    public static void main(String[] args) {
        PizzaFactory factory = new PizzaFactory();
        factory.createPizza(PizzaType.NEW_YORK).getYourOrder();
        factory.createPizza(PizzaType.GREEK).getYourOrder();
    }

}

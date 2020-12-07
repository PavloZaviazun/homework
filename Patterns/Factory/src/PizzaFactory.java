public class PizzaFactory {

    public Pizza createPizza(PizzaType type) {
        Pizza pizza = null;
        switch(type) {
            case NEAPOLITAN:
                pizza = new Neapolitan();
                break;
            case SICILIAN:
                pizza = new Sicilian();
                break;
            case NEW_YORK:
                pizza = new NewYork();
                break;
            case CHICAGO:
                pizza = new Chicago();
                break;
            case GREEK:
                pizza = new Greek();
                break;
            case BREAKFAST:
                pizza = new Breakfast();
        }
        return pizza;
    }

}

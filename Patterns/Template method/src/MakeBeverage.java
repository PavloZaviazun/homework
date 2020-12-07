public class MakeBeverage {
    public static void main(String[] args) {
        Beverage cupOfTea = new Tea();
        Beverage cupOfCoffee = new Coffee();
        Beverage cupOfCacao = new Cacao();
        cupOfTea.makeBeverage();
        System.out.println("--------------");
        cupOfCoffee.makeBeverage();
        System.out.println("--------------");
        cupOfCacao.makeBeverage();
    }
}

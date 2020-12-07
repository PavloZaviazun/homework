public abstract class Beverage {

    public void makeBeverage() {
        takeCup();
        boilLiquid();
        putIngridient();
        pourLiquid();
        System.out.println("--Enjoy--");
    }

    public void takeCup() {
        System.out.println("1. Take appropriate cup for your beverage");
    }

    public void pourLiquid() {
        System.out.println("4. Pour liquid into cup with ingridients");
    }

    public abstract void boilLiquid();
    public abstract void putIngridient();

}

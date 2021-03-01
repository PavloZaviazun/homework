package task3;

public class Man extends Human implements ManClothes {
    private TShirt tShirt;
    private Trousers trousers;

    public Man(String name, boolean gender, int age) {
        super(name, gender, age);
    }

    @Override
    public void wearMan(TShirt tShirt, Trousers trousers) {
        this.tShirt = tShirt;
        this.trousers = trousers;
    }

    public TShirt gettShirt() {
        return tShirt;
    }

    public void settShirt(TShirt tShirt) {
        this.tShirt = tShirt;
    }

    public Trousers getTrousers() {
        return trousers;
    }

    public void setTrousers(Trousers trousers) {
        this.trousers = trousers;
    }

    @Override
    public String toString() {
        return "Man{" + "gender=" + gender + ", age=" + age + ", tShirt=" + tShirt + ", trousers=" + trousers + "} " + super.toString();
    }
}

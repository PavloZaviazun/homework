package task3;

public class Woman extends Human implements WomanClothes {
    private TShirt tShirt;
    private Skirt skirt;

    public Woman(String name, boolean gender, int age) {
        super(name, gender, age);
    }

    @Override
    public void wearWoman(TShirt tShirt, Skirt skirt) {
        this.tShirt = tShirt;
        this.skirt = skirt;
    }

    public TShirt gettShirt() {
        return tShirt;
    }

    public void settShirt(TShirt tShirt) {
        this.tShirt = tShirt;
    }

    public Skirt getSkirt() {
        return skirt;
    }

    public void setSkirt(Skirt skirt) {
        this.skirt = skirt;
    }

    @Override
    public String toString() {
        return "Woman{" + "gender=" + gender + ", age=" + age + ", tShirt=" + tShirt + ", skirt=" + skirt + "} " + super.toString();
    }
}

package task1;

public class Tie extends Clothes implements ManClothes {

    public Tie(Sizes sizeClothes, double price, String color) {
        super(sizeClothes, price, color);
    }

    @Override
    public void wearMan() {

    }

    @Override
    public String toString() {
        return "Tie{} " + super.toString();
    }
}

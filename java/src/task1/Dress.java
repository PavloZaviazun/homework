package task1;

public class Dress extends Clothes implements WomanClothes {
    public Dress(Sizes sizeClothes, double price, String color) {
        super(sizeClothes, price, color);
    }

    @Override
    public void wearWoman() {

    }

    @Override
    public String toString() {
        return "Dress{} " + super.toString();
    }
}

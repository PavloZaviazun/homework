package task1;

public class Trousers extends Clothes implements ManClothes, WomanClothes {

    public Trousers(Sizes sizeClothes, double price, String color) {
        super(sizeClothes, price, color);
    }

    @Override
    public void wearMan() {

    }

    @Override
    public void wearWoman() {

    }

    @Override
    public String toString() {
        return "Trousers{} " + super.toString();
    }
}

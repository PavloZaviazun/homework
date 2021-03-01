package task1;

public class TShirt extends Clothes implements WomanClothes, ManClothes {

    public TShirt(Sizes sizeClothes, double price, String color) {
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
        return "TShirt{} " + super.toString();
    }
}

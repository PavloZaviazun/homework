package task1;

public abstract class Clothes {
    private Sizes sizeClothes;
    private double price;
    private String color;

    public Clothes(Sizes sizeClothes, double price, String color) {
        this.sizeClothes = sizeClothes;
        this.price = price;
        this.color = color;
    }

    public Sizes getSizeClothes() {
        return sizeClothes;
    }

    public void setSizeClothes(Sizes sizeClothes) {
        this.sizeClothes = sizeClothes;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Clothes{" + "sizeClothes=" + sizeClothes + ", price=" + price + ", color='" + color + '\'' + '}';
    }
}

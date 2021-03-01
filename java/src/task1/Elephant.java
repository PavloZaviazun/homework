package task1;

public class Elephant extends Animal {
    private double height;
    private boolean horn;

    public Elephant(String nameSpecies, int maxAge, double height, boolean horn) {
        super(nameSpecies, maxAge);
        this.height = height;
        this.horn = horn;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    @Override
    public String toString() {
        return "Elephant{" + "height=" + height + "} " + super.toString();
    }
}

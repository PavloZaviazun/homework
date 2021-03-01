package task1;

public class IndianElephant extends Elephant {
    private float earSize;

    public IndianElephant(String nameSpecies, int maxAge, double height, boolean horn, float earSize) {
        super(nameSpecies, maxAge, height, horn);
        this.earSize = earSize;
    }

    public float getEarSize() {
        return earSize;
    }

    public void setEarSize(float earSize) {
        this.earSize = earSize;
    }

    @Override
    public String toString() {
        return "IndianElephant{" + "earSize=" + earSize + "} " + super.toString();
    }
}

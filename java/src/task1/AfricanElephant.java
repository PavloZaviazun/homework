package task1;

public class AfricanElephant extends Elephant {
    private String area;

    public AfricanElephant(String nameSpecies, int maxAge, double height, boolean horn, String area) {
        super(nameSpecies, maxAge, height, horn);
        this.area = area;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    @Override
    public String toString() {
        return "AfricanElephant{" + "area='" + area + '\'' + "} " + super.toString();
    }
}

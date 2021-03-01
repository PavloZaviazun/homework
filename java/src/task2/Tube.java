package task2;

public class Tube implements Playable {
    private double diameter;

    public Tube(double diameter) {
        this.diameter = diameter;
    }

    public double getDiameter() {
        return diameter;
    }

    public void setDiameter(double diameter) {
        this.diameter = diameter;
    }

    @Override
    public void play() {
        System.out.println("Играет труба");

    }

    @Override
    public String toString() {
        return "Tube{" + "diameter=" + diameter + '}';
    }
}

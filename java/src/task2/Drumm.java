package task2;

public class Drumm implements Playable {
    private double size;

    public Drumm(double size) {
        this.size = size;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
    }

    @Override
    public void play() {
        System.out.println("Играет барабан");

    }

    @Override
    public String toString() {
        return "Drumm{" + "size=" + size + '}';
    }
}

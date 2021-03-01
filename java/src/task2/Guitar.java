package task2;

public class Guitar implements Playable {
    private int stringQuantity;

    public Guitar(int stringQuantity) {
        this.stringQuantity = stringQuantity;
    }

    public int getStringQuantity() {
        return stringQuantity;
    }

    public void setStringQuantity(int stringQuantity) {
        this.stringQuantity = stringQuantity;
    }

    @Override
    public void play() {
        System.out.println("Играет гитара");
    }

    @Override
    public String toString() {
        return "Guitar{" + "stringQuantity=" + stringQuantity + '}';
    }
}

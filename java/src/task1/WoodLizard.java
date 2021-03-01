package task1;

public class WoodLizard extends Lizard {
    private int childQuantity;

    public WoodLizard(String nameSpecies, int maxAge, boolean changeColor, boolean stickLags, int childQuantity) {
        super(nameSpecies, maxAge, changeColor, stickLags);
        this.childQuantity = childQuantity;
    }

    public int getChildQuantity() {
        return childQuantity;
    }

    public void setChildQuantity(int childQuantity) {
        this.childQuantity = childQuantity;
    }

    @Override
    public String toString() {
        return "WoodLizard{" + "childQuantity=" + childQuantity + "} " + super.toString();
    }
}

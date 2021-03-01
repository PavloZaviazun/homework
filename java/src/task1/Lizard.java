package task1;

public class Lizard extends Animal {
    private boolean changeColor;
    private boolean stickLags;

    public Lizard(String nameSpecies, int maxAge, boolean changeColor, boolean stickLags) {
        super(nameSpecies, maxAge);
        this.changeColor = changeColor;
        this.stickLags = stickLags;
    }
}

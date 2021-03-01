package task1;

public class DesertLizard extends Lizard {
    private int daysWithoutWater;

    public DesertLizard(String nameSpecies, int maxAge, boolean changeColor, boolean stickLags, int daysWithoutWater) {
        super(nameSpecies, maxAge, changeColor, stickLags);
        this.daysWithoutWater = daysWithoutWater;
    }

    public int getDaysWithoutWater() {
        return daysWithoutWater;
    }

    public void setDaysWithoutWater(int daysWithoutWater) {
        this.daysWithoutWater = daysWithoutWater;
    }

    @Override
    public String toString() {
        return "DesertLizard{" + "daysWithoutWater=" + daysWithoutWater + "} " + super.toString();
    }
}

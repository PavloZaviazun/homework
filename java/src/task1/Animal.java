package task1;

public abstract class Animal {
    private String nameSpecies;
    private int maxAge;

    public Animal(String nameSpecies, int maxAge) {
        this.nameSpecies = nameSpecies;
        this.maxAge = maxAge;
    }

    public String getNameSpecies() {
        return nameSpecies;
    }

    public void setNameSpecies(String nameSpecies) {
        this.nameSpecies = nameSpecies;
    }

    public int getMaxAge() {
        return maxAge;
    }

    public void setMaxAge(int maxAge) {
        this.maxAge = maxAge;
    }

    @Override
    public String toString() {
        return "Animal{" + "nameSpecies='" + nameSpecies + '\'' + ", maxAge=" + maxAge + '}';
    }
}

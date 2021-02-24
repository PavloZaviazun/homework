public class Student {
    private String firstName;
    private String lastName;
    private int clazz;
    private double avgScore;
    private boolean gender;

    public Student() {
    }

    public Student(String firstName, String lastName, int clazz, double avgScore, boolean gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.clazz = clazz;
        this.avgScore = avgScore;
        this.gender = gender;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getClazz() {
        return clazz;
    }

    public void setClazz(int clazz) {
        this.clazz = clazz;
    }

    public double getAvgScore() {
        return avgScore;
    }

    public void setAvgScore(double avgScore) {
        this.avgScore = avgScore;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Student{" + "firstName='" + firstName + '\'' + ", lastName='" + lastName + '\'' + ", clazz=" + clazz + ", avgScore=" + avgScore + ", gender=" + gender + '}';
    }
}

public class Teacher {
    String lastName;
    double workingHours;
    String specialization;

    public Teacher() {
    }

    public Teacher(String lastName, double workingHours, String specialization) {
        this.lastName = lastName;
        this.workingHours = workingHours;
        this.specialization = specialization;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getWorkingHours() {
        return workingHours;
    }

    public void setWorkingHours(double workingHours) {
        this.workingHours = workingHours;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    @Override
    public String toString() {
        return "Teacher{" + "lastName='" + lastName + '\'' + ", workingHours=" + workingHours + ", specialization='" + specialization + '\'' + '}';
    }

}

import java.util.Arrays;

public class School {
    private String name;
    private int number;
    private String city;
    private int employeesQuantity;
    private int studentQuantity;
    private Student[] students;
    private Teacher[] teachers;
    private String teacherLastName;
    private double teacherWorkingHours;
    private String teacherSpecialization;

    public School() {
    }

    public School(int number,
                  String city,
                  int employeesQuantity,
                  int studentQuantity,
                  Student[] students,
                  String teacherLastName,
                  double teacherWorkingHours,
                  String teacherSpecialization) {
        this.number = number;
        this.city = city;
        this.employeesQuantity = employeesQuantity;
        this.studentQuantity = studentQuantity;
        this.students = students;
        this.teacherLastName = teacherLastName;
        this.teacherWorkingHours = teacherWorkingHours;
        this.teacherSpecialization = teacherSpecialization;
    }

    public School(int number,
                  String city,
                  int employeesQuantity,
                  int studentQuantity,
                  Student[] students,
                  Teacher[] teachers) {
        this.number = number;
        this.city = city;
        this.employeesQuantity = employeesQuantity;
        this.studentQuantity = studentQuantity;
        this.students = students;
        this.teachers = teachers;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getEmployeesQuantity() {
        return employeesQuantity;
    }

    public void setEmployeesQuantity(int employeesQuantity) {
        this.employeesQuantity = employeesQuantity;
    }

    public int getStudentQuantity() {
        return studentQuantity;
    }

    public void setStudentQuantity(int studentQuantity) {
        this.studentQuantity = studentQuantity;
    }

    public Student[] getStudents() {
        return students;
    }

    public void setStudents(Student[] students) {
        this.students = students;
    }

    public Teacher[] getTeachers() {
        return teachers;
    }

    public void setTeachers(Teacher[] teachers) {
        this.teachers = teachers;
    }

    public String getTeacherLastName() {
        return teacherLastName;
    }

    public void setTeacherLastName(String teacherLastName) {
        this.teacherLastName = teacherLastName;
    }

    public double getTeacherWorkingHours() {
        return teacherWorkingHours;
    }

    public void setTeacherWorkingHours(double teacherWorkingHours) {
        this.teacherWorkingHours = teacherWorkingHours;
    }

    public String getTeacherSpecialization() {
        return teacherSpecialization;
    }

    public void setTeacherSpecialization(String teacherSpecialization) {
        this.teacherSpecialization = teacherSpecialization;
    }

    @Override
    public String toString() {
        return "School{" + "name='" + name + '\'' + ", number=" + number + ", city='" + city + '\'' + ", employeesQuantity=" + employeesQuantity + ", studentQuantity=" + studentQuantity + ", students=" + Arrays.toString(students) + ", teachers=" + Arrays.toString(teachers) + ", teacherLastName='" + teacherLastName + '\'' + ", teacherWorkingHours=" + teacherWorkingHours + ", teacherSpecialization='" + teacherSpecialization + '\'' + '}';
    }
}

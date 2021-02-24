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

    public static void main(String[] args) {
        Student student1 = new Student("Pasha", "Zaviazun", 11, 4.0, false);
        Student student2 = new Student("Dasha", "Zaviazun", 10, 5.0, true);
        Teacher mathematic = new Teacher("Efimenko", 170.0, "Mathematic");
        Teacher historic = new Teacher("Voloshina", 142.0, "History");
        Teacher unknown = new Teacher();
        Student[] students = {student1, student2};
        Teacher[] teachers = new Teacher[3];
        teachers[0] = mathematic;
        teachers[1] = historic;
        teachers[2] = unknown;
        School school107 = new School(107, "Zaporozhye", 3, 2, students, teachers);
        School school97 = new School(97, "Zaporozhye", 1, 2, students, "Voloshin", 205, "Literature");
        Teacher literaturic = new Teacher(school97.teacherLastName, school97.teacherWorkingHours, school97.teacherSpecialization);

        System.out.println(student1);
        System.out.println(student2);
        System.out.println(mathematic);
        System.out.println(historic);
        System.out.println(unknown);
        System.out.println(school107);
        System.out.println(school97);
        System.out.println(literaturic);

    }
}

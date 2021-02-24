public class Solution {
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
        Teacher literaturic = new Teacher(school97.getTeacherLastName(), school97.getTeacherWorkingHours(), school97.getTeacherSpecialization());

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

public class Task {
    public static void main(String[] args) {
        Developer developer = new MiddleDeveloper(new JuniorDeveloper());
        System.out.println(developer.makeJob());
    }
}

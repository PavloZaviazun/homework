import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList <User> listOfUsers = new ArrayList <>(Arrays.asList(
                new User(1, "Pasha", 29, Gender.MALE),
                new User(2, "Dasha", 29, Gender.FEMALE),
                new User(3, "Vova", 28, Gender.MALE),
                new User(4, "Egor", 16, Gender.MALE),
                new User(5, "Alina", 30, Gender.FEMALE),
                new User(6, "Liza", 30, Gender.FEMALE),
                new User(7, "Sergey", 25, Gender.MALE),
                new User(8, "Rita", 27, Gender.FEMALE),
                new User(9, "Leha", 33, Gender.MALE),
                new User(10, "Masha", 31, Gender.FEMALE)
        ));

        List <User> updatedList = listOfUsers.stream()
                .filter(el -> el.getId() % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(updatedList);
        System.out.println("****************");

        ArrayList<User> updatedList2 = listOfUsers.stream()
                .filter(el -> el.getName().length() > 5)
                .collect(Collectors.toCollection(ArrayList::new));
        System.out.println(updatedList2);
        System.out.println("****************");

        LinkedList<User> updatedList3 = listOfUsers.stream()
                .filter(el -> {
                    return el.getGender().equals(Gender.FEMALE);
                }).collect(Collectors.toCollection(LinkedList::new));
        for(User woman : updatedList3) {
            System.out.println(woman);
        }
    }
}

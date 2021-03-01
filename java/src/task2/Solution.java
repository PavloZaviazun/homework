package task2;

import java.util.ArrayList;

public class Solution {
    public static void main(String[] args) {
        ArrayList<User> listOfUsers = new ArrayList <>();
        for(int i = 1; i <= 10; i++) {
            listOfUsers.add(new User(i, String.format("User%s", i), (int) (Math.random()*50), i % 3 == 0 ? Gender.MALE : Gender.FEMALE));
        }

        for(User user: listOfUsers) {
            if(user.getId() % 2 == 0) System.out.println(user);
        }

        for(User user: listOfUsers) {
            if(user.getName().length() > 5) System.out.println(user);
        }

        for(User user: listOfUsers) {
            if(user.getGender() == Gender.FEMALE) System.out.println(user);
        }
    }
}

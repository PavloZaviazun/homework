package task2;

public class Solution {
    public static void main(String[] args) {
        Playable[] playables = {
            new Guitar(7),
            new Drumm(20),
            new Tube(15.0)
        };
        for(Playable item : playables) {
            item.play();
            System.out.println(item);
        }
    }
}

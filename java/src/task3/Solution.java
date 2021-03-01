package task3;

public class Solution {
    public static void main(String[] args) {
        Man man = new Man("Pasha", false, 29);
        Woman woman = new Woman("Dasha", true, 29);
        man.wearMan(new TShirt(), new Trousers());
        woman.wearWoman(new TShirt(), new Skirt());
        System.out.println(man);
        System.out.println(woman);
    }
}

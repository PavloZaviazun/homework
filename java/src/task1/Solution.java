package task1;

public class Solution {
    public static void main(String[] args) {
        Elephant justElephant = new Elephant("Elephant", 65, 2.5, true);
        Lizard justLizard = new Lizard("Lizard", 30, true, true);
        Elephant elephant1 = new IndianElephant("Indian Elephant", 65, 2.5, false, 0.6f);
        AfricanElephant elephant2 = new AfricanElephant("African Elephant", 60, 2.3, true, "Africa");
        Lizard lizard1 = new WoodLizard("Wood Lizard", 30, true, true, 5);
        DesertLizard lizard2 = new DesertLizard("Desert lizard", 10, false, false, 14);

        Animal[] arrayAnimal = {justElephant, justLizard, elephant1, elephant2, lizard1, lizard2};
        Elephant[] arrayElephant = {justElephant, elephant1, elephant2};
        Lizard[] arrayLizard = {justLizard, lizard1, lizard2};
        IndianElephant[] arrayIndianElephant = new IndianElephant[1];
        arrayIndianElephant[0] = new IndianElephant("Indian Elephant", 65, 2.3, false, 0.5f);
        AfricanElephant[] arrayAfricanElephant = {elephant2};
        DesertLizard[] arrayDesertLizard = {lizard2};
    }
}

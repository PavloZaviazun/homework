package task1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {
    private static String request;
    private Zootopia zootopia;

    public static void main(String[] args) throws IOException, InterruptedException {
        Map<Person, List<Pet>> map = new HashMap <>();
        map.put(new Person("Zaviazun"), new ArrayList <>(Arrays.asList(new Pet("Smarchok", "hamster"))));
        map.put(new Person("Okhrimenko"), new ArrayList <>(Arrays.asList(new Pet("Bazuka", "cat"))));
        map.put(new Person("Ivanov"), new ArrayList <>(Arrays.asList(new Pet("Barsik", "cat"))));
        map.put(new Person("Ivanova"), new ArrayList <>(Arrays.asList(new Pet("Barsik", "cat"))));
        Zootopia zootopia = new Zootopia(map);
        BufferedReader reader;
        while(true) {
            printMenu();
            reader = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Enter one option:");
            request = reader.readLine();
            if(request.equals("exit")) {
                reader.close();
                break;
            } else if(!request.isEmpty()) {
                if(isParsable(request)) {
                    doAction(request, zootopia);
                } else {
                    System.out.println("Please, input number from list");
                }
                Thread.sleep(2000);
            }
        }
    }

    public static boolean isParsable(String input){
        try{
            Integer.parseInt(input);
            return true;
        }catch(Exception e){
            return false;
        }
    }

    public static void doAction(String choosen, Zootopia zootopia) {
        String lastName = "";
        String petName = "";
        String kindOfPet = "";
        Map<Person, List<Pet>> club;
        Iterator<Pet> iteratorPet;
        Iterator<Map.Entry<Person, List<Pet>>> iteratorClub;

        switch (Integer.parseInt(choosen)) {
            case 1 :
                lastName = enterValue("Enter last name of person:", "Last name");
                petName = enterValue("Enter name of pet:", "task1.Pet name");
                kindOfPet = enterValue("Enter kind of pet:", "Kind of pet");
                club = zootopia.getClub();
                club.put(new Person(lastName), new ArrayList <>(Arrays.asList(new Pet(petName, kindOfPet))));
                zootopia.setClub(club);
                System.out.println("Well done");
                break;
            case 2 :
                lastName = enterValue("Enter last name of person:", "Last name");
                petName = enterValue("Enter name of pet:", "task1.Pet name");
                kindOfPet = enterValue("Enter kind of pet:", "Kind of pet");
                for(Map.Entry<Person, List<Pet>> unit : zootopia.getClub().entrySet()) {
                    if(unit.getKey().getLastName().equals(lastName)) {
                        unit.getValue().add(new Pet(petName, kindOfPet));
                        System.out.println("Well done");
                    }
                }
                break;
            case 3 :
                lastName = enterValue("Enter last name of person:", "Last name");
                petName = enterValue("Enter name of pet:", "task1.Pet name");
                for(Map.Entry<Person, List<Pet>> unit : zootopia.getClub().entrySet()) {
                    if(unit.getKey().getLastName().equals(lastName)) {
                        iteratorPet = unit.getValue().iterator();
                        while(iteratorPet.hasNext()) {
                            Pet pet = iteratorPet.next();
                            if(pet.getName().equals(petName)) {
                                iteratorPet.remove();
                                System.out.println("Well done");
                            }
                        }
                    }
                }
                break;
            case 4 :
                lastName = enterValue("Enter last name of person:", "Last name");
                iteratorClub = zootopia.getClub().entrySet().iterator();
                while(iteratorClub.hasNext()) {
                    Map.Entry<Person, List<Pet>> pair = iteratorClub.next();
                    if(pair.getKey().getLastName().equals(lastName)) {
                        iteratorClub.remove();
                        System.out.println("Well done");
                    }
                }
                break;
            case 5 :
                petName = enterValue("Enter name of pet:", "task1.Pet name");
                kindOfPet = enterValue("Enter kind of pet:", "Kind of pet");
                iteratorClub = zootopia.getClub().entrySet().iterator();
                while (iteratorClub.hasNext()) {
                    Map.Entry<Person, List<Pet>> pair = iteratorClub.next();
                    iteratorPet = pair.getValue().iterator();
                    while(iteratorPet.hasNext()) {
                        Pet pet = iteratorPet.next();
                        if(pet.getName().equals(petName) && pet.getKind().equals(kindOfPet)) {
                            iteratorPet.remove();
                            System.out.println("Well done");
                        }
                    }
                }
                break;
            case 6 :
                for(Map.Entry<Person, List<Pet>> flow : zootopia.getClub().entrySet()) {
                    System.out.println(flow);
                }
                break;
            default:
                System.out.println("Innapropriate value");
        }
    }

    public static String enterValue(String message, String info) {
        System.out.println(message);
        BufferedReader reader;
        String value = "";
        while(true) {
            try {
                reader = new BufferedReader(new InputStreamReader(System.in));
                value = reader.readLine();
            } catch (IOException ioe) {
                System.out.println(ioe);
            }
            if(!value.isEmpty()) {
                break;
            }
            System.out.println(String.format("!!!%s can't be empty\n%s:", info, message));
        }
        return value;
    }

    public static void printMenu() {
        System.out.println("Enter appropriate number:");
        System.out.println("1) Додати учасника в клуб;");
        System.out.println("2) Додати тваринку до учасника клубу;");
        System.out.println("3) Видалити тваринку з власника;");
        System.out.println("4) Видалити учасника клубу;");
        System.out.println("5) Видалити конкретну тваринку з усіх власників;");
        System.out.println("6) Вивести на екран зооклуб.");
        System.out.println("Ввести \"exit\" для завершення роботи");
    }
}

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        HashMap <String, Product> map = new HashMap <>() {{
            put("Panda", new Product(1, 24.0));
            put("Konek-Gorbunok", new Product(2, 50));
            put("Maik Vazovskij", new Product(3, 1.5));
            put("James Salivan", new Product(10, 29));
            put("Lilo", new Product(5, 13));
            put("Boo", new Product(2, 18));
            put("Buzz Lightyear", new Product(4, 101));
            put("Dog", new Product(5, 150));
            put("Cat", new Product(1, 24.0));
            put("Phone", new Product(15, 500));
        }};

/*        // #1 Перебрать и распечатать пары значений - entrySet().
          // Перебрать и распечатать набор из имен продуктов  - keySet().
          // Перебрать и распечатать значения продуктов - values().
        for(Map.Entry<String, Product> pair : map.entrySet()) {
            System.out.println(pair);
            System.out.println((pair.getKey()));
            System.out.println(pair.getValue());
            System.out.println("****************");
        }*/

/*        // #2 Перебрать и распечатать пары значений - entrySet().
          // Перебрать и распечатать набор из имен продуктов  - keySet().
          // Перебрать и распечатать значения продуктов - values().
        Set<Map.Entry <String, Product>> set = map.entrySet();
        Iterator<Map.Entry<String, Product>> iterator = set.iterator();
        while(iterator.hasNext()) {
            Map.Entry<String, Product> value = iterator.next();
            System.out.println(value);
            System.out.println(value.getKey());
            System.out.println(value.getValue());
            System.out.println("****************");
        }*/

/*        // #3 Перебрать и распечатать пары значений - entrySet().
          // Перебрать и распечатать набор из имен продуктов  - keySet().
          // Перебрать и распечатать значения продуктов - values().
        Set<Map.Entry<String, Product>> set = map.entrySet();
        Stream <Map.Entry <String, Product>> stream = set.stream();
        stream.forEach(el -> {
            System.out.println(el);
            System.out.println(el.getKey());
            System.out.println(el.getValue());
            System.out.println("****************");
        });*/

/*        // отфильтровать мапу по ключам которые начинаются с какой-то буквы
        Set<Map.Entry<String, Product>> set = map.entrySet();
        HashSet <Map.Entry <String, Product>> collect = set.stream()
                .filter(el -> el.getKey().charAt(0) == 'P')
                .collect(Collectors.toCollection(() -> new HashSet<>()));
        System.out.println(collect);*/

/*        // создать два листа с этой же мапы... один лист ключей другой лист значений
        Set<Map.Entry<String, Product>> set = map.entrySet();
        ArrayList<String> listKey = set.stream()
                .map(el -> el.getKey())
                .collect(Collectors.toCollection(ArrayList::new));
        ArrayList<Product> listValue = set.stream()
                .map(el -> el.getValue())
                .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(listKey);
        System.out.println(listValue);*/

/*        // создать лист со значений мапы где size > 100
        Set<Map.Entry<String, Product>> set = map.entrySet();
        ArrayList<Map.Entry<String, Product>> list = set.stream()
                .filter(el -> el.getValue().getSize() > 100)
                .collect(Collectors.toCollection(ArrayList::new));
        System.out.println(list);*/

/*        // c мапы создать лист в который будут записаны только age
        Set<Map.Entry<String, Product>> set = map.entrySet();
        ArrayList<Integer> list = set.stream()
                .map(el -> el.getValue().getAge())
                .collect(Collectors.toCollection(ArrayList::new));
        System.out.println(list);*/

/*//        если у игрушки возраст больше 5, то размер поменять на 1000
        Set<Map.Entry<String, Product>> set = map.entrySet();
        HashSet<Map.Entry<String, Product>> hashset = set.stream()
                .map(el -> {
                    if(el.getValue().getAge() > 5) el.setValue(el.getValue()).setSize(1000);
                    return el;
                }).collect(Collectors.toCollection(HashSet::new));
        System.out.println(hashset);*/
    }
}

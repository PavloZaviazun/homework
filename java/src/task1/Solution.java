package task1;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Solution {
    public static void main(String[] args) {
        Printable[] printableArray = {
                new Book("book1", "Pushkin", new GregorianCalendar(1896, Calendar.JANUARY, 1)),
                new Book("book2", "Lermontov", new GregorianCalendar(1999, Calendar.JANUARY, 1)),
                new Magazine("magazine1",14, new GregorianCalendar(2020, Calendar.SEPTEMBER, 15)),
                new Magazine("magazine2", 5, new GregorianCalendar(2021, 0, 5))
        };

        for(Printable elem : printableArray) {
            elem.print();
        }

        Book.printBooks(printableArray);

        System.out.println("_________");

        Magazine.printMagazines(printableArray);
    }
}

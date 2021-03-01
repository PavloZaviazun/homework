package task2;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Solution {
    public static void main(String[] args) {
        Papirus egyptPapirus = new Papirus(new GregorianCalendar(100, Calendar.JANUARY, 1));
        Book atlasShrugged = new Book(new GregorianCalendar(1957, Calendar.OCTOBER, 10), "Ayn Rand");
        Journal nationalGeographic = new Journal(new GregorianCalendar(1988, Calendar.SEPTEMBER, 22), "Susan Goldberg", "Nature");
        Comics deathOfSuperman = new Comics(new GregorianCalendar(1993, Calendar.JANUARY, 1), "Mike Carlin", "DC");
        Papirus[] ancientScripts = new Papirus[10];
        ancientScripts[0] = egyptPapirus;
        ancientScripts[1] = new Papirus(new GregorianCalendar(200, Calendar.JANUARY, 1));
    }
}

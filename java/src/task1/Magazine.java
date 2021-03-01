package task1;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Magazine implements Printable {
    private int number;
    private GregorianCalendar dateOfPrint;
    private String name;

    public Magazine(String name, int number, GregorianCalendar dateOfPrint) {
        this.name = name;
        this.number = number;
        this.dateOfPrint = dateOfPrint;
    }

    @Override
    public void print() {
        System.out.println(this);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public GregorianCalendar getDateOfPrint() {
        return dateOfPrint;
    }

    public void setDateOfPrint(GregorianCalendar dateOfPrint) {
        this.dateOfPrint = dateOfPrint;
    }

    @Override
    public String toString() {
        return "task1.Magazine{" + "number=" + number + ", dateOfPrint=" + dateOfPrint.get(Calendar.DATE)
                + " Month: " + dateOfPrint.get(Calendar.MONTH) + ", name='" + name + '\'' + '}';
    }

    public static void printMagazines(Printable[] printable) {
        for(Printable item : printable) {
            if(item instanceof Magazine) System.out.println(((Magazine) item).getName());
        }
    }
}

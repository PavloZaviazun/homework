package task1;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Book implements Printable {
    private String author;
    private GregorianCalendar dateOfPrint;
    private String name;

    public Book(String name, String author, GregorianCalendar dateOfPrint) {
        this.name = name;
        this.author = author;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public GregorianCalendar getDateOfPrint() {
        return dateOfPrint;
    }

    public void setDateOfPrint(GregorianCalendar dateOfPrint) {
        this.dateOfPrint = dateOfPrint;
    }

    @Override
    public String toString() {
        return "task1.Book{" + "author='" + author + '\'' + ", dateOfPrint=" + dateOfPrint.get(Calendar.YEAR) + ", name='" + name + '\'' + '}';
    }

    public static void printBooks(Printable[] printable) {
        for(Printable item : printable) {
            if(item instanceof Book) System.out.println(((Book) item).getName());
        }
    }
}

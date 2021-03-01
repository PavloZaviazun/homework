package task2;

import java.util.GregorianCalendar;

public class Book extends Papirus {
    private String author;

    public Book(GregorianCalendar dateFoundation, String author) {
        super(dateFoundation);
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" + "author='" + author + '\'' + "} " + super.toString();
    }
}

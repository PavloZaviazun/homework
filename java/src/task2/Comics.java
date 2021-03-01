package task2;

import java.util.GregorianCalendar;

public class Comics extends Book {
    private String universal;

    public Comics(GregorianCalendar dateFoundation, String author, String universal) {
        super(dateFoundation, author);
        this.universal = universal;
    }
}

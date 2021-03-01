package task2;

import java.util.GregorianCalendar;

public class Journal extends Book {
    private String sphere;

    public Journal(GregorianCalendar dateFoundation, String author, String sphere) {
        super(dateFoundation, author);
        this.sphere = sphere;
    }

    public String getSphere() {
        return sphere;
    }

    public void setSphere(String sphere) {
        this.sphere = sphere;
    }

    @Override
    public String toString() {
        return "Journal{" + "sphere='" + sphere + '\'' + "} " + super.toString();
    }
}

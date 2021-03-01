package task2;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Papirus {
    private GregorianCalendar dateFoundation;

    public Papirus(GregorianCalendar dateFoundation) {
        this.dateFoundation = dateFoundation;
    }

    public GregorianCalendar getDateFoundation() {
        return dateFoundation;
    }

    public void setDateFoundation(GregorianCalendar dateFoundation) {
        this.dateFoundation = dateFoundation;
    }

    @Override
    public String toString() {
        return "Papirus{" + "dateFoundation=" + dateFoundation.get(Calendar.YEAR) + '}';
    }
}

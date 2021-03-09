package task2;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@EqualsAndHashCode
@ToString
public class Time {
    private int min;
    private int hour;

    public Time(int min, int hour) {
        if(min >= 0 && min <= 59) this.min = min;
        else System.out.println("minutes must be >= 0 && <= 59");
        if(hour >= 0 && hour <= 23) this.hour = hour;
        else System.out.println("hours must be >= 0 && <= 23");
    }

    public void setMin(int min) {
        if(min >= 0 && min <= 59) {
            this.min = min;
        }
    }

    public void setHour(int hour) {
        if(hour >= 0 && hour <= 23) {
            this.hour = hour;
        }
    }
}

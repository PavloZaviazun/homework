package task2;

import lombok.*;

@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
@ToString
public class Seance implements Comparable {
    private Movie movie;
    private Time startTime;
    private Time endTime;

    public Seance(Movie movie, Time startTime) {
        this.movie = movie;
        this.startTime = startTime;
        int minutes = movie.getDurationCustom().getMin() + startTime.getMin();
        int hours = movie.getDurationCustom().getHour() + startTime.getHour();
        if(minutes >= 60) {
            minutes -= 60;
            hours += 1;
        }
        if(hours >= 24) {
            hours -= 24;
        }
        this.endTime = new Time(minutes, hours);
    }

    @Override
    public int compareTo(Object o) {
        int minThis = this.getStartTime().getMin() + this.getStartTime().getHour() * 60;
        Seance obj = (Seance) o;
        int minObj = obj.getStartTime().getMin() + obj.getStartTime().getHour() * 60;
        return minThis - minObj;

    }
}

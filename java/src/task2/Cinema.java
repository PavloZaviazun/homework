package task2;

import lombok.*;

import java.util.Iterator;
import java.util.Map;
import java.util.TreeMap;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Cinema {
    private TreeMap <Days, Schedule> mapSchedule;
    private Time open;
    private Time close;


    public void addSeances(String day, Seance...seance) {
        for(Seance flow : seance) {
            this.addSeance(day, flow);
        }
    }

    public void addSeance(String day, Seance seance) {
        for(Days flow : Days.values()) {
            if(flow.toString().equals(day.toUpperCase())) {
                for(Map.Entry<Days, Schedule> pair : this.getMapSchedule().entrySet()) {
                    if(pair.getKey().equals(flow)) {
                        pair.getValue().addSeance(seance);
                    }
                }
            }
        }
    }

    public void removeMovie(Movie movie) {
        for(Map.Entry<Days, Schedule> pair : this.getMapSchedule().entrySet()) {
            Iterator<Seance> iterator = pair.getValue().getSeances().iterator();
            while (iterator.hasNext()) {
                Seance seance = iterator.next();
                if(seance.getMovie().equals(movie)) iterator.remove();
            }
        }
    }

    public void removeSeance(String day, Seance seance) {
        for(Days flow : Days.values()) {
            if(flow.toString().equals(day.toUpperCase())) {
                for(Map.Entry<Days, Schedule> pair : this.getMapSchedule().entrySet()) {
                    if(pair.getKey().equals(flow)) {
                        Iterator<Seance> iterator = pair.getValue().getSeances().iterator();
                        while (iterator.hasNext()) {
                            Seance seanceExist = iterator.next();
                            if(seanceExist.equals(seance)) iterator.remove();
                        }
                    }
                }
            }
        }
    }
}

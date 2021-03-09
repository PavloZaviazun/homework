package task2;

import lombok.*;

import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
@ToString
public class Schedule {
    private Set<Seance> seances;

    public Schedule(TreeSet<Seance> seances) {
        this.seances = seances;
    }

    public void addSeance(Seance seance) {
        seances.add(seance);
    }

    public void removeSeance(Seance seance) {
        Iterator<Seance> iterator = seances.iterator();
        while(iterator.hasNext()) {
            Seance fromSet = iterator.next();
            if(fromSet.equals(seance)) iterator.remove();
        }
    }
}

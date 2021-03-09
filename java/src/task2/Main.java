package task2;

import java.util.*;


public class Main {
    public static void main(String[] args) {

        Movie movie1 = new Movie("Том и Джерри", new Time(48, 1));
        Movie movie2 = new Movie("Батя", new Time(30, 2));
        Movie movie3 = new Movie("Последний богатырь: Корень зла", new Time(59, 1));
        Movie movie4 = new Movie("Родные", new Time(45, 0));
        Movie movie5 = new Movie("Конек-Горбунок", new Time(47, 1));

        Seance seance1 = new Seance(movie1, new Time(0, 8));
        Seance seance2 = new Seance(movie2, new Time(50, 10));
        Seance seance3 = new Seance(movie3, new Time(47, 15));
        Seance seance4 = new Seance(movie4, new Time(50, 20));
        Seance seance5 = new Seance(movie5, new Time(15, 23));
        Seance seance6 = new Seance(movie3, new Time(17, 23));


        Schedule schedule1 = new Schedule(new TreeSet <>(Arrays.asList(
                seance1,
                seance2,
                seance3,
                seance4,
                seance5
        )));

        Schedule schedule2 = new Schedule(new TreeSet <>(Arrays.asList(
                seance2,
                seance3,
                seance5
        )));

        Schedule schedule3 = new Schedule(new TreeSet <>(Arrays.asList(
                seance5,
                seance2,
                seance1,
                seance4
        )));

        Cinema cinema = new Cinema(
                new TreeMap <Days, Schedule>() {{
                    put(Days.MONDAY, schedule1);
                    put(Days.TUESDAY, schedule2);
                    put(Days.WEDNESDAY, schedule3);
                    put(Days.THURSDAY, schedule2);
                    put(Days.FRIDAY, schedule3);
                    put(Days.SATURDAY, schedule1);
                    put(Days.SUNDAY, schedule3);
                }},
                new Time(0, 8),
                new Time(0, 23)
        );

/*        // Check methods
        cinema.addSeances("Thursday", seance1);
        cinema.addSeances("thursday", seance1, seance4);
        cinema.removeSeance("THURSDAY", seance2);
        cinema.removeMovie(movie1);
        //*/

        System.out.println(cinema);
        for(Map.Entry<Days, Schedule> pair : cinema.getMapSchedule().entrySet()) {
            System.out.println(pair.getKey());
            for(Seance seance : pair.getValue().getSeances()) {
                System.out.println(seance);
            }
        }
    }
}

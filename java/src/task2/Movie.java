package task2;

import lombok.*;

import java.time.Duration;

@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Movie {
    private String title;
    private Time durationCustom;
}

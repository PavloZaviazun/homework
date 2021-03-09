package task1;

import lombok.*;

import java.util.List;
import java.util.Map;

@AllArgsConstructor
@Setter
@Getter
@EqualsAndHashCode
@ToString
public class Zootopia {
    private Map <Person, List <Pet>> club;
}

package task1;

import java.util.ArrayList;
import java.util.Arrays;

public class Atelier {
    private Clothes[] clothes;

    public Atelier(Clothes[] clothes) {
        this.clothes = clothes;
    }

    public Clothes[] getClothes() {
        return clothes;
    }

    public void setClothes(Clothes[] clothes) {
        this.clothes = clothes;
    }

    public ArrayList<Clothes> menChoose() {
        ArrayList<Clothes> list = new ArrayList<>();
        for(Clothes item: clothes) {
            if(item instanceof ManClothes) list.add(item);
        }
        return list;
    }

    public ArrayList<Clothes> womenChoose() {
        ArrayList<Clothes> list = new ArrayList<>();
        for(Clothes item: clothes) {
            if(item instanceof WomanClothes) list.add(item);
        }
        return list;
    }

    @Override
    public String toString() {
        return "Atelier{" + "clothes=" + Arrays.toString(clothes) + '}';
    }
}

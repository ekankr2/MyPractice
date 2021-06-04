import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Ticket{
    int group;
    int[] numbers;
    ArrayList<Integer> num;

    public Ticket(){
        numbers = new int[6];//연금복권 숫자 갯수
         //조 갯수
    }
    public void NumberMix(){
        for(int j = 0 ; j<1000 ; j++){
        for(int i = 0; i<numbers.length; i++) {
            numbers[i] = (int) (Math.random() * 10);
        }
        }
    }
    public void MixGroup(){
        for(int j = 0 ; j<1000 ; j++){
            group = (int) (Math.random() * 5 + 1);
        }

    }
    public void PrintNumbers(){
        NumberMix();
        MixGroup();
        System.out.print(group+"조");
        System.out.print("[");
        for(int k = 0 ; k<5; k++){
            System.out.printf("%4d",numbers[k]);
        }
        System.out.print("   ]");


    }
}

public class AnnuityLottery {
    public static void main(String[] args) {
        Ticket ticket = new Ticket();
        for(int k = 0; k <5 ; k++) {
            ticket.PrintNumbers();
            System.out.println();
        }
    }
}

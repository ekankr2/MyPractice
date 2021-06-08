import java.util.ArrayList;

class Ticket{
    int group;
    int[] numbers;
    ArrayList<Integer> num;

    public Ticket(){
        numbers = new int[6];//연금복권 숫자 갯수

    }
    public void NumberMix(){//숫자를 1000번 섞어주는 매소드
        for(int j = 0 ; j<1000 ; j++){
        for(int i = 0; i<numbers.length; i++) {//6개의 배열 안에
            numbers[i] = (int) (Math.random() * 10);//0~9
        }
        }
    }
    public void MixGroup(){// 조를 섞는 매소드
        for(int j = 0 ; j<1000 ; j++){//천번 섞자
            group = (int) (Math.random() * 5 + 1);//1~5
        }

    }
    public void PrintNumbers(){//출력용 매소드
        NumberMix();//숫자 불러오고
        MixGroup();// 조 불러와서
        System.out.print(group+"조 ");// x조
        System.out.print("[");
        for(int k = 0 ; k<6; k++){
            System.out.printf("%4d",numbers[k]);//숫자간 4칸 확보
        }
        System.out.print("   ]");


    }
}

public class AnnuityLottery {
    public static void main(String[] args) {
        Ticket ticket = new Ticket();
        for(int k = 0; k <5 ; k++) {//5천원치 (5회)
            ticket.PrintNumbers();//출력용 매소드 5회실행됨
            System.out.println();//줄바꿈
        }
    }
}

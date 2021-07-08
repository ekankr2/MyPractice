import java.util.Scanner;

public class Prob3052Array {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        boolean[] arr = new boolean[42];//불린 배열을 생성한다.
        for(int i = 0; i < 10 ; i++){//입력값을 42로 나눈 나머지의 인덱스를 true로 바꾼다.
            arr[(scan.nextInt()%42)] = true;
        }
        int count = 0;
        for(boolean value : arr) {
            if (value) {//value가 true라면
                count++;
            }
        }
        System.out.println(count);
    }
}

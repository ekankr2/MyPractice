import java.util.Scanner;

public class Prob10951 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
//hasNextInt() 를 사용하여 종료 시점을 만들어주어야 한다.
//hasNextInt()의 역할은 입력값이 정수일경우 true를 반환하고
//정수가 아닐경우 바로 예외를 던지며 더이상 입력을 받지 않고 false를 반환하기 때문에
// 반복문이 종료된다.
        while (scan.hasNextInt()){
          int A = scan.nextInt();
          int B = scan.nextInt();
            System.out.println(A + B);
        }
        scan.close();
    }
}

import java.util.Scanner;

public class Prob10871 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);// 스캐너로 입력받자
        System.out.print("N을 입력하시오 : ");
        int N = sc.nextInt();   //N을 입력받고 일단.
        System.out.print("X를 입력하시오 : ");
        int X = sc.nextInt();  //X도 입력받자

        int z[] = new int[N];  //N의 갯수만큼인 배열을 만든다.
        for (int i = 0; i < N; i++) { //N번 반복하는 for문을 만들고
            System.out.printf("숫자를 %d개 입력해주세요.: ", N);//숫자를 N개 입력하시오 설정
            z[i] = sc.nextInt(); //z배열에는 N개의 수가 들어가도록 설정한다.

        }
        sc.close();
        for (int i = 0; i < N; i++) {
            if (z[i] < X) { //z배열 요소가 X보다 작다면??
                System.out.println(z[i]); //출력하시오
            }
        }
    }
}

import java.util.Scanner;

public class Prob10952 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); // 입력받기 위한 스캐너

        while(true){ //조건에 true를 넣어서 무한반복 while을 만든다
            int A= scan.nextInt(); // A와 B를 입력받는다.
            int B= scan.nextInt();

            if(A == 0 && B == 0){
               break; // A 와 B가 0이라면 while을 종료시키는
                      // break;를 넣는다
            }
            System.out.println(A + B);// if문 위에 sout을 넣을경우
            // 0 0 을입력해도 출력 후에 while이 종료되므로 if문 밑에 넣도록 유의하자.
        }
    }
}

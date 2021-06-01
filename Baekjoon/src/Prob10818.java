import java.util.Arrays;
import java.util.Scanner;

public class Prob10818 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();//N을 입력받아서
        int arr[] = new int[N];//N의 길이인 배열을 생성
        for(int i = 0; i < arr.length ; i++){
            arr[i] = scan.nextInt();//배열길이만큼 반복하여 숫자대입
        }
        scan.close();
        Arrays.sort(arr);//Arrays.sort()를 활용하면 오름차순으로 인자들을 정리해준다
        System.out.print(arr[0] + " " + arr[N-1]);//마지막수는 N-1을 한다.
    }                                  //배열은 0부터 시작하기 때문
}

import java.util.Scanner;

public class Prob2562 {
    public static void main(String[] args) {
        int[] arr = new int[9]; //길이 9의 배열 생성
        Scanner scan = new Scanner(System.in); //입력받기
        int max = arr[0]; //일단 최댓값을 담을 변수를 생성하고
        int index = 0; //자릿수를 담을 변수도 일단 초기화

        for(int i = 0; i < arr.length ; i++){//9번 돌릴 for문
            arr[i] = scan.nextInt();//9개 수를 입력받는데
            if(arr[i] > max){//i인덱스 값이 max보다 클 경우
                max = arr[i];//max에다가 i인덱스 값을 저장한다
                index = i+1;//배열은 0부터 시작하기 때문에 인덱스에 1을 더한다.
            }
        }
        System.out.println(max);
        System.out.println(index);
    }
}

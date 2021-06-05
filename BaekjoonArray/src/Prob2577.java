import java.util.Scanner;

public class Prob2577 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int A = scan.nextInt();
        int B = scan.nextInt();
        int C = scan.nextInt();
        scan.close();

        int val = A * B * C;
        int[] arr= new int[10];
        while (val>0){   //val이 0이 될때까지 반복한다.
            arr[val%10]++; //결과값에 10을 나눈 나머지는 일의 자리숫자가 된다.
                      //그 결과값이 나온 배열의 값을 ++를 통해 1 증가시킨다.
                 //예) 0이 나오면 arr[0]++가 되면서 arr[0] = 1이 된다.
            val /= 10; //10을 나누어서 일의 자릿수를 없앤다.
        }
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }
}

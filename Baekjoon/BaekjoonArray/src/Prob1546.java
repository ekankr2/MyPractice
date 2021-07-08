import java.util.Arrays;
import java.util.Scanner;

public class Prob1546 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int N = scan.nextInt();
        double[] arr = new double[N];//오차축소를 위해 double형

        for(int i =0; i < arr.length ; i++){
            arr[i] = scan.nextDouble();
        }
        scan.close();
        Arrays.sort(arr);//점수 정렬 - 최고점이 맨 뒤 인덱스로감
        double sum = 0;
        //(점수)arr[]/arr[N-1](최고점)*100
        for(int i = 0 ; i < arr.length; i++){
            sum += arr[i]/arr[arr.length-1]*100;
        }   //연산하여 sum에 담음
        System.out.println(sum/arr.length);
    }
}
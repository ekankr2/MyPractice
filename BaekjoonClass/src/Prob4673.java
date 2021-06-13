import java.util.Arrays;
import java.util.Scanner;

class SelfNumber {
    int[] n;
    int count;
    int[] arr;
    boolean[] selfNumberCount;


    public SelfNumber() {
        arr = new int[100];
        n = new int[arr.length];
        selfNumberCount = new boolean[arr.length];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i + 1;

        }
    }

    public void calNum() {
        for (int i = 0; i < arr.length; i++) {
                n[i] = arr[i] + arr[i] / 10 + arr[i] % 10;
        }
        Arrays.sort(n);
        for (int i = 0; i < arr.length; i++) {
            //if(n[i]>100){
            //n[i] = 0; }
            System.out.println(n[i]);
        }

    }
    public void countSelfNum(){
        for (int i = 0; i < arr.length; i++){
            if(n[i] == 0){
                selfNumberCount[i] = true;
            }
            if(selfNumberCount[i] == true){
                count++;
            }
        }
        System.out.println(count);
    }
}


public class Prob4673 {
    public static void main(String[] args) {
        SelfNumber sn = new SelfNumber();
        sn.calNum();
        sn.countSelfNum();
    }
}

import java.util.ArrayList;
import java.util.Arrays;

class SelfNumber {
    int[] NotSelfNum;
    int[] NotSelfNumClone;
    int[] targetNum;
    Integer[] selfNum;
    ArrayList<Integer> target;

    public SelfNumber() {
        targetNum = new int[10000];
        NotSelfNum = new int[targetNum.length];
        NotSelfNumClone = new int[targetNum.length];
        for (int i = 0; i < targetNum.length; i++) {
            targetNum[i] = i;
        /*arr [0] [1] [2] [3] [4] [5] ... [99]
               0   1   2   3   4   5       99
         */
        }
    }

    public void calNum() {//notselfnumber 계산
        for (int i = 0; i < targetNum.length; i++) {
            if (targetNum[i] < 100) {
                NotSelfNum[i] = targetNum[i] + targetNum[i] / 10 + targetNum[i] % 10;
            } else if (targetNum[i] >= 100 && targetNum[i] < 1000) {
                NotSelfNum[i] = targetNum[i] + targetNum[i] / 100 + targetNum[i] % 100
                +targetNum[i] / 10 + targetNum[i] % 10;
            } else if (targetNum[i] >= 1000 && targetNum[i] <= 10000) {
                NotSelfNum[i] = targetNum[i] + targetNum[i] / 1000 + targetNum[i] % 1000+
                targetNum[i] / 100 + targetNum[i] % 100
                        +targetNum[i] / 10 + targetNum[i] % 10;
            }
            Arrays.sort(NotSelfNum);//정렬
            for (int j = 0; j < targetNum.length; j++) {
                if (NotSelfNum[j] < targetNum.length) {
                    NotSelfNumClone[j] = NotSelfNum[j];
                }
            }
        }
    }
    public void getSelfNumber(){
        target = new ArrayList<>();
        for(int i = 0; i<targetNum.length;i++){
            target.add(targetNum[i]);
        }for(int j = 0 ;j<targetNum.length;j++){
        target.remove(Integer.valueOf(NotSelfNumClone[j]));}
    }
    public void printSelfNum(){
        selfNum = target.toArray(new Integer[target.size()]);
        for(int i =0; i<selfNum.length;i++){
            System.out.println(selfNum[i]);
        }
    }
}


public class Prob4673 {
    public static void main(String[] args) {
        SelfNumber sn = new SelfNumber();
        sn.calNum();
        sn.getSelfNumber();
        sn.printSelfNum();

    }
}

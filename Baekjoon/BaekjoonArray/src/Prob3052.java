import java.util.HashSet;
import java.util.Scanner;
/*HashSet 은 자바 Collection 중 Set 의 파생클래스이다.
set 을 집합이라고 생각하면 되는데, HashSet 의 경우 몇 가지 특징이 있다.
중복되는 원소를 넣을 경우 하나만 저장한다. 즉, 중복원소를 허용하지 않는다.
HashSet 은 순서 개념이 없다. 따라서 Collections.sort() 메소드를 사용할 수 없다.
만약 정렬을 하고 싶다면 리스트로 변환 후 정렬해야한다.
 */
public class Prob3052 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        HashSet<Integer> h = new HashSet<Integer>();

        for(int i = 0; i  < 10 ; i++){
            h.add(scan.nextInt()%42);
        }
        System.out.println(h.size());
    }
}
/*이 문제에서는 결국 나머지 값에서 "서로 다른" 개수를  세면 되는 것이기 때문에
HashSet 을 이용하면 자연스럽게 나머지 값이 HashSet 원소에 이미 저장되어있어
중복일 경우 저장이 되지 않고 HashSet 에 없으면 저장한다.
즉, HashSet 에 저장하면서 들어간 원소의 개수가 HashSet 의 사이즈가 되는 것이고,
이는 결국 "서로 다른 나머지"가 되는 것이다.
 */

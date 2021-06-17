import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Prob10809 {
    public static void main(String[] args) {
        char[] alphabet = new char[26];
        Map<Character,Integer> map = new LinkedHashMap<Character,Integer>();
        Scanner scan = new Scanner(System.in);
        String word = scan.next();
        scan.close();
        for(int i=0; i<alphabet.length; i++){
            alphabet[i] = (char)(97+i);
            map.put(alphabet[i],-1);}
        for(int i=0; i<word.length(); i++){
            if(map.containsKey(word.charAt(i))){
                map.put(word.charAt(i),i);
            }
        }for(Character key:map.keySet()) {
            Integer value = map.get(key);
            System.out.println(value);
        }
    }
}

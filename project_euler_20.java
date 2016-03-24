package com.example.euler;
import java.math.BigInteger;

/**
 Project Euler number 20

 n! means n × (n ? 1) × ... × 3 × 2 × 1

 For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

 Find the sum of the digits in the number 100!
 */
public class Euler20 {
    public static void main(String[] args) {
        BigInteger result = BigInteger.ONE;
        for (int i=100; i>0; i--) {
            result = result.multiply(BigInteger.valueOf(i));
        }

        String s = result.toString();

        int sum=0;
        for(int j=0; j < s.length(); j++){
            sum += Integer.parseInt(s.substring(j,j+1));
        }

        System.out.println(sum);
    }
}

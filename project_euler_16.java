/*
Project Euler #16

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 21000?

*/

import java.math.BigInteger;


class Main {
  public static void main(String[] args) {

    BigInteger result = BigInteger.ONE;
    for (int i=1; i<= 1000; i++) {
            result = result.multiply(BigInteger.valueOf(2));
    }
    String s = result.toString();

    int sum = 0;
    for(int i=0; i< s.length(); i++){

        String temp = s.substring(i,i+1);
        sum += Integer.parseInt(temp);
    }

   System.out.println(sum);

  }
}
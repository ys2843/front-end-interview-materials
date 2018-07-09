# Google OA New

#### 1. Card game

Assume you are playing a card game in which each card has a cost and a damage caused to your opponent.

Write a function:

```java
class Solution 
{
      public boolean Solution (int total_money, int total_damage , int[] costs, int[] damages){}
}
```

that given:

- integer total_money : total money you have
- integer total_damage : total damage to be caused
- array costs of integers (size N) : the cost of every card
- array damages of integers (size N) : the damage caused to your opponent by every card

 should return true if it is possible to cause at least total_damage amount of damage to your opponent using a maximum of total_money units of money, or *false* otherwise. Each card can be selected only once.

For example, given total_money = 5, total_damage = 3, costs = [4,5,1] and damages = [1,2,3] your function should return true. 

You can scause at least total_damage amount of damage to your opponent using a maximum of total_money units of money in 2 different ways:

- By selecting the third card whose cost is 1 and damage is 3.
- By selecting the first and third card whose cost are (4,1) and damage caused to another player are (1,3)

It is possible to cause at least 3 units of damage to your opponent, therefore, ther answer is true.

Assume that:

- N, total_money and total_damage are integers within the range [1..1,000]
- each element of arrrays costs, damages is an integer within the range [1...1,000]

```javascript
function cardgame(total_money, total_damage, costs, damages){
  var darr = new Array(total_money + 1).fill(0);
  for (let i = 0; i < costs.length; i++) {
    for (let j = total_money; j >= costs[i]; j--) {
      darr[j] = Math.max(darr[j], darr[j-costs[i]]+damages[i]);
    }
  }
  return total_damage < darr[total_money];
}
```

#### 2. Substring

Write a function that, given a string S and a string T, return 1 if it's possible to convert string S into string T by deleting some(possible zero) characters from string S, and otherwise returns 0

For example, given S="abcd" and T="abd" the function should return 1. We can delete 'c' from string S to convert string S into string T. However, given S="ab" and T="ba" the function should return 0

Assume that:

- the length of ('S' , 'T') is within the range [1..1,000]
- strings S and T consist only of lower-case letters (a-z).

```javascript
function Gsubstring (S, T) {
  for (let i = 0; i < T.length;i++) {
    var index = S.indexOf(T[i]);
    if (index == -1) {
      return 0;
    }
    S = S.slice(index+1);
  }
  return 1;
}
```

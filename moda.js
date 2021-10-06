function calcularModa(lista){
lista
const lista1Count = {

};
lista.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
        
    }

);
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);
const moda = lista1Array[lista1Array.length - 1];
}
/*
You have a passage of text that needs to be typed out, but some of the letter keys on your keyboard are broken! You're given an array letters representing the working letter keys, as well as a string text, and your task is to determine how many of the words from text can be typed using the broken keyboard. It is guaranteed that all of the non-letter keys are working (including all punctuation and special characters).

A word is defined as a sequence of consecutive characters which does not contain any spaces. The given text is a string consisting of words, each separated by exactly one space. It is guaranteed that text does not contain any leading or trailing spaces.

Note that the characters in letters are all lowercase, but since the shift key is working, it's possible to type the uppercase versions also.

Example

    For text = "Hello, this is CodeSignal!" and letters = ['e', 'i', 'h', 'l', 'o', 's'], the output should be brokenKeyboard(text, letters) = 2.
        "Hello," can be typed since the characters 'h', 'e', 'l' and 'o' are in letters. Note that the symbol ',' also belongs to the current word and can by typed.
        "this" cannot be typed because the character 't' is not in letters.
        "is" can be typed (both 'i' and 's' appear in letters).
        "CodeSignal!" cannot be typed because the character 'c' is not in letters (as well as 'd', 'g', 'n', and 'a').

    For text = "Hi, this is Chris!" and letters = ['r', 's', 't', 'c', 'h'], the output should be brokenKeyboard(text, letters) = 0.

    Each word contains the character 'i' which does not appear in letters and thus cannot be typed on the keyboard.

    For text = "3 + 2 = 5" and letters = [], the output should be brokenKeyboard(text, letters) = 5.

    There are no working letters on the keyboard, but since each of these words consists of numbers and special characters, they can all be typed, and there are 5 of them.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string text

    A string containing a set of words with punctuation, separated by spaces.

    Guaranteed constraints:
    1 ≤ text.length ≤ 1000.

    [input] array.char letters

    An array of characters containing lowercase English letters which can be typed using the broken keyboard. It is guaranteed that the given letters are unique.

    Guaranteed constraints:
    0 ≤ letters.length ≤ 25.

    [output] integer

    The number of words from text which can be typed using the broken keyboard.
*/

/*You are given an array of integers a. Your task is to calculate how many numbers in the array are equal to the arithmetic mean of their immediate neighbors.

In other words, count the number of indices i such that a[i - 1] + a[i + 1] = 2 * a[i].

Note: If a[i - 1] or a[i + 1] don't exist, they should be considered equal to 0.

Example

For a = [2, 4, 6, 6, 3], the output should be countArithmeticMeans(a) = 3.

example

There are 3 elements from a that are equal to the arithmetic mean of their neighbors:

    a[0] = (0 + 4) / 2
    a[1] = (2 + 6) / 2
    a[4] = (6 + 0) / 2

So, the answer is 3.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer a

    An array of integers.

    Guaranteed constraints:
    1 ≤ a.length ≤ 103,
    0 ≤ a[i] ≤ 106.

    [output] integer

    The number of elements from a that are equal to the arithmetic mean of their neighbors.
*/

/*Your task is to implement an inventory tracker system for a large retail store. You are given a price list, which describes the market price of each item on the current day, and a log of transactions, where each record contains information about one of three types of transactions - supply, sell, or discount. The tracker system should process all log records and return the total income from all sales.

Each element of the price list is in the following format: "<item name>: <price>", which means that the item <item name> can be sold at the price <price>.

Initially the store has 0 units of each item in inventory. All transactions occur at the given <timestamp> (the number of seconds passed since the start of the day), where 0 ≤ timestamp < 60 · 60 · 24.
Transactions in the log are provided in the following format:

    "supply <timestamp>, <item name>, <count>" - the store receives <count> units of <item name>.
    "sell <timestamp>, <item name>, <count>" - the store attempts to sell <count> units of <item name>. If the store doesn't have enough items in inventory to fulfill the order, nothing is sold, and the transaction is rejected.
    "discount <timestamp>, <duration>, <percent> - the store announces a discount starting from the time <timestamp> with duration <duration> (the discount ends at the exact moment of <timestamp> + <duration>), and all the items sold during this time period are sold at price ceil(price · (100 - percent) / 100), where price is its cost in the price list and ceil(x) is the minimum integer that is greater than or equal to x. It is guaranteed that only one discount will be available at any given time.

Example

For pricelist = ["item1: 100", "item2: 200"] and

logs = [
    "sell 12, item2, 2",
    "supply 0, item1, 2",
    "discount 16, 10, 40",
    "supply 20, item2, 1",
    "sell 5, item1, 1",
    "sell 10, item1, 2",
    "supply 2, item2, 3",
    "sell 25, item2, 2"
]

the output should be storeItemsTracker2(pricelist, logs) = 740.

Let's look at the transactions in chronological order:

    "supply 0, item1, 2" - the store receives two units of item1. Note that this transaction doesn't affect the output yet, because we count only income from sales.
    "supply 2, item2, 3" - the store receives three units of item2. The total income is still 0.
    "sell 5, item1, 1" - the store sells one unit of item1. The total income becomes 1 · 100 = 100.
    "sell 10, item1, 2" - the store attempts to sell four units of item1 but there is only one unit remaining in the store, so the transaction is rejected, and the total income remains at 100.
    "sell 12, item2, 2" - the store sells two units of item2. The total income becomes 100 + 2 · 200 = 500.
    "discount 16, 10, 40" - the store announces a 40% discount during the time period of [16, 25].
    "supply 20, item2, 1" - the store receives one unit of item2, and the total income remains at 500.
    "sell 25, item2, 2" - the store sells two units of item2 during the 40% discount period. The total income becomes 500 + 2 · ceil(200 · 60 / 100) = 500 + 2 · ceil(200 · 60 / 100) = 740.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.string pricelist

    The list of prices of items in the format described above.
    Each <item name> consists of only English letters and digits.
    Each <price> is valid integer >0 and <1000.

    Guaranteed constraints:
    1 ≤ pricelist.length ≤ 100,
    4 ≤ pricelist[i].length ≤ 15.

    [input] array.string logs

    An array of strings representing a transaction log, where each element represents one of 3 types of transactions described above - supply, sell, or discount.

    All <timestamps> are unique.
    All <count> and <percent> are valid integers >0 and <100.
    It is also guaranteed that all <duration> are integers greater than 0, and timestamp + duration < 60 · 60 · 24 in any discount transactions.

    Guaranteed constraints:
    1 ≤ logs.length ≤ 100,
    14 ≤ logs[i].length ≤ 35.

    [output] integer

    The total income based on sales from the log of transactions.

    */

    /*You've decided to create a bot for handling stock trades. For now, you have a simple prototype which handles trades for just one stock. Each day, it's programmed to either buy or sell one share of the stock.

You are given prices, an array of positive integers where prices[i] represents the stock price on the ith day. You're also given algo, an array of 0s and 1s representing the bot's schedule, where 0 means buy and 1 means sell.

In order to improve the bot's performance, you'd like to choose a range of k consecutive days where the bot will be programmed to sell; in other words, set a range of k consecutive elements from algo to 1. Your task is to choose the interval such that it maximizes the bot's total revenue. The revenue is defined as the sum of all selling prices minus the sum of all buying prices (in other words, the difference between the end and start amount).

NOTE: Assume you begin with enough shares of the stock that it's always possible to sell.

Example

For prices = [2, 4, 1, 5, 2, 6, 7], algo = [0, 1, 0, 0, 1, 0, 0], and k = 4, the output should be maxRevenueFromStocks(prices, algo, k) = 21.

First, let's calculate the revenue if the algorithm is left as it is without any change.

    Before the trades start, the revenue is 0;
    Day 0: algo[0] = 0, so we buy stocks at price prices[0] = 2, and the revenue becomes 0 - 2 = -2;
    Day 1: algo[1] = 1, so we sell stocks at price prices[1] = 4, and the revenue becomes -2 + 4 = 2;
    Day 2: algo[2] = 0, so we buy stocks at price prices[2] = 1, and the revenue becomes 2 - 1 = 1;
    Day 3: algo[3] = 0, so we buy stocks at price prices[3] = 5, and the revenue becomes 1 - 5 = -4;
    Day 4: algo[4] = 1, so we sell stocks at price prices[4] = 2, and the revenue becomes -4 + 2 = -2;
    Day 5: algo[5] = 0, so we buy stocks at price prices[5] = 6, and the revenue becomes -2 - 6 = -8;
    Day 6: algo[6] = 0, so we buy stocks at price prices[6] = 7, and the revenue becomes -8 - 7 = -15.

Thus, the total revenue is -15.

example

We can maximize the total revenue by making the last k = 4 orders 1 (sell), thus making algo = [0, 1, 0, 1, 1, 1, 1]. The total revenue will become -2 + 4 - 1 + 5 + 2 + 6 + 7 = 21.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer prices

    An array of integers representing the stock price for each day.

    Guaranteed constraints:
    1 ≤ prices.length ≤ 105,
    1 ≤ prices[i] ≤ 1000.

    [input] array.integer algo

    An array of 0s and 1s, representing the bot's buy / sell schedule for each day.

    Guaranteed constraints:
    algo.length = prices.length,
    0 ≤ algo[i] ≤ 1.

    [input] integer k

    An integer representing the number of consecutive days that can be made all equal to 1, i.e. marked as sell.

    Guaranteed constraints:
    0 ≤ k ≤ prices.length.

    [output] integer

    The value of the maximum revenue that can be obtained.
*/

/*
You've decided to create a bot for handling stock trades. For now, you have a simple prototype which handles trades for just one stock. Each day, it's programmed to either buy or sell one share of the stock.

You are given prices, an array of positive integers where prices[i] represents the stock price on the ith day. You're also given algo, an array of 0s and 1s representing the bot's schedule, where 0 means buy and 1 means sell.

In order to improve the bot's performance, you'd like to choose a range of k consecutive days where the bot will be programmed to sell; in other words, set a range of k consecutive elements from algo to 1. Your task is to choose the interval such that it maximizes the bot's total revenue. The revenue is defined as the sum of all selling prices minus the sum of all buying prices (in other words, the difference between the end and start amount).

NOTE: Assume you begin with enough shares of the stock that it's always possible to sell.

Example

For prices = [2, 4, 1, 5, 2, 6, 7], algo = [0, 1, 0, 0, 1, 0, 0], and k = 4, the output should be maxRevenueFromStocks(prices, algo, k) = 21.

First, let's calculate the revenue if the algorithm is left as it is without any change.

    Before the trades start, the revenue is 0;
    Day 0: algo[0] = 0, so we buy stocks at price prices[0] = 2, and the revenue becomes 0 - 2 = -2;
    Day 1: algo[1] = 1, so we sell stocks at price prices[1] = 4, and the revenue becomes -2 + 4 = 2;
    Day 2: algo[2] = 0, so we buy stocks at price prices[2] = 1, and the revenue becomes 2 - 1 = 1;
    Day 3: algo[3] = 0, so we buy stocks at price prices[3] = 5, and the revenue becomes 1 - 5 = -4;
    Day 4: algo[4] = 1, so we sell stocks at price prices[4] = 2, and the revenue becomes -4 + 2 = -2;
    Day 5: algo[5] = 0, so we buy stocks at price prices[5] = 6, and the revenue becomes -2 - 6 = -8;
    Day 6: algo[6] = 0, so we buy stocks at price prices[6] = 7, and the revenue becomes -8 - 7 = -15.

Thus, the total revenue is -15.

example

We can maximize the total revenue by making the last k = 4 orders 1 (sell), thus making algo = [0, 1, 0, 1, 1, 1, 1]. The total revenue will become -2 + 4 - 1 + 5 + 2 + 6 + 7 = 21.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer prices

    An array of integers representing the stock price for each day.

    Guaranteed constraints:
    1 ≤ prices.length ≤ 105,
    1 ≤ prices[i] ≤ 1000.

    [input] array.integer algo

    An array of 0s and 1s, representing the bot's buy / sell schedule for each day.

    Guaranteed constraints:
    algo.length = prices.length,
    0 ≤ algo[i] ≤ 1.

    [input] integer k

    An integer representing the number of consecutive days that can be made all equal to 1, i.e. marked as sell.

    Guaranteed constraints:
    0 ≤ k ≤ prices.length.

    [output] integer

    The value of the maximum revenue that can be obtained.
*/
import 'dart:io';

class Parser {
  final String path;

  Parser(this.path);


  int toSortedList() {
    var input = File(path);
    var list = input.readAsStringSync().split('\n');
    var arrayMap = [];
    list.forEach((string) {
      arrayMap += [string.split('   ')];
    });

    List<int> firstNumbers = [];
    List<int> secondNumbers = [];

    // Iteration durch das ursprüngliche Array
    for (var pair in arrayMap) {
      firstNumbers.add(int.parse(pair[0])); // Erste Zahl
      secondNumbers.add(int.parse(pair[1])); // Zweite Zahl
    }
    firstNumbers.sort();
    secondNumbers.sort();

    var count = 0;
    for (int i = 0; i < firstNumbers.length; i++) {
      count += (firstNumbers[i] - secondNumbers[i]).abs();
    }

    return count;
  }
}
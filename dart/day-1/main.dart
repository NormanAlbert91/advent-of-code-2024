import 'dart:io';

import 'parser.dart';

void main() {
  var list = Parser('input.txt').toSortedList();

      print(list.toString());
}

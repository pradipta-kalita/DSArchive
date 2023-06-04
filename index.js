//searching algorithms
const { binarySearch } = require("./SearchAlgorithms/binarySearch");
const { linearSearch } = require("./SearchAlgorithms/linearSearch");
const { substringCount } = require("./SearchAlgorithms/substringCount");

//sorting algorithms
const { bubbleSort } = require("./SortingAlgorithms/bubbleSort");
const { insertionSort } = require("./SortingAlgorithms/insertionSort");
const { mergeSort } = require("./SortingAlgorithms/mergeSort");
const { quickSort } = require("./SortingAlgorithms/quickSort");
const { radixSort } = require("./SortingAlgorithms/radixSort");
const { selectionSort } = require("./SortingAlgorithms/selectionSort");

//Data Structures
const LinkedList = require("./LinkedLists/SingleLinkedList");
const DoublyLinkedList = require("./LinkedLists/DoublyLinkedList");
const Stack = require("./Stack&Queue/Stack");
const Queue = require("./Stack&Queue/Queue");
const BST = require("./Trees/BST");
const MinBinaryHeap = require("./Trees/MinBinaryHeap");
const MaxBinaryHeap = require("./Trees/MaxBinaryHeap");
const MinPriorityQueue = require("./Trees/MinPriorityQueue");
const MaxPriorityQueue = require("./Trees/MaxPriorityQueue");
const HashTable = require("./HashTable/HashTable");

module.exports = {
  binarySearch,
  linearSearch,
  substringCount,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort,
  selectionSort,
  LinkedList,
  DoublyLinkedList,
  Stack,
  Queue,
  BST,
  MaxBinaryHeap,
  MinBinaryHeap,
  MaxPriorityQueue,
  MinPriorityQueue,
  HashTable,
};

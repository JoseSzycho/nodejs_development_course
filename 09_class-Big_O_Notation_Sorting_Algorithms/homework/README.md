# Performance Analysis of Sorting Algorithms

## Summary

In this short report, an analysis of the next three sorting algorithms will be presented:

- Bubble Sort
- Merge Sort
- Quick Sort

The final objective is to achieve the following results:

- Execution time of each sorting algorithm for different array types and different array lengths.
- Array length at which Quick Sort and Merge Sort start to outperform Bubble Sort consistently
- Why quick sort is faster than merge sort

## Methodology

In this section, the methodology for achieving the objectives will be explained.

### Getting results

To achieve the objective a main code with different utils in JavaScript has been made, please check out [this file](./main.js).

The summary flow chart is the next.

<p align="center">
<img src ="./images/basic-flow-diagram.png">
<div align="center"><b>Minimalistic flow diagram of main code.</b></div>
</p>

Depending on the sort method it is desired to analyze, some user configuration might be required.

```js
// To be modified by user
const maxArrayLength;
const iterationsForAverage
const iterationsForRandom
const multiplier
const sortObjects
```

- **maxArrayLength:** Defines the maximum length of the array to be analyzed. Arrays from length = 2 to length < maxArrayLength will be created. Bigger array lengths reflect longer execution times.

- **iterationsForAverage:** Each sort time is stored as an average of the time that takes to sort it X times. The X is defined by iterationsForAverage. If plots and reports of code have noise, increase this variable. Bigger values give more accuracy but reflect longer execution times.

- **iterationsForRandom:** To have a uniform sort time for random arrays, the sort time is stored as the average time for sorting X different random arrays of the same length. The X is defined by iterationsForRandom. If plots and reports of code have noise, increase this variable. Bigger values reflect longer execution times.

- **multiplier:** Sorting times do not have a noticeable variation time when the array length is increased by one. In order the save execution time, the array length increases by an X value in each sort iteration. The X is defined by the multiplier. Smaller values reflect longer execution times and add noise for array lengths minor to 100.

- **sortObjects**: Stores the sort methods to be analyzed. When analyzing merge sort and quick sort, it would be desirable to remove the bubble sort method as it will slow down the execution time.

### Finding the optimal array length for each sort method

As the [main code](./main.js) execution time might take several minutes to execute, some user configurations might be necessary for being able to analyze the different desired methods faster.

The next methodology was taken.


**General behavior of the sort methods:** 

Configure the user input in the following way:

```js
// To be modified by user
const maxArrayLength; > 2000
const iterationsForAverage; > 100
const iterationsForRandom; > 100
const multiplier;  100
const sortObjects = [bubble, merge, quick];
```

This configuration will have a fast execution time and will show how each method behaves.

**Bubble sort behavior:**

To know at which point Bubble Sort becomes the slowest method for each type of array, start decreasing the maxArrayLength (this will give you less execution time) and start increasing iterationsForAverage and iterationsForRandom (this will give you more accuracy).

Once the hot spot is reached **(thanks to observation of plot and console reports it will be shown where the bubble sort starts becoming slower)**, the multiplier can start to be decreased, this will give more accuracy until a certain point. When results start to become noise, increase iterationsForAverage and iiterationsForRandom for extra accuracy.

Then, it can be analyzed the best-use scenario for the bubble sort method for each array type.

**Merge and quick sort behavior:**

To compare both sort methods, set the next configuration.

```js
// To be modified by user
const maxArrayLength; > 80000
const iterationsForAverage; > 4
const iterationsForRandom; > 4
const multiplier;  8000
const sortObjects = [merge, quick]; // IMPORTANT NOTE: bubble sort method is removed, as it slow down the execution time of the algorithm
```

This configuration will give a good approach to the general behavior of both methods.

Repeat steps as the bubble sort behavior for each array type scenario to know at which array length quick sort starts to be faster.
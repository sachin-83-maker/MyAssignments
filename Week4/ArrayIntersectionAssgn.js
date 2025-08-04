function findIntersection(arr1, arr2) {
  const intersection = []; 
  
  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];

        for (let j = 0; j < arr2.length; j++) 
          {
      
      if (currentElement === arr2[j]) // Check if the current element from arr1 matches an element in arr2
        {
        // If a match is found, check if it's already in the intersection array
        // This prevents duplicate entries in the result if the arrays have duplicates
        if (!intersection.includes(currentElement)) 
          {
          intersection.push(currentElement); // Add the common element to the intersection array
          }
        break; 
                 // This optimizes performance by not checking further in arr2 for the same element
      }
    }
  }
  return intersection; // Return the array containing the common elements
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 5, 6, 7, 8];
const result = findIntersection(arr1, arr2);
console.log(result); // Output: [3, 5]

const arr3 = [1, 2, 2, 3];
const arr4 = [2, 3, 3, 4];
const result2 = findIntersection(arr3, arr4);
console.log(result2); // Output: [2, 3])

function showIntervals(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  let result = [[intervals[0][0], intervals[0][1]]]
  console.log(result[result.length - 1])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      return 0
    } else {
      return 1
    }
  }
  
}
console.log('showIntervals --->', showIntervals([[5, 10],[1, 5], [10, 15]]))

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const previous = merged[merged.length - 1];
    
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(previous[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  
  return merged;
}
// Usage
const intervalCollection = [[1, 3], [2, 6], [8, 10], [15, 18]];
const mergedIntervals = mergeIntervals(intervalCollection);
// console.log('Merged Intervals:', mergedIntervals);
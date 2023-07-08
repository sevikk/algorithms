function showIntervals(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let result = [[intervals[0][0], intervals[0][1]]]
    
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] <= result[result.length - 1][1]) {
        return 0
      }
    }
    
  }
  console.log(showIntervals([[5, 10],[1, 4], [10, 15]]))

  mergeIntervals(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]);

    let mergedInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= mergedInterval[1]) {
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
        } else {
            merged.push(mergedInterval);
            mergedInterval = interval;
        }
    }

    merged.push(mergedInterval);

    return merged;    
  }
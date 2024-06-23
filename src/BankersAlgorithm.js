// src/BankersAlgorithm.js
class BankersAlgorithm {
    constructor(resources, max, allocation) {
      this.resources = resources;
      this.max = max;
      this.allocation = allocation;
      this.need = this.calculateNeed();
    }
  
    calculateNeed() {
      let need = [];
      for (let i = 0; i < this.max.length; i++) {
        need.push([]);
        for (let j = 0; j < this.max[i].length; j++) {
          need[i].push(this.max[i][j] - this.allocation[i][j]);
        }
      }
      return need;
    }
  
    isSafe() {
      let work = [...this.resources];
      let finish = new Array(this.max.length).fill(false);
      let safeSequence = [];
  
      while (safeSequence.length < this.max.length) {
        let found = false;
        for (let i = 0; i < this.max.length; i++) {
          if (!finish[i]) {
            let j;
            for (j = 0; j < this.max[i].length; j++) {
              if (this.need[i][j] > work[j]) break;
            }
            if (j === this.max[i].length) {
              for (let k = 0; k < this.max[i].length; k++) {
                work[k] += this.allocation[i][k];
              }
              safeSequence.push(i);
              finish[i] = true;
              found = true;
            }
          }
        }
        if (!found) return { isSafe: false, safeSequence: [] };
      }
      return { isSafe: true, safeSequence: safeSequence };
    }
  }
  
  export default BankersAlgorithm;
  
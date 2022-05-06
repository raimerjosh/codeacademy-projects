// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, arr) => {
    return {
      _specimenNum: num,
      _dna: arr,
      mutate() {
        const randIndex = Math.floor(Math.random() * this._dna.length);
        let newBase = returnRandBase();
        while (this._dna[randIndex] === newBase) {
          newBase = returnRandBase();
        }
        this._dna[randIndex] = newBase;
        return this._dna;
        },
  
      compareDNA(obj) {
        let count = 0;
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] == obj._dna[i]) {
            count += 1;
      }
      }
      console.log(`Specimen ${this._specimenNum} has ${count * 100/this._dna.length}% DNA bases in common with Specimen ${obj._specimenNum}.`)
      },
  
    willLikelySurvive() {
      const cAndG = this._dna.filter(letter => letter === 'G' || letter === 'C');
      return (cAndG.length / this._dna.length > 0.6) 
    } 
    }
    
  }
  // 30 sample strands
  let sample = [];
  let i = 0;
  while (sample.length < 30) {
    let temp = pAequorFactory(i, mockUpStrand());
    if (temp.willLikelySurvive() == true) {
      sample.push(temp);
      i += 1
    } 
  }
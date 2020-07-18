const functions = {
  gradeClassifier: (grade) => {
    if(grade<=74.99){
      console.log("D - Did not Meet Expectation")
    }
    else if(grade<=79.99){
      console.log("N - Needs Improvement")
    }
    else if(grade<=84.99){
      console.log("S - Satisfactory")
    }
    else if(grade<=89.99){
      console.log("G - Good")
    }
    else if(grade<=94.99){
      console.log("V - Very Good")
    }
    else if(grade<=100){
      console.log("O - Outstanding")
    }
    else{
      console.log("Not a valid grade")
    }
  }
}

module.exports = functions;

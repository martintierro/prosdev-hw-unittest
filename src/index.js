const functions = {
  gradeClassifier: (grade) => {
    if(grade<=74.99){
     return "D - Did not Meet Expectation"
    }
    else if(grade<=79.99){
      return "N - Needs Improvement"
    }
    else if(grade<=84.99){
      return "S - Satisfactory"
    }
    else if(grade<=89.99){
      return "G - Good"
    }
    else if(grade<=94.99){
      return "V - Very Good"
    }
    else if(grade<=100){
      return "O - Outstanding"
    }
    else{
      return "Not a valid grade"
    }
  }
}

module.exports = functions;

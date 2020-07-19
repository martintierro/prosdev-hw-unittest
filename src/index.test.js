const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When ..., then ...', () => {
    // Arrange
    const grade_O = 100

    // Act
    const letter_grade_O = gradeClassifier(grade_O)
    
    // Assert
    expect(letter_grade_O).toMatch("O - Outstanding")
  });

  it('When ..., then ...', () =>{
    const grade_V = 94
    const letter_grade_V = gradeClassifier(grade_V)
    expect(letter_grade_V).toMatch("V - Very Good")
  });

  it('When ..., then ...', () =>{
    const grade_G = 89
    const letter_grade_G = gradeClassifier(grade_G)
    expect(letter_grade_G).toMatch("G - Good")
  });

  it('When ..., then ...', () =>{
    const grade_S = 80
    const letter_grade_S = gradeClassifier(grade_S)
    expect(letter_grade_S).toMatch("S - Satisfactory")
  });

  it('When ..., then ...', () =>{
    const grade_N = 79
    const letter_grade_N = gradeClassifier(grade_N)
    expect(letter_grade_N).toMatch("N - Needs Improvement")
  });

  it('When ..., then ...', () =>{
    const grade_D = 65
    const letter_grade_D = gradeClassifier(grade_D)
    expect(letter_grade_D).toMatch("D - Did not Meet Expectation")
  });

  it('When ..., then ...', () =>{
    const invalid_grade = 104
    const invalid_letter_grade = gradeClassifier(invalid_grade)
    expect(invalid_letter_grade).toMatch("Not a valid grade")
  });
});

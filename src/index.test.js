const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When ..., then ...', () => {
    // Arrange
    const grade = 100

    // Act
    const letter_grade = gradeClassifier(grade)
    console.log(letter_grade)
    
    // Assert
    expect(letter_grade).toMatch("O - Outstanding")
  });
});

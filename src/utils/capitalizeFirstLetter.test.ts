import capitalizeFirstLetter from './capitalizeFirstLetter'

describe('capitalizeFirstLetter', () => {
  it('capitalizes the first letter of a word', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
  })

  it('returns an empty string when given an empty string', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })

  it('does not change the case of the rest of the word', () => {
    expect(capitalizeFirstLetter('hELLO')).toBe('HELLO')
  })

  it('does not change the case of a word that starts with an uppercase letter', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello')
  })
})

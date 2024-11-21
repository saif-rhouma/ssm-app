import dayjs from 'dayjs';
import environment from '../config/environment';
class SSMToken {
  /**
   * Convert a Word to a number using Unicode values.
   * @param {string} word 
   * @returns {number}
   */
  static letterToNumber(word) {
    const lowercaseLetter = word.toLowerCase().split('');
    let result = 0;
    lowercaseLetter.forEach((letter) => {
      result += letter.charCodeAt(0) - 0;
    });
    return parseInt(result);
  }

  /**
   * Generate Small Token Using SECRET WORD  
   * @returns {number} 
   */
  static generateToken() {
    const numberKey = this.letterToNumber(environment.tokenSecret);
    const dateNow = dayjs().format('DMHmmss');
    return parseInt(dateNow) + numberKey;
  }
  static validate(token) {
    if (token) {
      const EXPIRED_BY_SECOND = environment.expiredTokenTime;
      const numberKey = this.letterToNumber(environment.tokenSecret);
      const dateNow = dayjs().format('DMHmmss');
      const currentToken = parseInt(dateNow) + numberKey;
      return currentToken - parseInt(token) <= EXPIRED_BY_SECOND;
    }
    return false;
  }
}

export default SSMToken;

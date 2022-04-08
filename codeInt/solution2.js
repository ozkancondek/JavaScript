function solution(message, K) {
  if (
    K <= 0 ||
    K > 500 ||
    message === "" ||
    message.length > 500 ||
    message.includes("  ") ||
    message[0] === " " ||
    message[message.length - 1] === " "
  ) {
    return "invalid credentials";
  } else {
    if (message.length <= K) {
      return message;
    } else {
      if (message[K] === " ") {
        return message.slice(0, K).trim();
      } else {
        for (let i = 0; i <= K; i++) {
          if (message[K - i] === " ") {
            return message.slice(0, K - i).trim();
          }
        }
      }
    }
  }
}

export default {
  localWebHost: 'http://localhost:3000', // default Vue port
  localApiHost: 'http://localhost:3000', // default Now API port
  remoteWebHost: 'https://diegogm.vercel.app',
  match: {
    correctAnswerScore: 100,
    firstAnswerScore: 50
  },
  schema: {
    maxAnswerLength: 300,
    maxQuestionLength: 300,
    maxNumberOfChoices: 4,
    minNumberOfChoices: 2,
    defaultTimeLimit: 15
  }
}

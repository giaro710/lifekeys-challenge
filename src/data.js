const data = {
  courses: [
    {
      id: Math.round(Math.random() * 1000),
      title: "Cucina Italiana",
      content: [
        { text: "la cucina italiana piace" },
        { text: " no ketchup sugli spaghetti" },
        { text: "sigaretta dopo colazione" },
      ],
      questions: [
        {
          questionText: "piace la cucina italiana?",
          type: "boolean",
          answers: [
            {
              answerText: "true",
              isCorrect: true,
            },
            {
              answerText: "false",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "ketchup sugli spaghetti?",
          type: "singleChoice",
          answers: [
            {
              answerText: "Sempre, fa bene",
              isCorrect: false,
            },
            {
              answerText: "Ogni tanto mi piace",
              isCorrect: false,
            },
            {
              answerText: "Mai e poi mai",
              isCorrect: true,
            },
          ],
        },
        {
          questionText: "sigaretta dopo colazione?",
          type: "multipleChoice",
          answers: [
            {
              answerText: "Qualche volta aiuta",
              isCorrect: true,
            },
            {
              answerText: "Smetti di fumare",
              isCorrect: false,
            },
            {
              answerText: "D'obbligo",
              isCorrect: true,
            },
          ],
        },
      ],
    },
  ],
};

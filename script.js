const quizQuestions = [
    {
      question: "D'où provient l'expression 'NETIQUETTE'?",
        choices: [
        "C'est la contraction entre Internet et étiquette.",
        "C'est la contraction entre Network et Étiquette.",
        "C'est la contraction entre Net (=filet) Etiquette."
      ],
      correctAnswer: "C'est la contraction entre Network et Étiquette."
    },
    {
      question: "Quelle est la signification de l’écriture en MAJUSCULES sur Internet?",
      choices: [
        "Une parole criée",
        "Une parole soulignée",
        "Une parole ironique"
      ],
      correctAnswer: "Une parole criée"
    },
    {
      question: "Quelle est la recommandation de la nétiquette concernant les sarcasmes, les expressions locales, etc.?",
      choices: [
        "Les utiliser sans modération",
        "Les éviter ou les expliquer",
        "Les traduire en anglais",
        "Les mettre entre guillemets"
      ],
      correctAnswer: "Les éviter ou les expliquer"
    },
    {
      question: "Quelle est la règle à suivre lorsque l’on reçoit un message agressif ou provocateur?",
      choices: [
        "Répondre sur le même ton",
        "Signaler le message aux modérateurs",
        "Attendre d’avoir dormi avant de répondre",
        "Supprimer le message sans le lire"
      ],
      correctAnswer: ["Signaler le message aux modérateurs", "Attendre d’avoir dormi avant de répondre"]
    },
    {
      question: "Quel est le nom donné aux contenus tendancieux ou non vérifiés que l’on reçoit par e-mail ou sur les réseaux sociaux?",
      choices: [
        "Pourriel",
        "Hoax",
        "Spam",
        "Tous les trois"
      ],
      correctAnswer: "Tous les trois"
    },
    {
      question: "Quel est le nom donné aux fausses informations ou rumeurs qui circulent sur Internet?",
      choices: [
        "Pourriel",
        "Hoax",
        "Spam"
      ],
      correctAnswer: "Hoax"
    },
    {
      question: "Quels sont les éléments qui doivent figurer dans un e-mail selon la nétiquette?",
      choices: [
        "Un titre, un résumé et une conclusion",
        "Un sujet, une formule de salutation et une signature",
        "Un nom, un prénom et une adresse"
      ],
      correctAnswer: "Un sujet, une formule de salutation et une signature"
    },
    {
      question: "Laquelle de ces adresses mail eput être utilisée comme adresse mail professionnelle?",
      choices: [
        "Gerard69@yahoo.fr",
        "camcam@hotmail.com",
        "J.vandenberg@gmail.com",
        "Jocelynnnn@gmail.com"
      ],
      correctAnswer: ["J.vandenberg@gmail.com"]
    },
    {
      question: "Quels sont les éléments à éviter dans les contenus des messages professionnels ou même personnels s'ils ne sont pas utilisés de manière ironique?",
      choices: [
        "Les images scintillantes, les gif et les smileys",
        "Les photos, les vidéos et les liens",
        "Les citations, les références et les sources",
        "Les majuscules, les points d’exclamation et les points de suspension"
      ],
      correctAnswer: "Les images scintillantes, les gif et les smileys"
    },
    {
      question: "Quelle est la règle à respecter concernant les propos injurieux ou haineux sur Internet?",
      choices: [
        "Ne pas les dire en face-à-face mais les écrire sur les réseaux sociaux",
        "Ne pas les écrire sur les réseaux sociaux mais les dire en face-à-face",
        "Ne pas les dire ni les écrire, ni en face-à-face ni sur les réseaux sociaux",
        "Les dire et les écrire, en face-à-face et sur les réseaux sociaux"
      ],
      correctAnswer: "Ne pas les dire ni les écrire, ni en face-à-face ni sur les réseaux sociaux"
    },
    {
      question: "Quelle est la première précaution à prendre avant de publier des informations ou des contenus personnels sur Internet?",
      choices: [
        "Vérifier qu’ils sont conformes à la loi",
        "Demander l’avis de ses proches",
        "S’assurer qu’ils ne deviendront pas publics",
        "Réfléchir aux conséquences possibles"
      ],
      correctAnswer: "Réfléchir aux conséquences possibles"
    },
    {
      question: "Quelle est l’obligation à respecter lorsque l’on cite ou utilise des contenus provenant d’autres sources sur Internet?",
      choices: [
        "Demander l’autorisation à l’auteur",
        "Mentionner la ou les source(s)",
        "Modifier le contenu pour le rendre original",
        "Payer des droits d’utilisation"
      ],
      correctAnswer: "Mentionner la ou les source(s)"
    },
    {
      question: "Quel est le nom donné à la réputation que l’on se construit sur Internet à travers ses publications et ses interactions?",
      choices: [
        "L’e-réputation",
        "L’e-identité",
        "L’e-image",
        "L’e-personnalité"
      ],
      correctAnswer: "L’e-réputation"
    },
    {
      question: "Quel est le nom du sentiment d’impunité et d’anonymat que l’on peut ressentir sur Internet?",
      choices: [
        "L’effet de distanciation",
        "L’effet de désinhibition",
        "L’effet de dépersonnalisation",
        "L’effet de déréalisation"
      ],
      correctAnswer: "L’effet de désinhibition"
    },
    {
      question: "Quel est le nom donné aux messages électroniques indésirables ou non sollicités?",
      choices: [
        "Pourriel/Spam",
        "Hoax",
      ],
      correctAnswer: ["Pourriel/Spam"]
    },
    {
      question: "Que fait-on quand on reçoit une chaîne de mail souhaitant la bonne année avec des confettis et la mention 'partager à tout vos contact pour avoir du bonheur toute la vie!!!'",
      choices: [
        "On l'envoie à tous ses contacts pour leur faire plaisir.",
        "On l'envoie à son équipe",
        "On ne l'envoie à personne et on le supprime."
      ],
      correctAnswer: "On ne l'envoie à personne et on le supprime."
    }
  ]
  function displayQuestions() {
    const form = document.getElementById('whale-quiz');
    quizQuestions.forEach((q, index) => {
      const fieldset = document.createElement('fieldset');
      const legend = document.createElement('legend');
      legend.textContent = q.question;
      fieldset.appendChild(legend);
      q.choices.forEach(choice => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question' + index;
        input.value = choice;
        input.dataset.correct = choice === q.correctAnswer; // Ajout d'un data attribut pour indiquer la bonne réponse
        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));
        fieldset.appendChild(label);
      });
      form.insertBefore(fieldset, form.lastElementChild);
    });
  }
  
  function calculateScore(e) {
    e.preventDefault();
    let score = 0;
    // Réinitialiser les surlignages précédents
    document.querySelectorAll('label').forEach(label => {
      label.classList.remove('correct-answer', 'wrong-answer');
    });
    quizQuestions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected) {
        if (selected.value === q.correctAnswer) {
          score++;
          selected.parentNode.classList.add('correct-answer');
        } else {
          selected.parentNode.classList.add('wrong-answer');
        }
      }
      // Surligner toutes les réponses correctes si pas déjà sélectionnées
      document.querySelectorAll(`input[name="question${index}"][data-correct="true"]`).forEach(input => {
        input.parentNode.classList.add('correct-answer');
      });
    });
    document.getElementById('result').textContent = `Votre score : ${score}/${quizQuestions.length}`;
  }
  
  document.getElementById('whale-quiz').addEventListener('submit', calculateScore);
  
  window.onload = function() {
    displayQuestions();
  };
  
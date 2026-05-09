export const lessons = [
  {
    id: "what-is-hypothesis-testing",
    title: "What is Hypothesis Testing?",
    eyebrow: "Purpose",
    visual: "purpose",
    explanation:
      "Hypothesis testing is a statistical method for deciding whether a research result is strong enough to suggest a real treatment effect. It helps us judge whether chance, also called sampling error, is still a reasonable explanation.",
    importantPoints: [
      "A hypothesis test starts with a research result from a sample.",
      "The main question is whether the result could have happened by chance.",
      "Sampling error means a sample naturally differs from the population, even when nothing special happened.",
      "A treatment effect means the treatment likely changed the scores or measurements.",
    ],
    example:
      "A class tries a new study method and scores higher than usual. Hypothesis testing asks whether the higher score is probably due to the method or just normal sample variation.",
    explainSimply:
      "Think of it as a careful evidence check: is the result surprising enough that we should stop blaming chance?",
    reflectionPrompt:
      "In your own words, what does it mean to rule out chance?",
    quiz: [
      {
        type: "mcq",
        question: "What is the main purpose of hypothesis testing?",
        options: [
          "To decide whether chance is still a plausible explanation.",
          "To prove a treatment works forever.",
          "To remove all error from a sample.",
          "To avoid using samples.",
        ],
        answer: 0,
        feedback:
          "Hypothesis testing does not prove things absolutely. It checks whether chance is still a believable explanation.",
      },
      {
        type: "truefalse",
        question: "Sampling error means samples can differ from the population by chance.",
        answer: true,
        feedback:
          "Sampling error is the natural difference between a sample and the population caused by random sampling.",
      },
    ],
  },
  {
    id: "research-study-process",
    title: "Research Study Process",
    eyebrow: "Setup",
    visual: "process",
    explanation:
      "The PDF describes a simple research process. A sample is selected from a population, the treatment is administered to that sample, and then the sample is measured after treatment.",
    importantPoints: [
      "The population is the larger group we want to understand.",
      "The sample is the smaller group chosen from the population.",
      "The treatment is applied to the sample.",
      "After treatment, the sample is measured and compared with the original population.",
    ],
    example:
      "A researcher selects students from a university, gives them a new study strategy, and then measures their test scores.",
    explainSimply:
      "Choose a group, give the treatment, measure the result.",
    reflectionPrompt:
      "Write a one-sentence example of a treatment that could be tested.",
    quiz: [
      {
        type: "mcq",
        question: "Which order matches the research process from the note?",
        options: [
          "Select sample, administer treatment, measure sample.",
          "Measure sample, select population, administer treatment.",
          "Administer treatment, choose alpha, select sample.",
          "Reject H0, measure sample, choose population.",
        ],
        answer: 0,
        feedback:
          "The process begins with selecting a sample, then applying the treatment, then measuring the treated sample.",
      },
    ],
  },
  {
    id: "treatment-effect-vs-sampling-error",
    title: "Treatment Effect vs Sampling Error",
    eyebrow: "Competing reasons",
    visual: "comparison",
    explanation:
      "After treatment, the sample may look different from the original population. That difference might mean the treatment worked, but it might also be ordinary sampling error.",
    importantPoints: [
      "Samples rarely match the population perfectly.",
      "A real treatment effect means the treatment caused a meaningful change.",
      "Sampling error means the sample looked different just because of random selection.",
      "The hypothesis test helps decide which explanation is more reasonable.",
    ],
    example:
      "If a treated sample has a higher mean, the increase may be caused by the treatment, or the sample may have been unusually high even before treatment.",
    explainSimply:
      "A difference is not automatically proof. It could be the treatment, or it could be chance.",
    reflectionPrompt:
      "Why should a researcher be careful before saying a treatment worked?",
    quiz: [
      {
        type: "mcq",
        question: "Why can a sample look different from the population?",
        options: [
          "Because of a real treatment effect or sampling error.",
          "Only because the treatment always works.",
          "Only because the population is unknown.",
          "Because alpha was too large.",
        ],
        answer: 0,
        feedback:
          "The note emphasizes two possible explanations: a real effect or sampling error.",
      },
      {
        type: "truefalse",
        question: "A different sample mean always proves the treatment worked.",
        answer: false,
        feedback:
          "A sample mean can differ from the population mean simply because of sampling error.",
      },
    ],
  },
  {
    id: "two-possible-conclusions",
    title: "Two Possible Conclusions",
    eyebrow: "Decision",
    visual: "two-conclusions",
    explanation:
      "The hypothesis test decides between two explanations. Either the sample difference can be explained by sampling error, or the difference is too large to explain by sampling error.",
    importantPoints: [
      "If the difference is small enough, we do not have strong evidence of a treatment effect.",
      "If the difference is too large, the treatment effect explanation becomes more believable.",
      "The decision is based on probability, not certainty.",
      "The test gives a formal rule for making this decision.",
    ],
    example:
      "A small score increase might be normal sample variation. A very large score increase may be evidence that the treatment had an effect.",
    explainSimply:
      "The test asks: does this difference look ordinary, or does it look too unusual to ignore?",
    reflectionPrompt:
      "How would you explain 'too large to be sampling error' to a classmate?",
    quiz: [
      {
        type: "mcq",
        question:
          "What does it suggest when the sample difference is too large to explain by sampling error?",
        options: [
          "There appears to be a treatment effect.",
          "The sample must be deleted.",
          "The null hypothesis is automatically true.",
          "The alpha level is no longer needed.",
        ],
        answer: 0,
        feedback:
          "A very large difference provides evidence that the treatment may have had an effect.",
      },
    ],
  },
  {
    id: "null-hypothesis-alpha",
    title: "Null Hypothesis and Alpha Level",
    eyebrow: "H0 and alpha",
    visual: "alpha",
    explanation:
      "The null hypothesis, H0, states that the treatment has no effect: no change and no difference. The alpha level is the cut-off used for deciding when a result is rare enough to reject H0.",
    importantPoints: [
      "H0 always says the treatment has no effect.",
      "Under H0, the population mean after treatment is the same as before treatment.",
      "Alpha is the decision cut-off for the test.",
      "Alpha also gives the probability, or risk, of a Type I error.",
    ],
    example:
      "If the original population mean is 80, H0 says the treatment does not change that mean. If alpha is .05, the researcher is using a 5% cut-off for rare results.",
    explainSimply:
      "H0 says 'nothing changed.' Alpha says how rare the result must be before we reject that idea.",
    reflectionPrompt:
      "What does H0 claim about the treatment?",
    quiz: [
      {
        type: "mcq",
        question: "What does H0 mean in this topic?",
        options: [
          "No effect, no change, no difference.",
          "The treatment must increase scores.",
          "The sample is always wrong.",
          "The result is always significant.",
        ],
        answer: 0,
        feedback:
          "H0 is the no-effect statement. It says the treatment did not change the population.",
      },
      {
        type: "mcq",
        question: "What else does alpha represent?",
        options: [
          "The risk of a Type I error.",
          "The sample mean.",
          "The treatment size.",
          "The population size.",
        ],
        answer: 0,
        feedback:
          "The PDF states that the probability of a Type I error equals alpha.",
      },
    ],
  },
  {
    id: "critical-region",
    title: "Critical Region",
    eyebrow: "Rare outcomes",
    visual: "critical-region",
    explanation:
      "The critical region is the set of outcomes that would be very unlikely if H0 were true. If the sample result falls in this region, it is rare enough to reject H0.",
    importantPoints: [
      "The critical region contains unlikely outcomes.",
      "These outcomes have probability less than alpha when H0 is true.",
      "The rule can be written as p < alpha.",
      "The critical region is where results are considered extreme.",
    ],
    example:
      "With alpha = .05, a result with p = .03 is in the critical region because .03 is less than .05.",
    explainSimply:
      "The critical region is the 'too rare if nothing changed' zone.",
    reflectionPrompt:
      "What does p < alpha tell you about a result?",
    quiz: [
      {
        type: "truefalse",
        question: "The critical region contains outcomes that are unlikely if H0 is true.",
        answer: true,
        feedback:
          "Correct. The critical region is built from unlikely outcomes under the null hypothesis.",
      },
      {
        type: "mcq",
        question: "Which result is inside the critical region when alpha = .05?",
        options: ["p = .03", "p = .08", "p = .50", "p = .95"],
        answer: 0,
        feedback:
          "A result is in the critical region when p is less than alpha.",
      },
    ],
  },
  {
    id: "test-statistic-z-score",
    title: "Test Statistic / z-score",
    eyebrow: "Formula",
    visual: "z-score",
    explanation:
      "A test statistic summarizes how far the sample result is from what H0 predicts. In the PDF, the test statistic is a z-score. It compares the obtained difference with the difference expected from sampling error.",
    importantPoints: [
      "The obtained difference is M - mu.",
      "The expected difference is measured using standard error.",
      "A larger z-score means the sample mean is farther from the hypothesized population mean.",
      "The z-score helps decide whether the result falls in the critical region.",
    ],
    formula: "z = (M - mu) / standard error",
    example:
      "If the sample mean is far from the population mean and the standard error is small, the z-score will be large.",
    explainSimply:
      "The z-score asks: how big is the difference compared with ordinary sampling error?",
    reflectionPrompt:
      "What does a large z-score suggest about the sample result?",
    quiz: [
      {
        type: "mcq",
        question: "What does the z-score compare?",
        options: [
          "Obtained difference with expected difference from sampling error.",
          "Population size with sample size.",
          "Alpha with beta only.",
          "The number of questions with the number of lessons.",
        ],
        answer: 0,
        feedback:
          "The z-score compares the observed mean difference with standard error.",
      },
      {
        type: "mcq",
        question: "Which formula matches the note's z-score idea?",
        options: [
          "z = (M - mu) / standard error",
          "z = alpha + sample size",
          "z = treatment / population",
          "z = p x alpha",
        ],
        answer: 0,
        feedback:
          "The test statistic is the obtained mean difference divided by standard error.",
      },
    ],
  },
  {
    id: "decision-making",
    title: "Decision Making",
    eyebrow: "Reject or fail",
    visual: "decision-flow",
    explanation:
      "After computing the test statistic, the researcher checks whether it falls in the critical region. If it does, the result is significant and H0 is rejected. If it does not, the researcher fails to reject H0.",
    importantPoints: [
      "Reject H0 when the result is in the critical region.",
      "A significant effect means the result is unlikely under H0.",
      "Fail to reject H0 when the sample evidence is not strong enough.",
      "Fail to reject does not prove H0 is true; it means there is not enough evidence against it.",
    ],
    example:
      "If a z-score lands in the critical region, the researcher rejects H0 and concludes the treatment has a significant effect.",
    explainSimply:
      "Strong evidence: reject H0. Weak evidence: fail to reject H0.",
    reflectionPrompt:
      "Why is 'fail to reject H0' more careful than saying 'accept H0'?",
    quiz: [
      {
        type: "mcq",
        question: "What decision is made when the result is in the critical region?",
        options: [
          "Reject H0.",
          "Accept H0 as proven.",
          "Ignore the sample.",
          "Increase the population mean.",
        ],
        answer: 0,
        feedback:
          "A result in the critical region is statistically significant, so H0 is rejected.",
      },
      {
        type: "truefalse",
        question: "Failing to reject H0 proves that H0 is true.",
        answer: false,
        feedback:
          "Failing to reject H0 only means the sample did not provide enough evidence against H0.",
      },
    ],
  },
  {
    id: "type-i-error",
    title: "Type I Error",
    eyebrow: "False positive",
    visual: "type-one",
    explanation:
      "A Type I error happens when the sample data appear to show a treatment effect, but in reality the treatment has no effect. This is a false positive.",
    importantPoints: [
      "The researcher rejects H0.",
      "In reality, H0 is true and the treatment has no effect.",
      "The conclusion falsely says the treatment works.",
      "The probability of a Type I error equals alpha.",
    ],
    example:
      "A researcher concludes a new study method works, but actually the higher score came from an unusual sample and the method has no real effect.",
    explainSimply:
      "Type I error is a false alarm: we say there is an effect when there is not.",
    reflectionPrompt:
      "Why does alpha matter when thinking about Type I error?",
    quiz: [
      {
        type: "mcq",
        question: "Type I error is best described as:",
        options: [
          "A false positive.",
          "A false negative.",
          "A correct rejection.",
          "A guaranteed treatment effect.",
        ],
        answer: 0,
        feedback:
          "Type I error means rejecting H0 when H0 is actually true.",
      },
      {
        type: "truefalse",
        question: "The probability of a Type I error equals alpha.",
        answer: true,
        feedback:
          "The note states that Type I error probability is equal to the alpha level.",
      },
    ],
  },
  {
    id: "type-ii-error",
    title: "Type II Error",
    eyebrow: "False negative",
    visual: "error-table",
    explanation:
      "A Type II error happens when the sample does not appear to show a treatment effect, but in reality the treatment does have an effect. This is a false negative.",
    importantPoints: [
      "The researcher fails to reject H0.",
      "In reality, the treatment does have an effect.",
      "The conclusion falsely says there is not enough evidence of an effect.",
      "Type II errors often happen when the treatment effect is very small.",
    ],
    example:
      "A researcher concludes a tutoring program does not help, but it actually helps a little. The study missed the effect.",
    explainSimply:
      "Type II error is a missed signal: there is an effect, but the test does not catch it.",
    reflectionPrompt:
      "What is the difference between a false positive and a false negative?",
    quiz: [
      {
        type: "mcq",
        question: "Type II error is best described as:",
        options: [
          "A false negative.",
          "A false positive.",
          "Rejecting H0 correctly.",
          "Choosing a critical region.",
        ],
        answer: 0,
        feedback:
          "Type II error means failing to reject H0 when the treatment actually has an effect.",
      },
      {
        type: "mcq",
        question: "What commonly causes Type II errors according to the note?",
        options: [
          "A very small treatment effect.",
          "A Type I error probability equal to alpha.",
          "A p-value smaller than alpha.",
          "A sample inside the critical region.",
        ],
        answer: 0,
        feedback:
          "The PDF says Type II errors commonly result when the treatment effect is too small to show clearly.",
      },
    ],
  },
  {
    id: "directional-one-tailed-test",
    title: "Directional / One-tailed Test",
    eyebrow: "Direction",
    visual: "one-tailed",
    explanation:
      "A directional test is used when the researcher predicts a specific direction for the treatment effect, such as an increase or a decrease. It is also called a one-tailed test.",
    importantPoints: [
      "The direction is stated before the test.",
      "The prediction is included in the hypotheses.",
      "The critical region is placed in the tail matching the predicted direction.",
      "For a predicted increase, the critical region is in the right-hand tail.",
    ],
    example:
      "If the population mean is 80 and the treatment is predicted to increase scores, large sample means support the prediction, so the critical region goes in the right tail.",
    explainSimply:
      "A one-tailed test looks for an effect in one planned direction.",
    reflectionPrompt:
      "When would a researcher choose a one-tailed test?",
    quiz: [
      {
        type: "truefalse",
        question:
          "If a treatment is predicted to increase scores, the critical region is in the right tail.",
        answer: true,
        feedback:
          "A predicted increase is supported by large values, which are in the right tail.",
      },
      {
        type: "mcq",
        question: "A directional test is also called:",
        options: [
          "A one-tailed test.",
          "A two-sample population.",
          "A standard error test.",
          "A Type I table.",
        ],
        answer: 0,
        feedback:
          "The note uses directional test and one-tailed test for the same idea.",
      },
    ],
  },
  {
    id: "effect-size",
    title: "Effect Size",
    eyebrow: "Magnitude",
    visual: "effect-size",
    explanation:
      "A hypothesis test tells us whether a result is statistically significant, but significance does not always mean the effect is large. Large samples can make very small effects statistically significant.",
    importantPoints: [
      "Statistical significance asks whether the result is unlikely without a treatment effect.",
      "Significance is influenced by treatment effect size and sample size.",
      "A small effect can be significant in a very large sample.",
      "Cohen's d is a standardized measure of effect size.",
      "Cohen's d describes the mean difference in standard deviation units.",
    ],
    example:
      "A new learning app might improve scores by only one point. With a huge sample, that small change could be significant, but Cohen's d helps show that the effect is small.",
    explainSimply:
      "Significance asks 'is it likely real?' Effect size asks 'how big is it?'",
    reflectionPrompt:
      "Why is effect size useful after a significant result?",
    quiz: [
      {
        type: "mcq",
        question: "Why report effect size with a hypothesis test?",
        options: [
          "Because significant does not always mean large.",
          "Because it removes the need for alpha.",
          "Because it proves H0 is true.",
          "Because it makes sampling error impossible.",
        ],
        answer: 0,
        feedback:
          "Effect size helps interpret how large the effect is, not only whether it is statistically significant.",
      },
      {
        type: "mcq",
        question: "Which effect-size measure is named in the note?",
        options: ["Cohen's d", "Population alpha", "Critical p", "H0 size"],
        answer: 0,
        feedback:
          "The note recommends Cohen's d as a standardized measure of effect size.",
      },
    ],
  },
  {
    id: "power",
    title: "Power of a Hypothesis Test",
    eyebrow: "Detection",
    visual: "power",
    explanation:
      "Power is the probability that a hypothesis test will reject H0 when the treatment really does have an effect. A powerful test is better at detecting real effects.",
    importantPoints: [
      "Power means the chance of correctly rejecting H0 when an effect exists.",
      "Higher power makes Type II errors less likely.",
      "Power depends on several factors.",
      "The note highlights effect size and sample size as key factors.",
      "Larger effects and larger samples are easier to detect.",
    ],
    example:
      "A strong treatment effect in a large sample is easier to detect than a tiny effect in a small sample.",
    explainSimply:
      "Power is the test's ability to notice a real treatment effect.",
    reflectionPrompt:
      "What two factors from the note can increase the chance of detecting a real effect?",
    quiz: [
      {
        type: "mcq",
        question: "What is power?",
        options: [
          "The probability of rejecting H0 when the treatment really has an effect.",
          "The probability of rejecting H0 when H0 is true.",
          "The size of the critical region only.",
          "The population mean after treatment.",
        ],
        answer: 0,
        feedback:
          "Power is the chance that the test detects a real treatment effect.",
      },
      {
        type: "mcq",
        question: "Which two factors does the note name as affecting power?",
        options: [
          "Effect size and sample size.",
          "Page number and font size.",
          "Alpha only and nothing else.",
          "Population name and treatment label.",
        ],
        answer: 0,
        feedback:
          "The note specifically mentions treatment effect size and sample size.",
      },
    ],
  },
];

export const finalReview = {
  title: "Hypothesis Testing Complete",
  message:
    "You completed every module from the PDF note. You can now describe the purpose of hypothesis testing, follow the testing process, make the reject/fail-to-reject decision, and explain the major errors and follow-up ideas.",
  keyPoints: [
    "Hypothesis testing helps rule out sampling error as a plausible explanation.",
    "A research study selects a sample, applies treatment, and measures the sample after treatment.",
    "A sample difference may be caused by a real treatment effect or by sampling error.",
    "H0 states no effect, no change, and no difference.",
    "Alpha is the cut-off level and the risk of a Type I error.",
    "The critical region contains outcomes with p < alpha.",
    "The z-score compares M - mu with standard error.",
    "Reject H0 when the result falls in the critical region; otherwise fail to reject H0.",
    "Type I error is a false positive, and Type II error is a false negative.",
    "A one-tailed test is used for a predicted direction, such as an increase.",
    "Effect size explains how large the effect is, and Cohen's d is one effect-size measure.",
    "Power is the probability of rejecting H0 when the treatment really has an effect.",
  ],
};

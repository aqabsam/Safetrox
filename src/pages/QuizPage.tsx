import { ArrowRight, BarChart3, CheckCircle2, LockKeyhole, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { premiumQuestions, quizTests } from '../data/siteData'
import { useContent } from '../contexts/ContentContext'

const PREMIUM_CODE = '8617799312'

function getScore(items: readonly unknown[], selected: Array<number | null>) {
  return selected.reduce((score, answer, index) => {
    const correctAnswer = (items[index] as { answer?: number }).answer ?? 0
    return score + (answer === correctAnswer ? 1 : 0)
  }, 0)
}

export default function QuizPage() {
  const navigate = useNavigate()
  const { adminQuestions } = useContent()
  const availableTests = adminQuestions.length > 0
    ? [...quizTests, { title: 'Admin Question Bank', subtitle: 'Questions published by the Safetrox training team.', questions: adminQuestions }]
    : quizTests
  const [answers, setAnswers] = useState<Array<Array<number | null>>>(() =>
    availableTests.map((test) => Array(test.questions.length).fill(null)),
  )
  const [submittedTests, setSubmittedTests] = useState<boolean[]>(() => availableTests.map(() => false))
  const [scores, setScores] = useState<number[]>(() => availableTests.map(() => 0))
  const [completedTests, setCompletedTests] = useState<boolean[]>(() => availableTests.map(() => false))
  const [openTest, setOpenTest] = useState(-1)
  const [premiumAnswers, setPremiumAnswers] = useState<Array<number | null>>(() => premiumQuestions.map(() => null))
  const [premiumCode, setPremiumCode] = useState('')
  const [premiumUnlocked, setPremiumUnlocked] = useState(false)
  const [premiumSubmitted, setPremiumSubmitted] = useState(false)
  const [premiumScore, setPremiumScore] = useState(0)
  const [submittedTestIndex, setSubmittedTestIndex] = useState<number | null>(null)

  useEffect(() => {
    if (adminQuestions.length === 0) return
    setAnswers(availableTests.map((test) => Array(test.questions.length).fill(null)))
    setSubmittedTests(availableTests.map(() => false))
    setScores(availableTests.map(() => 0))
    setCompletedTests(availableTests.map(() => false))
    setOpenTest(quizTests.length)
  }, [adminQuestions])

  const handleAnswer = (testIndex: number, questionIndex: number, optionIndex: number) => {
    const nextAnswers = [...answers]
    nextAnswers[testIndex] = [...nextAnswers[testIndex]]
    nextAnswers[testIndex][questionIndex] = optionIndex
    setAnswers(nextAnswers)
  }

  const handleSubmit = (testIndex: number) => {
    const selectedAnswers = answers[testIndex]
    const correctCount = getScore(availableTests[testIndex].questions, selectedAnswers)
    const nextScores = [...scores]
    nextScores[testIndex] = correctCount
    setScores(nextScores)

    const nextSubmitted = [...submittedTests]
    nextSubmitted[testIndex] = true
    setSubmittedTests(nextSubmitted)

    const nextCompleted = [...completedTests]
    nextCompleted[testIndex] = true
    setCompletedTests(nextCompleted)

    setSubmittedTestIndex(testIndex)
  }

  const proceedToNextTest = () => {
    if (submittedTestIndex === null) return
    if (submittedTestIndex < availableTests.length - 1) {
      setOpenTest(submittedTestIndex + 1)
    }
    setSubmittedTestIndex(null)
  }

  const handlePremiumUnlock = () => {
    if (premiumCode.trim() === PREMIUM_CODE) {
      setPremiumUnlocked(true)
    }
  }

  const handlePremiumAnswer = (questionIndex: number, optionIndex: number) => {
    const nextAnswers = [...premiumAnswers]
    nextAnswers[questionIndex] = optionIndex
    setPremiumAnswers(nextAnswers)
  }

  const handlePremiumSubmit = () => {
    setPremiumScore(getScore(premiumQuestions, premiumAnswers))
    setPremiumSubmitted(true)
  }

  return (
    <section className="section page-shell">
      <div className="section-heading quiz-heading">
        <p className="eyebrow">Quiz Practice</p>
        <h2>Step-by-step interview practice</h2>
        <p>
          Complete each test in order. Once a test is submitted, the next one unlocks so you can progress smoothly through the interview preparation flow.
        </p>
      </div>

      <div className="quiz-stack">
        {availableTests.map((test, index) => {
          const isLocked = index > 0 && !completedTests[index - 1]
          const isOpen = openTest === index
          const selectedAnswers = answers[index]
          const isSubmitted = submittedTests[index]
          const score = scores[index]
          const totalQuestions = test.questions.length

          return (
            <article className={`quiz-test-card${isLocked ? ' quiz-test-card--locked' : ''}`} key={test.title}>
              <button
                className="quiz-test-toggle"
                type="button"
                onClick={() => {
                  if (isLocked) return
                  if (index === 0) navigate('/quiz/test/1')
                  else setOpenTest(isOpen ? -1 : index)
                }}
                disabled={isLocked}
              >
                <div className="quiz-test-header">
                  <div>
                    <span className="quiz-badge">Test {index + 1}</span>
                    <h3>{test.title}</h3>
                    <p>{test.subtitle}</p>
                  </div>
                  <div className="quiz-test-meta">
                    <span className="quiz-count">{totalQuestions} MCQs</span>
                    {isLocked ? <span className="quiz-chip">Locked</span> : null}
                    {isSubmitted ? <span className="quiz-chip quiz-chip--success">Completed</span> : null}
                  </div>
                </div>
              </button>

              {isOpen ? (
                <div className="quiz-body">
                  <ol className="quiz-question-list">
                    {test.questions.map((item, questionIndex) => {
                      const selected = selectedAnswers[questionIndex]
                      const isCorrect = submittedTests[index] ? selected === (item.answer ?? 0) : false
                      return (
                        <li key={`${test.title}-${questionIndex}`}>
                          <strong>{item.question}</strong>
                          <div className="quiz-option-grid">
                            {item.options.map((option, optionIndex) => {
                              const isSelected = selected === optionIndex
                              const showResult = submittedTests[index]
                              const isCorrectOption = optionIndex === (item.answer ?? 0)
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className={`quiz-option${isSelected ? ' quiz-option--selected' : ''}${showResult && isCorrectOption ? ' quiz-option--correct' : ''}${showResult && isSelected && !isCorrectOption ? ' quiz-option--wrong' : ''}`}
                                  onClick={() => !isSubmitted && handleAnswer(index, questionIndex, optionIndex)}
                                  disabled={isSubmitted}
                                >
                                  <span>{String.fromCharCode(65 + optionIndex)}.</span> {option}
                                </button>
                              )
                            })}
                          </div>
                          {isSubmitted ? (
                            <p className={`quiz-feedback${isCorrect ? ' quiz-feedback--correct' : ' quiz-feedback--wrong'}`}>
                              {isCorrect ? 'Correct answer' : `Your answer: ${selected === null ? 'Not answered' : item.options[selected]}. Correct answer: ${item.options[item.answer ?? 0]}`}
                            </p>
                          ) : null}
                        </li>
                      )
                    })}
                  </ol>

                  {isSubmitted ? (
                    <QuizResult score={score} totalQuestions={totalQuestions} />
                  ) : (
                    <button className="primary-button quiz-submit" type="button" onClick={() => handleSubmit(index)}>
                      Submit Test {index + 1} <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              ) : null}
            </article>
          )
        })}
      </div>

      <div className={`quiz-premium-card${premiumUnlocked ? ' quiz-premium-card--open' : ''}`}>
        <div>
          <p className="eyebrow"><LockKeyhole size={15} /> Premium Questions</p>
          <h3>{premiumUnlocked ? 'Premium HSE field-response bank' : 'Unlock the premium HSE question bank'}</h3>
          <p>{premiumUnlocked ? 'You now have access to the premium questions from the source document.' : 'Enter the private access code to open the premium document questions.'}</p>
        </div>
        {!premiumUnlocked ? (
          <form className="quiz-code-form" onSubmit={(event) => { event.preventDefault(); handlePremiumUnlock() }}>
            <label htmlFor="premium-code">Access code</label>
            <div>
              <input id="premium-code" inputMode="numeric" maxLength={10} placeholder="10-digit code" value={premiumCode} onChange={(event) => setPremiumCode(event.target.value.replace(/\D/g, ''))} />
              <button className="primary-button" type="submit">Unlock <ArrowRight size={18} /></button>
            </div>
            {premiumCode.length === 10 && premiumCode !== PREMIUM_CODE ? <small className="quiz-code-error">That code did not unlock the question bank.</small> : null}
          </form>
        ) : null}
      </div>

      {premiumUnlocked ? (
        <div className="quiz-premium-content">
          <div className="quiz-premium-heading"><div><p className="eyebrow"><BarChart3 size={15} /> Premium practice</p><h3>Premium HSE Controls</h3></div><span className="quiz-count">{premiumQuestions.length} MCQs</span></div>
          <ol className="quiz-question-list">
            {premiumQuestions.map((item, questionIndex) => {
              const selected = premiumAnswers[questionIndex]
              return <li key={item.question}><strong>{item.question}</strong><div className="quiz-option-grid">{item.options.map((option, optionIndex) => <button key={option} type="button" className={`quiz-option${selected === optionIndex ? ' quiz-option--selected' : ''}${premiumSubmitted && optionIndex === item.answer ? ' quiz-option--correct' : ''}${premiumSubmitted && selected === optionIndex && selected !== item.answer ? ' quiz-option--wrong' : ''}`} onClick={() => !premiumSubmitted && handlePremiumAnswer(questionIndex, optionIndex)} disabled={premiumSubmitted}><span>{String.fromCharCode(65 + optionIndex)}.</span> {option}</button>)}</div>{premiumSubmitted ? <p className={`quiz-feedback${selected === item.answer ? ' quiz-feedback--correct' : ' quiz-feedback--wrong'}`}>{selected === item.answer ? 'Correct answer' : `Correct answer: ${item.options[item.answer]}`}</p> : null}</li>
            })}
          </ol>
          {premiumSubmitted ? <QuizResult score={premiumScore} totalQuestions={premiumQuestions.length} /> : <button className="primary-button quiz-submit" type="button" onClick={handlePremiumSubmit}>Submit Premium Test <ArrowRight size={18} /></button>}
        </div>
      ) : null}

      {submittedTestIndex !== null ? (
        <div className="quiz-modal-backdrop" role="presentation" onClick={proceedToNextTest}>
          <div className="quiz-submit-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-submit-title" onClick={(event) => event.stopPropagation()}>
            <button className="quiz-modal-close" type="button" aria-label="Close" onClick={proceedToNextTest}><X size={19} /></button>
            <CheckCircle2 className="quiz-modal-icon" size={42} />
            <p className="eyebrow">Test submitted</p>
            <h3 id="quiz-submit-title">{availableTests[submittedTestIndex].title}</h3>
            <p>You scored <strong>{scores[submittedTestIndex]}</strong> out of <strong>{availableTests[submittedTestIndex].questions.length}</strong>.</p>
            {submittedTestIndex < availableTests.length - 1 ? <p className="quiz-modal-next">Next: <strong>{availableTests[submittedTestIndex + 1].title}</strong></p> : <p className="quiz-modal-next">You have completed all practice tests.</p>}
            <button className="primary-button" type="button" onClick={proceedToNextTest}>{submittedTestIndex < availableTests.length - 1 ? 'Proceed to next test' : 'View results'} <ArrowRight size={18} /></button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

function QuizResult({ score, totalQuestions }: { score: number; totalQuestions: number }) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const wrongCount = totalQuestions - score
  const label = percentage >= 80 ? 'Strong readiness' : percentage >= 50 ? 'Developing confidence' : 'Needs focused review'

  return <div className="quiz-result-card">
    <div className="quiz-result-header"><div><p className="eyebrow"><BarChart3 size={15} /> Performance analysis</p><h4>{label}</h4><p>You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>. Review the highlighted answers above before your next attempt.</p></div><div className="quiz-score-ring" style={{ '--score-angle': `${percentage * 3.6}deg` } as React.CSSProperties}><strong>{percentage}%</strong><span>accuracy</span></div></div>
    <div className="quiz-result-bars"><div><span>Correct answers</span><i><b className="quiz-bar-correct" style={{ width: `${percentage}%` }} /></i><strong>{score}</strong></div><div><span>Wrong / unanswered</span><i><b className="quiz-bar-wrong" style={{ width: `${100 - percentage}%` }} /></i><strong>{wrongCount}</strong></div></div>
  </div>
}

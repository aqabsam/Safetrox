import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { type CSSProperties, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { quizTests } from '../data/siteData'

export default function QuizTestPage() {
  const { testNumber } = useParams()
  const testIndex = Math.max(0, Number(testNumber ?? 1) - 1)
  const test = quizTests[testIndex] ?? quizTests[0]
  const [answers, setAnswers] = useState<Array<number | null>>(() => test.questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)
  const score = answers.reduce((total, answer, index) => total + (answer === ((test.questions[index] as { answer?: number }).answer ?? 0) ? 1 : 0), 0)
  const totalQuestions = test.questions.length
  const incorrectCount = totalQuestions - score
  const scorePercentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0

  useEffect(() => {
    setAnswers(test.questions.map(() => null))
    setSubmitted(false)
  }, [testIndex, test.questions])

  const chooseAnswer = (questionIndex: number, optionIndex: number) => {
    if (submitted) return
    const nextAnswers = [...answers]
    nextAnswers[questionIndex] = optionIndex
    setAnswers(nextAnswers)
  }

  return <section className="section page-shell quiz-test-page">
    <Link className="back-link" to="/quiz"><ArrowLeft size={16} /> All tests</Link>
    <div className="section-heading quiz-test-page-heading">
      <p className="eyebrow">Test {testIndex + 1} of {quizTests.length}</p>
      <h2>{test.title}</h2>
      <p>{test.subtitle} Answer all 10 questions, then submit to see your result.</p>
    </div>
    <ol className="quiz-question-list quiz-question-list--focused">
      {test.questions.map((item, questionIndex) => {
        const selected = answers[questionIndex]
        const isCorrect = selected === (item.answer ?? 0)
        return <li key={item.question}>
          <strong>{item.question}</strong>
          <div className="quiz-option-grid">
            {item.options.map((option, optionIndex) => <button key={option} className={`quiz-option${selected === optionIndex ? ' quiz-option--selected' : ''}${submitted && optionIndex === (item.answer ?? 0) ? ' quiz-option--correct' : ''}${submitted && selected === optionIndex && !isCorrect ? ' quiz-option--wrong' : ''}`} type="button" onClick={() => chooseAnswer(questionIndex, optionIndex)} disabled={submitted}><span>{String.fromCharCode(65 + optionIndex)}.</span> {option}</button>)}
          </div>
          {submitted ? <p className={`quiz-feedback${isCorrect ? ' quiz-feedback--correct' : ' quiz-feedback--wrong'}`}>{isCorrect ? 'Correct answer' : `Correct answer: ${item.options[item.answer ?? 0]}`}</p> : null}
        </li>
      })}
    </ol>
    {!submitted ? <button className="primary-button quiz-submit" type="button" onClick={() => setSubmitted(true)}>Submit {test.title} <ArrowRight size={18} /></button> : <div className="quiz-focused-result"><div className="quiz-focused-summary"><CheckCircle2 size={24} /><div><strong>You scored {score} out of {totalQuestions}</strong><p>Review your answers above before continuing.</p></div></div><div className="quiz-pie-analysis" aria-label={`Result breakdown: ${score} correct and ${incorrectCount} wrong or unanswered`}><div className="quiz-pie-chart" style={{ '--correct-percentage': `${scorePercentage}%` } as CSSProperties}><span><strong>{scorePercentage}%</strong><small>accuracy</small></span></div><div className="quiz-pie-legend"><span><i className="quiz-pie-legend__correct" />Correct <strong>{score}</strong></span><span><i className="quiz-pie-legend__incorrect" />Wrong / unanswered <strong>{incorrectCount}</strong></span></div></div><Link className="primary-button" to={testIndex < quizTests.length - 1 ? `/quiz/test/${testIndex + 2}` : '/quiz'}>{testIndex < quizTests.length - 1 ? 'Next test' : 'Back to quiz'} <ArrowRight size={18} /></Link></div>}
  </section>
}

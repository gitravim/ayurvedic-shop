import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';
import { DOSHA_QUIZ, products } from '../data/products';
import { useCart } from '../context/CartContext';

function tally(answers) {
  const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
  Object.values(answers).forEach((dosha) => { counts[dosha] = (counts[dosha] || 0) + 1; });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

export default function QuizPage() {
  const [step, setStep] = useState(0); // 0 = intro, 1..n = questions, n+1 = result
  const [answers, setAnswers] = useState({});
  const { addItem } = useCart();

  const questions = DOSHA_QUIZ.questions;
  const totalSteps = questions.length;
  const isIntro = step === 0;
  const isResult = step === totalSteps + 1;
  const currentQ = !isIntro && !isResult ? questions[step - 1] : null;

  const resultDosha = isResult ? tally(answers) : null;
  const recommendation = resultDosha ? DOSHA_QUIZ.recommendations[resultDosha] : null;
  const recommendedProducts = recommendation
    ? recommendation.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean)
    : [];

  function selectAnswer(dosha) {
    const newAnswers = { ...answers, [currentQ.id]: dosha };
    setAnswers(newAnswers);
    if (step === totalSteps) {
      setStep(totalSteps + 1);
    } else {
      setStep(step + 1);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
  }

  const progress = isIntro ? 0 : isResult ? 100 : Math.round(((step) / totalSteps) * 100);

  return (
    <main className="min-h-screen flex items-start justify-center px-4 sm:px-6 py-16 woodcut-bg">
      <div className="w-full max-w-xl">

        {/* Progress bar */}
        {!isIntro && (
          <div className="mb-8">
            <div className="flex justify-between text-xs font-body text-sepia/50 mb-2">
              <span>Dosha Quiz</span>
              <span>{isResult ? 'Complete' : `${step} of ${totalSteps}`}</span>
            </div>
            <div className="h-1.5 bg-sepia/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Intro ────────────────────────────────── */}
        {isIntro && (
          <div className="frame-card p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sepia/10 mb-6">
              <Leaf size={30} className="text-sepia" />
            </div>
            <h1 className="section-heading text-3xl mb-4">Discover Your Dosha</h1>
            <p className="font-body text-sepia/70 leading-relaxed mb-3">
              In Ayurveda, your <strong className="text-sepia">Dosha</strong> — your unique mind-body
              constitution — determines which herbs, routines, and rituals will serve you best.
            </p>
            <p className="font-body text-sm text-sepia/55 mb-8">
              5 questions · Under 2 minutes · Personalised product recommendations
            </p>
            <button
              onClick={() => setStep(1)}
              className="btn-amber flex items-center justify-center gap-2 w-full py-4 text-base"
            >
              Begin the Quiz <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* ── Questions ────────────────────────────── */}
        {currentQ && (
          <div className="frame-card p-7 md:p-10">
            <p className="text-xs font-body uppercase tracking-widest text-sepia/45 mb-3">
              Question {step} of {totalSteps}
            </p>
            <h2 className="font-display text-2xl text-sepia font-semibold mb-7 leading-snug">
              {currentQ.question}
            </h2>
            <div className="space-y-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.dosha}
                  onClick={() => selectAnswer(opt.dosha)}
                  className="w-full text-left p-4 rounded-xl border border-sepia/20 bg-parchment/60
                             hover:border-sepia/50 hover:bg-sepia/5 active:bg-sepia/10
                             transition-all duration-150 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-sepia leading-relaxed">{opt.label}</span>
                    <ArrowRight
                      size={16}
                      className="text-sepia/30 group-hover:text-sepia/70 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </button>
              ))}
            </div>
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-5 text-xs font-body text-sepia/40 hover:text-sepia/70 transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
        )}

        {/* ── Results ──────────────────────────────── */}
        {isResult && recommendation && (
          <div className="space-y-6">
            {/* Dosha card */}
            <div className="frame-card p-8 text-center bg-gradient-to-br from-amber/10 to-sepia/5">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sepia/10 mb-4">
                <Leaf size={28} className="text-sepia" />
              </div>
              <p className="text-xs font-body uppercase tracking-widest text-sepia/50 mb-2">
                Your Constitution
              </p>
              <h2 className="font-display text-3xl text-sepia font-semibold mb-1">
                {recommendation.tagline}
              </h2>
              <p className="font-body text-sepia/70 leading-relaxed max-w-md mx-auto mt-3">
                {recommendation.description}
              </p>
            </div>

            {/* Recommended products */}
            <div>
              <h3 className="font-display text-xl text-sepia font-semibold mb-4">
                Recommended for Your Dosha
              </h3>
              <div className="space-y-3">
                {recommendedProducts.map((p) => (
                  <div key={p.id} className="frame-card p-4 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shrink-0 woodcut-bg`}>
                      <span className="text-2xl">{p.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-base font-semibold text-sepia">{p.name}</p>
                      <p className="font-body text-sm text-sepia/60 truncate">{p.description.slice(0, 60)}…</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="font-display text-base font-semibold text-sepia">${p.price.toFixed(2)}</span>
                      <button
                        onClick={() => addItem(p)}
                        className="flex items-center gap-1 bg-sepia text-parchment px-3 py-1.5 rounded-lg text-xs font-body font-medium
                                   hover:bg-sepia-dark active:scale-95 transition-all"
                      >
                        <ShoppingBag size={12} />
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bundle nudge */}
            <div className="frame-card p-5 bg-amber/10 border border-amber/30 text-center">
              <p className="font-body text-sm text-sepia">
                Add all 3 recommended products and unlock your{' '}
                <strong>10% Ritual Bundle discount</strong>.
              </p>
              <button
                onClick={() => recommendedProducts.forEach((p) => addItem(p))}
                className="btn-amber mt-3 inline-flex items-center gap-2 py-3 px-6"
              >
                <ShoppingBag size={16} />
                Add All 3 — Save 10%
              </button>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button onClick={reset} className="flex items-center gap-1.5 text-sm font-body text-sepia/60 hover:text-sepia transition-colors">
                <RotateCcw size={14} /> Retake Quiz
              </button>
              <Link to="/shop" className="flex items-center gap-1.5 text-sm font-body text-sepia/60 hover:text-sepia transition-colors ml-auto">
                Browse all products <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { CheckCircle2, Gift, Users, Trophy, Star, Zap } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "¿Conocés la app Temu o alguna plataforma similar para ofertas?",
    options: [
      "Sí, la uso regularmente",
      "No, nunca la he usado",
      "La he escuchado pero nunca la usé"
    ]
  },
  {
    id: 2,
    question: "¿Con qué frecuencia comprás productos en línea?",
    options: [
      "Cada semana",
      "Una vez al mes",
      "Rara vez"
    ]
  },
  {
    id: 3,
    question: "¿Te interesan los productos de demostración o reacondicionados si tienen gran descuento?",
    options: [
      "Claro, me encantaría",
      "Depende del producto",
      "No mucho"
    ]
  },
  {
    id: 4,
    question: "¿Qué tipo de productos buscás más seguido en internet?",
    options: [
      "Electrónica",
      "Moda",
      "Hogar",
      "Otros"
    ]
  },
  {
    id: 5,
    question: "¿Qué país te representa o dónde vivís actualmente?",
    options: [
      "🇨🇷 Costa Rica",
      "🇦🇷 Argentina",
      "🇲🇦 Marruecos",
      "🇭🇳 Honduras"
    ]
  }
];

const motivationalMessages = [
  "¡Excelente inicio! Continuá para desbloquear tu beneficio...",
  "¡Vas muy bien! Ya estás a mitad de camino...",
  "¡Casi ahí! Solo quedan 3 preguntas más...",
  "¡Increíble! Una pregunta más y desbloqueás tu recompensa...",
  "¡Última pregunta! Tu beneficio exclusivo te espera..."
];

const QuizSection = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [participantCount, setParticipantCount] = useState(12847);
  const [showMotivation, setShowMotivation] = useState(false);

  const progress = ((currentQuestion) / questions.length) * 100;

  // Animate participant counter
  useEffect(() => {
    const interval = setInterval(() => {
      setParticipantCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnswers({ ...answers, [currentQuestion]: option });
    
    // Show motivational message
    if (currentQuestion < questions.length - 1) {
      setShowMotivation(true);
      setTimeout(() => setShowMotivation(false), 2000);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  if (showResult) {
    return (
      <div className="quiz-result-container">
        <Card className="result-card">
          <div className="result-content">
            <div className="reward-animation">
              <Trophy className="trophy-icon" size={72} />
              <div className="stars-container">
                <Star className="star star-1" size={24} />
                <Star className="star star-2" size={20} />
                <Star className="star star-3" size={28} />
              </div>
            </div>
            <h2 className="result-title">¡Felicitaciones! 🎉</h2>
            <div className="unlock-badge">
              <Gift size={20} />
              <span>Beneficio Desbloqueado</span>
            </div>
            <p className="result-text">
              Has completado la encuesta exitosamente. Como agradecimiento, ahora tenés acceso exclusivo al artículo completo con información privilegiada sobre la exposición internacional de dispositivos electrónicos 2024.
            </p>
            <div className="reward-box">
              <Zap size={18} />
              <span>Acceso VIP al contenido exclusivo + información sobre productos de demostración disponibles</span>
            </div>
            <Button 
              onClick={onComplete}
              className="continue-button"
              size="lg"
            >
              Reclamar mi acceso exclusivo
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Incentive Banner */}
      <div className="incentive-banner">
        <Gift className="banner-icon" size={24} />
        <div className="banner-content">
          <p className="banner-title">¡Completá la encuesta y desbloqueá beneficios exclusivos!</p>
          <p className="banner-subtitle">Acceso VIP a información privilegiada + descuentos especiales</p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="social-proof">
        <Users size={18} />
        <span><strong>{participantCount.toLocaleString()}</strong> personas ya completaron esta encuesta</span>
      </div>

      <div className="quiz-header">
        <h1 className="quiz-title">Encuesta Rápida</h1>
        <p className="quiz-subtitle">Pregunta {currentQuestion + 1} de {questions.length}</p>
        
        {/* Progress with badges */}
        <div className="progress-container">
          <Progress value={progress} className="quiz-progress" />
          <div className="progress-badges">
            {[...Array(5)].map((_, index) => (
              <div 
                key={index} 
                className={`badge-step ${index <= currentQuestion ? 'completed' : ''}`}
              >
                {index < currentQuestion ? (
                  <CheckCircle2 size={20} />
                ) : index === currentQuestion ? (
                  <Zap size={20} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Motivational Message */}
      {showMotivation && (
        <div className="motivational-message">
          <CheckCircle2 size={20} />
          <span>{motivationalMessages[currentQuestion]}</span>
        </div>
      )}

      <Card className="question-card">
        <h2 className="question-text">{questions[currentQuestion].question}</h2>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </Card>

      {/* Bottom Motivator */}
      <div className="bottom-motivator">
        <div className="reward-preview">
          <Trophy size={16} />
          <span>Solo {questions.length - currentQuestion} {questions.length - currentQuestion === 1 ? 'pregunta' : 'preguntas'} para desbloquear tu recompensa</span>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
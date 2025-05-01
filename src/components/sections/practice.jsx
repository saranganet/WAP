import React, { useState } from 'react';
import "./FlashcardPage.css";

const languages = {
  Italian: [
    { word: "Ciao", meaning:"Hello"},
    { word: "Grazie",meaning: "Thank you"},
    { word: "Amico", meaning: "Friend" },
    { word: "Per favore", meaning: "Please" },
    { word: "Scusa", meaning: "Sorry" },
    { word: "Buongiorno", meaning: "Good morning" },
    { word: "Arrivederci", meaning: "Goodbye" },
    { word: "Famiglia", meaning: "Family" },
    { word: "Casa", meaning: "House" },
    { word: "Scuola", meaning: "School" },
    { word: "Lavoro", meaning: "Work" },
    { word: "Cibo", meaning: "Food" },
    { word: "Acqua", meaning: "Water" },
    { word: "Amore", meaning: "Love" },
    { word: "Felicità", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
  Spanish: [
    { word: "Hola",meaning:"Hello" },
    { word: "Gracias", meaning: "Thank you"},
    { word: "Amigo",meaning: "Friend" },
    { word: "Por favor", meaning: "Please" },
    { word: "Lo siento", meaning: "Sorry" },
    { word: "Buenos días", meaning: "Good morning" },
    { word: "Adiós", meaning: "Goodbye" },
    { word: "Familia", meaning: "Family" },
    { word: "Casa", meaning: "House" },
    { word: "Escuela", meaning: "School" },
    { word: "Trabajo", meaning: "Work" },
    { word: "Comida", meaning: "Food" },
    { word: "Agua", meaning: "Water" },
    { word: "Amor", meaning: "Love" },
    { word: "Felicidad", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
  French: [
    { word: "Bonjour",meaning: "Good morning"},
    { word: "Merci",meaning: "Thank you"},
    { word: "Ami",meaning:"Friend" },
    { word: "S'il vous plaît", meaning: "Please" },
    { word: "Pardon", meaning: "Sorry" },
    { word: "Bonsoir", meaning: "Good evening" },
    { word: "Au revoir", meaning: "Goodbye" },
    { word: "Famille", meaning: "Family" },
    { word: "Maison", meaning: "House" },
    { word: "École", meaning: "School" },
    { word: "Travail", meaning: "Work" },
    { word: "Nourriture", meaning: "Food" },
    { word: "Eau", meaning: "Water" },
    { word: "Amour", meaning: "Love" },
    { word: "Bonheur", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
  German: [
    { word: "Hallo", meaning: "Hello" },
    { word: "Danke", meaning: "Thank you" },
    { word: "Freund", meaning: "Friend" },
    { word: "Bitte", meaning: "Please" },
    { word: "Entschuldigung", meaning: "Sorry" },
    { word: "Guten Morgen", meaning: "Good morning" },
    { word: "Auf Wiedersehen", meaning: "Goodbye" },
    { word: "Familie", meaning: "Family" },
    { word: "Haus", meaning: "House" },
    { word: "Schule", meaning: "School" },
    { word: "Arbeit", meaning: "Work" },
    { word: "Essen", meaning: "Food" },
    { word: "Wasser", meaning: "Water" },
    { word: "Liebe", meaning: "Love" },
    { word: "Glück", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
  Japanese: [
    { word: "こんにちは (Konnichiwa)", meaning: "Hello" },
    { word: "ありがとう (Arigatou)", meaning: "Thank you" },
    { word: "友達 (Tomodachi)", meaning: "Friend" },
    { word: "お願いします (Onegaishimasu)", meaning: "Please" },
    { word: "ごめんなさい (Gomen nasai)", meaning: "Sorry" },
    { word: "おはよう (Ohayou)", meaning: "Good morning" },
    { word: "さようなら (Sayounara)", meaning: "Goodbye" },
    { word: "家族 (Kazoku)", meaning: "Family" },
    { word: "家 (Ie)", meaning: "House" },
    { word: "学校 (Gakkou)", meaning: "School" },
    { word: "仕事 (Shigoto)", meaning: "Work" },
    { word: "食べ物 (Tabemono)", meaning: "Food" },
    { word: "水 (Mizu)", meaning: "Water" },
    { word: "愛 (Ai)", meaning: "Love" },
    { word: "幸せ (Shiawase)", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
  Korean: [
    { word: "안녕하세요 (Annyeonghaseyo)", meaning: "Hello" },
    { word: "감사합니다 (Gamsahamnida)", meaning: "Thank you" },
    { word: "친구 (Chingu)", meaning: "Friend" },
    { word: "제발 (Jebal)", meaning: "Please" },
    { word: "미안합니다 (Mianhamnida)", meaning: "Sorry" },
    { word: "좋은 아침 (Joeun Achim)", meaning: "Good morning" },
    { word: "안녕히 가세요 (Annyeonghi Gaseyo)", meaning: "Goodbye" },
    { word: "가족 (Gajok)", meaning: "Family" },
    { word: "집 (Jip)", meaning: "House" },
    { word: "학교 (Hakgyo)", meaning: "School" },
    { word: "일 (Il)", meaning: "Work" },
    { word: "음식 (Eumsik)", meaning: "Food" },
    { word: "물 (Mul)", meaning: "Water" },
    { word: "사랑 (Sarang)", meaning: "Love" },
    { word: "행복 (Haengbok)", meaning: "Happiness" },
    // Add more entries until there are 100 total
  ],
};

export default function FlashcardPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % languages[selectedLanguage].length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8 text-[#1f2937]">Language Flashcards</h1>

      <select
        className="mb-10 px-5 py-3 border border-gray-300 rounded-xl text-lg text-[#1f2937] shadow-sm"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">Select a Language</option>
        {Object.keys(languages).map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      {selectedLanguage && (
        <div className="flex flex-col items-center">
          <div className="flashcard-container mb-6" onClick={handleFlip}>
            <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
              <div className="front">
                {languages[selectedLanguage][currentIndex].word}
              </div>
              <div className="back">
                {languages[selectedLanguage][currentIndex].meaning}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleFlip}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg transition"
            >
              {isFlipped ? "Hide Meaning" : "Flip to Reveal"}
            </button>
            <button
              onClick={handleNextCard}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-lg transition"
            >
              Next Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



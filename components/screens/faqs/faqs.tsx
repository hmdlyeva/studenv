"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "StudenV nədir?",
    answer:
      "StudenV universitet tələbələrinin bilik və bacarıqlarını paylaşması, layihələr üzərində müzakirə aparması və müxtəlif fürsətlərdən yararlanması üçün nəzərdə tutulmuş platformadır.",
  },
  {
    question: "Platformada necə qeydiyyatdan keçə bilərəm?",
    answer:
      "Universitet e-poçt ünvanınızla qeydiyyatdan keçməlisiniz. Həm tələbələr, həm də 'namizəd' (abituriyent) olaraq qeydiyyatdan keçmək mümkündür.",
  },
  {
    question: "Hansı imkanlardan yararlana bilərəm?",
    answer:
      "Platformada müxtəlif imkanlar mövcuddur: müzakirə bölməsi vasitəsilə suallar vermək və cavablar almaq, tədbirlərə qoşulmaq, şirkətlərin və ya təcrübə proqramlarının məlumatlarını görmək, resurslarla bölüşmək və daha çox.",
  },
  {
    question: "Namizədlər üçün xüsusi nə imkanlar var?",
    answer:
      "Namizədlər universitet tələbələrinə sual verə və onların cavablarını ala bilərlər. Bu, onlara universitet həyatına daha yaxşı hazırlanmağa kömək edir.",
  },
  {
    question:
      "Platformada necə bal toplaya bilərəm və bu balları nə üçün istifadə edə bilərəm?",
    answer:
      "Cavablarınız bəyənildikcə ballar qazanırsınız. Topladığınız ballarla premium tədbirlərə pulsuz qoşulmaq və ya premium resurslara çıxış əldə etmək mümkündür.",
  },
  {
    question: "Şirkətlərin qeydiyyatdan keçməsi mümkündürmü?",
    answer:
      "Bəli, şirkətlər də qeydiyyatdan keçə bilərlər. Şirkətlər aktiv tələbələri, onların ballarını və CV-lərini görə bilərlər.",
  },
  {
    question: "StudenV-də hansı tədbirlər mövcuddur?",
    answer:
      "Tədbirlər bölməsində könüllülük, təqaüdlər, əməkdaşlıq imkanları, təcrübə proqramları və kurslar mövcuddur. Bəzi tədbirlər isə premium ola bilər.",
  },
  {
    question: "Problemlər və ya dəstək üçün necə müraciət edə bilərəm?",
    answer:
      "Platformada olan Əlaqə bölməsinə daxil olaraq suallarınızı və ya problemlərinizi bizə bildirin.",
  },
];

const Terms = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container ">
      <h1 className="text-5xl text-blue-500 relative top-40">FAQ</h1>
      <div className="mt-44 flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg shadow-md"
          >
            <button
              className="w-full rounded-lg text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="px-4 py-3 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;

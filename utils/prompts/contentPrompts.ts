export const contentPrompts = {
    general: (targetGroup: string) => `
  Erstelle einen ausführlichen, SEO-optimierten Artikel über Widerstandsbänder für ${targetGroup}.
  Der Artikel sollte folgende Aspekte abdecken:
  
  1. Einleitung und Zielgruppenbeschreibung
  2. Spezifische Vorteile für ${targetGroup}
  3. Empfohlene Widerstandsstärken
  4. Übungsbeispiele und Trainingstipps
  5. Sicherheitshinweise
  6. Kaufempfehlung
  
  Verwende einen professionellen, aber zugänglichen Schreibstil. 
  Formatiere den Text mit HTML-Tags für Überschriften (h2, h3) und Absätze (p).
  `,
  
    faq: (targetGroup: string) => `
  Erstelle 10 relevante FAQ-Antworten für ${targetGroup} zum Thema Widerstandsbänder.
  Formatiere die Antworten als JSON-Array mit folgender Struktur:
  [
    {
      "question": "Frage hier",
      "answer": "Ausführliche, zielgruppenspezifische Antwort hier"
    }
  ]
  
  Die FAQs sollten folgende Aspekte abdecken:
  1. Widerstandsstärken
  2. Übungsarten
  3. Sicherheit
  4. Haltbarkeit
  5. Vorteile
  6. Vergleich mit anderen Trainingsgeräten
  7. Spezifische Anwendungen für ${targetGroup}
  8. Trainingsempfehlungen
  9. Qualitätsmerkmale
  10. Pflege und Wartung
  `
  };
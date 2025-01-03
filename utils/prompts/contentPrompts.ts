export const contentPrompts = {
    general: (targetGroup: string) => `
  Erstelle einen ausführlichen, SEO-optimierten Artikel über Widerstandsbänder kaufen für ${targetGroup}.
  Der Artikel sollte folgende Aspekte abdecken:
  
  1. Einleitung und Zielgruppenbeschreibung
  2. Spezifische Vorteile für ${targetGroup}
  3. Empfohlene Widerstandsstärken. Gehe dabei als Version auf das EXOPEK Pro I und EXOPEK Pro II ein. Variante I hat leichtere Widerstandsstärken und Variante II hat stärkere Widerstandsstärken.
  4. Übungsbeispiele und Trainingstipps
  5. Sicherheitshinweise. Gehe dabei auf unsere Sleve-Ummantelung ein, was die Widerstandsbänder zusätzlich langlebiger macht.
  6. Kaufempfehlung für die Widerstandsbänder von Exopek. Gehe dabei auf die Qualität, Haltbarkeit und das Preis-Leistungs-Verhältnis ein.
  
  Verwende einen professionellen, aber zugänglichen Schreibstil. 
  Formatiere die Antworten als JSON-Array mit folgender Struktur:
  [
    {
      "title": "H2 Überschrift hier",
      "content": "Content passend zur Überschrift hier"
    }
  ]
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
  1. Widerstandsstärken (unsere Stärken sind 2,3 kg, 4,5 kg, 9 kg, 13,6 kg, 18,1 kg, 22,7 und 27,2 kg)
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
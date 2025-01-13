import { ref } from "vue";
import type { Category } from "~/types/navigation";

export function useCategories() {
  // For 150 categories, seo relevant
      /* Basketball
      Handball 
      Volleyball
      Fußball 
      American Football
      Rugby
      Muay Thai
      Boxen
      Crossfit
      Hyrox
      Calistenics
      Home-Training
      Platzsparend Zuhause trainieren
      Sprungkraft trainieren */
  const categories = ref<Category[]>([
    {
      slug: "senioren",
      title: "Senioren",
      description: "Extra-leichte Widerstandsbänder für sanftes Training",
    },
    {
      slug: "fitness-einsteiger",
      title: "Fitness-Einsteiger",
      description: "Mittlere Widerstandsstärken für optimalen Trainingsstart",
    },
    {
      slug: "kraftsportler",
      title: "Kraftsportler",
      description: "Starke Widerstandsbänder für intensives Krafttraining",
    },
    {
      slug: "yoga",
      title: "Yoga",
      description: "Flexible Bänder für mehr Beweglichkeit und Dehnung",
    },
    {
      slug: "outdoor-fitness",
      title: "Outdoor",
      description: "Robuste Bänder für effektives Training im Freien",
    },
    {
      slug: "physiotherapie",
      title: "Physiotherapie",
      description:
        "Widerstandsbänder speziell für Reha- und Physiotherapie-Übungen",
    },
    {
      slug: "crossfit",
      title: "CrossFit",
      description:
        "Hochbelastbare Widerstandsbänder für anspruchsvolle CrossFit-Workouts",
    },
    {
      slug: "heimtraining",
      title: "Heimtraining",
      description:
        "Vielseitige Widerstandsbänder für effektives Training zu Hause",
    },
    {
      slug: "reisen",
      title: "Reisen",
      description:
        "Leichte und tragbare Widerstandsbänder für Training unterwegs",
    },
    {
      slug: "rehabilitation",
      title: "Rehabilitation",
      description: "Sanfte Widerstandsbänder zur Unterstützung der Genesung",
    },
    { 
      slug: 'büroangestellte', 
      title: 'Büroangestellte', 
      description: 'Widerstandsbänder für kleine Übungen während der Arbeitspausen' 
    },
    { 
        slug: 'pilates', 
        title: 'Pilates', 
        description: 'Bänder für kontrollierte und präzise Bewegungen beim Pilates-Training' 
    },
    { 
        slug: 'teamsportler', 
        title: 'Teamsportler', 
        description: 'Widerstandsbänder zur Ergänzung von Trainingseinheiten für Sportmannschaften' 
    },
    { 
        slug: 'personal-trainer', 
        title: 'Personal Trainer', 
        description: 'Perfekt für Trainer, die individuelle Workouts anbieten möchten' 
    },
    { 
        slug: 'ausdauertraining', 
        title: 'Ausdauertraining', 
        description: 'Bänder zur Steigerung von Kraft und Kondition' 
    },
    { 
        slug: 'seniorensportgruppen', 
        title: 'Seniorensportgruppen', 
        description: 'Sanfte Bänder für gemeinsame Übungen in Gruppen' 
    },
    { 
        slug: 'rehabilitationszentren', 
        title: 'Rehabilitationszentren', 
        description: 'Professionelle Bänder für therapeutische Anwendungen' 
    },
    { 
        slug: 'leistungssportler', 
        title: 'Leistungssportler', 
        description: 'Hochbelastbare Bänder für leistungsorientiertes Training' 
    },
    { 
        slug: 'kampfsportler', 
        title: 'Kampfsportler', 
        description: 'Widerstandsbänder zur Verbesserung von Schnelligkeit und Explosivität' 
    },
    
    // Ball Sports
    {
      slug: "basketball",
      title: "Basketball",
      description: "Widerstandsbänder für explosive Sprungkraft und verbesserte Wurfkraft im Basketball",
    },
    {
      slug: "handball",
      title: "Handball",
      description: "Spezielle Übungen für Wurftechnik und Schultermuskulatur im Handball",
    },
    {
      slug: "volleyball",
      title: "Volleyball",
      description: "Training für Sprungkraft und Armstabilität beim Volleyball",
    },
    {
      slug: "fussball",
      title: "Fußball",
      description: "Widerstandsband-Training für Schusskraft und Schnelligkeit im Fußball",
    },
    {
      slug: "american-football",
      title: "American Football",
      description: "Krafttraining mit Widerstandsbändern für Football-spezifische Bewegungen",
    },
    {
      slug: "rugby",
      title: "Rugby",
      description: "Explosivkraft und Tacklingvorbereitung mit Widerstandsbändern",
    },
  
    // Combat Sports
    {
      slug: "muay-thai",
      title: "Muay Thai",
      description: "Widerstandsbänder für explosive Kicks und Schlagtechniken im Muay Thai",
    },
    {
      slug: "boxen",
      title: "Boxen",
      description: "Spezifisches Widerstandstraining für Schlagkraft und Boxbewegungen",
    },
    {
      slug: "mma",
      title: "MMA",
      description: "Vielseitiges Widerstandstraining für Mixed Martial Arts",
    },
  
    // Fitness & Training
    {
      slug: "hyrox",
      title: "HYROX",
      description: "Spezifische Widerstandsübungen für HYROX-Wettkampfvorbereitung",
    },
    {
      slug: "calisthenics",
      title: "Calisthenics",
      description: "Unterstützung und Progression bei Körpergewichtsübungen",
    },
    {
      slug: "functional-training",
      title: "Functional Training",
      description: "Funktionelles Training mit Widerstandsbändern für Alltag und Sport",
    },
  
    // Special Training Types
    {
      slug: "sprungkrafttraining",
      title: "Sprungkrafttraining",
      description: "Gezieltes Training zur Steigerung der vertikalen Sprungkraft",
    },
    {
      slug: "beweglichkeitstraining",
      title: "Beweglichkeitstraining",
      description: "Verbesserung der Mobilität und Flexibilität mit Widerstandsbändern",
    },
    {
      slug: "core-training",
      title: "Core Training",
      description: "Stabilisationsübungen für eine starke Körpermitte",
    },
    {
      slug: "klimmzüge",
      title: "Klimmzüge",
      description: "Unterstützung und Progression bei Klimmzügen mit Widerstandsbändern",
    },
  
    // Space-Saving Solutions
    {
      slug: "platzsparend",
      title: "Platzsparendes Training",
      description: "Effektives Training auf kleinstem Raum mit Widerstandsbändern",
    },
    {
      slug: "mobile-fitness",
      title: "Mobiles Training",
      description: "Flexible Trainingsmöglichkeiten für unterwegs und auf Reisen",
    },
  
    // Professional Applications
    {
      slug: "athletik-training",
      title: "Athletik Training",
      description: "Professionelles Athletiktraining mit Widerstandsbändern",
    },
    {
      slug: "leichtathletik",
      title: "Leichtathletik",
      description: "Spezifisches Training für Sprinter, Werfer und Springer",
    },
  
    // Health & Prevention
    {
      slug: "gelenkschonend",
      title: "Gelenkschonendes Training",
      description: "Sanftes Training für schmerzfreie Bewegung",
    },

    // Premium Products Presentation
    {
      slug: "premium-widerstandsbaender-high-performance",
      title: "Premium Widerstandsbänder",
      description: "Hochwertige Widerstandsbänder für anspruchsvolle Trainingsanforderungen",
    },

    // Travel & Outdoor
    {
      slug: "trendy-widerstandsbaender-multifunktional",
      title: "Reise Widerstandsbänder",
      description: "Leichte und kompakte Widerstandsbänder für Training unterwegs",
    },

    // Training Progress Problem Solution
    {
      slug: "widerstandsbaender-gegen-plateaus",
      title: "Widerstandsbänder gegen Plateaus",
      description: "Widerstandsbänder zur Überwindung von Trainingsplateaus",
    },

    // Sale
    {
      slug: "beste-widerstandsbaender-online-kaufen",
      title: "Beste Widerstandsbänder",
      description: "Widerstandsbänder zu top Preisen",
    }
  ]);

  return {
    categories,
  };
}

import { ref } from "vue";
import type { Category } from "~/types/navigation";

export function useCategories() {
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
    }
  ]);

  return {
    categories,
  };
}

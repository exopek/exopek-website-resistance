import type { TargetGroup } from "../types"

export const targetGroups = {
    'senioren': {
      title: 'Senioren und aktive Ältere',
      strength: 'extra-leicht bis leicht',
      focus: 'Mobilität, Gleichgewicht, sanfte Kräftigung'
    },
    'fitness-einsteiger': {
      title: 'Fitness-Einsteiger',
      strength: 'leicht bis mittel',
      focus: 'Grundübungen, Technik, progressive Steigerung'
    },
    'kraftsportler': {
      title: 'Kraftsportler',
      strength: 'stark bis extra-stark',
      focus: 'Maximalkraft, Muskelaufbau, Explosivkraft'
    }
    // ... weitere Zielgruppen
  } as Record<string, TargetGroup>;
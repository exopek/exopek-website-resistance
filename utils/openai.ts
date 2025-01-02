import  { type FAQ, type TargetGroup }  from './types';
import { contentPrompts } from './prompts/contentPrompts';
import { targetGroups } from './content/targetGroups';
import OpenAI from 'openai';

export async function generateContent(targetGroup: string, key: string): Promise<string> {

    const openai = new OpenAI({
        apiKey: key
      });

  try {
    const groupInfo = targetGroups[targetGroup] as TargetGroup
    || {
      title: targetGroup,
      strength: 'mittel',
      focus: 'allgemeines Training'
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Du bist ein Experte für Fitnesstraining und Widerstandsbänder."
        },
        {
          role: "user",
          content: contentPrompts.general(groupInfo.title)
        }
      ],
      temperature: 0.7
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('Error generating content:', error);
    return 'Inhalt wird geladen...';
  }
}

export async function generateFAQs(targetGroup: string, key: string): Promise<FAQ[]> {

    const openai = new OpenAI({
        apiKey: key
      });

  try {
    if (!targetGroup)
      return [];
    const groupInfo = targetGroups[targetGroup] || {
      title: targetGroup,
      strength: 'mittel',
      focus: 'allgemeines Training'
    };

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Du bist ein Experte für Fitnesstraining und Widerstandsbänder."
        },
        {
          role: "user",
          content: contentPrompts.faq(groupInfo.title)
        }
      ],
      temperature: 0.7
    });

    const content = response.choices[0].message.content || '[]';
    return JSON.parse(content) as FAQ[];
  } catch (error) {
    console.error('Error generating FAQs:', error);
    return [];
  }
}
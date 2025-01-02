import { targetGroups } from './content/targetGroups';

export async function getImages(targetGroup: string, count: number = 1): Promise<Image[]> {

    const config = useRuntimeConfig();

    const key = "47988487-ac2e7d11aafa275100f032b6e";

  try {
    const groupInfo = targetGroups[targetGroup] || {
      title: targetGroup,
      strength: 'mittel',
      focus: 'allgemeines Training'
    };

    const searchTerms = [
      `resistance bands ${groupInfo.title}`,
      'fitness training bands',
      `${groupInfo.focus} exercise`
    ];

    const response = await fetch(
      `https://pixabay.com/api/?key=${config.pixabayApiKey}&q=${encodeURIComponent(searchTerms.join(' '))}&per_page=${count}&lang=de`
    );
    const data = await response.json();
    
    return data.hits.map((hit: any) => ({
      url: hit.webformatURL,
      alt: `Widerstandsbänder Training für ${groupInfo.title} - ${hit.tags}`,
      width: hit.webformatWidth,
      height: hit.webformatHeight
    }));
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}
export const CATEGORY_SLUGS: Record<string, string> = {
  "Puppy Basics": "puppy-basics",
  "Behavior Problems": "behavior-problems",
  "Obedience & Commands": "obedience-commands",
  "Rescue & Multi-Dog Homes": "rescue-multi-dog",
  "General Guides": "general-guides",
};

export function categorySlug(category: string): string {
  return CATEGORY_SLUGS[category] ?? category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function intensity(tweet: string): number {
  const { length } = tweet.replace(/\s/g, '');
  const intenseCharacters = (tweet.match(/[A-Z\!]/g) || []).length;

  // Use the square root to get a wider range of intensities.
  return Math.sqrt(intenseCharacters / length);
}

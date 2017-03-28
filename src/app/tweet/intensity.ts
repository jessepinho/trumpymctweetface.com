export function intensity(tweet: string): number {
  const { length } = tweet.replace(/\s/g, '');
  const intenseCharacters = (tweet.match(/[A-Z\!]/g) || []).length;

  return intenseCharacters / length;
}

// based on https://stackoverflow.com/a/13348618

export default function isChromium(): boolean {
  const isChromium = window.chrome as Record<string, unknown> | boolean;

  if (isChromium !== null && typeof isChromium !== 'undefined') {
    return true;
  }

  return false;
}

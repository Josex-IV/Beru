/**
 * Utility for playing UI sounds
 */

// A subtle, futuristic UI click sound
const CLICK_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';

let clickAudio: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
  clickAudio = new Audio(CLICK_SOUND_URL);
  clickAudio.volume = 0.15;
  clickAudio.preload = 'auto';
}

export const playClickSound = () => {
  if (!clickAudio) return;
  
  // Reset and play to allow rapid clicks
  clickAudio.currentTime = 0;
  clickAudio.play().catch((err) => {
    // Browsers block audio until first user interaction
    console.debug('Audio playback blocked or failed:', err);
  });
};

// A slightly different sound for "success" or "open" actions
const SUCCESS_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
let successAudio: HTMLAudioElement | null = null;

if (typeof window !== 'undefined') {
  successAudio = new Audio(SUCCESS_SOUND_URL);
  successAudio.volume = 0.1;
  successAudio.preload = 'auto';
}

export const playSuccessSound = () => {
  if (!successAudio) return;
  successAudio.currentTime = 0;
  successAudio.play().catch(() => {});
};

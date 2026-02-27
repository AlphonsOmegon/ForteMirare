
export type SongMetadata = {
  id: string,
  name: string;
  subtitle: string;
  keywords: string[];
}

type AudioConfig = {
  music: Record<string, SongMetadata>;
}

export const audioConfig: AudioConfig = {
  music: {
    breathOfDoomed: {
      id: "breathOfDoomed",
      name: "Serenity of Dying Worlds",
      subtitle: "Cyberpunk Orchestra",
      keywords: ["Sci-fi", "Orchestral", "Synths"],
    },
    quantumHermit: {
      id: "quantumHermit",
      name: "Quantum Hermit",
      subtitle: "Endless Space inspired theme",
      keywords: ["Dreamy", "Meditation", "Mysticpunk"],
    }, 
    laBahia: {
      id: "laBahia",
      name: "La Bahía de Colores",
      subtitle: "Magic Realism of colonial Carribean",
      keywords: ["Orchestral storytelling", "Rythm", "Colonial"],
    }
  }
  
};
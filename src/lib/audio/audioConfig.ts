
export type SongMetadata = {
  id: string,
  name: string;
  subtitle: string;
  keywords: string[];
  description: string;
}

type AudioConfig = {
  music: Record<string, SongMetadata>;
}

export const audioConfig: AudioConfig = {
  music: {
    collotrina: {
      id: "collotrina",
      name: "Collotrina",
      subtitle: "The City of Giants",
      keywords: ["Adventure", "Orchestral", "Synths"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl  massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.",
    },
    theCoronation: {
      id: "theCoronation",
      name: "The Coronation",
      subtitle: "The Liminal Interregnum",
      keywords: ["Epic", "Orchestral", "Main Theme"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl  massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.",
    }, 
    theSilvering: {
      id: "theSilvering",
      name: "The Silvering",
      subtitle: "The One Who Opens The Sky",
      keywords: ["Soft", "Repetitive", "Brisks"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl  massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.",
    }
  }
  
};
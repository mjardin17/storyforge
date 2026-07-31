/**
 * StoryForge Enterprise Types - Empire OS Publishing Division
 */

export type AgeGroup = 
  | 'Infants (0-1y)'
  | 'Toddlers (1-3y)'
  | 'Preschool (3-5y)'
  | 'Early Reader (5-8y)'
  | 'Middle Grade (8-12y)'
  | 'Young Adult (12-18y)'
  | 'Adult (18+)';

export type BookGenre =
  | 'Fantasy'
  | 'Science Fiction'
  | 'History'
  | 'Adventure'
  | 'Mystery'
  | 'Comedy'
  | 'Educational'
  | 'Business'
  | 'Biography'
  | 'Graphic Novel'
  | 'Interactive / Choose Your Path'
  | 'Low Content / Activity Book';

export interface StoryCouncilMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  avatar: string;
  color: string;
  personality: string[];
  goals: string[];
  weaknesses: string[];
  responsibilities: string[];
}

export interface CouncilDebateEntry {
  id: string;
  specialistId: string;
  specialistName: string;
  specialistRole: string;
  avatar: string;
  color: string;
  timestamp: string;
  type: 'analysis' | 'critique' | 'suggestion' | 'approval';
  content: string;
  ratingScore?: number;
}

export interface CharacterRelationship {
  targetCharacterId: string;
  targetCharacterName: string;
  relationshipType: 'ally' | 'rival' | 'mentor' | 'family' | 'nemesis' | 'neutral';
  notes: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: 'protagonist' | 'deuteragonist' | 'antagonist' | 'mentor' | 'supporting';
  biography: string;
  personalityTraits: string[];
  dialogueStyle: {
    tone: string;
    catchphrases: string[];
    vocabularyComplexity: 'Simple' | 'Moderate' | 'Advanced' | 'Poetic';
  };
  goals: string;
  weaknesses: string;
  visualDNA: {
    ethnicityOrSpecies: string;
    hairColorStyle: string;
    eyeColor: string;
    distinctiveFeatures: string;
    attire: string;
    overallVibe: string;
  };
  characterArc: {
    startingState: string;
    catalyst: string;
    climaxShift: string;
    endingState: string;
  };
  relationships: CharacterRelationship[];
  expressions: string[];
  futureDevelopment: string;
}

export interface WorldBible {
  universeName: string;
  settingOverview: string;
  lore: string;
  magicOrTechSystem: string;
  timeline: { yearOrEra: string; event: string }[];
  locations: { name: string; description: string; significance: string }[];
  factionsOrPolitics: string;
  religionsOrBeliefs: string;
  architectureAndCulture: string;
  languagesAndIdioms: string[];
  rulesOfUniverse: string[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  synopsis: string;
  content: string;
  wordCount: number;
  illustrationBrief: {
    sceneDescription: string;
    visualFocus: string;
    midjourneyPrompt: string;
    dallePrompt: string;
  };
  readabilityScore: number;
  status: 'Draft' | 'Council Review' | 'Polished' | 'Approved';
}

export interface BookManuscript {
  title: string;
  subtitle: string;
  targetAge: AgeGroup;
  genre: BookGenre;
  theme: string;
  educationalGoals: string[];
  wordCountTotal: number;
  readingLevelGrade: string;
  synopsis: string;
  chapters: Chapter[];
}

export interface IllustrationGuide {
  styleGuideName: string;
  artStyleDescription: string;
  colorPalette: string[];
  characterSheets: {
    characterId: string;
    characterName: string;
    visualDNA: string;
    modelPrompt: string;
    imageUrl?: string;
  }[];
  scenePrompts: {
    sceneId: string;
    chapterNumber: number;
    description: string;
    midjourneyPrompt: string;
    imageUrl?: string;
  }[];
  coverBrief: {
    title: string;
    subtitle: string;
    coverArtPrompt: string;
    typographyStyle: string;
    coverImageUrl?: string;
  };
  storyboardGuides: {
    panelNumber: number;
    cameraAngle: string;
    actionDescription: string;
  }[];
}

export interface QualityScorecard {
  overallScore: number; // 0-100
  readabilityIndex: number;
  fleschKincaidScore: number;
  lexileEstimate: string;
  emotionalImpactScore: number;
  educationalScaffoldingScore: number;
  characterConsistencyScore: number;
  pacingScore: number;
  franchisePotential: number;
  grammarAlerts: string[];
  continuityAlerts: string[];
  marketReadiness: 'Drafting' | 'Good Progress' | 'Publish-Ready' | 'Masterpiece Standard';
}

export interface PublishingMetadata {
  kdpTitle: string;
  kdpSubtitle: string;
  authorName: string;
  penName: string;
  seriesName: string;
  seriesVolume: number;
  bisacCategories: string[];
  amazonKeywords: string[];
  bookDescriptionHtml: string;
  isbn: string;
  printFormat: {
    trimSize: '5x8' | '6x9' | '8.5x8.5' | '8.5x11';
    paperType: 'White' | 'Cream' | 'Premium Color';
    bleed: boolean;
    coverFinish: 'Matte' | 'Glossy';
  };
  priceUSD: number;
  estimatedRoyaltyPerSaleUSD: number;
}

export interface MarketingPack {
  amazonBlurb: string;
  tagline: string;
  socialPosts: { platform: string; caption: string; hashtags: string[] }[];
  emailCampaigns: { stage: string; subject: string; body: string }[];
  pressRelease: string;
  blogArticles: { title: string; outline: string }[];
  launchTimeline: { day: string; task: string }[];
}

export interface VideoNarrationPack {
  narrationVoice: string;
  sampleScriptText: string;
  storyboardPrompts: { timecode: string; visualPrompt: string; audioText: string }[];
  tiktokReelsScripts: { hook: string; script: string; visualNotes: string }[];
  trailerScript: string;
}

export interface MerchPack {
  tShirtPrompts: { title: string; designPrompt: string }[];
  mugPrompts: { title: string; designPrompt: string }[];
  activityPages: { title: string; type: 'coloring' | 'maze' | 'wordsearch' | 'puzzle'; promptOrText: string }[];
  printableTeacherGuide: string;
}

export interface AnalyticsSim {
  projectedSalesMonth1: number;
  projectedRoyaltiesMonth1USD: number;
  readThroughRatePercent: number;
  targetAudienceMatchPercent: number;
  mockReviews: { reviewerName: string; rating: number; reviewText: string; verifiedPurchase: boolean }[];
}

export interface PublishingProject {
  id: string;
  name: string;
  goal: string;
  targetAge: AgeGroup;
  genre: BookGenre;
  theme: string;
  mode: 'beginner' | 'professional';
  currentStep: number;
  status: 'In Research' | 'In Council Review' | 'Drafting' | 'Illustrating' | 'Formatting' | 'Publish Ready';
  createdAt: string;
  updatedAt: string;
  
  manuscript: BookManuscript;
  worldBible: WorldBible;
  characters: CharacterProfile[];
  illustrationGuide: IllustrationGuide;
  scorecard: QualityScorecard;
  publishingMetadata: PublishingMetadata;
  marketingPack: MarketingPack;
  videoPack: VideoNarrationPack;
  merchPack: MerchPack;
  analytics: AnalyticsSim;
  councilDebate: CouncilDebateEntry[];
}

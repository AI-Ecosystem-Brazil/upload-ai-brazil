export type SessionKind =
  | "palestra"
  | "painel"
  | "keynote"
  | "intervalo"
  | "momento"
  | "handson";

export type Period = "manha" | "tarde" | "noite";

export type Participant = {
  name: string;
  role: string;
  profileUrl?: string;
  org?: string;
};

export type Session = {
  time: string;
  period: Period;
  kind: SessionKind;
  title: string;
  description?: string;
  people?: Participant[];
  highlight?: boolean;
  badge?: string;
  tbd?: boolean;
};

export type Track = {
  id: string;
  name: string;
  description?: string;
  sessions: Session[];
};

export type Speaker = {
  name: string;
  role: string;
  activity: string;
  profileUrl?: string;
  photo?: string;
  featured?: boolean;
};

export type Supporter = { name: string; logo: string; light?: boolean };

export type Cfp = {
  requirement: string;
  formats: readonly string[];
  criteria?: readonly { label: string; score: string }[];
};

export type SponsorTier = {
  tier: string;
  slots: number;
  sponsors?: readonly Supporter[];
};

export type Edition = {
  slug: string;
  path: string;
  status: "upcoming" | "past";
  name: string;
  shortName: string;
  tagline: string;
  dateISO: string;
  endISO: string;
  dateLabel: string;
  timeLabel: string;
  venue: string;
  city: string;
  format: string;
  capacity?: string;
  organizer?: string;
  sealImage?: string;
  whatsappUrl?: string;
  rsvpUrl: string;
  downloadUrl?: string;
  agenda?: Session[];
  tracks?: Track[];
  speakers: Speaker[];
  supporters: Supporter[];
  supporterMentions?: readonly string[];
  cfp: Cfp;
  sponsorTiers: readonly SponsorTier[];
  venueInfo: { label: string; value: string }[];
  mapEmbedUrl?: string;
  mapAddress?: string;
};

export const KIND_LABEL: Record<SessionKind, string> = {
  palestra: "Palestra",
  painel: "Painel",
  keynote: "Keynote",
  intervalo: "Intervalo",
  momento: "Momento AI Brasil",
  handson: "Mão na massa",
};

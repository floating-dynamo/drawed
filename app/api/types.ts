interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface TopicSubmissions {
  [key: string]: { status: string; approved_on: string };
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: string | null;
}

interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Position {
  latitude: number;
  longitude: number;
}

interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

interface Meta {
  index: boolean;
}

interface Tag {
  type: string;
  title: string;
}

interface Sponsorship {
  impression_urls: string[];
  tagline: string;
  tagline_url: string;
  sponsor: User;
}

export interface GetRandomPhotoResponse {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: null | Sponsorship;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif | null;
  location: Location | null;
  meta: Meta;
  public_domain: boolean;
  tags: Tag[];
  views: number;
  downloads: number;
}

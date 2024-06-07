// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = RecentWorkSlice | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

type SettingsDocumentDataSlicesSlice = never;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;

  /**
   * CTA Button Label field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_button_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_button_label: prismic.KeyTextField;

  /**
   * CTA Button Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.cta_button_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_button_link: prismic.LinkField;

  /**
   * Slice Zone field in *Settings*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SettingsDocumentDataSlicesSlice> /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: settings.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: settings.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Item in *Social Icons → Icons*
 */
export interface SocialIconsDocumentDataIconsItem {
  /**
   * Social Icons field in *Social Icons → Icons*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[].social_icons
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social_icons: prismic.SelectField<"x" | "linkedin" | "email">;

  /**
   * Link field in *Social Icons → Icons*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type SocialIconsDocumentDataSlicesSlice = never;

/**
 * Content for Social Icons documents
 */
interface SocialIconsDocumentData {
  /**
   * Icons field in *Social Icons*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.icons[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  icons: prismic.GroupField<Simplify<SocialIconsDocumentDataIconsItem>>;

  /**
   * Slice Zone field in *Social Icons*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: social_icons.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SocialIconsDocumentDataSlicesSlice>;
}

/**
 * Social Icons document from Prismic
 *
 * - **API ID**: `social_icons`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SocialIconsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SocialIconsDocumentData>,
    "social_icons",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | SettingsDocument
  | SocialIconsDocument;

/**
 * Item in *Hero → Default → Primary → Client Images*
 */
export interface HeroSliceDefaultPrimaryClientImagesItem {
  /**
   * Client Image field in *Hero → Default → Primary → Client Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.client_images[].client_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  client_image: prismic.ImageField<never>;
}

/**
 * Item in *Hero → Default → Primary → Stars*
 */
export interface HeroSliceDefaultPrimaryStarsItem {
  /**
   * Star field in *Hero → Default → Primary → Stars*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.stars[].star
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  star: prismic.SelectField<"One" | "Two" | "Three" | "Four" | "Five">;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Headeline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  headeline: prismic.RichTextField;

  /**
   * Sub Headeline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.sub_headeline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sub_headeline: prismic.RichTextField;

  /**
   * Background Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Client Images field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.client_images[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  client_images: prismic.GroupField<
    Simplify<HeroSliceDefaultPrimaryClientImagesItem>
  >;

  /**
   * Stars field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.stars[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  stars: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryStarsItem>>;

  /**
   * Button Label field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Sub Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button_sub_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_sub_text: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *RecentWork → Default → Primary → Works*
 */
export interface RecentWorkSliceDefaultPrimaryWorksItem {
  /**
   * Image field in *RecentWork → Default → Primary → Works*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *RecentWork → Default → Primary → Works*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *RecentWork → Default → Primary*
 */
export interface RecentWorkSliceDefaultPrimary {
  /**
   * Works field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.works[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  works: prismic.GroupField<Simplify<RecentWorkSliceDefaultPrimaryWorksItem>>;

  /**
   * Show Primary Button field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: recent_work.default.primary.show_primary_button
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show_primary_button: prismic.BooleanField;

  /**
   * Button Label field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *RecentWork → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: recent_work.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for RecentWork Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentWorkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RecentWorkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RecentWork*
 */
type RecentWorkSliceVariation = RecentWorkSliceDefault;

/**
 * RecentWork Shared Slice
 *
 * - **API ID**: `recent_work`
 * - **Description**: RecentWork
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentWorkSlice = prismic.SharedSlice<
  "recent_work",
  RecentWorkSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      SettingsDocumentDataSlicesSlice,
      SocialIconsDocument,
      SocialIconsDocumentData,
      SocialIconsDocumentDataIconsItem,
      SocialIconsDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimaryClientImagesItem,
      HeroSliceDefaultPrimaryStarsItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      RecentWorkSlice,
      RecentWorkSliceDefaultPrimaryWorksItem,
      RecentWorkSliceDefaultPrimary,
      RecentWorkSliceVariation,
      RecentWorkSliceDefault,
    };
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
    twitterCardType: Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Attribute.DefaultTo<'summary'>;
    twitterUsername: Attribute.String;
  };
}

export interface SectionsVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    icon: 'play';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials group';
    icon: 'user-friends';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'links.link'>;
    logos: Attribute.Component<'elements.logos', true>;
    testimonials: Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsSocialAccounts extends Schema.Component {
  collectionName: 'components_sections_social_accounts';
  info: {
    displayName: 'SocialAccounts';
    description: '';
  };
  attributes: {
    Account: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'LinkedIn', 'Telegram', 'Youtube']
    > &
      Attribute.Required;
    Link: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface SectionsSlider extends Schema.Component {
  collectionName: 'components_sections_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    SlideLimit: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 20;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    SliderOffset: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    SideArticleLimit: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 3;
        },
        number
      > &
      Attribute.DefaultTo<2>;
    SideArticleOffset: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    FeaturedOnly: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
  };
  attributes: {
    title: Attribute.String;
    label: Attribute.String;
    description: Attribute.String;
    picture: Attribute.Media<'images'>;
    smallTextWithLink: Attribute.RichText;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsCityPriceList extends Schema.Component {
  collectionName: 'components_sections_city_price_lists';
  info: {
    displayName: 'City Price List';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    product: Attribute.Relation<
      'sections.city-price-list',
      'oneToOne',
      'api::product.product'
    >;
    date: Attribute.Date & Attribute.Required;
    priceType: Attribute.Enumeration<
      ['stockmarket', 'openmarket', 'tmo', 'all']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'stockmarket'>;
    approvalStatus: Attribute.Enumeration<
      ['editorOnly', 'userOnly', 'approved', 'all']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'editorOnly'>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsArticleSection extends Schema.Component {
  collectionName: 'components_sections_article_sections';
  info: {
    displayName: 'ArticleSection';
  };
  attributes: {
    ArticleLimit: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    ArticleOffset: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    FeaturedOnly: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    SectionTitle: Attribute.String;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    marked: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link', true>;
    logo: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    name: 'Footer';
    displayName: 'Footer';
    icon: 'caret-square-down';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    columns: Attribute.Component<'elements.footer-section', true>;
    smallText: Attribute.String;
    copyright: Attribute.String;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    picture: Attribute.Media<'images'>;
    text: Attribute.Text;
    authorName: Attribute.String;
    authorTitle: Attribute.String;
    link: Attribute.String;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    features: Attribute.Component<'elements.feature', true>;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
  };
  attributes: {
    text: Attribute.RichText;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    name: 'feature';
    displayName: 'Feature';
    icon: 'traffic-light';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.metadata': MetaMetadata;
      'sections.video-embed': SectionsVideoEmbed;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.social-accounts': SectionsSocialAccounts;
      'sections.slider': SectionsSlider;
      'sections.rich-text': SectionsRichText;
      'sections.pricing': SectionsPricing;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.hero': SectionsHero;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.city-price-list': SectionsCityPriceList;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.article-section': SectionsArticleSection;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'layout.navbar': LayoutNavbar;
      'layout.footer': LayoutFooter;
      'elements.testimonial': ElementsTestimonial;
      'elements.plan': ElementsPlan;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
    }
  }
}

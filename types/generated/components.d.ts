import type { Schema, Attribute } from '@strapi/strapi';

export interface AppPaper extends Schema.Component {
  collectionName: 'components_app_papers';
  info: {
    displayName: 'Paper';
    icon: 'feather';
  };
  attributes: {
    year: Attribute.Integer;
    semester: Attribute.Integer;
    remark: Attribute.String;
    subject: Attribute.Relation<
      'app.paper',
      'oneToOne',
      'api::subject.subject'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'app.paper': AppPaper;
    }
  }
}

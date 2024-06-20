// typings.d.ts
import 'owl.carousel';

declare global {
    interface JQuery {
        owlCarousel(options?: any): JQuery;
      }      
}

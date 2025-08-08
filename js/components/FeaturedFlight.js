// js/components/FeaturedFlight.js

export default class FeaturedFlight {
    constructor() {
      this.containerSelector = '#flight-featured .content-container';
    }
  
    async render() {
      // You can move these URLs/text into a JSON module if you prefer
      const flight = {
        id: 'flight',
        title: 'Project Flight',
        teaser: 'Follow the full restoration and transformation of “Flight,” from hull redesign to bespoke interior fit-outs—each section tells a new chapter of this epic boat-to-art journey.',
        image: './images/before-after.jpg',    // your before/after landing image
        link: 'flight.html'
      };
  
      return `
        <!-- Flight card -->
        <div class="animate-on-scroll delay-300 bg-background border border-border overflow-hidden">
          <div class="flex flex-col lg:flex-row">
            <!-- Landing image -->
            <div class="relative aspect-video w-full lg:w-1/2 bg-muted overflow-hidden">
              <img
                src="${flight.image}"
                alt="Project Flight Before & After"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <!-- Text & CTA -->
            <div class="p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center">
              <div class="space-y-6">
                <div>
                  <h3 class="text-3xl lg:text-4xl mb-4 tracking-tight">${flight.title}</h3>
                  <p class="text-muted-foreground leading-relaxed">
                    ${flight.teaser}
                  </p>
                </div>
                <button
                  id="flight-cta-btn"
                  class="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 tracking-wide transition-all duration-300 hover:shadow-lg"
                >
                  View Flight Story
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    bindEvents() {
      const btn = document.getElementById('flight-cta-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          window.location.href = 'flight.html';
        });
      }
    }
  }
  
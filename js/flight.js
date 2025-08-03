// js/flight.js

import { flightProject } from "./data/flight.js";

class FlightPage {
  constructor(project) {
    this.project = project;
    document.addEventListener("DOMContentLoaded", () => {
      this.renderLanding();
      this.renderSections();
    });
  }

  renderLanding() {
    document.getElementById("landing-img").src = this.project.landingImage;
    document.getElementById("project-title").textContent = this.project.title;
  }

  renderSections() {
    const container = document.getElementById("story-content");
    container.innerHTML = this.project.sections
      .map((sec) => `
      <section id="${sec.key}" class="space-y-8 animate-on-scroll">
        <h2 class="text-3xl font-semibold">${sec.title}</h2>

        <!-- Rich text HTML -->
        <div class="prose flight-content max-w-full text-muted-foreground">
          ${sec.contentHtml}
        </div>

        <!-- Project-style gallery -->
        <div class="max-w-5xl mx-auto">
          <!-- Main Image -->
          <div class="animate-on-scroll delay-300 mb-4">
            <div class="aspect-video overflow-hidden bg-muted">
              <img
                id="main-image-${sec.key}"
                src="${sec.images[0]}"
                alt="${sec.title}"
                class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <!-- Thumbnails -->
          <div class="animate-on-scroll delay-500">
            <div id="thumbs-${sec.key}" class="flex space-x-4 overflow-x-auto pb-4">
              ${sec.images
                .map((url, i) => `
                <button
                  class="thumbnail flex-shrink-0 aspect-video w-24 md:w-32 overflow-hidden bg-muted border-2 transition-all duration-300
                    ${i === 0 ? "border-orange-500" : "border-border hover:border-orange-300"}"
                  data-key="${sec.key}"
                  data-index="${i}"
                >
                  <img
                    src="${url}"
                    alt="${sec.title} Thumb ${i+1}"
                    class="w-full h-full object-cover"
                  />
                </button>
              `)
                .join("")}
            </div>
          </div>
        </div>
      </section>
    `)
      .join("");

    this.bindGalleryEvents();
    this.initScrollAnimations();
  }

  bindGalleryEvents() {
    document.querySelectorAll(".thumbnail").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const key = btn.dataset.key;
        const idx = parseInt(btn.dataset.index, 10);
        this.changeSectionImage(key, idx);
      });
    });
  }

  changeSectionImage(sectionKey, index) {
    const projectSection = this.project.sections.find((s) => s.key === sectionKey);
    if (!projectSection) return;

    // Update main image
    const mainImg = document.getElementById(`main-image-${sectionKey}`);
    mainImg.src = projectSection.images[index];

    // Update thumbnail borders
    document
      .querySelectorAll(`#thumbs-${sectionKey} .thumbnail`)
      .forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.remove("border-border", "hover:border-orange-300");
          thumb.classList.add("border-orange-500");
        } else {
          thumb.classList.remove("border-orange-500");
          thumb.classList.add("border-border", "hover:border-orange-300");
        }
      });
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
  }
}

new FlightPage(flightProject);

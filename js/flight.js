// js/flight.js

import { flightProject } from "./data/flight.js";

class FlightPage {
  constructor(project) {
    this.project = project;
    this.currentSectionKey = null;
    this.currentIndex = 0;
    this._touchStartX = 0;
    this._touchEndX = 0;

    document.addEventListener("DOMContentLoaded", () => {
      this.renderLanding();
      this.renderSections();
      this.initModalHandlers();
    });
  }

  renderLanding() {
    document.getElementById("landing-img").src = this.project.landingImage;
    document.getElementById("project-title").textContent = this.project.title;
  }

  renderSections() {
    const c = document.getElementById("story-content");
    c.innerHTML = this.project.sections
      .map(sec => `
      <section id="${sec.key}" class="space-y-8 animate-on-scroll">
        <h2 class="text-3xl font-semibold">${sec.title}</h2>
        <div class="prose flight-content text-muted-foreground">
          ${sec.contentHtml}
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- main -->
          <div class="animate-on-scroll delay-300 mb-4">
            <div class="aspect-video overflow-hidden bg-muted">
              <img
                id="main-image-${sec.key}"
                src="${sec.images[0]}"
                alt="${sec.title}"
                class="w-full h-full object-cover cursor-pointer"
                onclick="flightPage.openImageModal('${sec.key}',0)"
              />
            </div>
          </div>
          <!-- thumbs -->
          <div class="animate-on-scroll delay-500">
            <div id="thumbs-${sec.key}" class="flex space-x-4 overflow-x-auto pb-4">
              ${sec.images.map((url, i) => `
                <button
                  class="thumbnail flex-shrink-0 aspect-video w-24 md:w-32 overflow-hidden bg-muted border-2 ${i === 0 ? 'border-orange-500' : 'border-border hover:border-orange-300'}"
                  data-key="${sec.key}" data-index="${i}"
                >
                  <img src="${url}" alt="" class="w-full h-full object-cover" />
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      </section>
    `).join("");

    this.bindThumbnails();
    this.initScrollAnimations();
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  bindThumbnails() {
    document.querySelectorAll(".thumbnail").forEach(btn => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.key;
        const idx = +btn.dataset.index;
        this.changeSectionImage(key, idx);
      });
    });
  }

  changeSectionImage(sectionKey, index) {
    const sec = this.project.sections.find(s => s.key === sectionKey);
    if (!sec) return;

    // 1) Update the main image src
    const mainImg = document.getElementById(`main-image-${sectionKey}`);
    mainImg.src = sec.images[index];

    // 2) Reassign its onclick to open at the new index
    mainImg.onclick = () => this.openImageModal(sectionKey, index);

    // 3) Update thumbnail borders
    document.querySelectorAll(`#thumbs-${sectionKey} .thumbnail`)
      .forEach((thumb, i) => {
        thumb.classList.toggle("border-orange-500", i === index);
        thumb.classList.toggle("border-border", i !== index);
      });
  }


  /* ------ MODAL ------ */

  initModalHandlers() {
    const modal = document.getElementById("image-modal");
    const img = document.getElementById("modal-image");

    // Prevent click inside image from closing
    img.addEventListener("click", e => e.stopPropagation());

    // Swipe
    modal.addEventListener("touchstart", e => {
      this._touchStartX = e.changedTouches[0].screenX;
    });
    modal.addEventListener("touchmove", e => {
      this._touchEndX = e.changedTouches[0].screenX;
    });
    modal.addEventListener("touchend", () => {
      const dx = this._touchEndX - this._touchStartX;
      if (Math.abs(dx) > 50) {
        dx > 0 ? this.prevImageModal() : this.nextImageModal();
      }
    });

    // Re-init icons in modal
    if (typeof lucide !== "undefined") lucide.createIcons();
  }

  openImageModal(key, idx) {
    this.currentSectionKey = key;
    this.currentIndex = idx;
    const sec = this.project.sections.find(s => s.key === key);
    document.getElementById("modal-image").src = sec.images[idx];

    const m = document.getElementById("image-modal");
    m.classList.add("open");
  }

  closeImageModal() {
    document.getElementById("image-modal").classList.remove("open");
  }

  prevImageModal() {
    const sec = this.project.sections.find(s => s.key === this.currentSectionKey);
    this.currentIndex = (this.currentIndex - 1 + sec.images.length) % sec.images.length;
    document.getElementById("modal-image").src = sec.images[this.currentIndex];
  }

  nextImageModal() {
    const sec = this.project.sections.find(s => s.key === this.currentSectionKey);
    this.currentIndex = (this.currentIndex + 1) % sec.images.length;
    document.getElementById("modal-image").src = sec.images[this.currentIndex];
  }

  initScrollAnimations() {
    const obs = new IntersectionObserver((ents) => {
      ents.forEach(e => e.isIntersecting && e.target.classList.add("in-view"));
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".animate-on-scroll").forEach(el => obs.observe(el));
  }
}

window.flightPage = new FlightPage(flightProject);

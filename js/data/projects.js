// Project data structure
const projectsData = {
  marine: [
      {
          id: 'luxury-yacht-restoration',
          title: 'Luxury Yacht Restoration',
          category: 'marine',
          description: 'Complete restoration and modernization of a 45-foot luxury yacht, including engine overhaul, electrical system upgrade, and interior refurbishment. This project showcased our expertise in marine engineering and attention to detail in preserving the vessel\'s classic aesthetic while incorporating modern safety and navigation systems.',
          shortDescription: 'Complete restoration and modernization of luxury yacht systems',
          images: [
              'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '8 weeks',
          location: 'Southampton Marina, UK',
          year: '2024',
          client: 'Private Owner',
          tags: ['Engine Overhaul', 'Electrical Systems', 'Interior Restoration', 'Navigation Upgrade'],
          challenges: [
              'Working with limited dry dock time',
              'Preserving original craftsmanship details',
              'Integrating modern systems with classic design'
          ],
          solutions: [
              'Developed efficient workflow to maximize dock time usage',
              'Carefully documented and recreated original details',
              'Custom-designed integration solutions for seamless functionality'
          ],
          results: [
              'Vessel passed all maritime safety inspections',
              'Increased vessel value by 40%',
              'Client satisfaction rating: 5/5 stars'
          ],
          testimonial: {
              text: "Ben's expertise in marine engineering is exceptional. The yacht looks better than when I first bought it, and the modern systems work flawlessly with the classic design.",
              author: "James Morrison",
              position: "Yacht Owner"
          }
      },
      {
          id: 'sailing-boat-maintenance',
          title: 'Competition Sailing Boat Maintenance',
          category: 'marine',
          description: 'Comprehensive maintenance and performance optimization for a racing sailboat, including hull inspection, rigging overhaul, and aerodynamic improvements.',
          shortDescription: 'Performance optimization and maintenance for racing sailboat',
          images: [
              'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '4 weeks',
          location: 'Cowes, Isle of Wight',
          year: '2024',
          client: 'Racing Team Alpha',
          tags: ['Performance Tuning', 'Rigging', 'Hull Maintenance', 'Racing Optimization'],
          challenges: [
              'Tight competition schedule',
              'Need for performance improvements',
              'Weather-dependent work conditions'
          ],
          solutions: [
              'Flexible scheduling around weather windows',
              'Advanced materials for weight reduction',
              'Precision tuning for optimal performance'
          ],
          results: [
              'Improved lap times by 8%',
              'Zero mechanical failures in subsequent races',
              'Team achieved podium finish in championship'
          ]
      },
      {
          id: 'motor-boat-engine-upgrade',
          title: 'Motor Boat Engine Upgrade',
          category: 'marine',
          description: 'Complete engine replacement and electrical system upgrade for a commercial fishing vessel, improving fuel efficiency and reliability.',
          shortDescription: 'Engine replacement and electrical upgrade for commercial vessel',
          images: [
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '3 weeks',
          location: 'Portsmouth Harbor',
          year: '2023',
          client: 'Thames Fishing Co.',
          tags: ['Engine Replacement', 'Electrical Upgrade', 'Commercial Marine', 'Fuel Efficiency'],
          challenges: [
              'Minimizing vessel downtime',
              'Working within commercial fishing regulations',
              'Upgrading 30-year-old systems'
          ],
          solutions: [
              'Pre-fabricated components for quick installation',
              'Comprehensive regulatory compliance planning',
              'Phased upgrade approach'
          ],
          results: [
              '35% improvement in fuel efficiency',
              'Reduced maintenance costs by 50%',
              'Extended vessel operational life by 15 years'
          ]
      }
  ],
  property: [
      {
          id: 'victorian-home-renovation',
          title: 'Victorian Home Renovation',
          category: 'property',
          description: 'Complete structural renovation and modernization of a Victorian terrace house, preserving historical features while incorporating contemporary living standards and energy efficiency measures.',
          shortDescription: 'Complete structural renovation with modern engineering solutions',
          images: [
              'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1502005229762-cf1b2da8c5e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '12 weeks',
          location: 'Kensington, London',
          year: '2024',
          client: 'The Harrison Family',
          tags: ['Structural Engineering', 'Heritage Restoration', 'Modern Systems', 'Energy Efficiency'],
          challenges: [
              'Preserving original Victorian features',
              'Meeting modern building regulations',
              'Limited access in historic neighborhood'
          ],
          solutions: [
              'Careful documentation and restoration of period features',
              'Innovative engineering solutions for regulatory compliance',
              'Coordinated logistics for minimal neighborhood disruption'
          ],
          results: [
              'Achieved Grade A energy efficiency rating',
              'Increased property value by 60%',
              'Won local heritage restoration award'
          ],
          testimonial: {
              text: "Ben managed to perfectly blend our home's Victorian character with modern living requirements. The engineering work is invisible but transformative.",
              author: "Sarah Harrison",
              position: "Homeowner"
          }
      },
      {
          id: 'luxury-apartment-redesign',
          title: 'Luxury Apartment Redesign',
          category: 'property',
          description: 'High-end apartment renovation featuring custom engineering solutions for open-plan living and smart home integration.',
          shortDescription: 'High-end renovation with custom engineering solutions',
          images: [
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '8 weeks',
          location: 'Canary Wharf, London',
          year: '2024',
          client: 'Private Client',
          tags: ['Luxury Design', 'Smart Home', 'Open Plan', 'Custom Engineering'],
          challenges: [
              'Working in occupied building',
              'Complex smart home integration',
              'High-end finish requirements'
          ],
          solutions: [
              'Phased construction to minimize disruption',
              'Comprehensive system integration planning',
              'Premium materials and craftsmanship'
          ],
          results: [
              'Seamless smart home automation',
              '100% client satisfaction',
              'Featured in architectural magazine'
          ]
      },
      {
          id: 'commercial-office-renovation',
          title: 'Commercial Office Renovation',
          category: 'property',
          description: 'Large-scale office renovation incorporating sustainable materials and energy-efficient systems for a forward-thinking tech company.',
          shortDescription: 'Sustainable office renovation with energy-efficient systems',
          images: [
              'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '16 weeks',
          location: 'Shoreditch, London',
          year: '2023',
          client: 'TechForward Ltd.',
          tags: ['Commercial', 'Sustainability', 'Energy Efficiency', 'Modern Workspace'],
          challenges: [
              'Maintaining business operations during renovation',
              'Achieving sustainability targets',
              'Complex MEP systems integration'
          ],
          solutions: [
              'Phased renovation by floor',
              'Sustainable materials sourcing',
              'Advanced MEP design and coordination'
          ],
          results: [
              'BREEAM Excellent rating achieved',
              '45% reduction in energy consumption',
              'Improved employee satisfaction scores'
          ]
      }
  ],
  bespoke: [
      {
          id: 'piano-chest-transformation',
          title: 'Piano to Chest Transformation',
          category: 'bespoke',
          description: 'A heritage restoration project that transformed a beloved family piano into a stunning storage chest, preserving cherished memories while creating functional art for modern living. This project required delicate handling of sentimental materials and innovative design to maintain the piano\'s character.',
          shortDescription: 'Heritage restoration transforming memories into functional art',
          images: [
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1571889229208-a3013020293e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
          videoPoster: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          duration: '6 weeks',
          location: 'London, UK',
          year: '2024',
          client: 'The Williams Family',
          tags: ['Heritage Restoration', 'Custom Woodwork', 'Furniture Design', 'Sentimental Value'],
          challenges: [
              'Preserving sentimental value while creating functionality',
              'Working with aged wood and delicate piano components',
              'Maintaining the piano\'s aesthetic character'
          ],
          solutions: [
              'Careful documentation and preservation of key piano elements',
              'Custom joinery techniques for structural integrity',
              'Innovative storage solutions hidden within original form'
          ],
          results: [
              'Successfully transformed piano into functional storage',
              'Preserved all sentimental piano elements',
              'Created a unique family heirloom'
          ],
          testimonial: {
              text: "Ben understood the emotional significance of our family piano and created something beautiful that honors its memory while giving it new life in our home.",
              author: "Margaret Williams",
              position: "Family Matriarch"
          },
          featured: true
      },
      {
          id: 'dining-table-craftsmanship',
          title: 'Bespoke Dining Table',
          category: 'bespoke',
          description: 'Hand-crafted dining table from reclaimed oak, featuring intricate joinery and a live-edge design that celebrates the natural beauty of the wood.',
          shortDescription: 'Hand-crafted dining table from reclaimed oak with live-edge design',
          images: [
              'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '4 weeks',
          location: 'Workshop, London',
          year: '2024',
          client: 'Private Collector',
          tags: ['Reclaimed Wood', 'Live Edge', 'Traditional Joinery', 'Sustainable Design'],
          challenges: [
              'Working with irregular reclaimed wood',
              'Achieving structural stability with live edge',
              'Matching client\'s specific dimensional requirements'
          ],
          solutions: [
              'Careful wood selection and preparation',
              'Custom steel reinforcement system',
              'Precise measurement and adjustment techniques'
          ],
          results: [
              'Created a stunning centerpiece for client\'s home',
              'Zero waste production using all wood material',
              'Received commission for matching chairs'
          ]
      },
      {
          id: 'custom-wardrobe-system',
          title: 'Custom Wardrobe System',
          category: 'bespoke',
          description: 'Bespoke fitted wardrobe system designed to maximize storage in a period property while respecting the room\'s original proportions and character.',
          shortDescription: 'Fitted wardrobe system maximizing storage in period property',
          images: [
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '3 weeks',
          location: 'Richmond, London',
          year: '2024',
          client: 'Modern Heritage Homes',
          tags: ['Fitted Furniture', 'Storage Solutions', 'Period Property', 'Custom Design'],
          challenges: [
              'Uneven period property walls',
              'Maximizing storage in limited space',
              'Maintaining room\'s historical character'
          ],
          solutions: [
              'Custom scribing techniques for perfect fit',
              'Innovative storage solutions and organization',
              'Period-appropriate design elements'
          ],
          results: [
              'Doubled available storage space',
              'Seamless integration with room architecture',
              'Client referral for additional projects'
          ]
      },
      {
          id: 'antique-restoration-project',
          title: 'Antique Furniture Restoration',
          category: 'bespoke',
          description: 'Comprehensive restoration of a Victorian writing desk, including structural repairs, French polishing, and period-accurate hardware replacement.',
          shortDescription: 'Victorian writing desk restoration with period-accurate details',
          images: [
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
          ],
          duration: '5 weeks',
          location: 'Restoration Workshop',
          year: '2023',
          client: 'Antique Collectors Ltd.',
          tags: ['Antique Restoration', 'French Polishing', 'Period Hardware', 'Structural Repair'],
          challenges: [
              'Extensive woodworm damage',
              'Missing original hardware',
              'Matching period finish techniques'
          ],
          solutions: [
              'Specialized woodworm treatment and repair',
              'Custom reproduction of missing hardware',
              'Traditional French polishing techniques'
          ],
          results: [
              'Restored desk to museum quality',
              'Increased antique value by 200%',
              'Established ongoing restoration partnership'
          ]
      }
  ]
};

// Helper functions for data access
function getAllProjects() {
  return [...projectsData.marine, ...projectsData.property, ...projectsData.bespoke];
}

function getProjectById(id) {
  return getAllProjects().find(project => project.id === id);
}

function getProjectsByCategory(category) {
  return projectsData[category] || [];
}

function getFeaturedProject() {
  return getAllProjects().find(project => project.featured);
}

function getProjectCategory(projectId) {
  const project = getProjectById(projectId);
  return project ? project.category : undefined;
}

// Export to global scope
window.projectsData = projectsData;
window.getAllProjects = getAllProjects;
window.getProjectById = getProjectById;
window.getProjectsByCategory = getProjectsByCategory;
window.getFeaturedProject = getFeaturedProject;
window.getProjectCategory = getProjectCategory;
# Design Document

## Overview

This design outlines how to add images to the existing construction company website by placing them in strategic locations throughout the site. The approach will follow the existing patterns already established in the codebase, using the same import and styling methods as the current hero image.

## Architecture

The image integration will follow the existing React/TypeScript architecture:
- Images stored in `src/assets/` directory
- Import images at the top of components using ES6 imports
- Use images as `src` attributes in `<img>` tags or CSS background images
- Maintain existing responsive design patterns with Tailwind CSS

## Components and Interfaces

### Image Organization Structure
```
src/assets/
├── hero-construction.jpg (existing)
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
├── services/
│   ├── geosynthetic.jpg
│   ├── civil-construction.jpg
│   ├── plastic-welding.jpg
│   ├── waterproofing.jpg
│   └── landscaping.jpg
└── about/
    └── team-photo.jpg
```

### Image Integration Points

1. **Homepage (Index.tsx)**
   - Featured Projects section: Add project images to the existing project cards
   - Services section: Add service-specific images to service cards
   - About preview section: Add team or company image

2. **Projects Page**
   - Add project gallery images for each project
   - Use existing card layout with image headers

3. **Services Page**
   - Add service-specific images to enhance service descriptions
   - Maintain existing layout structure

4. **About Page**
   - Add team photos, office images, or equipment photos

## Data Models

### Image Import Pattern
```typescript
// Follow existing pattern from Index.tsx
import heroImage from "@/assets/hero-construction.jpg";
import project1Image from "@/assets/projects/project-1.jpg";
import geosynthetic from "@/assets/services/geosynthetic.jpg";
```

### Image Usage Pattern
```typescript
// For background images (like hero)
<div 
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${heroImage})` }}
/>

// For regular images
<img 
  src={project1Image} 
  alt="Project description"
  className="w-full h-48 object-cover rounded-lg"
/>
```

## Error Handling

- Use proper `alt` attributes for accessibility
- Implement fallback behavior if images fail to load
- Maintain existing responsive design patterns
- Ensure images don't break existing layouts

## Testing Strategy

- Visual testing to ensure images display correctly across different screen sizes
- Verify that existing functionality remains intact
- Test image loading performance
- Validate that responsive design still works properly

## Implementation Approach

1. **Phase 1**: Add project images to homepage featured projects section
2. **Phase 2**: Add service images to services section on homepage
3. **Phase 3**: Enhance other pages (Projects, Services, About) with relevant images
4. **Phase 4**: Add any additional images for visual enhancement

The implementation will be incremental, adding images section by section while maintaining the existing design and functionality.
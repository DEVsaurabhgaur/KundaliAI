/**
 * Vedic Career Profiler
 * Identifies optimal vocations based on 10th house sign and 10th lord placement.
 */

export interface CareerPath {
  domain: string;
  recommendedFields: string[];
  growthPace: 'Rapid' | 'Steady' | 'Transformational';
}

export function profileCareer(tenthLord: string): CareerPath {
  switch (tenthLord) {
    case 'Sun':
      return { domain: 'Public Leadership & Administration', recommendedFields: ['Civil Services', 'CEO / Executive Board', 'Medicine (Surgery)', 'Political Strategy'], growthPace: 'Rapid' };
    case 'Mercury':
      return { domain: 'Analytics, Tech & Media', recommendedFields: ['Software Engineering', 'Fintech', 'Journalism / PR', 'E-commerce Management'], growthPace: 'Rapid' };
    case 'Jupiter':
      return { domain: 'Advisory, Law & Academia', recommendedFields: ['Judiciary', 'Wealth Management', 'Higher University Research', 'Spiritual Guidance'], growthPace: 'Steady' };
    case 'Mars':
      return { domain: 'Engineering, Defense & Real Estate', recommendedFields: ['Civil / Mechanical Engineering', 'Armed Forces', 'Property Development', 'Sports Science'], growthPace: 'Transformational' };
    case 'Venus':
      return { domain: 'Creative Industries & Luxury Commerce', recommendedFields: ['Architecture & UI/UX Design', 'Fashion / Film', 'Hospitality Management', 'Fine Arts'], growthPace: 'Steady' };
    case 'Saturn':
      return { domain: 'Infrastructure, Industry & Governance', recommendedFields: ['Mining / Heavy Machinery', 'Civil Infrastructure', 'Labor Relations', 'Renewable Energy'], growthPace: 'Steady' };
    default:
      return { domain: 'Universal Entrepreneurship', recommendedFields: ['Consulting', 'International Trade'], growthPace: 'Steady' };
  }
}

import { IMG } from '../utils/unsplash';
import type { Trade } from './services';

export interface Project {
  slug: string;
  title: string;
  city: string;
  trade: Trade;
  cover: string;
  before: string;
  after: string;
  scope: string;
  materials: string[];
  duration: string;
}

export const projects: Project[] = [
  {
    slug: 'tarrytown-full-repaint',
    title: 'Tarrytown 1940s Bungalow — Full Exterior Repaint',
    city: 'Austin', trade: 'painting',
    cover: IMG.exteriorHome, before: IMG.house2, after: IMG.exteriorHome,
    scope: 'Full exterior strip and repaint of a 1940s Tarrytown bungalow. Lead-safe scraping, wood rot replacement on three window sills, all trim re-caulked, two coats of Sherwin-Williams Duration in Repose Gray with Snowbound trim.',
    materials: ['Sherwin-Williams Duration', 'Sashco Big Stretch caulk', 'EPA Lead-Safe protocols'],
    duration: '6 days',
  },
  {
    slug: 'lakeway-standing-seam',
    title: 'Lakeway Hillside — Standing-Seam Metal Roof',
    city: 'Lakeway', trade: 'roofing',
    cover: IMG.modernHouse, before: IMG.house3, after: IMG.modernHouse,
    scope: 'Tear-off of failing 22-year asphalt and install of new standing-seam Kynar 500 in Matte Black with hidden fasteners. Full ice-and-water shield, ridge vent, custom flashing around two chimneys.',
    materials: ['Kynar 500 Matte Black', '24ga Galvalume substrate', 'GAF Tiger Paw underlayment'],
    duration: '4 days',
  },
  {
    slug: 'cedar-park-hardie-reside',
    title: 'Cedar Park HOA — Full Hardie Re-Side',
    city: 'Cedar Park', trade: 'siding',
    cover: IMG.siding, before: IMG.homeFar, after: IMG.siding,
    scope: 'Removal of original LP composite siding and full re-side in James Hardie HZ10 ColorPlus in Iron Gray with Arctic White trim. Includes new flashing, wraps, and Hardie soffit panels matching the HOA palette.',
    materials: ['James Hardie HZ10 ColorPlus', 'Tyvek HomeWrap', 'Hardie 4/4 trim'],
    duration: '9 days',
  },
  {
    slug: 'round-rock-storm-roof',
    title: 'Round Rock — Hail Claim Roof Replacement',
    city: 'Round Rock', trade: 'roofing',
    cover: IMG.crew, before: IMG.homeExterior, after: IMG.crew,
    scope: 'May hail event totaled the existing roof. We met the adjuster, supplemented for code upgrades, and replaced with Class 4 impact-resistant GAF Timberline AS II in Slate. Insurance covered everything but the deductible.',
    materials: ['GAF Timberline AS II Class 4', 'GAF Pro-Start starter', 'Cobra ridge vent'],
    duration: '2 days',
  },
  {
    slug: 'mueller-interior-repaint',
    title: 'Mueller Modern — Full Interior Repaint',
    city: 'Austin', trade: 'painting',
    cover: IMG.interiorPaint, before: IMG.interior, after: IMG.interiorPaint,
    scope: 'Whole-home interior repaint of a Mueller modern build. 14 rooms, all ceilings, all trim and doors, and refinished kitchen cabinetry. Benjamin Moore Regal Select in Pale Oak throughout, accent walls in Hale Navy.',
    materials: ['Benjamin Moore Regal Select', 'BM Advance for cabinets', 'Low-VOC throughout'],
    duration: '8 days',
  },
  {
    slug: 'georgetown-commercial-repaint',
    title: 'Georgetown Office Park — After-Hours Repaint',
    city: 'Georgetown', trade: 'painting',
    cover: IMG.commercial, before: IMG.building, after: IMG.commercial,
    scope: 'Repaint of three-building office park while tenants stayed open. Weekend and overnight crews, $2M COI on file, all exterior trim, stucco, and tenant signage refreshed in approved property colors.',
    materials: ['Sherwin-Williams Loxon XP', 'Industrial-grade enamel trim', 'OSHA-compliant lift'],
    duration: '11 nights',
  },
];

export const projectsByTrade = (t: Trade) => projects.filter(p => p.trade === t);

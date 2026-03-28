# Industry Context: Hospitality & Events

## What This Industry Does

Hospitality and events encompasses hotel management, restaurant operations, event planning, venue management, catering, and guest experience design. The industry runs on razor-thin margins (hotels average 30-35% GOP, restaurants 3-9% net profit), high labor intensity, and perishable inventory — an unsold hotel room tonight or an empty restaurant seat at 7pm is revenue gone forever.

Practitioners include hotel general managers, revenue managers, directors of sales, event coordinators, catering managers, executive chefs, F&B directors, restaurant owners, banquet captains, and front office managers.

The industry is split between asset-heavy operators (own the building), management companies (operate for owners), and franchise models (brand standards + local operation). Events cross-cut all segments — a hotel ballroom hosts corporate galas, a restaurant runs private dining, a standalone venue manages weddings.

## Key Tools & Platforms

### Property Management & Operations
- **Opera PMS (Oracle Hospitality)** — Dominant hotel PMS globally. Manages reservations, guest profiles, room inventory, housekeeping, and billing. The system of record for most full-service hotels.
- **Mews** — Cloud-native PMS gaining traction with independent and boutique hotels. API-first architecture integrates cleanly with modern revenue tools.
- **Cloudbeds** — All-in-one PMS, channel manager, and booking engine for independent properties. Popular with boutique hotels and hostels.
- **ALICE (Actabl)** — Hotel operations platform covering housekeeping task management, maintenance requests, and guest messaging.

### Revenue Management
- **IDeaS (SAS)** — Market-leading revenue management system (RMS). Uses machine learning for automated pricing decisions across room types, channels, and stay dates.
- **Duetto** — Cloud-based RMS with open pricing (prices each segment, channel, and room type independently rather than using BAR tiers). Strong with casino and resort properties.
- **RMS (Revenue Management Solutions)** — RMS for smaller and mid-market properties. Less complex than IDeaS, more accessible for properties without dedicated revenue managers.
- **STR (CoStar)** — Benchmarking data provider. Delivers comp set reports showing RevPAR, ADR, and occupancy relative to competing hotels. The standard source of truth for hotel performance measurement.

### Event Management
- **Tripleseat** — Event management and catering CRM. Manages leads, BEOs (Banquet Event Orders), contracts, and event P&L. Dominant in hotel banquets and restaurant private dining.
- **Social Tables (Cvent)** — Event diagramming and floor plan software. Creates to-scale room layouts with table configurations, dance floors, stages, and AV placement.
- **Cvent** — Enterprise event management platform. Handles registration, attendee management, venue sourcing (Cvent Supplier Network), and post-event surveys.
- **Eventbrite** — Ticketed event platform for public events. Registration, promotion, and check-in.

### Restaurant & F&B Technology
- **Toast POS** — Cloud-based restaurant POS with integrated payments, online ordering, kitchen display, and payroll. Market leader for US restaurants.
- **Square for Restaurants** — POS with strong small-restaurant and counter-service adoption. Free tier available.
- **OpenTable / Resy / SevenRooms** — Reservation management platforms. SevenRooms adds CRM, marketing automation, and guest data ownership (vs. OpenTable's marketplace model where OpenTable owns the guest relationship).
- **Aloha POS (NCR)** — Legacy but still widely deployed POS in full-service restaurants and hotels. Stable but aging.
- **Lightspeed** — POS with strong inventory management. Popular in food halls and multi-concept operations.
- **MarketMan / BlueCart** — Inventory management and purchasing platforms for F&B operations. Track food cost, manage vendor orders, reduce waste.

### Labor & Scheduling
- **HotSchedules (Fourth)** — Industry-standard scheduling platform for hospitality. Handles shift swaps, labor forecasting, and compliance tracking.
- **7shifts** — Restaurant-focused scheduling with labor cost optimization, team communication, and tip pooling management.
- **ADP / Paychex** — Payroll providers with hospitality-specific modules for tip reporting, split shifts, and multi-location management.

## Key Frameworks & Methodologies

### Revenue Management
- **RevPAR (Revenue Per Available Room)** — The core hotel performance metric. Calculated as ADR x Occupancy Rate, or Total Room Revenue / Total Available Rooms. Allows comparison across different-sized properties.
- **ADR (Average Daily Rate)** — Average price paid per occupied room. ADR alone is misleading without occupancy context.
- **Occupancy Rate** — Rooms sold / rooms available. High occupancy with low ADR means you're filling rooms but leaving money on the table.
- **GOPPAR (Gross Operating Profit Per Available Room)** — The metric that actually matters for owners. Captures total revenue minus operating expenses, divided by available rooms. A hotel can have great RevPAR but terrible GOPPAR if costs are out of control.
- **Yield Management** — Adjusting prices based on predicted demand. Originated in airlines, adopted by hotels. Core principle: sell the right room to the right customer at the right price at the right time through the right channel.
- **BAR (Best Available Rate)** — The lowest unrestricted rate available to the public. Rate fences (advance purchase, non-refundable, length-of-stay restrictions) create tiers below and above BAR.
- **Comp Set Analysis** — Comparing performance against 5-7 directly competing hotels using STR data. RevPAR Index (RPI) above 100 means outperforming the comp set; below 100 means underperforming.

### Food & Beverage
- **Menu Engineering Matrix** — Classifies menu items on two axes (popularity and profitability):
  - **Stars** — High popularity, high profit margin. Promote heavily, protect recipe costs.
  - **Plowhorses** — High popularity, low profit margin. Reengineer recipes to improve margin or raise prices carefully.
  - **Puzzles** — Low popularity, high profit margin. Improve visibility (menu placement, server recommendations) or rename/redesign.
  - **Dogs** — Low popularity, low profit margin. Remove from menu or reprice dramatically.
- **Food Cost Percentage** — Cost of ingredients / menu price. Target varies by segment: fine dining 28-32%, casual 30-35%, fast casual 25-30%. Anything above 35% signals pricing or waste problems.
- **Pour Cost** — Beverage cost of goods / beverage revenue. Target: 18-24% for spirits, 20-28% for beer, 30-40% for wine.
- **Prime Cost** — Food cost + beverage cost + labor cost. Should not exceed 60-65% of total revenue. If prime cost is above 65%, the restaurant is structurally unprofitable.
- **HACCP (Hazard Analysis Critical Control Points)** — Systematic food safety framework. Identifies biological, chemical, and physical hazards at each step of food handling. Required for large-scale catering and institutional food service.

### Event Management
- **BEO (Banquet Event Order)** — The master document for event execution. Specifies setup, timing, menu, AV, staffing, and special requests. Every department works from the BEO.
- **Event P&L** — Revenue (room rental, F&B minimums, AV charges, service fees) minus direct costs (food, labor, rentals, entertainment). Target contribution margin: 35-45% for hotel banquets.
- **Guarantee Count** — Final confirmed attendance submitted by the client (typically 72 hours before the event). The hotel prepares food for guarantee + 5% overset. Client pays for the guarantee regardless of actual attendance.
- **Attrition Clause** — Contractual allowance for a group to reduce their room block or event count by a percentage (typically 10-20%) without penalty. Beyond the attrition threshold, the group pays for unused inventory.
- **Turnover / Flip Time** — Time between one event ending and the next beginning. Includes teardown, cleaning, and reset. A 45-minute flip is aggressive; 90 minutes is standard.

### Guest Experience
- **Guest Journey Mapping** — Tracking every touchpoint from booking through post-stay. Identifies friction points and upsell opportunities at each stage: research, booking, pre-arrival, arrival, stay, departure, post-stay.
- **SALT Score / Guest Satisfaction** — Survey-based quality metric. Major brands have proprietary systems (Marriott SALT, Hilton SALT). Scores directly affect management company performance bonuses.
- **NPS (Net Promoter Score)** — "Would you recommend us?" on 0-10 scale. Promoters (9-10) minus Detractors (0-6) = NPS. Hotel industry average: 30-40. Luxury: 60+.
- **Guest Recovery** — The protocol for resolving complaints. Speed and empowerment matter: a front desk agent authorized to comp a night immediately recovers more guests than one who has to "check with a manager."

## Regulations & Compliance

- **Health Department Food Safety Codes** — Local health department inspections for all food handling operations. Violations can result in immediate closure. Critical violations include improper food temperatures, cross-contamination, and pest evidence.
- **Liquor Licensing (ABC)** — State Alcoholic Beverage Control boards regulate alcohol service. License types vary (beer/wine vs. full liquor, on-premise vs. off-premise). License transfer during property sales is complex and time-sensitive.
- **ADA Compliance (Events)** — Americans with Disabilities Act requires accessible event venues: wheelchair access, assistive listening, sign language interpretation on request, accessible restrooms, and service animal accommodation.
- **Fire Marshal Occupancy Limits** — Maximum occupancy posted for every event space. Violations carry severe penalties and personal liability for the event manager. Occupancy is set by room configuration — standing reception has different limits than seated banquet.
- **TIPS / ServSafe Certification** — TIPS (Training for Intervention Procedures) for responsible alcohol service. ServSafe Manager certification for food safety knowledge. Many jurisdictions require at least one certified manager on-site during food service.
- **Labor Laws** — Hospitality-specific considerations: split shift premiums (California), tip pooling rules (FLSA), overtime calculations for tipped employees, predictive scheduling laws (Oregon, NYC, Chicago), minor labor restrictions.
- **Food Allergen Labeling (FALCPA)** — Federal law requires disclosure of major allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, sesame). Applies to packaged foods; best practice extends to restaurant menus and catering.
- **Local Noise Ordinances** — Event venues must comply with municipal noise limits, especially for outdoor events. Violations result in fines and potential permit revocation.
- **Hotel Occupancy Tax (HOT)** — State and local taxes on hotel room revenue. Rates range from 6-17% depending on jurisdiction. Must be collected, reported, and remitted correctly.
- **Event Permits** — Large events require permits from multiple agencies: fire department (pyrotechnics, tent permits), health department (temporary food service), police (traffic control, security), and sometimes parks/public works for outdoor events.

## Common Terminology

| Term | Meaning |
|------|---------|
| **RevPAR** | Revenue Per Available Room — the core hotel performance metric (ADR x Occupancy) |
| **ADR** | Average Daily Rate — average price per occupied room |
| **Occupancy Rate** | Percentage of available rooms sold |
| **Comp Set** | Competitive set — the 5-7 hotels used for benchmarking comparison |
| **GOPPAR** | Gross Operating Profit Per Available Room — profitability metric preferred by owners |
| **Rack Rate** | Published maximum rate — rarely charged, serves as ceiling for discounting |
| **BAR** | Best Available Rate — lowest unrestricted public rate |
| **OTA** | Online Travel Agency (Expedia, Booking.com, Hotels.com) — commission-based distribution |
| **Direct Booking** | Reservation made through hotel's own website or call center — no commission |
| **Channel Manager** | Software that synchronizes rates and availability across all distribution channels |
| **BEO** | Banquet Event Order — the master execution document for any event |
| **Guarantee Count** | Final confirmed attendance number — client pays for this regardless of actual turnout |
| **Attrition** | Contractual allowance for a group to reduce their block without penalty |
| **Room Block** | Rooms reserved at a negotiated rate for a group or event |
| **F&B Minimum** | Minimum food and beverage spending required to book an event space |
| **Cover** | One seated guest in a restaurant — "we did 180 covers tonight" |
| **Turn Time** | Time to clear, reset, and reseat a restaurant table or event space |
| **Food Cost %** | Cost of ingredients as a percentage of menu price |
| **Pour Cost** | Beverage cost of goods as a percentage of beverage revenue |
| **Prime Cost** | Food cost + beverage cost + labor cost — should not exceed 60-65% of revenue |
| **Labor %** | Labor cost as a percentage of total revenue — target 25-35% depending on segment |
| **Mise en Place** | "Everything in its place" — kitchen prep and organization before service |
| **86'd** | Item is unavailable — out of stock or removed from service |
| **Comp** | Complimentary item or service provided at no charge (guest recovery, VIP) |
| **Guest Recovery** | Process of resolving a guest complaint and restoring satisfaction |
| **SALT Score** | Brand-specific guest satisfaction metric used by major hotel chains |
| **NPS** | Net Promoter Score — likelihood to recommend, industry benchmark 30-40 |
| **Walk** | Relocating a guest with a confirmed reservation to another hotel due to overbooking |
| **RevPAR Index (RPI)** | Hotel's RevPAR divided by comp set RevPAR x 100 — above 100 = outperforming |

## Common Mistakes in This Field

1. **Overestimating event attendance** — Planning for expected attendance instead of guaranteed count. When 400 people RSVP but only 320 show, the client still pays for 400 plates. Not enforcing guarantee count procedures wastes food and labor.
2. **Static pricing in a dynamic market** — Setting room rates seasonally and forgetting them. Demand fluctuates daily based on events, weather, competitor closures, and booking pace. Without dynamic pricing (or at minimum weekly rate reviews), revenue is left on the table during high demand and rooms go unsold during low demand.
3. **Understaffing based on averages** — Scheduling staff for average covers instead of forecasted peak demand. Tuesday at 6pm and Saturday at 7pm are completely different animals. Labor models must be built on historical demand curves by day-of-week and daypart, not monthly averages.
4. **Ignoring food cost variance** — Setting menu prices based on recipe cost but never auditing actual food cost. Portion drift, waste, theft, and vendor price increases erode margins silently. Weekly food cost variance reports are non-negotiable.
5. **Failing to track comp set performance** — Operating in a vacuum without STR data. A hotel celebrating 5% RevPAR growth while the comp set grew 12% is actually losing market share. Relative performance matters more than absolute numbers.
6. **Not cross-training staff** — Single-skilled employees create operational fragility. When your only bartender calls out sick on a Friday, the bar closes. Cross-training servers to bartend, hosts to serve, and cooks to prep different stations builds resilience.
7. **Ignoring online reputation management** — Not responding to TripAdvisor, Google, and OTA reviews. 87% of travelers read reviews before booking. A pattern of unanswered negative reviews signals management indifference. Response rate and quality directly impact booking conversion.
8. **Menu too large** — Offering 60+ items creates inventory waste, slows kitchen execution, overwhelms guests (paradox of choice), and makes quality control impossible. The most profitable restaurants have focused menus of 20-35 items with high ingredient overlap.
9. **Not accounting for setup/teardown in scheduling** — Booking back-to-back events without adequate flip time. A 200-person lunch ending at 2pm and a 300-person dinner starting at 6pm requires at minimum 2 hours for teardown, reset, and re-staging — leaving only 2 hours of buffer for delays, deep cleaning, and linen changes.
10. **Failing to upsell ancillary revenue** — Focusing exclusively on room rate or event rental while ignoring high-margin ancillary revenue: parking, AV equipment, room upgrades, spa services, F&B packages, late checkout, and experience add-ons. Ancillary revenue can add 15-30% to total guest spend.

## Excellent vs. Dangerous Work

### Excellent Work Looks Like
- Revenue recommendations backed by comp set data, demand forecasting, and channel cost analysis — not gut feel or "we always charge this"
- Event plans that account for fire code, allergen management, contingency budgets, and realistic setup timelines
- Menu engineering decisions driven by the Stars/Plowhorses/Puzzles/Dogs matrix with actual sales mix and food cost data
- Staffing models built on historical demand curves with cross-training depth charts
- Guest experience strategies that map the full journey and quantify friction points with data (SALT scores, NPS, review sentiment)

### Dangerous Work Looks Like
- Setting rates without checking comp set performance or demand forecasts
- Planning events that exceed fire marshal occupancy limits
- Serving food without allergen protocols to 400+ guests
- Staffing a black-tie plated dinner at 1:25 server ratio when industry standard is 1:10
- Accepting 0% contingency budgets for large-scale events
- Ignoring attrition clause enforcement and absorbing $100K+ in annual losses
- Reporting gross OTA revenue as profit without netting commissions

## Professional Certifications

| Certification | Issuing Body | Focus |
|---|---|---|
| **CHA** (Certified Hotel Administrator) | AHLEI | Comprehensive hotel operations and management |
| **CRME** (Certified Revenue Management Executive) | HSMAI | Revenue management strategy and analytics |
| **CHAE** (Certified Hospitality Accounting Executive) | HFTP | Hospitality finance and accounting |
| **CMP** (Certified Meeting Professional) | EIC (Events Industry Council) | Meeting and event planning |
| **CPCE** (Certified Professional in Catering and Events) | NACE | Catering operations and event execution |
| **ServSafe Manager** | National Restaurant Association | Food safety management |
| **TIPS** | Health Communications, Inc. | Responsible alcohol service |
| **Court of Master Sommeliers** | CMS | Wine knowledge and service (4 levels) |
| **Cicerone** | Cicerone Certification Program | Beer knowledge and service (4 levels) |
| **CHT** (Certified Hospitality Trainer) | AHLEI | Hospitality training and development |
| **CHDM** (Certified Hospitality Digital Marketer) | HSMAI | Digital marketing for hospitality |

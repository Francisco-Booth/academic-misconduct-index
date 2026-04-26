export interface Country {
  iso2: string;
  name: string;
  region: string;
  p_score: number;
  r_score: number;
  quadrant: string;
  quadrant_name: string;
  d1_contract_cheating: number;
  d2_ai_submissions: number;
  d3_impersonation: number;
  d4_plagiarism: number;
  d5_collusion: number;
  d6_data_fabrication: number;
  r_legislation: number;
  r_detection_tools: number;
  r_disclosure: number;
  r_penalties: number;
  live_dimensions: number;
  data_quality: string;
}

export const COUNTRIES: Country[] = [
  { iso2:"CN", name:"China",          region:"Asia",          p_score:100.0, r_score:23.8, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:58, d2_ai_submissions:68, d3_impersonation:20,  d4_plagiarism:73, d5_collusion:62, d6_data_fabrication:85, r_legislation:20, r_detection_tools:45, r_disclosure:10, r_penalties:20, live_dimensions:3, data_quality:"B" },
  { iso2:"GR", name:"Greece",         region:"Europe",        p_score:68.9,  r_score:20.0, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:48, d2_ai_submissions:38, d3_impersonation:10,  d4_plagiarism:60, d5_collusion:45, d6_data_fabrication:35, r_legislation:10, r_detection_tools:30, r_disclosure:15, r_penalties:25, live_dimensions:3, data_quality:"A" },
  { iso2:"EG", name:"Egypt",          region:"Middle East",   p_score:58.7,  r_score:13.8, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:55, d2_ai_submissions:48, d3_impersonation:20,  d4_plagiarism:68, d5_collusion:45, d6_data_fabrication:60, r_legislation:10, r_detection_tools:20, r_disclosure:10, r_penalties:15, live_dimensions:3, data_quality:"A" },
  { iso2:"SE", name:"Sweden",         region:"Europe",        p_score:53.1,  r_score:45.0, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:29, d2_ai_submissions:26, d3_impersonation:10,  d4_plagiarism:30, d5_collusion:45, d6_data_fabrication:15, r_legislation:20, r_detection_tools:60, r_disclosure:50, r_penalties:50, live_dimensions:3, data_quality:"A" },
  { iso2:"SA", name:"Saudi Arabia",   region:"Middle East",   p_score:52.8,  r_score:17.5, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:52, d2_ai_submissions:48, d3_impersonation:18,  d4_plagiarism:60, d5_collusion:45, d6_data_fabrication:45, r_legislation:10, r_detection_tools:30, r_disclosure:10, r_penalties:20, live_dimensions:3, data_quality:"A" },
  { iso2:"US", name:"United States",  region:"North America", p_score:52.5,  r_score:51.2, quadrant:"Q2", quadrant_name:"Aware and fighting it", d1_contract_cheating:40, d2_ai_submissions:48, d3_impersonation:10,  d4_plagiarism:36, d5_collusion:54, d6_data_fabrication:30, r_legislation:30, r_detection_tools:80, r_disclosure:40, r_penalties:55, live_dimensions:3, data_quality:"A" },
  { iso2:"PK", name:"Pakistan",       region:"Asia",          p_score:52.3,  r_score:13.8, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:58, d2_ai_submissions:52, d3_impersonation:25,  d4_plagiarism:72, d5_collusion:45, d6_data_fabrication:65, r_legislation:10, r_detection_tools:20, r_disclosure:10, r_penalties:15, live_dimensions:3, data_quality:"A" },
  { iso2:"SG", name:"Singapore",      region:"Asia",          p_score:51.2,  r_score:47.5, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:35, d2_ai_submissions:42, d3_impersonation:8,   d4_plagiarism:38, d5_collusion:40, d6_data_fabrication:20, r_legislation:30, r_detection_tools:65, r_disclosure:40, r_penalties:55, live_dimensions:3, data_quality:"A" },
  { iso2:"TR", name:"Turkey",         region:"Europe/Asia",   p_score:50.3,  r_score:21.2, quadrant:"Q3", quadrant_name:"Crisis zone",           d1_contract_cheating:52, d2_ai_submissions:48, d3_impersonation:14,  d4_plagiarism:62, d5_collusion:55, d6_data_fabrication:50, r_legislation:10, r_detection_tools:35, r_disclosure:15, r_penalties:25, live_dimensions:3, data_quality:"A" },
  { iso2:"IN", name:"India",          region:"Asia",          p_score:44.8,  r_score:18.8, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:55, d2_ai_submissions:58, d3_impersonation:22,  d4_plagiarism:70, d5_collusion:58, d6_data_fabrication:70, r_legislation:15, r_detection_tools:30, r_disclosure:10, r_penalties:20, live_dimensions:3, data_quality:"A" },
  { iso2:"KR", name:"South Korea",    region:"Asia",          p_score:42.4,  r_score:30.0, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:48, d2_ai_submissions:50, d3_impersonation:12,  d4_plagiarism:58, d5_collusion:56, d6_data_fabrication:55, r_legislation:20, r_detection_tools:45, r_disclosure:25, r_penalties:30, live_dimensions:3, data_quality:"A" },
  { iso2:"PL", name:"Poland",         region:"Europe",        p_score:37.3,  r_score:32.5, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:40, d2_ai_submissions:33, d3_impersonation:10,  d4_plagiarism:44, d5_collusion:45, d6_data_fabrication:30, r_legislation:20, r_detection_tools:45, r_disclosure:30, r_penalties:35, live_dimensions:3, data_quality:"A" },
  { iso2:"NG", name:"Nigeria",        region:"Africa",        p_score:34.9,  r_score:12.5, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:55, d2_ai_submissions:45, d3_impersonation:28,  d4_plagiarism:64, d5_collusion:60, d6_data_fabrication:55, r_legislation:10, r_detection_tools:15, r_disclosure:10, r_penalties:15, live_dimensions:3, data_quality:"A" },
  { iso2:"JP", name:"Japan",          region:"Asia",          p_score:33.3,  r_score:27.5, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:40, d2_ai_submissions:35, d3_impersonation:20,  d4_plagiarism:44, d5_collusion:48, d6_data_fabrication:30, r_legislation:15, r_detection_tools:40, r_disclosure:20, r_penalties:35, live_dimensions:3, data_quality:"A" },
  { iso2:"NZ", name:"New Zealand",    region:"Asia-Pacific",  p_score:33.2,  r_score:58.8, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:32, d2_ai_submissions:30, d3_impersonation:8,   d4_plagiarism:32, d5_collusion:45, d6_data_fabrication:12, r_legislation:40, r_detection_tools:70, r_disclosure:65, r_penalties:60, live_dimensions:3, data_quality:"A" },
  { iso2:"ES", name:"Spain",          region:"Europe",        p_score:32.1,  r_score:30.0, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:42, d2_ai_submissions:35, d3_impersonation:10,  d4_plagiarism:48, d5_collusion:45, d6_data_fabrication:28, r_legislation:15, r_detection_tools:45, r_disclosure:25, r_penalties:35, live_dimensions:3, data_quality:"A" },
  { iso2:"MY", name:"Malaysia",       region:"Asia",          p_score:30.7,  r_score:20.0, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:50, d2_ai_submissions:48, d3_impersonation:16,  d4_plagiarism:62, d5_collusion:58, d6_data_fabrication:50, r_legislation:10, r_detection_tools:35, r_disclosure:15, r_penalties:20, live_dimensions:3, data_quality:"A" },
  { iso2:"NO", name:"Norway",         region:"Europe",        p_score:29.5,  r_score:47.5, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:27, d2_ai_submissions:24, d3_impersonation:10,  d4_plagiarism:26, d5_collusion:45, d6_data_fabrication:15, r_legislation:20, r_detection_tools:60, r_disclosure:55, r_penalties:55, live_dimensions:3, data_quality:"A" },
  { iso2:"NL", name:"Netherlands",    region:"Europe",        p_score:24.0,  r_score:51.2, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:30, d2_ai_submissions:28, d3_impersonation:10,  d4_plagiarism:28, d5_collusion:45, d6_data_fabrication:15, r_legislation:25, r_detection_tools:65, r_disclosure:55, r_penalties:60, live_dimensions:3, data_quality:"A" },
  { iso2:"BR", name:"Brazil",         region:"Latin America", p_score:23.6,  r_score:20.0, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:48, d2_ai_submissions:50, d3_impersonation:14,  d4_plagiarism:52, d5_collusion:52, d6_data_fabrication:40, r_legislation:10, r_detection_tools:35, r_disclosure:15, r_penalties:20, live_dimensions:3, data_quality:"A" },
  { iso2:"IT", name:"Italy",          region:"Europe",        p_score:21.2,  r_score:26.2, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:44, d2_ai_submissions:35, d3_impersonation:10,  d4_plagiarism:52, d5_collusion:45, d6_data_fabrication:35, r_legislation:15, r_detection_tools:40, r_disclosure:20, r_penalties:30, live_dimensions:3, data_quality:"A" },
  { iso2:"IE", name:"Ireland",        region:"Europe",        p_score:17.0,  r_score:78.8, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:26, d2_ai_submissions:35, d3_impersonation:8,   d4_plagiarism:35, d5_collusion:45, d6_data_fabrication:15, r_legislation:100,r_detection_tools:75, r_disclosure:70, r_penalties:70, live_dimensions:3, data_quality:"A" },
  { iso2:"DE", name:"Germany",        region:"Europe",        p_score:16.4,  r_score:38.8, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:35, d2_ai_submissions:32, d3_impersonation:10,  d4_plagiarism:38, d5_collusion:42, d6_data_fabrication:20, r_legislation:20, r_detection_tools:55, r_disclosure:30, r_penalties:50, live_dimensions:3, data_quality:"A" },
  { iso2:"FR", name:"France",         region:"Europe",        p_score:15.8,  r_score:32.5, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:38, d2_ai_submissions:32, d3_impersonation:10,  d4_plagiarism:42, d5_collusion:45, d6_data_fabrication:25, r_legislation:15, r_detection_tools:50, r_disclosure:25, r_penalties:40, live_dimensions:3, data_quality:"A" },
  { iso2:"ZA", name:"South Africa",   region:"Africa",        p_score:13.9,  r_score:26.2, quadrant:"Q4", quadrant_name:"Probably not looking",  d1_contract_cheating:45, d2_ai_submissions:38, d3_impersonation:18,  d4_plagiarism:48, d5_collusion:48, d6_data_fabrication:30, r_legislation:15, r_detection_tools:40, r_disclosure:20, r_penalties:30, live_dimensions:3, data_quality:"A" },
  { iso2:"CA", name:"Canada",         region:"North America", p_score:13.8,  r_score:60.0, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:38, d2_ai_submissions:40, d3_impersonation:9,   d4_plagiarism:32, d5_collusion:48, d6_data_fabrication:22, r_legislation:35, r_detection_tools:75, r_disclosure:70, r_penalties:60, live_dimensions:3, data_quality:"A" },
  { iso2:"GB", name:"United Kingdom", region:"Europe",        p_score:10.6,  r_score:87.5, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:30, d2_ai_submissions:52, d3_impersonation:9,   d4_plagiarism:35, d5_collusion:46, d6_data_fabrication:18, r_legislation:100,r_detection_tools:90, r_disclosure:85, r_penalties:75, live_dimensions:3, data_quality:"A" },
  { iso2:"AU", name:"Australia",      region:"Asia-Pacific",  p_score:0.0,   r_score:88.8, quadrant:"Q1", quadrant_name:"Best in class",         d1_contract_cheating:28, d2_ai_submissions:38, d3_impersonation:8,   d4_plagiarism:38, d5_collusion:44, d6_data_fabrication:18, r_legislation:100,r_detection_tools:85, r_disclosure:90, r_penalties:80, live_dimensions:3, data_quality:"A" },
];

export const QUADRANT_DESCRIPTIONS: Record<string, { label: string; description: string; color: string }> = {
  Q1: { label: "Best in class",         description: "Low estimated prevalence and strong institutional response.",                                      color: "#0F6E56" },
  Q2: { label: "Aware and fighting it", description: "High prevalence acknowledged and actively tackled.",                                              color: "#1A5FA8" },
  Q3: { label: "Crisis zone",           description: "High prevalence combined with weak institutional response. Primary target for intervention.",     color: "#B22B2B" },
  Q4: { label: "Probably not looking",  description: "Low apparent prevalence likely reflects under-detection rather than genuine low misconduct.",     color: "#6B6B6B" },
};

export const LAST_UPDATED = "April 2026";
export const VERSION = "1.3";
export const COUNTRIES_COUNT = 28;

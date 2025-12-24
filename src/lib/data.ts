export const companyData = {
  name: 'Hybrid Concepts',
  socBrand: 'Maidar Secure',
  tagline: 'Trusted Cyber Security Partner Across EMEA',
  founded: 1997,
  years: 28,
  nasdaqYears: 8,
  revenue: 50.06,
  employees: 210,
  locations: 18,
  headquarters: 'Stockholm, Sweden',
  managementExperience: 225,
  patents: 3,
  patentsPending: 1,
  certifications: ['ISO 27001:2022', 'SOC 2 Type 2 (in progress)'],
};

export const metrics = {
  // Platform cognitive auth metrics
  uptime: 99.97,
  authLatency: 195,
  securityScore: 99.9,
  attacksBlocked: 518,
  
  // Market
  authMarket2025: 88,
  authMarket2030: 200,
};

export const problemStats = [
  {
    value: '81%',
    label: 'Breaches from weak/stolen credentials',
    source: 'Verizon 2024',
  },
  {
    value: '€20M',
    label: 'GDPR fines or 4% global revenue',
    source: 'Maximum penalty',
  },
  {
    value: '207 days',
    label: 'Average breach detection time',
    source: 'IBM 2024',
  },
];

export const socTiers = [
  {
    name: 'Basic SOC as a Service',
    coverage: '8x5 or 24x7',
    description: 'Entry-level continuous monitoring with advanced tech stack',
    features: [
      'Continuous monitoring',
      'Advanced tech stack',
      'Seasoned Hybrid Concepts security experts',
      'Peace of mind as business grows',
    ],
  },
  {
    name: 'Standard SOC as a Service',
    coverage: '24x7',
    description: 'Real-time visibility for SMBs with expert guidance',
    features: [
      'Real-time visibility and monitoring',
      'Expert remediation guidance',
      'Integrated tech stack with automation',
      'Continuous tuning of detections',
    ],
  },
  {
    name: 'Advanced SOC as a Service',
    coverage: '24x7 + SOAR',
    description: 'SOAR integrated with SIEM for automated response',
    features: [
      'SOAR-as-a-Service (SOARaaS)',
      'Automated alert response',
      'Custom workflows',
      'Fast and precise responses',
    ],
  },
  {
    name: 'Enterprise SOC as a Service',
    coverage: '24x7 + XTI + UEBA',
    description: 'Full enterprise protection with threat intelligence',
    features: [
      'External threat intelligence',
      'UEBA (User and Entity Behavior Analytics)',
      'Custom detection use cases',
      'Unparalleled protection',
    ],
  },
];

export const additionalServices = [
  {
    name: 'SIEMaaS',
    description: 'Advanced threat detection with predictive analytics and ML',
  },
  {
    name: 'XTI (External Threat Intelligence)',
    description: 'Tailored threat feeds by industry, geo, and tech stack',
  },
  {
    name: 'Vulnerability Management',
    description: 'Automated scanning with prioritization and remediation guidance',
  },
  {
    name: 'CIRT (Cyber Incident Response Team)',
    description: '24/7 incident response with digital forensics',
  },
];

export const coreServicesGrid = [
  {
    category: 'Application Security',
    icon: 'shield-check',
    services: [
      'Web Application Firewall (WAF) management',
      'Secure code review and vulnerability assessment',
      'Web and mobile application scanning',
      'API Security',
      'Secure SDLC support',
    ],
  },
  {
    category: 'Endpoint Security',
    icon: 'laptop',
    services: [
      'Endpoint detection and response',
      'HIDPS management',
      'Patch management and vulnerability scanning',
      'Device and application control',
      'Endpoint encryption and DLP',
    ],
  },
  {
    category: 'Network Security',
    icon: 'network',
    services: [
      'Firewall management and monitoring',
      'IDPS management',
      'Network Access Control (NAC)',
      'VPN management',
      'DDOS protection',
    ],
  },
  {
    category: 'Cloud Security',
    icon: 'cloud',
    services: [
      'Cloud infrastructure security',
      'SASE management',
      'Cloud workload protection',
      'IAM for cloud services',
      'Cloud compliance and governance',
    ],
  },
  {
    category: 'Risk Management',
    icon: 'alert-triangle',
    services: [
      'Security control assessment',
      'Vulnerability management',
      'Security metrics and reporting',
      'Business continuity planning',
      'OT detection and reporting',
    ],
  },
  {
    category: 'Data Security',
    icon: 'database',
    services: [
      'Data loss prevention (DLP)',
      'Encryption and key management',
      'Data classification',
      'Database security monitoring',
      'Secure backup and recovery',
    ],
  },
  {
    category: 'Identity Access Management',
    icon: 'user-check',
    services: [
      'IAM solutions',
      'Privileged access management',
      'Multi-factor authentication',
      'Identity governance',
    ],
  },
  {
    category: 'Security Operations',
    icon: 'activity',
    services: [
      'SIEM',
      'SOAR',
      'Threat intelligence and hunting',
      'Security log management',
    ],
  },
  {
    category: 'Compliance',
    icon: 'file-check',
    services: [
      'Regulatory compliance monitoring',
      'Security policy development',
      'Audit trail management',
      'Security awareness training',
    ],
  },
  {
    category: 'Managed Services',
    icon: 'settings',
    services: [
      '24/7 Detection & Response',
      'DevSecOps',
      'Security Awareness',
      'Cyber Security Assessments',
      'Data Pipeline',
    ],
  },
  {
    category: 'Cognitive Authentication (NEW)',
    icon: 'brain',
    services: [
      'Brain-pattern recognition (15s auth)',
      'Post-quantum cryptography (Kyber-768)',
      'Anti-bot defense (PoW + Replay)',
      'PSD2 SCA compliant',
      '3 patents filed',
    ],
    isNew: true,
  },
];

export const bundles = [
  {
    id: 'government',
    name: 'Government & Defense Bundle',
    target: 'Ministries, Defense, Critical Infrastructure',
    pricing: 'Custom (€300k-€1M/year)',
    includes: [
      'Maidar Secure Enterprise SOC (24/7 + UEBA)',
      'Cognitive PAM for privileged access',
      'Post-quantum cryptography',
      'Air-gapped deployment option',
      'CIRT incident response retainer',
      'NIS2 & national security compliance',
    ],
    benefits: [
      '100% credential sharing elimination',
      'Insider threat mitigation',
      'Classified data protection',
      '10+ year quantum-proof security',
    ],
    gradient: 'from-cyber-blue to-cyber-lightBlue',
  },
  {
    id: 'fintech',
    name: 'Financial Services Bundle',
    target: 'Banks, Fintechs, Payment Processors',
    pricing: '€150k/year base + €25/user/month',
    includes: [
      'Maidar Secure Standard/Advanced SOC',
      'SIEM with fraud pattern detection',
      'Cognitive authentication (PSD2 SCA)',
      'Transaction approval workflows',
      'XTI tailored for fintech',
      'Quarterly compliance reporting',
    ],
    benefits: [
      '100% SIM swap fraud elimination',
      '80% reduction in false declines',
      'Full PSD2 compliance',
      '<15 second auth experience',
    ],
    gradient: 'from-maidar-teal to-maidar-cyan',
  },
  {
    id: 'enterprise',
    name: 'Enterprise DevOps Bundle',
    target: 'SaaS Companies, Tech Enterprises',
    pricing: '€80k/year + €20k setup',
    includes: [
      'Maidar Secure Standard SOC',
      'Cognitive auth for CI/CD pipelines',
      'Production environment access control',
      'SOAR automation',
      'Vulnerability management',
      'SOC 2 compliance support',
    ],
    benefits: [
      'Zero production breaches',
      'SOC 2 Type 2 audit-ready',
      'No productivity impact',
      '127+ bot attempts blocked',
    ],
    gradient: 'from-cyber-lightBlue to-maidar-cyan',
  },
  {
    id: 'sme',
    name: 'SME Security Starter',
    target: '50-500 Employee Companies',
    pricing: '€2,500/month (€30k/year)',
    includes: [
      'Maidar Secure Basic SOC (8x5)',
      'Cognitive MFA (replaces SMS/TOTP)',
      'Cloud security posture monitoring',
      'Quarterly vulnerability scans',
    ],
    benefits: [
      'Enterprise-grade at SME price',
      '2 weeks deployment',
      'No hardware required',
      'Scale as you grow',
    ],
    gradient: 'from-status-success to-maidar-teal',
  },
];

export const competitionMatrix = [
  {
    feature: '28 Years Experience',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: true,
    globalGiants: true,
  },
  {
    feature: 'Cognitive Authentication',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: false,
    globalGiants: false,
  },
  {
    feature: '24/7 SOC (Maidar Secure)',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: true,
    globalGiants: true,
  },
  {
    feature: 'Government Access & Clearances',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: false,
    globalGiants: false,
  },
  {
    feature: 'EMEA Local Presence',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: true,
    globalGiants: false,
  },
  {
    feature: 'ISO 27001 Certified',
    hybridConcepts: true,
    traditionalMFA: false,
    pureSOC: true,
    globalGiants: true,
  },
  {
    feature: 'Competitive Pricing',
    hybridConcepts: true,
    traditionalMFA: true,
    pureSOC: true,
    globalGiants: false,
  },
];

export const caseStudies = [
  {
    id: 'fintech',
    industry: 'European Fintech',
    type: 'Payment Processor',
    challenge: [
      'PSD2 SCA compliance deadline',
      '12 SIM swap fraud incidents per quarter',
      '15% false decline rate on transactions',
    ],
    solution: [
      'Maidar Secure Standard SOC deployed',
      'Cognitive auth for customer logins',
      'Transaction approval for >€10k transfers',
      'SIEM correlation with fraud patterns',
    ],
    results: [
      { metric: 'SIM swap fraud', before: '12/quarter', after: '0', improvement: '100%' },
      { metric: 'False declines', before: '15%', after: '3%', improvement: '80%' },
      { metric: 'Customer NPS', improvement: '+18 points' },
      { metric: 'PSD2 audit', status: 'Zero findings' },
    ],
    quote: 'Mathematically impossible to fake. Our fraud team has never seen authentication this robust.',
    role: 'CISO',
  },
  {
    id: 'government',
    industry: 'African Government',
    type: 'Ministry (Classified Access)',
    challenge: [
      '250 privileged users accessing classified systems',
      'Insider threat concerns (credential sharing)',
      'Air-gapped deployment required',
    ],
    solution: [
      'Maidar Secure Enterprise SOC (on-premise)',
      'Cognitive PAM for privileged access',
      'Post-quantum cryptography (Kyber-768)',
      'CIRT retainer for incident response',
    ],
    results: [
      { metric: 'Shared credentials', improvement: '100% eliminated' },
      { metric: 'Unauthorized access attempts', blocked: '23 in 12 months' },
      { metric: 'Audit trail granularity', detail: '15-second access logs' },
      { metric: 'Security posture', status: 'Fundamentally transformed' },
    ],
    quote: 'Cognitive authentication fundamentally changed our approach to insider threat mitigation.',
    role: 'Ministry CISO',
  },
  {
    id: 'saas',
    industry: 'SaaS Company',
    type: 'DevOps (500 Engineers)',
    challenge: [
      '80 engineers with production access',
      'Traditional MFA bypassed via session hijacking',
      'SOC 2 Type 2 compliance requirement',
    ],
    solution: [
      'Maidar Secure Standard SOC',
      'Cognitive auth for CI/CD pipelines',
      'Production environment access control',
      'SOAR automation for cognitive alerts',
    ],
    results: [
      { metric: 'Production breaches', period: '18 months', count: '0' },
      { metric: 'SOC 2 Type 2 audit', status: 'Exemplary control citation' },
      { metric: 'Bot attempts blocked', count: '127 at pipeline level' },
      { metric: 'Engineering productivity', impact: 'No impact (15s auth)' },
    ],
    quote: 'Our team sleeps better knowing production can\'t be accessed by anything that isn\'t provably human.',
    role: 'VP Engineering',
  },
];

export const clientLogos = [
  { name: 'United Nations', category: 'government' },
  { name: 'Standard Bank', category: 'fintech' },
  { name: 'Defence (South Africa)', category: 'government' },
  { name: 'Investec', category: 'fintech' },
  { name: 'Betway', category: 'enterprise' },
  { name: 'Old Mutual', category: 'fintech' },
  { name: 'Hollywoodbets', category: 'enterprise' },
  { name: 'Games Global', category: 'enterprise' },
  { name: 'Derivco', category: 'enterprise' },
  { name: 'RSM', category: 'enterprise' },
  { name: 'Bidvest Bank', category: 'fintech' },
  { name: 'SCAW Metals', category: 'enterprise' },
  { name: 'National Nuclear Regulator', category: 'government' },
  { name: 'SBV', category: 'fintech' },
  { name: 'Cape Gate', category: 'enterprise' },
  { name: 'Torito', category: 'enterprise' },
];

export const implementationPhases = [
  {
    phase: 'Discovery',
    weeks: '1-2',
    tasks: [
      'Architecture review',
      'Integration assessment',
      'Compliance requirements mapping',
      'User persona definition',
      'Success metrics definition',
    ],
    deliverable: 'Technical design document',
  },
  {
    phase: 'Pilot',
    weeks: '3-6',
    tasks: [
      'Sandbox environment setup',
      '10-50 pilot users enrolled',
      'Integration testing (API, SAML, etc.)',
      'Performance validation',
      'Security audit',
    ],
    deliverable: 'Pilot success report + go/no-go',
  },
  {
    phase: 'Production Rollout',
    weeks: '7-10',
    tasks: [
      'Production deployment',
      'User enrollment (phased)',
      'SOC integration',
      'Monitoring dashboards',
      'Runbook documentation',
    ],
    deliverable: 'Live production system',
  },
  {
    phase: 'Optimization',
    weeks: '11-12',
    tasks: [
      'Performance tuning',
      'User feedback incorporation',
      'Advanced features activation',
      'Compliance reporting setup',
      'Handover to operations',
    ],
    deliverable: 'Fully optimized system',
  },
];

export const contacts = [
  {
    name: 'George Messum',
    role: 'VP Business Development',
    email: 'george.messum@hybridconcepts.com',
  },
  {
    name: 'Hilbert Long',
    role: 'General Manager',
    email: 'hilbert@hybridconcepts.com',
  },
];

export const offices = [
  { city: 'Stockholm', country: 'Sweden', type: 'HQ' },
  { city: 'Johannesburg', country: 'South Africa', type: 'Regional Hub' },
  { city: 'Nairobi', country: 'Kenya', type: 'Regional Hub' },
  { city: 'London', country: 'United Kingdom', type: 'Office' },
  { city: 'Dubai', country: 'UAE', type: 'Office' },
];

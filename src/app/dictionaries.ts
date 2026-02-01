
export const dictionaries = {
    en: {
        hero: {
            tag: "Complete Industrial Solutions",
            title_1: "Engineering Your",
            title_2: "Competitive Edge",
            desc: "From advanced hydraulic systems to heavy-duty infrastructure, ROS Industries delivers the precision and power your business builds on.",
            cta_quote: "Get a Quote",
            cta_products: "View Capabilities",
            stat_label_1: "Client Satisfaction",
            stat_label_2: "Engineering Excellence",
        },
        // ... nav remains same ...
        nav: {
            // ... (keep existing nav content, do not remove unless instructed) ... 
            products: "Products",
            services: "Services",
            industries: "Industries",
            support: "Service & Support",
            company: "Company",
            login: "Log in",
            request_quote: "Request Quote",
            menu_products: {
                hydraulics: "Hydraulics",
                hydraulics_desc: "High-performance hydraulic systems",
            },
            menu_industries: {
                auto: "Automotive",
                auto_desc: "Solutions for vehicle manufacturing",
                aero: "Aerospace",
                aero_desc: "Reliability for the skies",
                energy: "Energy",
                energy_desc: "Powering the future",
            },
        },
        trusted_by: "Trust in our precision",
        cta_divider: {
            title: "One Partner. Complete Solution.",
            desc: "Whether you need a custom manifold block or a turn-key industrial shed, our integrated engineering team handles it all.",
            cta_sales: "Contact Our Team",
            cta_distributor: "Download Brochure",
        },
        feature_grid: {
            title: "Our Core Expertise",
            subtitle: "We unify diverse engineering disciplines to provide a single source for your critical industrial requirements.",
            // Repurposing keys for the 4 verticals to match new FeatureGrid logic
            feat_1_title: "Hydraulic Systems",
            feat_1_desc: "Power packs, manifolds, and filtration systems engineered for peak efficiency.",
            feat_1_stat: "Custom Built",
            feat_2_title: "Industrial Hoses",
            feat_2_desc: "High-pressure hoses and fittings for the most demanding fluid transfer applications.",
            feat_2_stat: "Up to 2500 Bar",
            feat_3_title: "Industrial Sheds",
            feat_3_desc: "Robust steel fabricated structures designed for modern warehousing and manufacturing.",
            feat_3_stat: "Turnkey Projects",
            feat_4_title: "Heavy Fabrication",
            feat_4_desc: "Precision machining and assembly services for complex industrial components.",
            feat_4_stat: "CNC Precision",
        },
        project_showcase: {
            sub: "Recent Deliverables",
            title: "Featured Projects",
            desc: "Explore how we apply our engineering expertise to solve complex challenges across diverse industries.",
            view_case_study: "View Case Study",
            projects: [
                {
                    title: "Automated Hydraulic Press Line",
                    category: "Hydraulics",
                    desc: "Design and commissioning of a 500-ton hydraulic press system for a leading automotive components manufacturer.",
                    stat: "40% Efficiency Boost"
                },
                {
                    title: "Turnkey Logistics Hub",
                    category: "Industrial Sheds",
                    desc: "Complete structural fabrication and erection of a 50,000 sq.ft. warehouse facility with integrated material handling.",
                    stat: "Completed in 3 Months"
                },
                {
                    title: "High-Pressure Chemical Transfer",
                    category: "Hoses",
                    desc: "Supply of custom PTFE hose assemblies for a petrochemical plant, ensuring safety under extreme operating conditions.",
                    stat: "Zero Leakage Record"
                }
            ]
        },
        about: {
            title_prefix: "About",
            title_main: "Us",
            tagline: "Crafting Excellence. Driven by Innovation",
            intro_loc: "An Indian Registered Company established in",
            intro_loc_highlight: "Thane District, Maharashtra, India",
            intro_p1: "We differentiate ourselves through innovation, quality, and an exceptional customer experience. We deal globally, leveraging our worldwide network of expertise, quality standards, and customer focus.",
            intro_p2: "We partner with our customers to revolutionize products and transform industries. We meet the market’s strict requirements and support you as an expert partner in developing your tailored solution.",
            mfg_title: "Manufacturing Capability",
            mfg_p1: "We manufacture, supply, trade, and distribute a comprehensive range of hoses for all purposes. Working pressure up to",
            mfg_p1_highlight1: "2500 Bar",
            mfg_p1_part2: ", ranging from",
            mfg_p1_highlight2: "2mm to 250mm",
            mfg_p1_part3: "of internal diameter (ID), with fittings and end connections as per customer specifications.",
            learn_more: "Learn More About Our Process",
            card_industrial: "Industrial",
            card_industrial_desc: "High performance hydraulics meet advanced digital technology",
            card_shed: "Industrial Shed",
            card_shed_desc: "Advanced facility infrastructure",
            card_services: "On-Site Services",
            card_services_desc: "Expert support available 24/7",
        },
        services_page: {
            title: "On-Site Services",
            subtitle: "Comprehensive industrial solutions delivered directly to your facility. We ensure minimum downtime and maximum efficiency.",
            hydraulics: {
                title: "Hydraulics",
                desc: "Complete lifecycle management for hydraulic systems, from installation to refurbishment.",
                features: [
                    "Flushing & Filtration (ISO/NAS standards)",
                    "On-site Piping Installation",
                    "System Refurbishment",
                    "Accumulator Charging & Repair"
                ]
            },
            shed: {
                title: "Industrial Shed",
                desc: "Turnkey infrastructure solutions for large-scale manufacturing and storage needs.",
                features: [
                    "Custom Fabrication",
                    "Structural Erection",
                    "Site Assembly",
                    "Annual Maintenance Contracts"
                ]
            },
            fabrication: {
                title: "Fabrication",
                desc: "Precision heavy-duty fabrication services executed with strict quality control.",
                features: [
                    "On-site Steel Fabrication",
                    "Heavy Assembly",
                    "Structural Maintenance",
                    "Modifications & Upgrades"
                ]
            }
        },
        hoses_page: {
            title: "Industrial & Hydraulic Hoses",
            subtitle: "A comprehensive range of high-performance hoses designed for the toughest industrial applications, from high-pressure hydraulics to chemical transport.",
            hydraulics: {
                title: "Hydraulic Hoses",
                desc: "Search our catalog of high-pressure hydraulic hoses primarily used for oil & fuel lines, water blasting, and underground mining operations.",
                table_headers: {
                    name: "Product Name",
                    std: "Standard",
                    size: "Size ID",
                    wp: "W.P (Bar)",
                    temp: "Temp (°C)"
                },
                rows: [
                    { name: "R1AT / 1SN", std: "SAE 100 R1AT / EN 853 1SN", size: '3/16" - 4"', wp: "10 - 250", temp: "-40 to +100" },
                    { name: "R2AT / 2SN", std: "SAE 100 R2AT / EN 853 2SN", size: '3/16" - 4"', wp: "10 - 420", temp: "-40 to +100" },
                    { name: "4SP", std: "EN 856 4SP", size: '1/4" - 2"', wp: "165 - 450", temp: "-40 to +100" },
                    { name: "4SH", std: "EN 856 4SH", size: '3/4" - 2"', wp: "250 - 420", temp: "-40 to +100" },
                    { name: "R12", std: "SAE 100 R12", size: '3/8" - 2"', wp: "170 - 280", temp: "-40 to +121" },
                    { name: "R13", std: "SAE 100 R13", size: '3/4" - 2"', wp: "350", temp: "-40 to +121" },
                    { name: "R15", std: "SAE 100 R15", size: '3/8" - 2"', wp: "420", temp: "-40 to +121" }
                ]
            },
            ptfe: {
                title: "PTFE Hoses",
                desc: "Engineered for extreme chemical resistance and non-contamination. Ideal for aggressive fluids and high-temperature environments.",
                temp_range: "-54°C to +260°C",
                items: [
                    { name: "Smooth Bore (R14)", desc: "Excellent flow characteristics, easy to clean." },
                    { name: "Convoluted", desc: "Highly flexible for tight bend radii." },
                    { name: "High Pressure Gas", desc: "Specialized permeation resistance." }
                ]
            },
            thermoplastic: {
                title: "Thermoplastic Hoses",
                desc: "Lightweight and durable hoses for specialized applications including sewer jetting and ultra-high pressure systems.",
                items: [
                    { name: "SAE 100 R7", desc: "Medium pressure, non-conductive options available." },
                    { name: "SAE 100 R8", desc: "High pressure, compact design." },
                    { name: "Sewer Jetting", desc: "Abrasion resistant cover for harsh environments." },
                    { name: "Ultra High Pressure", desc: "Proprietary technology for pressures up to 3200 Bar." }
                ]
            },
            specialty: {
                title: "Specialty Hoses",
                items: [
                    { name: "Stainless Steel Bellow", desc: "Metal flexible hoses for extreme temperatures up to 700°C." },
                    { name: "Composite Hoses", desc: "Lightweight and flexible for fuel loading/unloading operations." },
                    { name: "Large Diameter", desc: "Heavy-duty hoses for slurry, mud, and cement transfer." }
                ]
            },
            guards: {
                title: "Hose Guards",
                desc: "Protective PVC spiral guards and textile sleeves to extend hose life and ensure safety.",
                spec: "Available for ID sizes: 1/4\" to 2\""
            }
        },
        hydraulics_page: {
            title: "Hydraulic Systems & Components",
            subtitle: "A complete range of hydraulic solutions from power packs to precision manifold blocks, engineered for reliability and performance.",
            categories: [
                { name: "Hydraulic Power Packs", href: "/products/hydraulics/power-packs", desc: "Custom designed power units and test benches." },
                { name: "Filtration Systems", href: "/products/hydraulics/filtration-systems", desc: "Advanced oil purification and monitoring systems." },
                { name: "Manifold Blocks", href: "/products/hydraulics/manifold-blocks", desc: "CS, SS, and Aluminium manifolds for complex circuit control." },
                { name: "Accumulators", href: "/products/hydraulics/accumulators", desc: "Bladder, Piston, and Diaphragm accumulators (Make: EPE)." },
                { name: "Tank Accessories", href: "/products/hydraulics/tank-accessories", desc: "Breathers, level gauges, and suction strainers." },
                { name: "Clamps & Fittings", href: "/products/hydraulics/clamps-fittings", desc: "Pipe clamps, hose clamps, and fittings." },
                { name: "Hoses", href: "/products/hoses", desc: "High-pressure hydraulic hoses and protective guards." }
            ]
        },
        power_packs_page: {
            title: "Power Packs & Test Benches",
            subtitle: "High-performance hydraulic and pneumatic power generation and testing systems tailored to your industrial needs.",
            fe_1_title: "Hydraulic Power Pack & Test Bench",
            fe_1_specs: [
                "Working Pressure up to 1000 Bar",
                "Flow Capacity up to 300 LPM"
            ],
            fe_2_title: "Pneumatic System & Test Bench",
            fe_2_specs: [
                "Pressure up to 350 Bar",
                "Variable flow based on application",
                "Proof Pressure testing Setup"
            ]
        },
        filtration_page: {
            title: "Filtration Systems",
            subtitle: "Ensure system longevity and reliability with our advanced off-line filtration and contamination monitoring solutions.",
            product_title: "Filtration Trolley / Stand",
            features: [
                "Working Pressure up to 10 Bar",
                "Flow as per requirement from 10 LPM to 100 LPM",
                "Suitable for Oil from 8 cst to 2000 cst",
                "Suitable for ATF application",
                "Single Stage or Multi stage as per requirement of application",
                "Trolley mounted mobile type or Fixed stand type",
                "Maintain NAS Class",
                "Contamination monitoring sensor as option",
                "Option available to remove Water & gas contamination"
            ]
        },
        manifolds_page: {
            title: "Manifold Blocks",
            subtitle: "Precision-machined hydraulic manifolds for compact, leak-free, and efficient system design.",
            types: [
                { name: "CS Manifolds", desc: "Carbon Steel manifolds for standard industrial applications." },
                { name: "SS & Aluminium Manifolds", desc: "Stainless Steel and Aluminium options for corrosive environments or weight-sensitive applications." },
                { name: "Complex Assemblies", desc: "Custom integrated circuits with cartridge valves and accumulators." }
            ]
        },
        accumulators_page: {
            title: "Hydraulic Accumulators",
            subtitle: "Energy storage and pulsation dampening solutions (Make: EPE).",
            types: {
                title: "Accumulator Types",
                list: ["Bladder", "Piston", "Diaphragm", "Maintenance Free"]
            },
            features: {
                title: "Key Features",
                list: [
                    "Working Pressure up to 330 Bar",
                    "MOC of SS or CS as per requirement",
                    "As per PED / ASME / Any other std."
                ]
            },
            accessories: {
                title: "Accessories",
                list: ["Charging Kit", "Safety Shutoff Block", "Clamp for mounting"]
            }
        },
        tank_accessories_page: {
            title: "Breather & Tank Accessories",
            subtitle: "Essential components for oil reservoir maintenance and system longevity.",
            list_title: "Oil Reservoir Accessories",
            items: [
                "Air Breather",
                "Fluid Level Gauge",
                "Drain Valve",
                "Magnetic Tank Oil Cleaner",
                "Suction Strainer",
                "Float Switch",
                "Minimesh Test Point & Minimesh Hose",
                "Other Hydraulic System accessories"
            ]
        },
        clamps_fittings_page: {
            title: "Clamps & Fittings",
            subtitle: "High-quality connection and mounting solutions for hydraulic lines.",
            hose_section: {
                title: "Hydraulic Hose",
                details: [
                    "Connecting Ends: As per Requirement",
                    "MOC of SS or CS as per requirement",
                    "As per PED / ASME / Any other std."
                ],
                types: ["Rubber Hose", "Teflon Wire Braided Hose"]
            },
            accessories_section: {
                title: "Accessories",
                items: [
                    "Pipe clamps, Hose clamps & Cable clamps",
                    "Pipe & Hose fittings"
                ]
            }
        },
        industrial_shed_page: {
            title: "Industrial Sheds",
            subtitle: "Robust and versatile steel fabricated structures designed for modern industrial requirements.",
            feature_title: "Any Type of Steel Fabricated Industrial Shed",
            features: [
                "Custom design and fabrication",
                "High-grade steel construction",
                "Optimized for space and durability",
                "Complete erection and insulation services"
            ]
        },
        fabrication_page: {
            title: "Fabrication & Machining",
            subtitle: "Precision engineering services for bespoke industrial components and heavy assemblies.",
            services: [
                { title: "Heavy Fabrication", desc: "Structural steel fabrication for infrastructure and plant machinery." },
                { title: "Precision Machining", desc: "CNC machining for complex parts with tight tolerances." },
                { title: "Custom Assembly", desc: "Full assembly and testing of fabricated units." }
            ],
            capabilities: [
                "Advanced CNC Turning & Milling",
                "Laser Cutting & Bending",
                "Certified Welding Processes",
                "Surface Treatment & Coating"
            ]
        },
        products_page: {
            title: "Our Products",
            subtitle: "Discover our comprehensive range of industrial engineering solutions, from advanced hydraulics to large-scale infrastructure.",
            categories: [
                { name: "Hydraulics", href: "/products/hydraulics", desc: "Power packs, manifolds, accumulators, and filtration systems.", icon: "Settings" },
                { name: "Hoses", href: "/products/hoses", desc: "High-pressure hoses, fittings, and guards.", icon: "Cylinder" },
                { name: "Industrial Sheds", href: "/products/industrial-shed", desc: "Custom steel fabricated structures for warehousing and plants.", icon: "Warehouse" },
                { name: "Fabrication", href: "/products/fabrication", desc: "Heavy fabrication and precision machining services.", icon: "Hammer" },
            ]
        },
        contact_button: {
            title: "Quick Inquiry",
            email: "Email",
            message: "Message",
            email_ph: "you@company.com",
            msg_ph: "How can we help?",
            send: "Send Request",
            label: "Contact Us",
        },
        footer: {
            copyright: "ROS Industries",
            desc: "Engineering the future of industrial automation with precision, reliability, and innovation. Partnering with global leaders to drive efficiency.",
            hq_title: "Global Headquarters",
            solutions: "Solutions",
            focus_topics: "Focus Topics",
            quick_links: "Quick Links",
            links_solutions: {
                hydraulics: "Hydraulics",
            },
            links_focus: {
                power_packs: "Power Packs",
                filtration: "Filtration",
                manifolds: "Manifolds",
                accumulators: "Accumulators",
            },
            links_quick: {
                about: "About Us",
                services: "Services",
                contact: "Contact Us",
                quote: "Request Quote",
            }
        }
    },
};

export type Dictionary = typeof dictionaries.en;

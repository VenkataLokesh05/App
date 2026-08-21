import { Calculator, Brain, BookOpen, Globe, History, IndianRupee, Landmark, Newspaper, FileBarChart, Scale, Map } from 'lucide-react';
import type { Syllabus } from '@/types';

export const syllabi: Record<string, Syllabus> = {
  ssc: {
    examSlug: 'ssc',
    subjects: [
      {
        id: 'quantitative-aptitude',
        name: 'Quantitative Aptitude',
        icon: Calculator,
        description: 'Numerical ability, arithmetic, algebra and data interpretation.',
        topics: [
          {
            id: 'number-system',
            name: 'Number System',
            content: {
              heading: 'Number System',
              intro:
                'The number system forms the foundation of quantitative aptitude. It covers classification of numbers, divisibility, remainders, and properties of integers — concepts that underpin almost every other arithmetic topic.',
              sections: [
                {
                  title: 'Classification of Numbers',
                  points: [
                    'Natural numbers (N): 1, 2, 3, …',
                    'Whole numbers (W): 0, 1, 2, 3, …',
                    'Integers (Z): …, -2, -1, 0, 1, 2, …',
                    'Rational numbers: numbers expressible as p/q where q ≠ 0',
                    'Irrational numbers: non-terminating, non-repeating decimals (√2, π)',
                  ],
                },
                {
                  title: 'Divisibility Rules',
                  points: [
                    'Divisible by 2 → last digit is even',
                    'Divisible by 3 → sum of digits divisible by 3',
                    'Divisible by 9 → sum of digits divisible by 9',
                    'Divisible by 11 → alternating sum of digits divisible by 11',
                  ],
                },
                {
                  title: 'Key Concepts',
                  points: [
                    'Remainder theorem and unit digit problems',
                    'HCF and LCM — relation: HCF × LCM = product of two numbers',
                    'Properties of even, odd, prime and composite numbers',
                  ],
                },
              ],
              tips: [
                'Memorise divisibility rules up to 19 — they save time in simplification questions.',
                'For unit-digit problems, reduce the power using cyclicity of digits.',
              ],
            },
          },
          {
            id: 'percentage',
            name: 'Percentage',
            content: {
              heading: 'Percentage',
              intro:
                'Percentage means "per hundred" and is one of the most frequently tested topics in SSC. It is the base for profit & loss, simple/compound interest and data interpretation.',
              sections: [
                {
                  title: 'Basic Formulae',
                  points: [
                    'x% of y = (x/100) × y',
                    'To convert a fraction to a percentage, multiply by 100',
                    'Percentage increase = (Increase / Original) × 100',
                    'Percentage decrease = (Decrease / Original) × 100',
                  ],
                },
                {
                  title: 'Successive Percentage Change',
                  points: [
                    'Net change = a + b + (ab/100) %',
                    'A 10% increase followed by 10% decrease is NOT 0% — it is a 1% decrease',
                    'If a number is increased by x% and then decreased by x%, net change is always a decrease of (x²/100)%',
                  ],
                },
                {
                  title: 'Common Application Types',
                  points: [
                    'Election / voting problems (valid and invalid votes)',
                    'Income tax and salary deductions',
                    'Voter strength and population growth',
                    'Consumption-expenditure-price relationship',
                  ],
                },
              ],
              tips: [
                'Remember fraction-percentage equivalents: 1/2 = 50%, 1/3 ≈ 33.33%, 1/4 = 25%, 1/6 ≈ 16.67%.',
                'In election problems, always verify total votes = valid + invalid + NOTA (if given).',
              ],
            },
          },
          {
            id: 'profit-loss',
            name: 'Profit and Loss',
            content: {
              heading: 'Profit and Loss',
              intro:
                'Profit and loss deals with the relationship between cost price, selling price and marked price. It is heavily tested in both arithmetic and data interpretation.',
              sections: [
                {
                  title: 'Core Terms',
                  points: [
                    'Cost Price (CP): price at which an article is bought',
                    'Selling Price (SP): price at which it is sold',
                    'Marked Price (MP): price printed on the article',
                    'Profit = SP − CP (when SP > CP)',
                    'Loss = CP − SP (when CP > SP)',
                  ],
                },
                {
                  title: 'Key Formulae',
                  points: [
                    'Profit % = (Profit / CP) × 100',
                    'Loss % = (Loss / CP) × 100',
                    'SP = CP × (1 + Profit%/100)',
                    'When two articles are sold at the same price, one at x% profit and other at x% loss → net loss of (x²/100)%',
                  ],
                },
                {
                  title: 'Discount & Marked Price',
                  points: [
                    'Discount = MP − SP',
                    'Discount % = (Discount / MP) × 100',
                    'SP = MP × (1 − Discount%/100)',
                  ],
                },
              ],
              tips: [
                'For "same SP, x% profit and x% loss" problems, the result is always a loss — never zero.',
                'Dishonest dealer problems use the ratio of claimed weight to actual weight.',
              ],
            },
          },
          {
            id: 'ratio-proportion',
            name: 'Ratio and Proportion',
            content: {
              heading: 'Ratio and Proportion',
              intro:
                'Ratio compares two or more quantities of the same kind, while proportion equates two ratios. This topic connects to averages, mixtures and time-work problems.',
              sections: [
                {
                  title: 'Ratio Basics',
                  points: [
                    'Ratio a:b is the simplified comparison of two quantities',
                    'Compound ratio of a:b and c:d is (a×c):(b×d)',
                    'Duplicate ratio of a:b is a²:b²; triplicate is a³:b³',
                  ],
                },
                {
                  title: 'Proportion',
                  points: [
                    'Four quantities a, b, c, d are in proportion if a:b = c:d → ad = bc',
                    'Mean proportional between a and b is √(ab)',
                    'Third proportional to a, b is b²/a',
                    'Continued proportion: a, b, c are in continued proportion if b² = ac',
                  ],
                },
                {
                  title: 'Variation',
                  points: [
                    'Direct variation: y = kx (y increases with x)',
                    'Inverse variation: xy = k (y decreases as x increases)',
                    'Combined variation: z = k·(x/y)',
                  ],
                },
              ],
              tips: [
                'In income-expenditure ratio problems, always work with the common multiplier.',
                'Use the "k method" — express all parts as k, 2k, 3k — to avoid fractions.',
              ],
            },
          },
          {
            id: 'average',
            name: 'Average',
            content: {
              heading: 'Average',
              intro:
                'Average (arithmetic mean) is the sum of all observations divided by the number of observations. SSC tests averages through groups, ages, and replacement problems.',
              sections: [
                {
                  title: 'Basic Formula',
                  points: [
                    'Average = Sum of observations / Number of observations',
                    'Sum = Average × Number',
                    'If average of n numbers is A, and a new number x is added → new average = (nA + x)/(n+1)',
                  ],
                },
                {
                  title: 'Common Problem Types',
                  points: [
                    'Average age of a group when a person joins or leaves',
                    'Average weight after replacement',
                    'Batting average problems',
                    'Average speed (harmonic mean based)',
                  ],
                },
                {
                  title: 'Weighted Average',
                  points: [
                    'When groups of different sizes and averages are combined, use weighted average',
                    'W.A. = (n₁A₁ + n₂A₂)/(n₁ + n₂)',
                  ],
                },
              ],
              tips: [
                'Use the "deviation method": total change = (new value − old value), new average shifts by change/n.',
                'Average speed for equal distances is the harmonic mean: 2xy/(x+y).',
              ],
            },
          },
          {
            id: 'time-work',
            name: 'Time and Work',
            content: {
              heading: 'Time and Work',
              intro:
                'Time and Work problems relate the amount of work to the number of workers and time taken. The "unit work" (MDH) method is the fastest approach for SSC.',
              sections: [
                {
                  title: 'Fundamental Relation',
                  points: [
                    'Work = Rate × Time',
                    'If A can do a job in x days, A\'s 1-day work = 1/x',
                    'Combined 1-day work of A and B = 1/x + 1/y',
                  ],
                },
                {
                  title: 'MDH Formula',
                  points: [
                    'M₁D₁H₁/W₁ = M₂D₂H₂/W₂',
                    'M = men, D = days, H = hours, W = work',
                    'Handles changing workforce, hours or work scope',
                  ],
                },
                {
                  title: 'Variants',
                  points: [
                    'Alternate day working (A on day 1, B on day 2, …)',
                    'Pipes and cisterns — same logic with inlet (+) and outlet (−)',
                    'Work and wages — wage share proportional to work done',
                  ],
                },
              ],
              tips: [
                'Use LCM of given days as "total work units" to avoid fractions.',
                'Negative work (leak/pipe) is subtracted from positive work.',
              ],
            },
          },
          {
            id: 'time-speed-distance',
            name: 'Time, Speed and Distance',
            content: {
              heading: 'Time, Speed and Distance',
              intro:
                'Distance = Speed × Time. This topic covers trains, boats, relative motion and circular tracks — all frequent in SSC CGL.',
              sections: [
                {
                  title: 'Basic Relations',
                  points: [
                    'Distance = Speed × Time',
                    'Speed = Distance / Time',
                    'Convert km/h to m/s by multiplying by 5/18',
                    'Convert m/s to km/h by multiplying by 18/5',
                  ],
                },
                {
                  title: 'Trains',
                  points: [
                    'Time to cross a pole = length of train / speed',
                    'Time to cross a platform = (train + platform length) / speed',
                    'Two trains moving opposite directions: relative speed = sum',
                    'Same direction: relative speed = difference',
                  ],
                },
                {
                  title: 'Boats & Streams',
                  points: [
                    'Downstream speed = boat speed in still water + stream speed',
                    'Upstream speed = boat speed − stream speed',
                    'Boat speed = (downstream + upstream)/2',
                    'Stream speed = (downstream − upstream)/2',
                  ],
                },
              ],
              tips: [
                'Always check units — convert km/h to m/s before solving train problems in metres.',
                'In circular tracks, runners meet first at the LCM of individual lap times.',
              ],
            },
          },
          {
            id: 'simple-interest',
            name: 'Simple Interest',
            content: {
              heading: 'Simple Interest',
              intro:
                'Simple interest is calculated only on the original principal for the entire period. It is the simpler counterpart to compound interest.',
              sections: [
                {
                  title: 'Formula',
                  points: [
                    'SI = (P × R × T) / 100',
                    'Amount A = P + SI',
                    'P = (100 × SI) / (R × T)',
                  ],
                },
                {
                  title: 'Common Types',
                  points: [
                    'Finding rate or time when other quantities are given',
                    'Difference between SI and CI for 2 years = P(R/100)²',
                    'Difference for 3 years = P(R/100)² × (3 + R/100)',
                  ],
                },
              ],
              tips: [
                'The SI–CI difference for 2 years is a commonly asked direct formula question.',
                'If a sum doubles at R% SI, time = 100/R years.',
              ],
            },
          },
          {
            id: 'compound-interest',
            name: 'Compound Interest',
            content: {
              heading: 'Compound Interest',
              intro:
                'Compound interest is calculated on the principal plus accumulated interest. It uses the compound growth formula and appears in population and depreciation problems too.',
              sections: [
                {
                  title: 'Formula',
                  points: [
                    'A = P(1 + R/100)ⁿ',
                    'CI = A − P',
                    'For half-yearly compounding: rate halves, time doubles',
                  ],
                },
                {
                  title: 'Applications',
                  points: [
                    'Population growth: Pₙ = P(1 + R/100)ⁿ',
                    'Depreciation: Pₙ = P(1 − R/100)ⁿ',
                    'Effective rate for successive changes uses the net change formula',
                  ],
                },
              ],
              tips: [
                'For small rates and 2 years, use the SI–CI difference shortcut rather than full expansion.',
                'Half-yearly → R/2 and 2T; quarterly → R/4 and 4T.',
              ],
            },
          },
          {
            id: 'algebra',
            name: 'Algebra',
            content: {
              heading: 'Algebra',
              intro:
                'SSC algebra covers linear and quadratic equations, identities, surds and the factorisation-based problems that dominate the higher-tiers.',
              sections: [
                {
                  title: 'Linear Equations',
                  points: [
                    'Solving a/x + b/y = c, d/x + e/y = f by substitution',
                    'Consistent / inconsistent systems',
                  ],
                },
                {
                  title: 'Identities',
                  points: [
                    '(a + b)² = a² + 2ab + b²',
                    '(a − b)² = a² − 2ab + b²',
                    'a² − b² = (a − b)(a + b)',
                    '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)',
                    'a³ + b³ = (a + b)(a² − ab + b²)',
                  ],
                },
                {
                  title: 'Surds & Indices',
                  points: [
                    'aᵐ × aⁿ = aᵐ⁺ⁿ',
                    '(aᵐ)ⁿ = aᵐⁿ',
                    'Rationalising surds using conjugate',
                  ],
                },
              ],
              tips: [
                'Many SSC algebra questions reduce to (x + 1/x) form — substitute t = x + 1/x.',
                'Factorise a³ + b³ + c³ − 3abc using the standard identity.',
              ],
            },
          },
          {
            id: 'geometry',
            name: 'Geometry',
            content: {
              heading: 'Geometry',
              intro:
                'Geometry in SSC covers lines, angles, triangles, circles and quadrilaterals. Conceptual clarity in properties saves significant time in Tier 1.',
              sections: [
                {
                  title: 'Triangles',
                  points: [
                    'Sum of interior angles = 180°',
                    'Pythagoras theorem: a² + b² = c² (right triangle)',
                    'Area = ½ × base × height',
                    'Median, altitude, angle bisector properties',
                  ],
                },
                {
                  title: 'Circles',
                  points: [
                    'Angle subtended by an arc at the centre = 2 × angle at circumference',
                    'Tangent is perpendicular to radius at point of contact',
                    'Length of arc = (θ/360) × 2πr',
                    'Area of sector = (θ/360) × πr²',
                  ],
                },
                {
                  title: 'Quadrilaterals',
                  points: [
                    'Sum of angles of a quadrilateral = 360°',
                    'Properties of parallelogram, rectangle, square, rhombus',
                    'Cyclic quadrilateral — opposite angles sum to 180°',
                  ],
                },
              ],
              tips: [
                'Remember the standard right-triangle triplets: (3,4,5), (5,12,13), (8,15,17).',
                'Inscribed angle is half the central angle — a frequently tested circle property.',
              ],
            },
          },
          {
            id: 'mensuration',
            name: 'Mensuration',
            content: {
              heading: 'Mensuration',
              intro:
                'Mensuration deals with areas and volumes of 2D and 3D shapes. SSC asks both direct formula and composite-shape problems.',
              sections: [
                {
                  title: '2D Shapes',
                  points: [
                    'Area of square = a²; perimeter = 4a',
                    'Area of rectangle = l × b; perimeter = 2(l + b)',
                    'Area of triangle = ½ × b × h; equilateral = (√3/4)a²',
                    'Area of circle = πr²; circumference = 2πr',
                    'Area of trapezium = ½ × (sum of parallel sides) × height',
                  ],
                },
                {
                  title: '3D Shapes',
                  points: [
                    'Cube: V = a³, SA = 6a²',
                    'Cuboid: V = l × b × h, SA = 2(lb + bh + hl)',
                    'Cylinder: V = πr²h, CSA = 2πrh',
                    'Cone: V = (1/3)πr²h, CSA = πrl, l² = r² + h²',
                    'Sphere: V = (4/3)πr³, SA = 4πr²',
                  ],
                },
              ],
              tips: [
                'For solid-to-solid conversion problems, equate volumes.',
                'Slant height of cone: l = √(r² + h²) — verify before using CSA.',
              ],
            },
          },
          {
            id: 'data-interpretation',
            name: 'Data Interpretation',
            content: {
              heading: 'Data Interpretation',
              intro:
                'Data Interpretation (DI) tests the ability to extract information from tables, bar graphs, pie charts and line graphs. It carries heavy weightage in SSC CGL Tier 2.',
              sections: [
                {
                  title: 'Types of DI',
                  points: [
                    'Tabular DI — data in rows and columns',
                    'Bar graph — magnitude comparison',
                    'Pie chart — percentage share (360° total)',
                    'Line graph — trend over time',
                    'Mixed / caselet DI — paragraph form',
                  ],
                },
                {
                  title: 'Key Skills',
                  points: [
                    'Percentage and ratio calculation',
                    'Approximation to reduce calculation time',
                    'Average and total computation',
                    'Identifying the largest / smallest / ratio between categories',
                  ],
                },
              ],
              tips: [
                'In pie charts, 1% = 3.6° — memorise this conversion.',
                'Use approximation: 48.7% ≈ 49% when options are far apart.',
              ],
            },
          },
        ],
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        icon: Brain,
        description: 'Logical and analytical reasoning including series, coding and puzzles.',
        topics: [
          {
            id: 'analogy',
            name: 'Analogy',
            content: {
              heading: 'Analogy',
              intro:
                'Analogy questions test the ability to identify relationships between pairs of words, numbers or letters. They are among the highest-scoring reasoning items.',
              sections: [
                {
                  title: 'Types of Analogy',
                  points: [
                    'Word analogy — synonyms, antonyms, part-whole, cause-effect',
                    'Number analogy — arithmetic or positional relationships',
                    'Letter analogy — positional value in the alphabet',
                    'Figure analogy — rotation, reflection, addition of elements',
                  ],
                },
                {
                  title: 'Approach',
                  points: [
                    'Identify the relationship in the given pair first',
                    'Apply the same relationship to find the missing term',
                    'Check for reversed or dual relationships',
                  ],
                },
              ],
              tips: ['Letter-to-number: A=1, B=2, … Z=26 and reverse A=26, … Z=1 are both used.'],
            },
          },
          {
            id: 'series',
            name: 'Series',
            content: {
              heading: 'Series',
              intro:
                'Series questions require finding the pattern in a sequence of numbers, letters or figures and predicting the next term.',
              sections: [
                {
                  title: 'Number Series',
                  points: [
                    'Arithmetic progression — constant difference',
                    'Geometric progression — constant ratio',
                    'Difference of differences (second-order pattern)',
                    'Alternating series (two interleaved patterns)',
                    'Square / cube based series',
                  ],
                },
                {
                  title: 'Letter & Figure Series',
                  points: [
                    'Letter series — positional jumps in the alphabet',
                    'Figure series — rotation, addition, deletion of elements',
                  ],
                },
              ],
              tips: ['Always write the differences between consecutive terms — the pattern usually emerges.'],
            },
          },
          {
            id: 'coding-decoding',
            name: 'Coding-Decoding',
            content: {
              heading: 'Coding-Decoding',
              intro:
                'Coding-decoding tests pattern recognition in how words or letters are transformed using rules based on position, reversal or substitution.',
              sections: [
                {
                  title: 'Common Patterns',
                  points: [
                    'Letter shifting — each letter moves by +n / −n positions',
                    'Direct letter coding — one-to-one substitution',
                    'Number coding — letters replaced by positional numbers',
                    'Substitution coding — words replaced by other words',
                  ],
                },
                {
                  title: 'New Pattern (SSC CGL)',
                  points: [
                    'Sentence-based coding — word order shuffled',
                    'Conditional coding with symbols for operations',
                  ],
                },
              ],
              tips: ['Write A=1 … Z=26 beneath letters to quickly compute shifts.'],
            },
          },
        ],
      },
      {
        id: 'english',
        name: 'English',
        icon: BookOpen,
        description: 'Grammar, vocabulary and comprehension for SSC English sections.',
        topics: [
          {
            id: 'grammar',
            name: 'Grammar',
            content: {
              heading: 'English Grammar',
              intro:
                'The grammar portion tests error detection, sentence improvement, narration and voice. A firm grasp of rules and common exceptions is essential.',
              sections: [
                {
                  title: 'Parts of Speech',
                  points: [
                    'Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection',
                    'Subject-verb agreement rules',
                    'Common errors with collective and uncountable nouns',
                  ],
                },
                {
                  title: 'Tenses',
                  points: [
                    'Simple, continuous, perfect and perfect continuous forms',
                    'Time signal words (since, for, already, yet)',
                    'Sequence of tenses in complex sentences',
                  ],
                },
                {
                  title: 'Active / Passive Voice',
                  points: [
                    'Rules of conversion between active and passive',
                    'Modal verbs in passive constructions',
                  ],
                },
                {
                  title: 'Direct / Indirect Speech',
                  points: [
                    'Changes in tense, pronouns and time expressions',
                    'Rules for questions, commands and exclamations',
                  ],
                },
              ],
              tips: ['Read the full sentence before spotting errors — many traps are in the second clause.'],
            },
          },
          {
            id: 'vocabulary',
            name: 'Vocabulary',
            content: {
              heading: 'Vocabulary',
              intro:
                'Vocabulary includes synonyms, antonyms, one-word substitution, idioms & phrases and spellings — all direct-scoring questions.',
              sections: [
                {
                  title: 'Key Areas',
                  points: [
                    'Synonyms and antonyms of frequently used words',
                    'One-word substitution (e.g. "bibliophile" — lover of books)',
                    'Idioms and phrases with figurative meanings',
                    'Spelling correction of commonly misspelled words',
                  ],
                },
              ],
              tips: ['Maintain a daily word list — revision matters more than volume.'],
            },
          },
        ],
      },
      {
        id: 'general-awareness',
        name: 'General Awareness',
        icon: Globe,
        description: 'Static GK, current affairs, history, polity and science.',
        topics: [
          {
            id: 'history',
            name: 'History',
            content: {
              heading: 'History',
              intro:
                'Indian history covers ancient, medieval and modern periods, with emphasis on the freedom struggle in SSC exams.',
              sections: [
                {
                  title: 'Ancient India',
                  points: [
                    'Indus Valley Civilisation — Harappa, Mohenjo-daro',
                    'Vedic Age — Early and Later Vedic periods',
                    'Maurya and Gupta empires',
                  ],
                },
                {
                  title: 'Modern India & Freedom Struggle',
                  points: [
                    'Advent of the British and Battles (Plassey, Buxar)',
                    'Revolt of 1857',
                    'Indian National Congress and key movements',
                    'Constitutional developments (Acts of 1909, 1919, 1935)',
                  ],
                },
              ],
              tips: ['Link events by year — chronological recall helps in statement-based questions.'],
            },
          },
          {
            id: 'polity',
            name: 'Polity',
            content: {
              heading: 'Indian Polity',
              intro:
                'Polity covers the Constitution, fundamental rights, parliament and judiciary — a high-yield area for SSC GA.',
              sections: [
                {
                  title: 'Constitution',
                  points: [
                    'Preamble and its keywords',
                    'Fundamental Rights (Articles 12–35)',
                    'Directive Principles of State Policy',
                    'Fundamental Duties (Article 51A)',
                  ],
                },
                {
                  title: 'Government Structure',
                  points: [
                    'President, Prime Minister and Council of Ministers',
                    'Parliament — Lok Sabha and Rajya Sabha',
                    'Supreme Court and High Courts',
                  ],
                },
              ],
              tips: ['Memorise the important Articles by number — direct questions are common.'],
            },
          },
        ],
      },
    ],
  },

  upsc: {
    examSlug: 'upsc',
    subjects: [
      {
        id: 'history',
        name: 'History',
        icon: History,
        description: 'Ancient, medieval and modern Indian history plus art & culture.',
        topics: [
          {
            id: 'ancient-india',
            name: 'Ancient India',
            content: {
              heading: 'Ancient India',
              intro:
                'UPSC demands conceptual depth in ancient Indian history — from prehistory to the Gupta age — with emphasis on art, architecture and administration.',
              sections: [
                {
                  title: 'Prehistory & Indus Valley',
                  points: [
                    'Palaeolithic, Mesolithic and Neolithic cultures',
                    'Indus Valley Civilisation — town planning, seals, trade',
                    'Decline theories of the Harappan civilisation',
                  ],
                },
                {
                  title: 'Mauryan & Gupta Age',
                  points: [
                    'Chandragupta Maurya and Chanakya\'s Arthashastra',
                    'Ashoka\'s dhamma and edicts',
                    'Gupta period — golden age of art and science',
                  ],
                },
              ],
              tips: ['For UPSC Mains, link art & culture with political history rather than studying in isolation.'],
            },
          },
          {
            id: 'modern-india',
            name: 'Modern India & Freedom Struggle',
            content: {
              heading: 'Modern India & Freedom Struggle',
              intro:
                'The freedom struggle is a core UPSC area spanning 1757 to 1947 — covering personalities, movements and constitutional developments.',
              sections: [
                {
                  title: 'Early Resistance',
                  points: [
                    'Bengal Partition (1905) and Swadeshi Movement',
                    'Rise of the Indian National Congress',
                    'Revolt of 1857 — causes and consequences',
                  ],
                },
                {
                  title: 'Gandhian Era',
                  points: [
                    'Non-Cooperation Movement (1920)',
                    'Civil Disobedience Movement (1930) and Dandi March',
                    'Quit India Movement (1942)',
                  ],
                },
              ],
              tips: ['For Mains, analyse causes, impact and limitations of each movement — not just dates.'],
            },
          },
        ],
      },
      {
        id: 'geography',
        name: 'Geography',
        icon: Map,
        description: 'Physical, Indian and world geography plus mapping.',
        topics: [
          {
            id: 'physical-geography',
            name: 'Physical Geography',
            content: {
              heading: 'Physical Geography',
              intro:
                'Physical geography covers geomorphology, climatology and oceanography — conceptual topics that appear in both Prelims and Mains.',
              sections: [
                {
                  title: 'Geomorphology',
                  points: [
                    'Plate tectonics and continental drift',
                    'Earthquakes, volcanoes and landform formation',
                    'Rock types — igneous, sedimentary, metamorphic',
                  ],
                },
                {
                  title: 'Climatology',
                  points: [
                    'Atmosphere — layers and composition',
                    'Wind systems and pressure belts',
                    'Monsoon mechanism and El Niño / La Niña',
                  ],
                },
              ],
              tips: ['Always relate physical processes to Indian examples (e.g. Himalayan orogeny).'],
            },
          },
        ],
      },
      {
        id: 'polity',
        name: 'Polity & Governance',
        icon: Landmark,
        description: 'Constitution, Parliament, judiciary and governance issues.',
        topics: [
          {
            id: 'constitution',
            name: 'Indian Constitution',
            content: {
              heading: 'Indian Constitution',
              intro:
                'The Constitution is the backbone of UPSC Prelims and Mains — covering its framing, features, and the balance of powers.',
              sections: [
                {
                  title: 'Framing & Features',
                  points: [
                    'Constituent Assembly — composition and sessions',
                    'Sources of the Constitution',
                    'Basic structure doctrine (Kesavananda Bharati case)',
                  ],
                },
                {
                  title: 'Fundamental Rights & DPSP',
                  points: [
                    'Articles 12–35 — Fundamental Rights',
                    'Directive Principles (Articles 36–51)',
                    'Fundamental Duties (Article 51A)',
                  ],
                },
              ],
              tips: ['Read landmark judgments — they are directly asked in Mains and useful for Prelims.'],
            },
          },
        ],
      },
      {
        id: 'economy',
        name: 'Economy',
        icon: IndianRupee,
        description: 'Macroeconomics, banking, fiscal policy and current economic issues.',
        topics: [
          {
            id: 'macroeconomics',
            name: 'Macroeconomics',
            content: {
              heading: 'Macroeconomics',
              intro:
                'Macroeconomics covers national income, inflation, banking and the balance of payments — heavily conceptual for UPSC.',
              sections: [
                {
                  title: 'National Income',
                  points: [
                    'GDP, GNP, NNP — distinctions',
                    'Real vs nominal GDP',
                    'Calculation methods — product, income, expenditure',
                  ],
                },
                {
                  title: 'Banking & Monetary Policy',
                  points: [
                    'RBI functions and tools of monetary policy',
                    'CRR, SLR, repo and reverse repo rates',
                    'Inflation — types and measurement (CPI, WPI)',
                  ],
                },
              ],
              tips: ['Link monetary policy moves to current RBI announcements for Mains answers.'],
            },
          },
        ],
      },
      {
        id: 'current-affairs',
        name: 'Current Affairs',
        icon: Newspaper,
        description: 'National and international events of the past year.',
        topics: [
          {
            id: 'national-affairs',
            name: 'National Affairs',
            content: {
              heading: 'National Affairs',
              intro:
                'Current affairs span government schemes, policy changes, judgments and significant national events of the preceding 12 months.',
              sections: [
                {
                  title: 'Key Areas',
                  points: [
                    'New government schemes and policy reforms',
                    'Supreme Court judgments of national importance',
                    'Census, elections and major commissions',
                  ],
                },
              ],
              tips: ['Make monthly notes linking current affairs with the syllabus for efficient revision.'],
            },
          },
        ],
      },
      {
        id: 'ethics',
        name: 'Ethics (GS-IV)',
        icon: Scale,
        description: 'Ethics, integrity and aptitude for UPSC Mains Paper IV.',
        topics: [
          {
            id: 'ethics-basics',
            name: 'Foundations of Ethics',
            content: {
              heading: 'Foundations of Ethics',
              intro:
                'GS-IV tests ethical reasoning through terms, thinkers and case studies. Understanding foundational concepts is essential for both theory and case-study answers.',
              sections: [
                {
                  title: 'Core Terms',
                  points: [
                    'Ethics, morality, integrity, aptitude',
                    'Emotional intelligence and its components',
                    'Attitude — components and types',
                  ],
                },
                {
                  title: 'Thinkers',
                  points: [
                    'Gandhi — truth and non-violence',
                    'Aristotle — virtue ethics',
                    'Kant — categorical imperative',
                  ],
                },
              ],
              tips: ['In case studies, identify stakeholders, options, and justify each with an ethical principle.'],
            },
          },
        ],
      },
    ],
  },
};

export function getSyllabus(examSlug: string): Syllabus | undefined {
  return syllabi[examSlug];
}

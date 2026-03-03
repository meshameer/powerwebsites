/**
 * Powerful Websites Directory – Website Data
 * ======================================
 * HOW TO ADD NEW WEBSITES:
 *   1. Open this file in any text editor
 *   2. Add a new object to the WEBSITE_DATA array below
 *   3. Follow the same structure as existing entries
 *   4. Save the file — the webpage will pick up changes automatically on refresh
 *
 * FIELDS:
 *   num        : (number)  Website number in the series (e.g. 231)
 *   name       : (string)  Website name
 *   emoji      : (string)  Single emoji representing the site
 *   url        : (string|null)  Full URL including https://, or null if discontinued
 *   short      : (string)  One-line function summary (shown as subtitle)
 *   desc       : (string)  Full description (2-4 sentences)
 *   features   : (array)   List of key feature strings (4-6 items)
 *   group      : (string)  Category — must match one of the GROUP_DEFINITIONS below
 *   discontinued: (boolean) true if the site no longer exists
 *
 * GROUPS (use exactly as written):
 *   "AI & Creative Tools"    "Productivity & Tools"   "Entertainment & Fun"
 *   "Research & Reference"   "Education & Learning"   "Music & Entertainment"
 *   "Food & Cooking"         "Shopping & Style"       "Travel & Navigation"
 *   "Health & Fitness"       "Home & Design"          "Privacy & Security"
 *   "Shopping & Collections" "Automotive"             "Discontinued"
 */

// ─── GROUP DEFINITIONS ────────────────────────────────────────────────────────
// Edit display order or add new groups here
const GROUP_DEFINITIONS = [
  { name: "AI & Creative Tools",    icon: "🤖" },
  { name: "Productivity & Tools",   icon: "🛠️" },
  { name: "Entertainment & Fun",    icon: "🎮" },
  { name: "Research & Reference",   icon: "🔍" },
  { name: "Education & Learning",   icon: "🎓" },
  { name: "Music & Entertainment",  icon: "🎵" },
  { name: "Food & Cooking",         icon: "🍽️" },
  { name: "Shopping & Style",       icon: "🛍️" },
  { name: "Travel & Navigation",    icon: "✈️" },
  { name: "Health & Fitness",       icon: "💪" },
  { name: "Home & Design",          icon: "🏡" },
  { name: "Privacy & Security",     icon: "🔒" },
  { name: "Shopping & Collections", icon: "🧱" },
  { name: "Automotive",             icon: "🚗" },
  { name: "Discontinued",           icon: "❌" },
];

// ─── WEBSITE DATA ─────────────────────────────────────────────────────────────
// To add new entries: append to the end of this array and increment the num
const WEBSITE_DATA = [
  {
    "num": 1,
    "name": "MuscleWiki",
    "emoji": "\ud83d\udcaa",
    "url": "https://musclewiki.com",
    "short": "Exercise Muscle Guide",
    "desc": "A visual, interactive guide to working out any muscle group. Click on any part of the body and get instant exercise recommendations with animations and instructions. No login required, no filler \u2014 just clean fitness content.",
    "features": [
      "Visual body map",
      "Exercise animations",
      "No account needed",
      "Free to use",
      "Beginner-friendly"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 2,
    "name": "Temp Mail",
    "emoji": "\u2709\ufe0f",
    "url": "https://temp-mail.org",
    "short": "Disposable Email Generator",
    "desc": "Instantly generates a temporary, disposable email address that auto-expires. Perfect for signing up to sites without revealing your real email, dodging spam, or testing sign-up flows.",
    "features": [
      "Instant temp inbox",
      "Auto-expiring address",
      "No sign-up needed",
      "Spam protection",
      "Free forever"
    ],
    "group": "Privacy & Security"
  },
  {
    "num": 3,
    "name": "Just The Recipe",
    "emoji": "\ud83c\udf73",
    "url": "https://www.justtherecipe.com",
    "short": "Recipe Extractor (No Fluff)",
    "desc": "Paste any recipe URL and instantly get just the ingredients and cooking instructions \u2014 stripped of all the blog backstory, ads, and life stories. Clean, fast, and ad-free recipe reading.",
    "features": [
      "Removes recipe blog clutter",
      "Instant extraction",
      "No ads",
      "Any recipe URL",
      "Print-friendly output"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 4,
    "name": "Google Airport Wifi",
    "emoji": "\u2708\ufe0f",
    "url": null,
    "short": "Airport Wifi Map (Discontinued)",
    "desc": "Was a map showing wifi passwords and speeds at airports worldwide. The map no longer exists, though the original TikTok video is still available.",
    "features": [
      "Discontinued"
    ],
    "group": "Discontinued"
  },
  {
    "num": 5,
    "name": "McBroken",
    "emoji": "\ud83c\udf66",
    "url": "https://mcbroken.com",
    "short": "McDonald's Ice Cream Tracker",
    "desc": "Real-time map showing which McDonald's locations have broken ice cream machines. Checks the McDonald's API every few minutes and maps the results across the US so you never get disappointed again.",
    "features": [
      "Real-time tracking",
      "US-wide map",
      "API-powered",
      "Free to use",
      "Regularly updated"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 6,
    "name": "MyFridgeFood",
    "emoji": "\ud83e\udd55",
    "url": "https://myfridgefood.com",
    "short": "Fridge-to-Recipe Finder",
    "desc": "Enter the ingredients you already have in your fridge and get matched with real recipes you can actually make. Great for reducing food waste, lazy nights, and avoiding unnecessary grocery runs.",
    "features": [
      "Ingredient-based search",
      "Real recipe database",
      "Reduces food waste",
      "Free to use",
      "No account needed"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 7,
    "name": "My Retro TVs",
    "emoji": "\ud83d\udcfa",
    "url": "https://myretrotvs.com",
    "short": "Vintage TV Channel Simulator",
    "desc": "Flip through simulated TV channels from the 1950s through the early 2000s, complete with real commercials, shows, and clips from each decade. A nostalgia machine for anyone who misses old-school channel surfing.",
    "features": [
      "Decade-filtered channels",
      "Real vintage clips",
      "Era-authentic commercials",
      "Interactive channel surfing",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 8,
    "name": "Eat This Much",
    "emoji": "\ud83e\udd57",
    "url": "https://www.eatthismuch.com",
    "short": "Automated Meal Planner",
    "desc": "Automatically generates personalized meal plans based on your calorie goals, dietary preferences, and budget. Saves hours of meal planning by creating full weekly menus with shopping lists.",
    "features": [
      "Calorie-goal planning",
      "Diet preference filters",
      "Auto shopping list",
      "Budget-aware",
      "Free tier available"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 9,
    "name": "JustWatch",
    "emoji": "\ud83c\udfac",
    "url": "https://www.justwatch.com",
    "short": "Streaming Availability Finder",
    "desc": "Search any movie or TV show and instantly see which streaming services it's available on. Covers Netflix, Hulu, Disney+, Prime, and hundreds more across different countries.",
    "features": [
      "Multi-platform search",
      "Price comparison",
      "Watchlist feature",
      "Country filters",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 10,
    "name": "Worn On TV",
    "emoji": "\ud83d\udc57",
    "url": "https://www.wornontv.net",
    "short": "TV Show Fashion Finder",
    "desc": "Find and shop the exact clothing worn by characters in your favourite TV shows. Browse by show or character to discover where to buy the outfits you've spotted on screen.",
    "features": [
      "Show-indexed fashion",
      "Direct shopping links",
      "Character filtering",
      "Covers major TV shows",
      "Free browsing"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 11,
    "name": "Drive & Listen",
    "emoji": "\ud83d\ude97",
    "url": "https://driveandlisten.herokuapp.com",
    "short": "Virtual City Drive Experience",
    "desc": "Virtually drive through cities around the world while listening to local radio stations. Choose a city, pick a speed, and watch dashcam footage while hearing authentic local music and broadcasts.",
    "features": [
      "World city selection",
      "Live local radio",
      "Speed control",
      "Immersive dashcam view",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 12,
    "name": "Hotpot AI",
    "emoji": "\ud83e\udd16",
    "url": "https://hotpot.ai",
    "short": "AI Image & Graphics Suite",
    "desc": "A collection of AI-powered tools for image restoration, background removal, art generation, and more. Useful for designers, marketers, and anyone needing quick AI-enhanced visuals.",
    "features": [
      "AI image restoration",
      "Background removal",
      "Art generation",
      "Multiple tools in one",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 13,
    "name": "Body Visualizer",
    "emoji": "\ud83c\udfcb\ufe0f",
    "url": "https://bodyvisualizer.is.tue.mpg.de",
    "short": "3D Body Shape Simulator",
    "desc": "Visualize how changes in height, weight, and body measurements affect your 3D body shape. Great for fitness goal setting and understanding how body composition changes over time.",
    "features": [
      "3D body rendering",
      "Adjustable measurements",
      "BMI visualization",
      "Goal comparison",
      "Free to use"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 14,
    "name": "Make Me A Cocktail",
    "emoji": "\ud83c\udf78",
    "url": "https://makemeacocktail.com",
    "short": "Ingredient-Based Cocktail Finder",
    "desc": "Enter the spirits and mixers you have at home and discover cocktails you can actually make. Covers thousands of recipes with ratings, instructions, and glass recommendations.",
    "features": [
      "Ingredient-based search",
      "Thousands of recipes",
      "Ratings & reviews",
      "Step-by-step instructions",
      "Free to use"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 15,
    "name": "TuneFind",
    "emoji": "\ud83c\udfb5",
    "url": "https://tunefind.com",
    "short": "TV & Movie Song Identifier",
    "desc": "Find every song used in any TV show, movie, or video game scene. Browse by episode to discover and stream the exact tracks you heard while watching.",
    "features": [
      "Episode-level song search",
      "Covers shows, films & games",
      "Spotify/Apple Music links",
      "Community-sourced data",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 16,
    "name": "Play Retro Games",
    "emoji": "\ud83d\udd79\ufe0f",
    "url": "https://playretrogames.online",
    "short": "Browser-Based Retro Gaming",
    "desc": "Play classic retro console games directly in your browser with no downloads. Covers NES, SNES, Sega, Game Boy, and many other classic platforms.",
    "features": [
      "No download needed",
      "Multi-console support",
      "Thousands of games",
      "Save state support",
      "Free to play"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 17,
    "name": "Plan Your Room",
    "emoji": "\ud83c\udfe1",
    "url": "http://www.planyourroom.com",
    "short": "Online Room Layout Planner",
    "desc": "Drag and drop furniture to plan your room layout before moving anything. Set your room dimensions, add furniture pieces, and visualise different arrangements easily.",
    "features": [
      "Drag-and-drop layout",
      "Custom room dimensions",
      "Furniture library",
      "Print-ready output",
      "Free to use"
    ],
    "group": "Home & Design"
  },
  {
    "num": 18,
    "name": "AlternativeTo",
    "emoji": "\ud83d\udd04",
    "url": "https://alternativeto.net",
    "short": "Software Alternative Finder",
    "desc": "Find free or cheaper alternatives to any app, software, or online service. Just search for a tool you use and instantly see community-recommended replacements.",
    "features": [
      "Huge software database",
      "Community ratings",
      "Filter by OS/license",
      "Open source options",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 19,
    "name": "Radiooooo",
    "emoji": "\ud83d\udcfb",
    "url": "https://radiooooo.com",
    "short": "Time-Traveling Music Radio",
    "desc": "Listen to music from any country in any decade, going all the way back to the 1900s. A visual world map lets you pick an era and region to explore authentic local music from that time period.",
    "features": [
      "Decade & country selector",
      "Historical music archive",
      "Visual world map",
      "Curated playlists",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 20,
    "name": "How Normal Am I",
    "emoji": "\ud83e\uddd0",
    "url": "https://www.hownormalami.eu",
    "short": "AI Face Normality Analyzer",
    "desc": "An interactive web documentary that uses AI to analyze your face via webcam and tell you how 'normal' you are by various metrics \u2014 age estimation, attractiveness scoring, BMI, and more. A fascinating look at AI bias.",
    "features": [
      "Real-time webcam AI",
      "Age & BMI estimation",
      "AI bias awareness",
      "Interactive documentary",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 21,
    "name": "SMMRY",
    "emoji": "\ud83d\udcdd",
    "url": "https://smmry.com",
    "short": "Article Summarizer",
    "desc": "Automatically summarizes any article, blog post, or wall of text into a concise, readable version. Paste text or a URL and get the key points in seconds. Great for digesting long reads quickly.",
    "features": [
      "URL & text input",
      "Adjustable summary length",
      "Key sentence extraction",
      "No account needed",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 22,
    "name": "Amazon StyleSnap",
    "emoji": "\ud83d\udc57",
    "url": "https://www.amazon.com/stylesnap",
    "short": "Visual Fashion Search on Amazon",
    "desc": "Upload a photo of an outfit or fashion item and Amazon's AI finds similar products for sale. Great for finding affordable versions of expensive looks or identifying items you've seen on social media.",
    "features": [
      "Photo-based search",
      "Amazon product matching",
      "Style similarity AI",
      "Broad price range",
      "Integrated shopping"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 23,
    "name": "Symbolab",
    "emoji": "\ud83e\uddee",
    "url": "https://www.symbolab.com",
    "short": "AI Math Problem Solver",
    "desc": "A powerful step-by-step math solver covering algebra, calculus, trigonometry, and more. Shows detailed working for every answer \u2014 ideal for students learning or verifying their work.",
    "features": [
      "Step-by-step solutions",
      "Wide math coverage",
      "Graphing capability",
      "Practice problems",
      "Free tier available"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 24,
    "name": "HouseCreep",
    "emoji": "\ud83c\udfda\ufe0f",
    "url": "https://www.housecreep.com",
    "short": "Property History & Death Finder",
    "desc": "Find out if someone died in a house or property, and other dark historical facts about addresses. Useful for home buyers wanting full transparency about a property's past.",
    "features": [
      "Death & incident records",
      "Address search",
      "Property history",
      "US coverage",
      "Community-sourced data"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 25,
    "name": "TheInpaint",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://theinpaint.com",
    "short": "AI Photo Object Remover",
    "desc": "Remove unwanted objects, people, or watermarks from photos using AI inpainting. Just brush over what you want removed and the AI fills it in naturally. No Photoshop skills needed.",
    "features": [
      "AI object removal",
      "Brush-based selection",
      "Natural background fill",
      "No install required",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 26,
    "name": "Remove.bg",
    "emoji": "\u2702\ufe0f",
    "url": "https://remove.bg",
    "short": "Instant Background Remover",
    "desc": "Automatically removes the background from any photo in seconds using AI. Works great for portraits, products, and objects. Outputs a clean transparent PNG ready for use anywhere.",
    "features": [
      "Instant AI removal",
      "Transparent PNG output",
      "API available",
      "Bulk processing option",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 27,
    "name": "Will Robots Take My Job",
    "emoji": "\ud83e\udd16",
    "url": "https://willrobotstakemyjob.com",
    "short": "Job Automation Risk Checker",
    "desc": "Enter any job title and see the probability that AI or automation will replace it in the future. Based on Oxford University research data with risk percentages and timelines for hundreds of occupations.",
    "features": [
      "Oxford research data",
      "Risk percentage scores",
      "Hundreds of job types",
      "Timeline estimates",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 28,
    "name": "Amazon Outlet",
    "emoji": "\ud83d\uded2",
    "url": "https://www.amazon.com/Outlet",
    "short": "Amazon Discounted Overstock Deals",
    "desc": "Amazon's hidden outlet section featuring overstock, clearance, and open-box items at significantly reduced prices. Often overlooked by shoppers but packed with genuine deals across all categories.",
    "features": [
      "Overstock & clearance",
      "Open-box items",
      "Big brand discounts",
      "All categories",
      "Prime shipping eligible"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 29,
    "name": "RetailMeNot",
    "emoji": "\ud83c\udff7\ufe0f",
    "url": "https://retailmenot.com",
    "short": "Coupon & Promo Code Aggregator",
    "desc": "Find verified discount codes, cashback offers, and printable coupons for thousands of online and in-store retailers. Saves money on virtually any purchase with community-verified deals.",
    "features": [
      "Verified coupon codes",
      "Cashback offers",
      "In-store coupons",
      "Thousands of retailers",
      "Free to use"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 30,
    "name": "KickResume",
    "emoji": "\ud83d\udcc4",
    "url": "https://www.kickresume.com",
    "short": "AI-Powered Resume Builder",
    "desc": "Build a professional, ATS-friendly resume with AI assistance. Choose from hundreds of templates, use AI to write bullet points, and export to PDF or Word. Includes cover letter builder.",
    "features": [
      "AI writing assistance",
      "ATS-friendly templates",
      "Cover letter builder",
      "PDF & Word export",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 31,
    "name": "FotoForensics",
    "emoji": "\ud83d\udd0d",
    "url": "http://fotoforensics.com",
    "short": "Photo Manipulation Detector",
    "desc": "Analyzes images for signs of digital manipulation using error level analysis (ELA). Upload any photo to see if it's been edited, tampered with, or photoshopped. Useful for verifying image authenticity.",
    "features": [
      "Error level analysis",
      "Metadata inspection",
      "Free image analysis",
      "No login needed",
      "Educational resources"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 32,
    "name": "Yummly",
    "emoji": "\ud83c\udf7d\ufe0f",
    "url": "https://www.yummly.com",
    "short": "Smart Recipe & Meal Planner",
    "desc": "A personalized recipe discovery platform powered by AI that learns your taste preferences, dietary restrictions, and cooking skill level over time to serve ever-improving recommendations.",
    "features": [
      "AI taste profiling",
      "Diet & allergy filters",
      "Step-by-step cooking mode",
      "Shopping list sync",
      "Free to use"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 33,
    "name": "Photopea",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.photopea.com",
    "short": "Free Browser-Based Photoshop",
    "desc": "A full-featured photo and graphic editor that runs entirely in your browser \u2014 no download, no subscription. Compatible with PSD, XCF, Sketch files and supports layers, masks, and advanced editing.",
    "features": [
      "Full Photoshop-like editor",
      "PSD file support",
      "No download needed",
      "Layer & mask support",
      "Completely free"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 34,
    "name": "CityProtect",
    "emoji": "\ud83d\ude94",
    "url": "https://cityprotect.com",
    "short": "Local Crime Map & Alerts",
    "desc": "View real-time crime data and police reports on an interactive map for your neighbourhood or any area you're interested in. Helps you stay informed about local safety incidents.",
    "features": [
      "Real-time crime map",
      "Police report data",
      "Neighbourhood alerts",
      "US city coverage",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 35,
    "name": "Cheatography",
    "emoji": "\ud83d\udccb",
    "url": "https://cheatography.com",
    "short": "Cheat Sheet Library",
    "desc": "A massive library of downloadable cheat sheets covering programming languages, software, keyboard shortcuts, maths, and more. Community-created and searchable by topic.",
    "features": [
      "Thousands of cheat sheets",
      "PDF download",
      "Community-created",
      "Broad topic coverage",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 36,
    "name": "Explore.org",
    "emoji": "\ud83c\udf3f",
    "url": "https://explore.org",
    "short": "Live Nature & Wildlife Cameras",
    "desc": "Watch live HD nature cameras from around the world \u2014 bears, birds, ocean reefs, African safaris, and more. All streams are free, ad-light, and updated with new cam locations regularly.",
    "features": [
      "Live wildlife streams",
      "Global camera network",
      "HD quality",
      "Free to watch",
      "New locations added regularly"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 37,
    "name": "Lozo",
    "emoji": "\ud83c\udfea",
    "url": "https://lozo.com",
    "short": "Grocery Coupon Finder",
    "desc": "Automatically finds and applies grocery coupons to your shopping list. Links with major supermarket loyalty cards to surface the best available deals on your regular buys.",
    "features": [
      "Grocery-specific coupons",
      "Loyalty card sync",
      "Auto-deal matching",
      "Major chain coverage",
      "Free to use"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 38,
    "name": "CodinGame",
    "emoji": "\ud83d\udcbb",
    "url": "https://www.codingame.com",
    "short": "Game-Based Coding Practice",
    "desc": "Learn and practice programming through games, puzzles, and coding challenges. Supports 25+ languages and includes multiplayer battles and company-sponsored hiring challenges.",
    "features": [
      "25+ coding languages",
      "Game-based learning",
      "Multiplayer battles",
      "Company challenges",
      "Free to play"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 39,
    "name": "Amazon Warehouse",
    "emoji": "\ud83d\udce6",
    "url": "https://us.amazon.com/Warehouse-Deals",
    "short": "Amazon Used & Open-Box Deals",
    "desc": "Browse Amazon's warehouse deals section for returned, open-box, and used products at steep discounts. Items are graded by condition and backed by Amazon's standard return policy.",
    "features": [
      "Open-box discounts",
      "Condition grading",
      "Amazon return policy",
      "All categories",
      "Prime shipping eligible"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 40,
    "name": "FutureMe",
    "emoji": "\ud83d\udcee",
    "url": "https://www.futureme.org",
    "short": "Send Emails to Your Future Self",
    "desc": "Write a letter or email to your future self, set a delivery date (up to 30 years ahead), and FutureMe sends it on that exact date. Great for setting goals, reflecting, or leaving notes for future milestones.",
    "features": [
      "Future email scheduling",
      "Up to 30 years ahead",
      "Private or public letters",
      "Reminder goals",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 41,
    "name": "Radiooooo",
    "emoji": "\ud83d\udcfb",
    "url": "https://radiooooo.com",
    "short": "Decade & Country Music Radio",
    "desc": "Travel through musical history by selecting any country and any decade on a world map. Hear authentic local music from that era, from jazz-era America to 80s Japanese pop.",
    "features": [
      "World map interface",
      "Decade selector",
      "Country-specific music",
      "Historical archives",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 42,
    "name": "How Normal Am I",
    "emoji": "\ud83d\udd2c",
    "url": "https://www.hownormalami.eu",
    "short": "AI Face Analysis Documentary",
    "desc": "An interactive web experience using AI to analyze your face and compare various physical features against population averages. Highlights AI bias and is built as an educational documentary.",
    "features": [
      "Webcam AI analysis",
      "Bias education",
      "Interactive experience",
      "Research-backed",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 43,
    "name": "CamelCamelCamel",
    "emoji": "\ud83d\udc2b",
    "url": "https://camelcamelcamel.com",
    "short": "Amazon Price History Tracker",
    "desc": "Track the price history of any Amazon product and set alerts for when prices drop to your target. See price trends over months or years to know whether you're actually getting a good deal.",
    "features": [
      "Full price history charts",
      "Price drop alerts",
      "Amazon integration",
      "Browser extension",
      "Free to use"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 44,
    "name": "Forebears",
    "emoji": "\ud83c\udf0d",
    "url": "https://forebears.io",
    "short": "Global Surname & Name Origin Finder",
    "desc": "Research the origin, meaning, and global distribution of any surname or first name. See where your family name is most common and how rare it is worldwide.",
    "features": [
      "Global name distribution",
      "Surname history",
      "Interactive world map",
      "Population statistics",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 45,
    "name": "Flightradar24",
    "emoji": "\u2708\ufe0f",
    "url": "https://www.flightradar24.com",
    "short": "Live Global Flight Tracker",
    "desc": "Track any flight in real time on a live global map. See aircraft positions, altitude, speed, flight history, and airport activity. Includes detailed info on every tracked aircraft.",
    "features": [
      "Real-time flight tracking",
      "Global coverage",
      "Aircraft details",
      "Flight history",
      "Free basic tier"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 46,
    "name": "RSOE EDIS",
    "emoji": "\u26a0\ufe0f",
    "url": "https://rsoe-edis.org",
    "short": "Real-Time Global Disaster Map",
    "desc": "A live map showing natural disasters, hazards, and emergency events happening around the world right now \u2014 including earthquakes, floods, storms, wildfires, and biological events.",
    "features": [
      "Live disaster tracking",
      "Global event map",
      "Multiple hazard types",
      "Real-time updates",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 47,
    "name": "MarineTraffic",
    "emoji": "\ud83d\udea2",
    "url": "https://www.marinetraffic.com",
    "short": "Live Ship & Vessel Tracker",
    "desc": "Track ships, tankers, cargo vessels, and yachts in real time on an interactive global map. See vessel details, route history, port arrivals, and live AIS position data.",
    "features": [
      "Real-time AIS tracking",
      "Global vessel map",
      "Ship details & history",
      "Port activity",
      "Free basic tier"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 48,
    "name": "SlidesCarnival",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.slidescarnival.com",
    "short": "Free Presentation Templates",
    "desc": "A library of beautiful, professionally designed presentation templates for Google Slides and PowerPoint. All templates are free to download and use, updated regularly with new designs.",
    "features": [
      "Google Slides compatible",
      "PowerPoint compatible",
      "Regularly updated",
      "Fully editable",
      "Free to download"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 49,
    "name": "NightCafe Studio",
    "emoji": "\ud83c\udfa8",
    "url": "https://creator.nightcafe.studio",
    "short": "AI Art Generator",
    "desc": "Create stunning AI-generated artwork using various art styles and generation algorithms. Supports text-to-image, style transfer, and more. Community gallery for sharing creations.",
    "features": [
      "Multiple AI art styles",
      "Text-to-image",
      "Style transfer",
      "Community gallery",
      "Free credits daily"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 50,
    "name": "Nuke Map",
    "emoji": "\ud83d\udca5",
    "url": "https://outrider.org/nuclear-weapons/interactive/bomb-blast",
    "short": "Nuclear Blast Radius Simulator",
    "desc": "An interactive map that simulates the blast radius and effects of a nuclear detonation at any location in the world. Educational tool built on declassified data to illustrate the scale of nuclear weapons.",
    "features": [
      "Any global location",
      "Multiple weapon sizes",
      "Blast radius visualization",
      "Casualty estimates",
      "Educational context"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 51,
    "name": "NightCafe Studio",
    "emoji": "\ud83c\udfa8",
    "url": "https://creator.nightcafe.studio",
    "short": "AI Art Generation Platform",
    "desc": "Generate AI art with text prompts using various powerful models. Includes a community for sharing work, daily free credits, and multiple generation styles from photorealistic to abstract.",
    "features": [
      "Text-to-image AI",
      "Multiple art styles",
      "Daily free credits",
      "Community sharing",
      "No coding needed"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 52,
    "name": "Nuke Map",
    "emoji": "\ud83d\udca5",
    "url": "https://outrider.org/nuclear-weapons/interactive/bomb-blast",
    "short": "Nuclear Weapon Effects Simulator",
    "desc": "Simulate nuclear detonation effects at any map location. See blast radius zones, thermal radiation, fallout areas, and estimated casualties based on weapon size. Educational and sobering.",
    "features": [
      "Location-based simulation",
      "Multiple bomb types",
      "Radius zone mapping",
      "Casualty estimates",
      "Educational use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 53,
    "name": "Roomstyler",
    "emoji": "\ud83d\udecb\ufe0f",
    "url": "https://roomstyler.com",
    "short": "3D Room Design Tool",
    "desc": "Design and furnish rooms in full 3D using a drag-and-drop interface. Choose from thousands of real furniture products, render photorealistic views, and share your room designs.",
    "features": [
      "3D room builder",
      "Real product catalogue",
      "Photorealistic renders",
      "Drag-and-drop interface",
      "Free to use"
    ],
    "group": "Home & Design"
  },
  {
    "num": 54,
    "name": "LeoLabs",
    "emoji": "\ud83d\udef0\ufe0f",
    "url": "https://leolabs.space",
    "short": "Live Satellite & Debris Tracker",
    "desc": "Visualize thousands of satellites and space debris objects in real-time 3D orbit. LeoLabs tracks low Earth orbit to prevent collisions and provides commercial space situational awareness.",
    "features": [
      "Real-time orbit tracking",
      "Collision risk analysis",
      "3D visualization",
      "LEO coverage",
      "Space debris mapping"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 55,
    "name": "How Secure Is My Password",
    "emoji": "\ud83d\udd12",
    "url": "https://www.security.org/how-secure-is-my-password",
    "short": "Password Strength Estimator",
    "desc": "Type any password and instantly see how long it would take a computer to crack it \u2014 ranging from milliseconds to billions of years. Fully private, nothing is stored or transmitted.",
    "features": [
      "Instant crack time estimate",
      "Privacy-focused",
      "No data stored",
      "Strength recommendations",
      "Free to use"
    ],
    "group": "Privacy & Security"
  },
  {
    "num": 56,
    "name": "Stellarium Web",
    "emoji": "\ud83c\udf0c",
    "url": "https://stellarium-web.org",
    "short": "Interactive Planetarium & Star Map",
    "desc": "A full planetarium in your browser. Explore the night sky with a real-time, location-based star map showing constellations, planets, satellites, and deep-sky objects in stunning detail.",
    "features": [
      "Real-time sky rendering",
      "Location-based view",
      "Constellation guide",
      "Planet tracking",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 57,
    "name": "MyHeritage Deep Nostalgia",
    "emoji": "\ud83d\udc74",
    "url": "https://www.myheritage.com/deep-nostalgia",
    "short": "AI Photo Animation Tool",
    "desc": "Animate old family photos with AI to make historical portraits move and look around. Brings loved ones in old photographs to life with realistic facial movement animations.",
    "features": [
      "AI photo animation",
      "Realistic movement",
      "Old photo enhancement",
      "Family history focus",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 58,
    "name": "Find A Grave",
    "emoji": "\u26b0\ufe0f",
    "url": "https://www.findagrave.com",
    "short": "Grave & Memorial Database",
    "desc": "Search a massive database of memorial pages for people buried worldwide, including photos of gravestones, biographical info, and family connections. Community-maintained with millions of records.",
    "features": [
      "Global grave database",
      "Gravestone photos",
      "Biographical records",
      "Family tree linking",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 59,
    "name": "Broadcastify",
    "emoji": "\ud83d\udce1",
    "url": "https://www.broadcastify.com",
    "short": "Live Police & Emergency Radio Scanner",
    "desc": "Listen to live police, fire, emergency, aviation, and rail radio feeds from across the US and beyond. Thousands of active feeds updated in real time from public safety frequencies.",
    "features": [
      "Live radio feeds",
      "Police & fire scanner",
      "Aviation frequencies",
      "Thousands of locations",
      "Free basic tier"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 60,
    "name": "Online OCR",
    "emoji": "\ud83d\udcc4",
    "url": "https://www.onlineocr.net",
    "short": "Image to Text Extractor",
    "desc": "Extract text from images, scanned PDFs, and photos using OCR technology. Supports dozens of languages and outputs to editable Word, Excel, or plain text formats.",
    "features": [
      "Multi-language OCR",
      "Image & PDF support",
      "Word/Excel/text output",
      "No install needed",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 61,
    "name": "Panzoid",
    "emoji": "\ud83c\udfac",
    "url": "https://panzoid.com",
    "short": "Free Video Intro & 3D Animation Maker",
    "desc": "Create 3D animated video intros, backgrounds, and effects entirely in your browser. Popular among YouTubers and content creators for making professional-looking openers without expensive software.",
    "features": [
      "Browser-based 3D editor",
      "Video intro templates",
      "Custom text & logos",
      "Export to video",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 62,
    "name": "DaVinci Resolve",
    "emoji": "\ud83c\udf9e\ufe0f",
    "url": "https://www.blackmagicdesign.com",
    "short": "Professional Free Video Editor",
    "desc": "Industry-standard professional video editing software with full color grading, audio production, and visual effects tools \u2014 all completely free. Used by Hollywood professionals and indie creators alike.",
    "features": [
      "Professional-grade editing",
      "Full color grading suite",
      "Audio post-production",
      "VFX capabilities",
      "Free forever"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 63,
    "name": "Unscreen",
    "emoji": "\u2702\ufe0f",
    "url": "https://www.unscreen.com",
    "short": "Video Background Remover",
    "desc": "Automatically remove the background from any video clip without needing a green screen. Upload your video and get a clean transparent background version in seconds.",
    "features": [
      "Automatic background removal",
      "No green screen needed",
      "Transparent video output",
      "Fast processing",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 64,
    "name": "Dictation.io",
    "emoji": "\ud83c\udf99\ufe0f",
    "url": "https://dictation.io",
    "short": "Free Voice-to-Text Transcription",
    "desc": "Speak into your microphone and watch your words appear in real time as text. Supports multiple languages, punctuation commands, and works entirely in the browser with no account needed.",
    "features": [
      "Real-time transcription",
      "Multi-language support",
      "Punctuation commands",
      "No login needed",
      "Completely free"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 65,
    "name": "Snapdrop",
    "emoji": "\ud83d\udcf2",
    "url": "https://snapdrop.net",
    "short": "Browser-Based AirDrop Alternative",
    "desc": "Share files between any devices on the same WiFi network directly from the browser \u2014 no apps, no accounts, no cables. Works like AirDrop but for any device on any OS.",
    "features": [
      "No app needed",
      "Cross-platform",
      "Same-network sharing",
      "No account required",
      "Completely free"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 66,
    "name": "Secret Flix Codes",
    "emoji": "\ud83c\udfac",
    "url": "https://www.secretflixcodes.com",
    "short": "Netflix Hidden Category Codes",
    "desc": "Access hidden Netflix genre categories that don't appear in the normal browse interface by using special numeric codes. Hundreds of niche categories from cult films to independent documentaries.",
    "features": [
      "Hundreds of hidden genres",
      "Direct Netflix links",
      "Category browser",
      "Updated regularly",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 67,
    "name": "Rave.dj",
    "emoji": "\ud83c\udfb5",
    "url": "https://rave.dj",
    "short": "AI Music Mashup Maker",
    "desc": "Mash together two songs using AI to create an instant music mashup. Paste two YouTube or Spotify links and the AI blends them into a surprisingly coherent new track.",
    "features": [
      "Two-song AI mashup",
      "YouTube & Spotify input",
      "Instant generation",
      "Free to create",
      "Shareable output"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 68,
    "name": "Tailor Brands",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.tailorbrands.com",
    "short": "AI Logo & Brand Identity Creator",
    "desc": "Design a professional logo and full brand identity package using AI. Answer a few questions about your business and get logo options, brand colours, and marketing assets generated instantly.",
    "features": [
      "AI logo generation",
      "Brand identity package",
      "Multiple style options",
      "Social media assets",
      "Free preview"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 69,
    "name": "Natural Reader",
    "emoji": "\ud83d\udd0a",
    "url": "https://www.naturalreaders.com",
    "short": "Text-to-Speech Reader",
    "desc": "Convert any text, document, PDF, or webpage into natural-sounding spoken audio. Choose from dozens of AI voices and languages. Great for accessibility, studying, or multitasking.",
    "features": [
      "Natural AI voices",
      "PDF & document support",
      "Multi-language",
      "Browser extension",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 70,
    "name": "Lightning Maps",
    "emoji": "\u26a1",
    "url": "https://www.lightningmaps.org",
    "short": "Real-Time Global Lightning Tracker",
    "desc": "Watch lightning strikes appear on a live world map in real time. See storm fronts moving, track lightning density, and zoom into any location to monitor electrical storm activity.",
    "features": [
      "Real-time strike tracking",
      "Global coverage",
      "Storm front visualization",
      "Zoom & location filter",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 71,
    "name": "TailorNova",
    "emoji": "\ud83d\udc54",
    "url": "https://tailornova.com",
    "short": "AI Fashion Design Tool",
    "desc": "Design custom clothing patterns and fashion items using AI. Upload sketches or use text descriptions to generate garment designs, patterns, and style variations for fashion creators.",
    "features": [
      "AI pattern generation",
      "Text-to-design",
      "Style variation",
      "Fashion-focused",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 72,
    "name": "Animatron",
    "emoji": "\ud83c\udfad",
    "url": "https://animatron.com",
    "short": "Online Animation & Video Creator",
    "desc": "Create HTML5 animations and explainer videos in your browser. Features a timeline editor, pre-built character library, and export to multiple formats for web and social media.",
    "features": [
      "HTML5 animation",
      "Character library",
      "Timeline editor",
      "Multi-format export",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 73,
    "name": "Gardena My Garden",
    "emoji": "\ud83c\udf31",
    "url": "https://my-garden.gardena.com",
    "short": "Garden Planner & Designer",
    "desc": "Plan and design your garden layout online. Place plants, paths, water features, and structures on a digital plot. Get plant care recommendations and watering schedules.",
    "features": [
      "Garden layout planner",
      "Plant library",
      "Care recommendations",
      "Watering schedules",
      "Free to use"
    ],
    "group": "Home & Design"
  },
  {
    "num": 74,
    "name": "You.DJ",
    "emoji": "\ud83c\udfa7",
    "url": "https://you.dj",
    "short": "Browser-Based DJ Mixer",
    "desc": "Mix and crossfade music directly in your browser using YouTube as your source library. Load two tracks, adjust EQ, speed, and effects, and mix like a real DJ \u2014 no software needed.",
    "features": [
      "YouTube source library",
      "Two-deck mixing",
      "EQ & effects",
      "Crossfader",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 75,
    "name": "Vocal Remover",
    "emoji": "\ud83c\udfa4",
    "url": "https://vocalremover.com",
    "short": "AI Vocal & Instrumental Separator",
    "desc": "Separate vocals from instrumentals in any song using AI. Upload an audio file and get separate vocal and backing track versions in seconds. Great for karaoke or music production.",
    "features": [
      "AI stem separation",
      "Vocal & instrumental split",
      "MP3/WAV support",
      "Fast processing",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 76,
    "name": "Sleepyti.me",
    "emoji": "\ud83d\ude34",
    "url": "https://sleepyti.me",
    "short": "Sleep Cycle Calculator",
    "desc": "Calculate the optimal time to wake up or go to sleep based on sleep cycles to avoid waking during deep sleep. Enter your bedtime or wake time and get cycle-optimised suggestions.",
    "features": [
      "Sleep cycle calculation",
      "Wake time planner",
      "Bedtime calculator",
      "Science-based",
      "Free to use"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 77,
    "name": "EssayTyper",
    "emoji": "\ud83d\udcdd",
    "url": "https://essaytyper.com",
    "short": "Auto Essay Generator (Novelty)",
    "desc": "Type any topic and watch an essay magically write itself in real time. Originally a novelty/joke tool, but it pulls from Wikipedia content to generate flowing text on any subject.",
    "features": [
      "Instant essay generation",
      "Any topic",
      "Wikipedia-powered",
      "Novelty entertainment",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 78,
    "name": "Online Sequencer",
    "emoji": "\ud83c\udfbc",
    "url": "https://onlinesequencer.net",
    "short": "Browser-Based Music Sequencer",
    "desc": "Create melodies and music sequences directly in your browser using a piano roll-style grid. Choose from multiple instruments, export to MIDI, and share compositions with the community.",
    "features": [
      "Piano roll editor",
      "Multiple instruments",
      "MIDI export",
      "Community sharing",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 79,
    "name": "Synthesia",
    "emoji": "\ud83c\udfb9",
    "url": "https://synthesia.io",
    "short": "AI Video Avatar Creator",
    "desc": "Create professional videos with AI-generated presenters speaking your script. No camera or crew needed \u2014 type your text, pick an avatar, and generate a polished talking-head video.",
    "features": [
      "AI video avatars",
      "Text-to-video",
      "Multiple languages",
      "Custom avatars",
      "Free trial available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 80,
    "name": "Synthesia",
    "emoji": "\ud83c\udfb9",
    "url": "https://synthesia.io",
    "short": "AI Presenter Video Platform",
    "desc": "Turn written scripts into professional video content with lifelike AI presenters. Widely used for training videos, product demos, and corporate communications without studio costs.",
    "features": [
      "Lifelike AI avatars",
      "Script-to-video",
      "Corporate-ready output",
      "Multi-language support",
      "Trial available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 81,
    "name": "Cobalt Tools",
    "emoji": "\ud83d\udd27",
    "url": "https://cobalt.tools",
    "short": "Free Video & Audio Downloader",
    "desc": "A free, simple, and clean tool for downloading videos, audio, and thumbnails from YouTube and many other platforms. No ads, no tracking, no bloat \u2014 just paste a link and download.",
    "features": [
      "Multi-platform support",
      "Audio & video download",
      "Thumbnail extraction",
      "No ads or tracking",
      "Completely free"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 82,
    "name": "Synthesia",
    "emoji": "\ud83d\udde3\ufe0f",
    "url": "https://synthesia.io",
    "short": "AI Presenter Video Generator",
    "desc": "Transform plain text into professional videos featuring AI-generated presenters with lifelike voiceovers. Perfect for tutorials, training content, and marketing videos without a camera or crew.",
    "features": [
      "AI avatar presenters",
      "Text-to-video",
      "Custom voice options",
      "Multi-language",
      "Free trial"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 83,
    "name": "ImportYeti",
    "emoji": "\ud83d\udce6",
    "url": "https://www.importyeti.com",
    "short": "Import/Export Supply Chain Finder",
    "desc": "Search real US customs import records to find out who is supplying products to any company. Discover manufacturers, suppliers, and shipping data to help with sourcing or competitive research.",
    "features": [
      "US customs data",
      "Supplier discovery",
      "Company research",
      "Shipping records",
      "Free searches available"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 84,
    "name": "Omni Calculator",
    "emoji": "\ud83e\uddee",
    "url": "https://www.omnicalculator.com",
    "short": "3000+ Specialist Calculators",
    "desc": "A library of over 3,000 specialised calculators covering health, finance, maths, physics, cooking, and everyday life. From mortgage payments to BMI to recipe scaling, it handles virtually any calculation.",
    "features": [
      "3,000+ calculators",
      "Health & finance tools",
      "Science & maths",
      "Everyday life topics",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 85,
    "name": "Whichbook",
    "emoji": "\ud83d\udcda",
    "url": "https://whichbook.net",
    "short": "Mood-Based Book Recommender",
    "desc": "Find your next book based on how you're feeling and what you want from a read \u2014 not just genre. Use sliders to set mood, plot type, explicitness, and more for highly personalised picks.",
    "features": [
      "Mood-based discovery",
      "Content preference sliders",
      "Diverse book selection",
      "Linked to libraries",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 86,
    "name": "A Good Movie To Watch",
    "emoji": "\ud83c\udfac",
    "url": "https://agoodmovietowatch.com",
    "short": "Curated Hidden Gem Movie Finder",
    "desc": "Hand-curated lists of hidden gem movies and shows across major streaming platforms. Every recommendation is carefully selected for quality over popularity \u2014 no mainstream algorithm filler.",
    "features": [
      "Hand-curated picks",
      "Streaming platform links",
      "Filters by genre & mood",
      "Hidden gems focus",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 87,
    "name": "Music Map",
    "emoji": "\ud83c\udfb5",
    "url": "https://www.music-map.com",
    "short": "Artist Similarity Visual Map",
    "desc": "Type any artist and see a visual web of musically similar acts radiating outward. The closer an artist is on the map, the more similar they are \u2014 a beautiful way to discover new music.",
    "features": [
      "Visual similarity map",
      "Artist discovery",
      "Any genre",
      "Instant results",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 88,
    "name": "Deskspacing",
    "emoji": "\ud83d\udda5\ufe0f",
    "url": "https://deskspacing.com",
    "short": "Desk Setup Ideas & Guides",
    "desc": "A curated collection of desk setup ideas, workspace organisation tips, and gear recommendations. Browse real setups by style (minimalist, gaming, creative) and get inspiration for your own space.",
    "features": [
      "Real setup photos",
      "Style filtering",
      "Gear recommendations",
      "Organisation tips",
      "Free browsing"
    ],
    "group": "Home & Design"
  },
  {
    "num": 89,
    "name": "ReviewMeta",
    "emoji": "\ud83d\uded2",
    "url": "https://reviewmeta.com",
    "short": "Amazon Fake Review Detector",
    "desc": "Analyses Amazon product reviews to identify suspicious patterns indicating fake, paid, or incentivised reviews. Get an adjusted star rating that reflects genuine customer sentiment only.",
    "features": [
      "Fake review detection",
      "Adjusted star rating",
      "Review pattern analysis",
      "Amazon product search",
      "Free to use"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 90,
    "name": "Taste Dive",
    "emoji": "\ud83c\udfac",
    "url": "None",
    "short": "Entertainment Recommendation Engine (Alt. for Date Night Movies)",
    "desc": "Originally Date Night Movies was listed here but the website no longer exists. Taste Dive (tastdive.com) is suggested as an alternative \u2014 a cross-media recommendation engine that suggests movies, shows, books, and music based on what you already love.",
    "features": [
      "Cross-media recommendations",
      "Movies, TV, books, music",
      "Taste-based suggestions",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 91,
    "name": "Donjon",
    "emoji": "\ud83c\udfb2",
    "url": "https://donjon.bin.sh",
    "short": "RPG & Dungeon Master Tools",
    "desc": "A treasure trove of generators and tools for tabletop RPG game masters. Create random dungeons, encounters, NPCs, calendars, town maps, and campaign content in seconds.",
    "features": [
      "Random dungeon generator",
      "NPC & encounter creator",
      "Town & world map tools",
      "Multiple RPG systems",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 92,
    "name": "Reelgood Netflix Roulette",
    "emoji": "\ud83c\udfb0",
    "url": "https://reelgood.com/roulette/netflix",
    "short": "Random Netflix Show Picker",
    "desc": "Spin the roulette wheel to get a random Netflix title to watch. End decision paralysis by letting chance decide your next show or movie. Filter by genre for slightly more control.",
    "features": [
      "Random title picker",
      "Genre filters",
      "Netflix-specific",
      "Decision paralysis cure",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 93,
    "name": "TasteAtlas",
    "emoji": "\ud83d\uddfa\ufe0f",
    "url": "https://www.tasteatlas.com",
    "short": "World Food & Recipe Atlas",
    "desc": "Explore traditional foods, dishes, and ingredients from every country on an interactive world map. Discover local cuisine, find authentic recipes, and plan food-focused travel experiences.",
    "features": [
      "Interactive food world map",
      "Traditional dish database",
      "Country cuisine explorer",
      "Authentic recipes",
      "Free to use"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 94,
    "name": "WhatTheFont",
    "emoji": "\ud83d\udd24",
    "url": "https://www.myfonts.com/WhatTheFont",
    "short": "Font Identifier from Images",
    "desc": "Upload any image containing text and instantly identify the font used. Useful for designers, marketers, and anyone trying to match a font they've seen in the wild.",
    "features": [
      "Image font detection",
      "Vast font database",
      "Instant identification",
      "Similar font suggestions",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 95,
    "name": "SeatGuru",
    "emoji": "\u2708\ufe0f",
    "url": "https://www.seatguru.com",
    "short": "Airline Seat Review & Picker",
    "desc": "Find the best (and worst) seats on any commercial flight before you book. Browse detailed seat maps with colour-coded ratings for legroom, power outlets, recline, and proximity to toilets.",
    "features": [
      "Detailed seat maps",
      "Comfort ratings",
      "Power outlet finder",
      "Airline & plane specific",
      "Free to use"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 96,
    "name": "Hemingway Editor",
    "emoji": "\u270d\ufe0f",
    "url": "https://hemingwayapp.com",
    "short": "Readability & Writing Clarity Tool",
    "desc": "Paste your writing and get instant feedback on readability. Highlights complex sentences, passive voice, adverb overuse, and suggests simpler alternatives. Targets a clean, bold writing style.",
    "features": [
      "Readability scoring",
      "Sentence complexity analysis",
      "Passive voice detection",
      "Grade level indicator",
      "Free browser version"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 97,
    "name": "Autum",
    "emoji": "\ud83c\udf42",
    "url": "https://autum.com",
    "short": "Board Game Discover & Library Tracker",
    "desc": "Discover and track your board game collection with personalised recommendations. Browse games by complexity, player count, and theme, and get suggestions based on what you already own.",
    "features": [
      "Board game database",
      "Collection tracker",
      "Personalised recommendations",
      "Complexity filters",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 98,
    "name": "Hack The Menu",
    "emoji": "\ud83c\udf54",
    "url": "http://hackthemenu.com",
    "short": "Fast Food Secret Menu Finder",
    "desc": "Discover secret menu items from major fast food chains that aren't listed on official menus. Find hidden hacks, custom orders, and off-menu creations at McDonald's, Starbucks, In-N-Out, and more.",
    "features": [
      "Secret menu database",
      "Major chain coverage",
      "Custom order instructions",
      "Community contributed",
      "Free to browse"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 99,
    "name": "WhoSampled",
    "emoji": "\ud83c\udfb5",
    "url": "https://www.whosampled.com",
    "short": "Music Sample & Cover Finder",
    "desc": "Discover the original songs sampled in your favourite tracks, and find all the artists who have covered or sampled a song. A deep dive into the web of musical influence and borrowing.",
    "features": [
      "Sample database",
      "Cover version finder",
      "Artist connection mapping",
      "Genre spanning",
      "Free basic access"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 100,
    "name": "Hemingway Editor",
    "emoji": "\u270d\ufe0f",
    "url": "https://hemingwayapp.com",
    "short": "Bold Writing Style Coach",
    "desc": "An online editor that highlights dense, confusing writing and helps you simplify it. Named after Ernest Hemingway's famous plain style \u2014 short sentences, active voice, strong verbs.",
    "features": [
      "Colour-coded feedback",
      "Readability grade",
      "Adverb highlighting",
      "Passive voice flagging",
      "Free in browser"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 101,
    "name": "QuiverQuant",
    "emoji": "\ud83d\udcc8",
    "url": "https://www.quiverquant.com",
    "short": "Congress & Insider Trading Tracker",
    "desc": "Track stock trades made by US Congress members, insiders, and institutions. See real-time disclosures, trending tickers among politicians, and compare their performance to the market.",
    "features": [
      "Congress trade tracker",
      "Insider trade data",
      "Real-time disclosures",
      "Ticker analysis",
      "Free basic access"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 102,
    "name": "edX",
    "emoji": "\ud83c\udf93",
    "url": "https://www.edx.org",
    "short": "Free University Courses Online",
    "desc": "Access thousands of free online courses from MIT, Harvard, Berkeley, and 160+ other top universities. Audit courses for free or pay for verified certificates in tech, business, science, and more.",
    "features": [
      "Top university courses",
      "Free audit option",
      "Verified certificates",
      "Hundreds of subjects",
      "Self-paced learning"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 103,
    "name": "Namechk",
    "emoji": "\ud83d\udd0d",
    "url": "https://namechk.com",
    "short": "Social Media Username Checker",
    "desc": "Check if your desired username or brand name is available across dozens of social media platforms and domain names simultaneously. Essential for building a consistent brand identity online.",
    "features": [
      "Multi-platform check",
      "Domain availability",
      "Brand name research",
      "Instant results",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 104,
    "name": "WTFSIMFD",
    "emoji": "\ud83c\udf7d\ufe0f",
    "url": "http://whatthefuckshouldimakefordinner.com",
    "short": "Profane Dinner Idea Generator",
    "desc": "Can't decide what to cook? This site cuts through the indecision with a blunt, profanity-laced random dinner idea. Click for a suggestion, filter by vegetarian, and find a recipe instantly.",
    "features": [
      "Random dinner generator",
      "Vegetarian filter",
      "Recipe links",
      "Profanity-powered fun",
      "Free to use"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 105,
    "name": "Account Killer",
    "emoji": "\ud83d\uddd1\ufe0f",
    "url": "https://www.accountkiller.com",
    "short": "Online Account Deletion Guide",
    "desc": "Find step-by-step instructions for deleting accounts on hundreds of websites and services. Rates each service by how easy it is to actually delete your account \u2014 from easy to impossible.",
    "features": [
      "Hundreds of services covered",
      "Difficulty ratings",
      "Step-by-step instructions",
      "Privacy-focused",
      "Free to use"
    ],
    "group": "Privacy & Security"
  },
  {
    "num": 106,
    "name": "Cleanup.Pictures",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://cleanup.pictures",
    "short": "AI Photo Object Eraser",
    "desc": "Remove any unwanted object, person, text, or defect from photos using AI. Brush over the area to erase and the AI fills it seamlessly. Works in the browser with no download needed.",
    "features": [
      "Brush-based AI erasing",
      "Seamless background fill",
      "No install needed",
      "Fast processing",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 107,
    "name": "PrePostSEO",
    "emoji": "\ud83d\udcca",
    "url": "https://www.prepostseo.com",
    "short": "SEO & Content Tool Suite",
    "desc": "A comprehensive suite of free SEO tools including plagiarism checker, keyword research, backlink checker, article rewriter, and more. One-stop shop for digital marketers and content creators.",
    "features": [
      "Plagiarism checker",
      "Keyword research",
      "Backlink analysis",
      "Article rewriter",
      "Free tools suite"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 108,
    "name": "Open Payments Data",
    "emoji": "\ud83d\udc8a",
    "url": "https://openpaymentsdata.cms.gov",
    "short": "Doctor-Pharma Payment Database",
    "desc": "Search CMS's database to see if your doctor has received payments, gifts, or research funding from pharmaceutical or medical device companies. Essential for informed healthcare decisions.",
    "features": [
      "Doctor payment search",
      "Pharma company data",
      "CMS official source",
      "Research funding info",
      "Free public database"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 109,
    "name": "Lit Solutions",
    "emoji": "\ud83d\udcda",
    "url": "https://www.litsolutions.org",
    "short": "Free Textbook Solution Finder",
    "desc": "Find free step-by-step solutions to textbook problems across subjects like maths, science, engineering, and business. Great for students checking their work or getting unstuck.",
    "features": [
      "Textbook problem solutions",
      "Multiple subjects",
      "Step-by-step answers",
      "Free to use",
      "No account needed"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 110,
    "name": "Cleanup.Pictures",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://cleanup.pictures",
    "short": "One-Click Photo Cleanup AI",
    "desc": "Erase objects, people, watermarks, or defects from photos by simply brushing over them. The AI reconstructs the background naturally. Used by designers, photographers, and everyday users.",
    "features": [
      "One-click object removal",
      "AI background reconstruction",
      "Browser-based",
      "Fast output",
      "Free tier"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 111,
    "name": "RemoteOK",
    "emoji": "\ud83d\udcbc",
    "url": "https://www.remoteok.com",
    "short": "Remote Job Board",
    "desc": "One of the largest curated boards for remote jobs worldwide. Filter by category, salary, and tech stack to find work-from-anywhere positions in tech, design, marketing, customer support, and more.",
    "features": [
      "Large remote job database",
      "Salary filters",
      "Tech stack filtering",
      "Global positions",
      "Free to browse"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 112,
    "name": "WiFi Map",
    "emoji": "\ud83d\udcf6",
    "url": "https://www.wifimap.io",
    "short": "Global Free WiFi Finder",
    "desc": "Find free WiFi hotspots anywhere in the world using a crowdsourced map. Includes passwords shared by the community, speed ratings, and offline map support for travel.",
    "features": [
      "Crowdsourced WiFi database",
      "Password sharing",
      "Speed ratings",
      "Offline maps",
      "Free basic version"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 113,
    "name": "Docsity",
    "emoji": "\ud83d\udcd6",
    "url": "https://www.docsity.com",
    "short": "Student Notes & Study Resource Sharer",
    "desc": "A platform for sharing and downloading student notes, lecture summaries, past exam papers, and study guides across thousands of universities worldwide. Community-driven academic resource hub.",
    "features": [
      "Student note library",
      "Exam paper bank",
      "University coverage",
      "Community-shared",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 114,
    "name": "Darebee",
    "emoji": "\ud83c\udfc3",
    "url": "https://www.darebee.com",
    "short": "Free No-Equipment Workout Library",
    "desc": "Thousands of free illustrated workout programs, fitness challenges, and training plans requiring no gym or equipment. Suitable for all fitness levels with printable PDF workouts.",
    "features": [
      "No equipment workouts",
      "Illustrated guides",
      "Fitness challenges",
      "All levels covered",
      "Completely free"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 115,
    "name": "Yandex Images",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://www.yandex.com/images",
    "short": "Powerful Reverse Image Search",
    "desc": "Yandex's image search often outperforms Google for reverse image searches, especially for finding people, locations, and non-English content. Great for fact-checking and source verification.",
    "features": [
      "Superior reverse search",
      "Face recognition",
      "Non-English content",
      "Source verification",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 116,
    "name": "System Requirements Lab",
    "emoji": "\ud83d\udcbb",
    "url": "https://www.systemrequirementslab.com/cyri",
    "short": "PC Game Compatibility Checker",
    "desc": "Check if your PC can run any game before buying it. Scans your hardware and compares it against minimum and recommended system requirements for thousands of PC games.",
    "features": [
      "Auto hardware detection",
      "Thousands of games",
      "Min & recommended specs",
      "Pre-purchase check",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 117,
    "name": "Cheatography",
    "emoji": "\ud83d\udccb",
    "url": "https://www.cheatography.com",
    "short": "Cheat Sheet Creator & Library",
    "desc": "Browse and create printable cheat sheets for any topic \u2014 programming, languages, keyboard shortcuts, and beyond. Community-driven with thousands of downloadable reference sheets.",
    "features": [
      "Create custom cheat sheets",
      "Thousands to download",
      "PDF export",
      "Wide topic range",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 118,
    "name": "Good Jobs First",
    "emoji": "\u2696\ufe0f",
    "url": "https://www.goodjobsfirst.org/violation-tracker",
    "short": "Corporate Violation & Subsidy Tracker",
    "desc": "Search a database of corporate misconduct, regulatory violations, fines, and government subsidies. Covers thousands of companies to help consumers and researchers hold corporations accountable.",
    "features": [
      "Corporate violation records",
      "Subsidy tracking",
      "Regulatory fine database",
      "Company search",
      "Free public tool"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 119,
    "name": "Sketch Motion",
    "emoji": "\ud83d\udd7a",
    "url": "https://sketch.metademolab.com",
    "short": "AI Sketch Animation Tool",
    "desc": "Draw a simple sketch of a person or figure and watch AI animate it with realistic movement. Meta's demo lab tool brings static drawings to life with motion capture-inspired animation.",
    "features": [
      "Sketch-to-animation AI",
      "Realistic movement",
      "Simple drawing input",
      "Meta AI powered",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 120,
    "name": "UberDuck AI",
    "emoji": "\ud83c\udf99\ufe0f",
    "url": "https://www.uberduck.ai",
    "short": "AI Voice & Rap Generator",
    "desc": "Generate AI-powered voice clips, raps, and audio content using a library of celebrity and character voices. Popular for creating funny voiceovers, song parodies, and creative audio projects.",
    "features": [
      "Celebrity voice library",
      "AI rap generation",
      "Custom voiceovers",
      "Audio export",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 121,
    "name": "ToS;DR",
    "emoji": "\ud83d\udcdc",
    "url": "https://tosdr.org",
    "short": "Terms of Service Summariser",
    "desc": "Get plain-English grades and summaries of the Terms of Service and Privacy Policies for hundreds of websites. Instantly see if a company tracks your data, sells it, or has shady clauses \u2014 before you agree.",
    "features": [
      "Plain-English summaries",
      "Privacy policy grades",
      "Data tracking flags",
      "Hundreds of sites covered",
      "Free browser extension"
    ],
    "group": "Privacy & Security"
  },
  {
    "num": 122,
    "name": "Corrupt A File",
    "emoji": "\ud83d\udc80",
    "url": "https://www.corrupt-a-file.net",
    "short": "File Corruptor Tool",
    "desc": "Intentionally corrupt any file so it appears damaged and unreadable. Useful for the questionable (but relatable) task of making a deadline extension seem more legitimate. Use responsibly.",
    "features": [
      "Any file type",
      "Realistic corruption",
      "No trace left",
      "Instant output",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 123,
    "name": "GetHuman",
    "emoji": "\ud83d\udcde",
    "url": "https://www.gethuman.com",
    "short": "Skip Customer Service Hold Lines",
    "desc": "Find the fastest way to reach a real human at any company's customer service. Provides direct phone numbers, best call times, hold time estimates, and callback tricks for hundreds of companies.",
    "features": [
      "Direct contact numbers",
      "Best call time tips",
      "Hold time estimates",
      "Callback methods",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 124,
    "name": "Class Central",
    "emoji": "\ud83c\udf93",
    "url": "https://www.classcentral.com/report/free-certificates",
    "short": "Free Online Course Certificate Finder",
    "desc": "Find free courses from top universities and platforms that come with a free certificate upon completion. Updated regularly with the latest free certification opportunities in tech, business, and more.",
    "features": [
      "Free certificate courses",
      "Top university sources",
      "Tech & business focus",
      "Regularly updated",
      "Free to browse"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 125,
    "name": "Capitol Trades",
    "emoji": "\ud83c\udfdb\ufe0f",
    "url": "https://www.capitoltrades.com",
    "short": "Politician Stock Trade Tracker",
    "desc": "Track stock trades and investments made by US senators and representatives in real time. See which stocks politicians are buying and selling, and whether their votes correlate with their portfolios.",
    "features": [
      "Real-time trade disclosures",
      "Senator & rep tracking",
      "Stock correlation analysis",
      "Historical data",
      "Free to use"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 126,
    "name": "Azgaar's Fantasy Map",
    "emoji": "\ud83d\uddfa\ufe0f",
    "url": "https://azgaar.github.io/Fantasy-Map-Generator",
    "short": "AI Fantasy World Map Generator",
    "desc": "Generate incredibly detailed fantasy world maps with realistic geography \u2014 including rivers, mountain ranges, kingdoms, roads, and settlements. Export as SVG or PNG for use in worldbuilding and RPG campaigns.",
    "features": [
      "AI map generation",
      "Realistic geography",
      "Kingdom & settlement names",
      "SVG/PNG export",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 127,
    "name": "Lullar",
    "emoji": "\ud83d\udd0d",
    "url": "https://www.lullar.com",
    "short": "People Search by Email/Username",
    "desc": "Search for social profiles associated with any email address or username across multiple platforms. Useful for researching who's behind an online handle or verifying someone's digital footprint.",
    "features": [
      "Email & username search",
      "Multi-platform results",
      "Profile discovery",
      "Free basic searches",
      "Research tool"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 128,
    "name": "IRS Free File",
    "emoji": "\ud83d\udcb0",
    "url": "https://apps.irs.gov/app/freeFile",
    "short": "Free US Tax Filing Service",
    "desc": "File your federal income taxes for free using the IRS's official Free File program. Eligible taxpayers (under a certain income threshold) can use partner software at no cost directly through the IRS.",
    "features": [
      "Completely free filing",
      "Official IRS program",
      "Partner software options",
      "Income-threshold eligibility",
      "US federal taxes"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 129,
    "name": "Free Learning List",
    "emoji": "\ud83d\udcda",
    "url": "https://freelearninglist.org",
    "short": "Curated Free Online Learning Resources",
    "desc": "A curated directory of the best free learning resources across topics like programming, design, business, and personal development. Hand-picked quality over quantity.",
    "features": [
      "Curated resource list",
      "Multiple subjects",
      "Free resources only",
      "Regularly updated",
      "No account needed"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 130,
    "name": "GasBuddy",
    "emoji": "\u26fd",
    "url": "https://www.gasbuddy.com",
    "short": "Cheapest Gas Price Finder",
    "desc": "Find the cheapest gas prices near you or along your route using real-time crowdsourced data. Save money on every fill-up by knowing exactly where to stop before you leave.",
    "features": [
      "Real-time gas prices",
      "Location-based search",
      "Route planning",
      "Community-updated",
      "Free to use"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 131,
    "name": "IRS Free File",
    "emoji": "\ud83d\udcb0",
    "url": "https://apps.irs.gov/app/freeFile",
    "short": "Official Free Tax Filing Tool",
    "desc": "File federal taxes for free through the IRS's official program. Use guided software from IRS partners at no charge if your income qualifies. Available each tax season.",
    "features": [
      "Free federal filing",
      "IRS-official",
      "Partner software",
      "Income-based eligibility",
      "Annual availability"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 132,
    "name": "Free Learning List",
    "emoji": "\ud83d\udcda",
    "url": "https://freelearninglist.org",
    "short": "Free Education Resource Directory",
    "desc": "A community-maintained list of the best free learning resources across dozens of fields. Cut through the noise and find genuinely high-quality free courses, tutorials, and tools.",
    "features": [
      "Community-curated",
      "Multi-discipline",
      "Only free resources",
      "Quality-filtered",
      "Free to browse"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 133,
    "name": "GasBuddy",
    "emoji": "\u26fd",
    "url": "https://www.gasbuddy.com",
    "short": "Real-Time Fuel Price Tracker",
    "desc": "Crowdsourced real-time gas prices at stations near you or along your drive route. Save money consistently by always knowing who has the cheapest fuel in your area.",
    "features": [
      "Crowdsourced pricing",
      "Route integration",
      "Station finder",
      "Price alerts",
      "Free app & web"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 134,
    "name": "FlowCV",
    "emoji": "\ud83d\udcc4",
    "url": "https://flowcv.io",
    "short": "Free Resume Builder",
    "desc": "Build a professional, clean resume for free with FlowCV's modern templates. Drag-and-drop builder with real-time preview, PDF export, and no watermarks on the free plan.",
    "features": [
      "Free PDF export",
      "No watermarks",
      "Modern templates",
      "Drag-and-drop builder",
      "ATS-friendly"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 135,
    "name": "QuillBot",
    "emoji": "\u270f\ufe0f",
    "url": "https://quillbot.com",
    "short": "AI Paraphrasing & Writing Tool",
    "desc": "Rewrite, paraphrase, summarise, and improve any text using AI. Choose from different writing modes (Standard, Fluency, Creative, Formal) and integrate with Google Docs or Word.",
    "features": [
      "Multiple paraphrase modes",
      "AI summariser",
      "Grammar checker",
      "Google Docs integration",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 136,
    "name": "Atlas Obscura",
    "emoji": "\ud83c\udf0d",
    "url": "https://www.atlasobscura.com",
    "short": "World's Strangest Places Directory",
    "desc": "Discover the world's most unusual, hidden, and extraordinary places. From secret underground cities to bizarre natural formations, Atlas Obscura crowdsources the world's weirdest wonders.",
    "features": [
      "Hidden places database",
      "Community-contributed",
      "Travel guides",
      "Interactive map",
      "Free to browse"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 137,
    "name": "This Person Does Not Exist",
    "emoji": "\ud83d\udc64",
    "url": "https://this-person-does-not-exist.com",
    "short": "AI Face Generator",
    "desc": "Every refresh generates a hyper-realistic photo of a human face that doesn't belong to any real person. Powered by GAN (Generative Adversarial Networks) \u2014 useful for understanding deepfake technology.",
    "features": [
      "Infinite unique faces",
      "Hyper-realistic output",
      "GAN-powered",
      "Educational value",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 138,
    "name": "Dimensions.com",
    "emoji": "\ud83d\udcd0",
    "url": "https://www.dimensions.com",
    "short": "Real-World Object Dimension Database",
    "desc": "Find accurate real-world dimensions for virtually any object \u2014 furniture, buildings, vehicles, animals, and more. Includes scale comparisons and downloadable CAD-ready drawings.",
    "features": [
      "Accurate object dimensions",
      "Scale comparisons",
      "CAD file downloads",
      "Huge object library",
      "Free to browse"
    ],
    "group": "Research & Reference"
  },
  {
    "num": 139,
    "name": "TinyWow",
    "emoji": "\ud83d\udee0\ufe0f",
    "url": "https://tinywow.com",
    "short": "Free All-in-One File Tool Suite",
    "desc": "A massive collection of free online tools for PDF editing, video conversion, image processing, AI writing, and more. No sign-up required for most tools \u2014 just upload and go.",
    "features": [
      "100+ online tools",
      "PDF, video & image tools",
      "AI writing tools",
      "No account needed",
      "Completely free"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 140,
    "name": "Ostagram",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.ostagram.me",
    "short": "AI Neural Style Transfer Art Tool",
    "desc": "Apply the visual style of famous artworks or any image onto your own photos using neural style transfer AI. Turn your selfie into a Van Gogh painting or blend any two images artistically.",
    "features": [
      "Neural style transfer",
      "Famous artwork styles",
      "Custom style images",
      "Photo blending",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 141,
    "name": "FakeYou",
    "emoji": "\ud83c\udfa4",
    "url": "https://fakeyou.com",
    "short": "Celebrity & Character Voice Generator",
    "desc": "Generate text-to-speech audio in the voices of thousands of celebrities, cartoon characters, politicians, and internet personalities. Free to use with a massive voice library.",
    "features": [
      "Thousands of voice options",
      "Celebrity & character voices",
      "Text-to-speech",
      "Audio download",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 142,
    "name": "Wombo Art",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://app.wombo.art",
    "short": "AI Art Generator from Text",
    "desc": "Create artistic images from text prompts using AI, with a variety of art styles to choose from. Simple, fun, and fast \u2014 great for non-artists wanting to create unique visuals.",
    "features": [
      "Text-to-art generation",
      "Multiple art styles",
      "Fast output",
      "Mobile-friendly",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 143,
    "name": "Learn Anything",
    "emoji": "\ud83e\udde0",
    "url": "https://learn-anything.xyz",
    "short": "Visual Learning Path Explorer",
    "desc": "An open-source interactive map of knowledge \u2014 explore any topic and see curated learning paths, resources, and connections between subjects. Community-maintained and free.",
    "features": [
      "Visual knowledge maps",
      "Curated learning paths",
      "Open-source",
      "Community-maintained",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 144,
    "name": "Side Hustle Stack",
    "emoji": "\ud83d\udcbc",
    "url": "https://www.sidehustlestack.co",
    "short": "Side Hustle & Gig Work Directory",
    "desc": "Browse a curated directory of platforms and ideas for earning extra income. Filter by payout type, effort level, and category to find the side hustle that fits your skills and schedule.",
    "features": [
      "Curated opportunity list",
      "Filter by effort & pay",
      "Gig platform reviews",
      "Category filtering",
      "Free to browse"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 145,
    "name": "SteamDB",
    "emoji": "\ud83c\udfae",
    "url": "https://steamdb.info",
    "short": "Steam Game Database & Deal Tracker",
    "desc": "Track Steam game prices, sale history, concurrent player counts, and development activity. See historical lows, package contents, and get notified when games hit your target price.",
    "features": [
      "Price history tracking",
      "Sale alerts",
      "Player count data",
      "Bundle analysis",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 146,
    "name": "iFixit",
    "emoji": "\ud83d\udd27",
    "url": "https://www.ifixit.com",
    "short": "Free Repair Manual Library",
    "desc": "Free step-by-step repair guides for smartphones, laptops, tablets, appliances, and more. Community-maintained with detailed photos, difficulty ratings, and tool lists for every repair.",
    "features": [
      "Thousands of repair guides",
      "Photo step-by-step",
      "Tool lists included",
      "Community-maintained",
      "Completely free"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 147,
    "name": "Spoken.io",
    "emoji": "\ud83d\udcac",
    "url": "https://spoken.io",
    "short": "Social Quote & Reading Highlights Platform",
    "desc": "Share and discover quotes, book highlights, and passages from your reading. A beautiful social platform for book lovers to connect over meaningful text and discover new reads.",
    "features": [
      "Quote sharing",
      "Book highlight library",
      "Social discovery",
      "Reading recommendations",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 148,
    "name": "SuperCook",
    "emoji": "\ud83c\udf73",
    "url": "https://www.supercook.com",
    "short": "Cook With What You Have Finder",
    "desc": "Enter the ingredients you have at home and SuperCook finds recipes you can make right now. Minimises food waste and saves money by making the most of what's already in your kitchen.",
    "features": [
      "Ingredient-based matching",
      "Thousands of recipes",
      "Filter by diet type",
      "Shopping list builder",
      "Free to use"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 149,
    "name": "Roadtrippers",
    "emoji": "\ud83d\ude97",
    "url": "https://roadtrippers.com",
    "short": "Road Trip Planning & Discovery Tool",
    "desc": "Plan detailed road trips with AI-suggested stops, hidden gems, roadside attractions, and accommodation options along your route. The ultimate tool for discovering America's backroads.",
    "features": [
      "Route planning",
      "Hidden attraction discovery",
      "Trip saving",
      "Accommodation links",
      "Free basic plan"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 150,
    "name": "CopyKat",
    "emoji": "\ud83c\udf7d\ufe0f",
    "url": "https://copykat.com",
    "short": "Restaurant Copycat Recipe Finder",
    "desc": "Find copycat recipes that replicate your favourite restaurant dishes at home. From Olive Garden breadsticks to McDonald's Big Mac sauce \u2014 save money by making restaurant favourites yourself.",
    "features": [
      "Restaurant copycat recipes",
      "Major chain coverage",
      "Home cooking focus",
      "Cost-saving",
      "Free to browse"
    ],
    "group": "Food & Cooking"
  },
  {
    "num": 151,
    "name": "Flipp",
    "emoji": "\ud83d\udcf0",
    "url": "https://www.flipp.com",
    "short": "Digital Grocery Flyer & Coupon Aggregator",
    "desc": "Browse weekly grocery store flyers, deals, and coupons from all your local stores in one place. Plan your shopping list around the best deals and clip digital coupons instantly.",
    "features": [
      "All local store flyers",
      "Digital coupon clipping",
      "Shopping list builder",
      "Deal alerts",
      "Free to use"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 152,
    "name": "Tabletopy",
    "emoji": "\ud83c\udfb2",
    "url": "https://www.tabletopy.com",
    "short": "Online Tabletop RPG Virtual Table",
    "desc": "A free virtual tabletop platform for running tabletop RPG sessions online. Create maps, manage tokens, roll dice, and play with friends remotely with an intuitive drag-and-drop interface.",
    "features": [
      "Virtual tabletop maps",
      "Token management",
      "Dice rolling",
      "Remote play",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 153,
    "name": "What Should I Read Next",
    "emoji": "\ud83d\udcda",
    "url": "https://www.whatshouldireadnext.com",
    "short": "Book Recommendation Engine",
    "desc": "Enter a book you loved and get personalised recommendations for what to read next. Based on community ratings and reading patterns across thousands of book lovers.",
    "features": [
      "Book similarity search",
      "Community-powered",
      "Personalised picks",
      "Genre awareness",
      "Free to use"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 154,
    "name": "Piskel",
    "emoji": "\ud83c\udfae",
    "url": "https://www.piskelapp.com",
    "short": "Free Pixel Art & Sprite Editor",
    "desc": "Create pixel art animations and game sprites in your browser. Export to GIF, PNG, or sprite sheets for use in games, apps, or social media. Great for indie game developers.",
    "features": [
      "Browser-based pixel editor",
      "Animation support",
      "GIF & sprite export",
      "Layer support",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 155,
    "name": "GG.deals",
    "emoji": "\ud83c\udfae",
    "url": "https://www.gg.deals",
    "short": "PC & Console Game Deal Aggregator",
    "desc": "Find the cheapest prices for PC and console games across dozens of digital storefronts. Track price history, set deal alerts, and discover bundles across Steam, GOG, Epic, and more.",
    "features": [
      "Multi-store price comparison",
      "Price history",
      "Deal alerts",
      "Bundle tracking",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 156,
    "name": "ClipDrop Image Upscaler",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://clipdrop.co/image-upscaler",
    "short": "AI Image Upscaling Tool",
    "desc": "Upscale low-resolution images up to 4x using AI without losing quality. Sharpen old or small photos, enhance product images, and restore detail that was lost in compression.",
    "features": [
      "Up to 4x upscaling",
      "AI quality preservation",
      "Before/after comparison",
      "Fast processing",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 157,
    "name": "Itch.io",
    "emoji": "\ud83d\udd79\ufe0f",
    "url": "https://itch.io",
    "short": "Indie Game Marketplace",
    "desc": "The largest platform for discovering, buying, and playing indie games. Supports pay-what-you-want pricing, bundles for charity, and a huge library of experimental and unique games.",
    "features": [
      "Indie game discovery",
      "Pay-what-you-want",
      "Game jams",
      "Dev-friendly platform",
      "Free to browse"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 158,
    "name": "Watabou City Generator",
    "emoji": "\ud83c\udfd9\ufe0f",
    "url": "https://watabou.itch.io",
    "short": "Procedural City & Village Map Generator",
    "desc": "Generate random, detailed city and village maps procedurally. Export as SVG for use in RPG campaigns, worldbuilding, or just exploring fascinating generated urban layouts.",
    "features": [
      "Procedural city maps",
      "SVG export",
      "Multiple map types",
      "RPG-ready",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 159,
    "name": "SplitMySong",
    "emoji": "\ud83c\udfb5",
    "url": "https://www.splitmysong.com",
    "short": "Song Stem Separator",
    "desc": "Upload any song and separate it into individual stems \u2014 vocals, drums, bass, and other instruments. Free browser-based tool powered by AI for musicians, remixers, and producers.",
    "features": [
      "4-stem separation",
      "AI-powered",
      "Browser-based",
      "Download individual stems",
      "Free to use"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 160,
    "name": "Make My Drive Fun",
    "emoji": "\ud83d\ude97",
    "url": "https://makemydrivefun.com",
    "short": "Road Trip Game & Activity Generator",
    "desc": "Generate fun road trip games, trivia questions, and activities to keep passengers entertained during long drives. Great for families, couples, and anyone wanting to liven up a road trip.",
    "features": [
      "Road trip games",
      "Trivia questions",
      "Age-appropriate options",
      "Printable activities",
      "Free to use"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 161,
    "name": "VoiceChanger.io",
    "emoji": "\ud83c\udf99\ufe0f",
    "url": "https://voicechanger.io",
    "short": "Real-Time Voice Effect Changer",
    "desc": "Apply real-time voice effects and filters to your microphone for calls, streams, or recordings. Choose from dozens of effects including pitch shift, robot, alien, and celebrity impressions.",
    "features": [
      "Real-time voice effects",
      "Dozens of filters",
      "Streaming compatible",
      "Browser-based",
      "Free tier available"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 162,
    "name": "Excel Formula Bot",
    "emoji": "\ud83d\udcca",
    "url": "https://www.excelformulabot.com",
    "short": "AI Excel & Sheets Formula Generator",
    "desc": "Describe what you want to calculate in plain English and get the exact Excel or Google Sheets formula instantly. No more hunting through documentation or staring at nested IF statements.",
    "features": [
      "Plain English to formula",
      "Excel & Sheets support",
      "Complex formula generation",
      "VBA code support",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 163,
    "name": "MIT OpenCourseWare",
    "emoji": "\ud83c\udf93",
    "url": "https://www.ocw.mit.edu",
    "short": "Free MIT University Course Materials",
    "desc": "Access the complete curriculum materials for thousands of MIT courses \u2014 lecture notes, exams, assignments, and videos \u2014 completely free. No sign-up needed, no certificates, just pure learning.",
    "features": [
      "Complete MIT curriculum",
      "Free forever",
      "No sign-up needed",
      "Lecture notes & exams",
      "Thousands of courses"
    ],
    "group": "Education & Learning"
  },
  {
    "num": 164,
    "name": "HowLongToBeat",
    "emoji": "\ud83c\udfae",
    "url": "https://www.howlongtobeat.com",
    "short": "Video Game Completion Time Tracker",
    "desc": "Find out how long it takes to beat any video game \u2014 main story, side quests, or 100% completion \u2014 based on aggregated data from thousands of real player submissions.",
    "features": [
      "Main story time estimates",
      "100% completion times",
      "Community-sourced data",
      "Game library tracking",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 165,
    "name": "Sweet Home 3D",
    "emoji": "\ud83c\udfe0",
    "url": "https://www.sweethome3d.com/SweetHome3DJSOnline.jsp",
    "short": "3D Home Interior Design Planner",
    "desc": "Design detailed home interiors in 3D directly in your browser. Place walls, doors, windows, and furniture to create photorealistic floor plans and 3D visualisations of any room.",
    "features": [
      "3D interior design",
      "Photorealistic renders",
      "Furniture catalogue",
      "Floor plan creation",
      "Free browser version"
    ],
    "group": "Home & Design"
  },
  {
    "num": 166,
    "name": "The Most Dangerous Writing App",
    "emoji": "\u26a0\ufe0f",
    "url": "https://www.squibler.io/dangerous-writing-prompt-app",
    "short": "Lose-It-If-You-Stop Writing Tool",
    "desc": "Write without stopping or lose everything. This app deletes your progress if you stop typing for more than a few seconds, forcing you to write through blocks and silence your inner critic.",
    "features": [
      "Anti-procrastination tool",
      "Auto-delete on pause",
      "Customisable time limit",
      "Word count tracking",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 167,
    "name": "Craiyon",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.craiyon.com",
    "short": "Free AI Image Generator",
    "desc": "Generate images from text prompts for free using Craiyon's AI model. Fast, unlimited, and no account needed \u2014 great for quick creative experiments or generating reference visuals.",
    "features": [
      "Free text-to-image",
      "No account needed",
      "Unlimited generations",
      "Multiple style options",
      "Completely free"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 168,
    "name": "Play.ad-auris",
    "emoji": "\ud83c\udfa7",
    "url": "https://play.ad-auris.com",
    "short": "AI Article-to-Audio Converter",
    "desc": "Convert any article or blog post into a high-quality audio version using AI narration. Listen to your reading list while commuting, exercising, or doing chores.",
    "features": [
      "Article-to-audio AI",
      "Natural voice narration",
      "Browser extension",
      "Podcast-style output",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 169,
    "name": "Dupe",
    "emoji": "\ud83d\udecd\ufe0f",
    "url": "https://www.dupe.com",
    "short": "Luxury Product Dupe Finder",
    "desc": "Find affordable dupes and alternatives to expensive luxury products across beauty, fashion, and lifestyle. Community-verified alternatives that deliver similar results at a fraction of the price.",
    "features": [
      "Luxury dupe finder",
      "Beauty & fashion focus",
      "Community-verified",
      "Price comparison",
      "Free to browse"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 170,
    "name": "Chunkbase",
    "emoji": "\ud83c\udfae",
    "url": "https://www.chunkbase.com",
    "short": "Minecraft Seed & Map Explorer",
    "desc": "Find and explore Minecraft world seeds, biomes, structures, and resources using an interactive map. Enter your seed to see exactly where diamonds, villages, strongholds, and other features spawn.",
    "features": [
      "Minecraft seed analysis",
      "Interactive biome map",
      "Structure finder",
      "Resource location",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 171,
    "name": "Dupe",
    "emoji": "\ud83d\udecd\ufe0f",
    "url": "https://www.dupe.com",
    "short": "Affordable Luxury Alternative Finder",
    "desc": "Discover affordable alternatives to high-end and luxury products. Community-driven platform helping shoppers find quality dupes in beauty, skincare, fashion, and home goods.",
    "features": [
      "Luxury dupe matching",
      "Community reviews",
      "Beauty & fashion coverage",
      "Price comparison",
      "Free browsing"
    ],
    "group": "Shopping & Style"
  },
  {
    "num": 172,
    "name": "Chunkbase",
    "emoji": "\u26cf\ufe0f",
    "url": "https://www.chunkbase.com",
    "short": "Minecraft World Seed Analyser",
    "desc": "Input your Minecraft world seed and get a detailed interactive map of biomes, villages, temples, strongholds, and every generated structure. Essential for Minecraft players optimising their worlds.",
    "features": [
      "Seed-based map generation",
      "All structure types",
      "Biome boundaries",
      "Multiple game versions",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 173,
    "name": "Palette FM",
    "emoji": "\ud83c\udfa8",
    "url": "https://www.palette.fm",
    "short": "AI Photo Colorizer",
    "desc": "Automatically colorize black-and-white photos using AI. Upload any old photo and get a realistic, natural-colour version. Great for bringing historical images and old family photos to life.",
    "features": [
      "AI colorization",
      "Realistic colour output",
      "High-resolution support",
      "Free to use",
      "Instant processing"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 174,
    "name": "Rasterbator",
    "emoji": "\ud83d\udda8\ufe0f",
    "url": "https://www.rasterbator.net",
    "short": "Giant Poster Creator from Any Image",
    "desc": "Turn any image into a massive multi-page poster that you print and assemble at home. Configure the output size in metres, preview the result, and download a PDF ready to print on standard paper.",
    "features": [
      "Any image to poster",
      "Configurable size",
      "Multi-page PDF output",
      "Home printer friendly",
      "Free to use"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 175,
    "name": "SteamDB Calculator",
    "emoji": "\ud83d\udcb8",
    "url": "https://www.steamdb.info/calculator",
    "short": "Steam Game Library Value Calculator",
    "desc": "Calculate how much you've spent on your entire Steam game library and how many hours you've played. Shows cost-per-hour statistics and your most and least played games.",
    "features": [
      "Total spend calculation",
      "Hours played tracking",
      "Cost-per-hour analysis",
      "Library overview",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 176,
    "name": "MyFoodData",
    "emoji": "\ud83e\udd66",
    "url": "https://www.myfooddata.com",
    "short": "Detailed Food Nutrition Analyser",
    "desc": "Look up detailed nutritional information for any food, create and analyse custom meal plans, and compare nutritional profiles side by side. Goes deeper than most basic nutrition trackers.",
    "features": [
      "Detailed nutrition data",
      "Meal plan analysis",
      "Food comparison",
      "Nutrient ranking",
      "Free to use"
    ],
    "group": "Health & Fitness"
  },
  {
    "num": 177,
    "name": "Kassoon",
    "emoji": "\ud83c\udfb2",
    "url": "https://www.kassoon.com",
    "short": "D&D & RPG Random Content Generator",
    "desc": "A suite of generators for Dungeons & Dragons and tabletop RPGs \u2014 random NPCs, towns, encounters, treasure, quests, traps, and more. Instant campaign content for game masters.",
    "features": [
      "NPC generator",
      "Town & dungeon maker",
      "Encounter builder",
      "Quest generator",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 178,
    "name": "ImageAmigo",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://imageamigo.com",
    "short": "AI Image Background Replacer",
    "desc": "Replace, remove, or swap the background of any image using AI. Great for product photography, profile pictures, and creative compositing without Photoshop skills.",
    "features": [
      "AI background swap",
      "Background removal",
      "Custom background upload",
      "Product photo ready",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 179,
    "name": "PDFescape",
    "emoji": "\ud83d\udcc4",
    "url": "https://www.pdfescape.com",
    "short": "Free Online PDF Editor",
    "desc": "Edit, annotate, fill, and sign PDF files directly in your browser for free. Add text, images, and form fields, or fill in existing PDF forms without downloading any software.",
    "features": [
      "PDF form filling",
      "Text & image insertion",
      "Annotation tools",
      "No software download",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 180,
    "name": "Minecraft Tools",
    "emoji": "\u26cf\ufe0f",
    "url": "https://minecraft.tools",
    "short": "Minecraft Command & Item Generator",
    "desc": "Generate complex Minecraft commands, custom items, banners, fireworks, and more using a visual interface. No command syntax knowledge needed \u2014 just configure and copy.",
    "features": [
      "Command generator",
      "Custom item creator",
      "Banner designer",
      "Firework builder",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 181,
    "name": "ImageAmigo",
    "emoji": "\ud83d\uddbc\ufe0f",
    "url": "https://imageamigo.com",
    "short": "AI Image Enhancement & Background Swap",
    "desc": "AI-powered tool for enhancing, background-swapping, and editing photos instantly. Upload any image and transform it with intelligent background replacement and quality enhancement.",
    "features": [
      "AI enhancement",
      "Background replacement",
      "Quality upscaling",
      "Fast processing",
      "Free tier"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 182,
    "name": "PDFescape",
    "emoji": "\ud83d\udcc4",
    "url": "https://www.pdfescape.com",
    "short": "Browser PDF Form Editor",
    "desc": "Fill, edit, and annotate PDF documents directly in your browser. Useful for completing forms, adding signatures, and modifying PDFs without needing Adobe Acrobat.",
    "features": [
      "Browser-based editing",
      "Form field filling",
      "Signature support",
      "Annotation tools",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 183,
    "name": "Minecraft Tools",
    "emoji": "\ud83c\udfae",
    "url": "https://minecraft.tools",
    "short": "Minecraft Crafting & Command Tools",
    "desc": "Browser-based tools for generating Minecraft commands, recipes, and custom content. From custom enchanted items to complex NBT data, this is the go-to toolkit for Minecraft enthusiasts.",
    "features": [
      "Command builder",
      "Recipe generator",
      "NBT editor",
      "Banner designer",
      "Free to use"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 184,
    "name": "CheapShark",
    "emoji": "\ud83d\udcb0",
    "url": "https://www.cheapshark.com",
    "short": "PC Game Lowest Price Tracker",
    "desc": "Find the cheapest current prices for PC games across all major digital stores. Set price alerts, browse deals by store, and track historically low prices before buying.",
    "features": [
      "Multi-store comparison",
      "Price alert emails",
      "Deal browser",
      "Historical lows",
      "Free API available"
    ],
    "group": "Entertainment & Fun"
  },
  {
    "num": 185,
    "name": "Rome2Rio",
    "emoji": "\ud83c\udf0d",
    "url": "https://www.rome2rio.com",
    "short": "Multi-Modal Travel Route Planner",
    "desc": "Discover how to travel between any two places in the world by plane, train, bus, ferry, car, or a combination. Shows routes, prices, and travel times across all transport options side by side.",
    "features": [
      "All transport modes",
      "Global route coverage",
      "Price estimates",
      "Travel time comparison",
      "Free to use"
    ],
    "group": "Travel & Navigation"
  },
  {
    "num": 186,
    "name": "SheetFormula",
    "emoji": "\ud83d\udcca",
    "url": "https://sheetformula.com",
    "short": "AI Spreadsheet Formula Assistant",
    "desc": "Type what you need in plain English and get the right Google Sheets or Excel formula instantly. Solves complex formula problems and explains how each formula works in plain language.",
    "features": [
      "AI formula generation",
      "Plain English input",
      "Sheets & Excel support",
      "Formula explanations",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 187,
    "name": "Polotno Studio",
    "emoji": "\ud83c\udfa8",
    "url": "https://studio.polotno.com",
    "short": "Free Canva-Like Graphic Designer",
    "desc": "A free, browser-based graphic design tool similar to Canva. Create social media posts, banners, posters, and presentations with an intuitive drag-and-drop interface and no account required.",
    "features": [
      "No account required",
      "Drag-and-drop interface",
      "Template library",
      "Multi-format export",
      "Completely free"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 188,
    "name": "RepairClinic",
    "emoji": "\ud83d\udd27",
    "url": "https://www.repairclinic.com",
    "short": "Home Appliance Repair Guides",
    "desc": "Find step-by-step repair instructions and parts for home appliances \u2014 washers, dryers, fridges, dishwashers, and more. Diagnose symptoms and get the exact part and repair guide you need.",
    "features": [
      "Appliance repair guides",
      "Symptom diagnosis",
      "Parts finder",
      "Brand-specific content",
      "Free guides"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 189,
    "name": "ChatGPT",
    "emoji": "\ud83e\udd16",
    "url": "https://chat.openai.com",
    "short": "OpenAI Conversational AI Assistant",
    "desc": "OpenAI's flagship conversational AI assistant capable of answering questions, writing code, creating content, analysing data, and more through natural language conversation.",
    "features": [
      "Natural language AI",
      "Code generation",
      "Content writing",
      "Data analysis",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 190,
    "name": "Diffuse The Rest",
    "emoji": "\ud83c\udfa8",
    "url": "https://huggingface.co/spaces/huggingface-projects/diffuse-the-rest",
    "short": "AI Image Completion Tool",
    "desc": "Draw or sketch a partial image and let AI complete it. A HuggingFace demo of diffusion-based image inpainting that fills in missing or sketched areas with realistic AI-generated content.",
    "features": [
      "AI image completion",
      "Sketch-based input",
      "Diffusion model",
      "Free HuggingFace demo",
      "No account needed"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 191,
    "name": "SimplePDF",
    "emoji": "\ud83d\udcc4",
    "url": "https://simplepdf.eu",
    "short": "Simple Online PDF Editor",
    "desc": "Edit PDF files online without any software. Add text, images, signatures, and annotations to any PDF document. Fast, clean, and works directly in the browser.",
    "features": [
      "Text & image insertion",
      "Signature tool",
      "Annotation support",
      "No software needed",
      "Free tier available"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 192,
    "name": "BuildAI",
    "emoji": "\ud83e\udd16",
    "url": "https://www.buildai.space",
    "short": "No-Code AI App Builder",
    "desc": "Build custom AI-powered applications without writing a single line of code. Create chatbots, text processors, and AI tools using a visual interface and deploy them instantly.",
    "features": [
      "No-code AI building",
      "Custom chatbots",
      "Visual interface",
      "Instant deployment",
      "Free to start"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 193,
    "name": "Recraft AI",
    "emoji": "\ud83c\udfa8",
    "url": "https://recraft.ai",
    "short": "AI Vector & Design Asset Generator",
    "desc": "Generate high-quality vector graphics, icons, illustrations, and design assets using AI. Outputs true SVG vectors \u2014 not raster images \u2014 making it ideal for scalable design work.",
    "features": [
      "True SVG vector output",
      "Icon & illustration generation",
      "Brand kit tools",
      "Style consistency",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 194,
    "name": "Tabletop Audio",
    "emoji": "\ud83c\udfb5",
    "url": "https://tabletopaudio.com",
    "short": "Ambient Audio for Tabletop RPGs",
    "desc": "Free ambient soundscapes and background music specifically designed for tabletop RPG sessions. Choose from fantasy taverns, dungeons, space stations, and dozens of other atmospheric settings.",
    "features": [
      "RPG-specific soundscapes",
      "Fantasy & sci-fi settings",
      "Customisable mixes",
      "Free forever",
      "No account needed"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 195,
    "name": "Skybox AI",
    "emoji": "\ud83c\udf10",
    "url": "https://skybox.blockadelabs.com",
    "short": "AI 360\u00b0 World Generator",
    "desc": "Generate immersive 360-degree panoramic environments using AI text prompts. Create virtual worlds, game environments, VR backdrops, and concept art with stunning detail.",
    "features": [
      "360\u00b0 panorama generation",
      "VR-compatible output",
      "Text-to-environment",
      "Multiple art styles",
      "Free tier available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 196,
    "name": "Pika Art",
    "emoji": "\ud83c\udfac",
    "url": "https://www.pika.art",
    "short": "AI Text-to-Video Generator",
    "desc": "Generate short, creative videos from text prompts or images using Pika's AI video model. Create animations, product mockups, and cinematic clips without any video editing experience.",
    "features": [
      "Text-to-video AI",
      "Image-to-video",
      "Multiple visual styles",
      "Short clip generation",
      "Free credits available"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 221,
    "name": "Melodice",
    "emoji": "\ud83c\udfb5",
    "url": "https://melodice.org",
    "short": "Board Game Playlist Generator",
    "desc": "Generates curated music playlists specifically matched to the vibe and theme of board games. Whether you're playing a tense strategy game or a lighthearted party title, Melodice picks background music to enhance the experience. No more awkward silence or playlist debates at game night.",
    "features": [
      "Game-matched playlists",
      "Free to use",
      "Wide board game library",
      "Instant vibe matching",
      "No account needed"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 222,
    "name": "RockAuto",
    "emoji": "\ud83d\ude97",
    "url": "https://www.rockauto.com",
    "short": "Discount Auto Parts Catalog",
    "desc": "A massive online auto parts catalog offering significantly better pricing than most local shops or dealerships. Browse millions of car parts across hundreds of brands, filterable by year, make, and model. Great for DIY mechanics and anyone who prefers not to overpay at the repair shop.",
    "features": [
      "Millions of parts listed",
      "Multiple brand options per part",
      "Vehicle-specific filtering",
      "Better than local shop pricing",
      "Fast shipping available"
    ],
    "group": "Automotive"
  },
  {
    "num": 223,
    "name": "Moviewiser",
    "emoji": "\ud83c\udfac",
    "url": "https://moviewiser.com",
    "short": "Mood-Based Movie Recommender",
    "desc": "Recommends movies and shows based on your current mood and who you're watching with \u2014 solo, on a date, with family, or with friends. Eliminates the endless scroll of decision fatigue by intelligently narrowing choices to match your exact vibe and viewing situation.",
    "features": [
      "Mood-based filtering",
      "Watch-with filters",
      "Cross-platform suggestions",
      "Reduces decision fatigue",
      "Curated quality picks"
    ],
    "group": "Music & Entertainment"
  },
  {
    "num": 224,
    "name": "Ideogram",
    "emoji": "\ud83e\udde0",
    "url": "https://ideogram.ai",
    "short": "Text-to-Image AI (Logo & Design Focus)",
    "desc": "An AI image generator that excels at creating logos, posters, and graphic designs with accurate, legible text rendering \u2014 something most AI image tools struggle with. Ideal for marketers, designers, and creators who need quick visual content without a full design workflow.",
    "features": [
      "Accurate AI text rendering",
      "Logo & poster generation",
      "Prompt-based design",
      "Multiple style options",
      "High-resolution output"
    ],
    "group": "AI & Creative Tools"
  },
  {
    "num": 225,
    "name": "Goblin Tools",
    "emoji": "\ud83d\udee0\ufe0f",
    "url": "https://goblin.tools",
    "short": "AI Task Breakdown & Organizer",
    "desc": "A collection of small AI-powered helpers designed to break down overwhelming tasks into manageable steps, summarize chaotic information, and help organize thoughts when executive function is struggling. Especially helpful for people with ADHD or anyone facing task paralysis.",
    "features": [
      "Task breakdown AI",
      "Text summarization",
      "Fridge-to-recipe tool",
      "Tone checker",
      "ADHD-friendly design",
      "Free to use"
    ],
    "group": "Productivity & Tools"
  },
  {
    "num": 226,
    "name": "Nvidia Canvas",
    "emoji": "\ud83c\udfa8",
    "url": null,
    "short": "AI Painting-to-Landscape Tool (Discontinued)",
    "desc": "Nvidia Canvas was an AI-powered painting application that turned rough brush strokes into realistic landscape photos in real time using Nvidia's GauGAN AI model. Exclusively for RTX GPU owners. Now discontinued.",
    "features": [
      "Real-time AI painting",
      "GauGAN AI model",
      "RTX GPU exclusive",
      "Landscape generation",
      "Now discontinued"
    ],
    "group": "Discontinued"
  },
  {
    "num": 227,
    "name": "AI Home Design",
    "emoji": "\ud83c\udfe1",
    "url": "https://aihomedesign.com",
    "short": "AI Interior Design Visualizer",
    "desc": "Upload a photo of any room and get instant AI-generated interior design ideas tailored to different styles \u2014 modern, minimalist, boho, industrial, and more. Perfect for homeowners looking to reimagine their living space without hiring a designer.",
    "features": [
      "Photo-based room redesign",
      "Multiple interior styles",
      "Instant AI rendering",
      "Before/after comparison",
      "No design skills needed"
    ],
    "group": "Home & Design"
  },
  {
    "num": 228,
    "name": "1A Auto Videos",
    "emoji": "\ud83d\udd27",
    "url": "https://www.1aauto.com/videos",
    "short": "Free Car Repair Tutorial Videos",
    "desc": "A library of free, detailed step-by-step car repair and maintenance videos covering a huge range of vehicles and repairs. From brake jobs to engine work, these tutorials are clear and beginner-friendly. Great for saving money on mechanic bills.",
    "features": [
      "Free repair video library",
      "Make & model specific",
      "Step-by-step guides",
      "Beginner-friendly",
      "Wide vehicle coverage"
    ],
    "group": "Automotive"
  },
  {
    "num": 229,
    "name": "BrickLink",
    "emoji": "\ud83e\uddf1",
    "url": "https://www.bricklink.com/v2/main.page",
    "short": "LEGO Parts Marketplace",
    "desc": "The world's largest online marketplace for buying, selling, and trading individual LEGO parts, sets, and minifigures. Whether you're missing a specific piece, building a custom MOC, or completing a vintage set, BrickLink connects you with thousands of sellers worldwide.",
    "features": [
      "Millions of LEGO parts listed",
      "Global seller network",
      "Set completion tool",
      "Custom MOC building support",
      "Vintage & rare parts",
      "Price guides"
    ],
    "group": "Shopping & Collections"
  },
  {
    "num": 230,
    "name": "VideoToBlog",
    "emoji": "\u270d\ufe0f",
    "url": "https://www.videotoblog.ai",
    "short": "Video-to-Blog Post Converter",
    "desc": "Automatically converts videos into well-structured, summarized blog posts using AI. Perfect for content creators, podcasters, and marketers who want to repurpose video content into written form without manual transcription or editing.",
    "features": [
      "Auto video transcription",
      "AI blog post generation",
      "Content repurposing",
      "SEO-friendly formatting",
      "Supports multiple video sources",
      "Saves hours of writing"
    ],
    "group": "AI & Creative Tools"
  }
];

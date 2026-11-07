export const CATEGORIES = ["All", "Productivity", "Developer tools", "Design", "AI"];

export const initialProducts = [
  { id: "1", name: "Tidepool", tagline: "A calm inbox that groups email by project", description: "Tidepool sorts your email into project pools so you only see what needs action today. Built by two ex-support leads.", category: "Productivity", maker: "Anika R.", votes: 214, comments: [{ id: "c1", author: "Dev", text: "Finally an inbox that doesn't shout at me." }] },
  { id: "2", name: "Plumb", tagline: "Spot broken API contracts before you deploy", description: "Plumb compares your OpenAPI spec across branches and flags breaking changes in pull requests.", category: "Developer tools", maker: "Marcus L.", votes: 188, comments: [] },
  { id: "3", name: "Swatchbook", tagline: "Build accessible color palettes in minutes", description: "Pick one brand color and get a full palette with contrast scores checked against WCAG.", category: "Design", maker: "Priya S.", votes: 156, comments: [] },
  { id: "4", name: "Margin", tagline: "AI notes that link back to the exact paragraph", description: "Highlight text anywhere on the web and Margin summarizes it, keeping a link to the source.", category: "AI", maker: "Tomás V.", votes: 132, comments: [] },
  { id: "5", name: "Standup Bot", tagline: "Async standups that take 30 seconds", description: "Your team answers three questions in chat and gets a daily digest. No meetings.", category: "Productivity", maker: "Hana K.", votes: 97, comments: [] },
  { id: "6", name: "Glyphcheck", tagline: "Find missing characters in any font file", description: "Drop in a font and see which languages it fully supports.", category: "Design", maker: "Leo B.", votes: 64, comments: [] },
];

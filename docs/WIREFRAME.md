# MindShelf — Wireframes, pages, colors, typography

**Idea:** MindShelf is a small Product Hunt–style site where independent makers launch side projects and visitors upvote and comment.

## Pages
| Route | Purpose |
|---|---|
| `/` | Ranked list of products, category filter |
| `/products/[id]` | Product details, upvote, comments |
| `/submit` | Form to launch a new product |

## Wireframes
**Home `/`**
```
+--------------------------------------------------+
| MindShelf                       [Launch a product]|
+--------------------------------------------------+
|  New products from independent makers,           |
|  ranked by you.                                  |
|  (All) (Productivity) (Developer tools) (Design) |
|  +--------------------------------------------+  |
|  | 1  Breathe Box                          [▲ 214]|  |
|  |    A calm inbox that groups email...        |  |
|  +--------------------------------------------+  |
|  | 2  Three Lines                             [▲ 188]|  |
|  +--------------------------------------------+  |
+--------------------------------------------------+
```
**Product `/products/[id]`**
```
| < Back to all products                           |
| Breathe Box                                 [▲ 214] |
| A calm inbox that groups email by project        |
| Description paragraph...                         |
| Comments (1)                                     |
| [ Dev: Finally an inbox that doesn't shout... ]  |
| Your name [______]  Comment [__________]         |
| [Post comment]                                   |
```
**Submit `/submit`**
```
| Launch a product                                 |
| Product name [______]   Tagline [______]         |
| Description  [______]   Your name [____]         |
| Category [v]            [Launch product]         |
```

## Colors
| Name | Hex | Use |
|---|---|---|
| Fog | `#EEF4F1` | Page background |
| Surface | `#FFFFFF` | Cards, inputs |
| Ink | `#1B2B2A` | Text |
| Harbor | `#2F7D6D` | Buttons, links, logo |
| Buoy | `#F6D186` | Active upvote (the one bright accent) |

## Typography
- **Headings:** Bricolage Grotesque (700–800), tight tracking
- **Body:** Public Sans (400–600)

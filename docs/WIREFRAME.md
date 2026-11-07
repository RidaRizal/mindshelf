# Shipyard — Wireframes, pages, colors, typography

**Idea:** Shipyard is a small Product Hunt–style site where independent makers launch side projects and visitors upvote and comment.

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
| Shipyard                       [Launch a product]|
+--------------------------------------------------+
|  New products from independent makers,           |
|  ranked by you.                                  |
|  (All) (Productivity) (Developer tools) (Design) |
|  +--------------------------------------------+  |
|  | 1  Tidepool                          [▲ 214]|  |
|  |    A calm inbox that groups email...        |  |
|  +--------------------------------------------+  |
|  | 2  Plumb                             [▲ 188]|  |
|  +--------------------------------------------+  |
+--------------------------------------------------+
```
**Product `/products/[id]`**
```
| < Back to all products                           |
| Tidepool                                 [▲ 214] |
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
| Fog | `#EEF2F6` | Page background |
| Surface | `#FFFFFF` | Cards, inputs |
| Ink | `#0F1B2D` | Text |
| Harbor | `#0B6E99` | Buttons, links, logo |
| Buoy | `#FFC93C` | Active upvote (the one bright accent) |

## Typography
- **Headings:** Bricolage Grotesque (700–800), tight tracking
- **Body:** Public Sans (400–600)

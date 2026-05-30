

## Advanced CoverView
Creating cover images for your blogs is now super easy.
<p>
<a href="https://github.com/soumendrak/Advanced-CoverView"><img src="https://img.shields.io/github/stars/soumendrak/Advanced-CoverView.svg?style=social&label=Star"></a>
<a href="https://github.com/soumendrak/Advanced-CoverView"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://lbesson.mit-license.org"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>



</p>




<img src="./docs/acv-screenshot.webp" height="auto" width="800px"  margin="20px">



 


## ⚡ Features
- 🚀 super fast and easy to use
- ✨ unsplash integration to search images
- 🌈 7 different themes, multiple fonts
- 🌠 100+ dev icons with option to upload custom icon
- 💾 Cover size based on blogging platform (i.e hashnode and dev)

## ✨ Advanced Features (New in Advanced CoverView)

### 🎨 Enhanced Customization
- **Platform Presets** - Pre-configured dimensions for Hashnode, Dev.to, Medium, LinkedIn, Twitter, Facebook, YouTube, and Custom sizes
- **Pattern Backgrounds** - 16 SVG pattern options (graph-paper, jigsaw, dots, circuit-board, and more)
- **Color Preset Swatches** - Quick color selection with collapsible palette

### 🖼️ Enhanced Unsplash Integration
- **Pagination Support** - "Load More Images" button to browse beyond initial 30 results
- **Search Query Persistence** - Search term preserved when selecting/deselecting images
- **Scroll Position Memory** - Returns to exact scroll position after closing selected image
- **State Caching** - All loaded images cached to avoid re-fetching

### 🐛 Bug Fixes & UX Improvements
- Fixed dropdown overflow issues in sidebar
- Smooth scroll restoration without visual flicker
- Reset scroll to top on new search

## 🔌 HTTP API

Every feature of the editor is also available programmatically — no browser needed.
The API is a Cloudflare Pages Function served under `/api`, rendered with
[Satori](https://github.com/vercel/satori) (via `workers-og`).

- **Docs (Swagger UI):** https://cover.soumendrak.com/api/
- **OpenAPI spec:** https://cover.soumendrak.com/api/openapi.json

### Generate a cover

`GET /api/generate` (query params) or `POST /api/generate` (JSON body). `title` is required.

```bash
# Quick GET
curl "https://cover.soumendrak.com/api/generate?title=Hello+World&theme=modern&icon=react&bgColor=%230f0c29&author=Jane" -o cover.png

# Full POST
curl -X POST https://cover.soumendrak.com/api/generate \
  -H "Content-Type: application/json" \
  -d '{"title":"Async Python","subtitle":"Concurrency made simple","theme":"preview","imageUrl":"https://example.com/screenshot.png","bgColor":"#581b98","author":"Soumendra"}' \
  -o cover.png
```

### Parameters

| Param | Description |
|-------|-------------|
| `title` *(required)* | Cover title |
| `subtitle` | Optional subtitle |
| `theme` | Layout: `background`, `stylish`, `basic`, `modern`, `outline`, `preview` (browser mockup), `mobile` (phone mockup). `dark`/`light`/`gradient` are legacy colour aliases |
| `bgColor` | Primary background colour as hex (e.g. `#949ee5`) — drives the palette, like the editor |
| `colorPreset` | Named preset (`purple`, `sunset`, `mint`, …) |
| `colors` | Advanced override `{bg,text,accent}` (POST only) |
| `icon` | Built-in accent icon (react, python, docker, …) **or any [devicon](https://devicon.dev) name** (tensorflow, vuejs, …) |
| `iconUrl` | URL of a custom icon/logo image (the editor's "upload your own") |
| `imageUrl` | Background photo (`background`/`stylish`) or screenshot (`preview`/`mobile`) |
| `unsplashQuery` | Search Unsplash for a background photo |
| `pattern` | One of 18 background patterns |
| `platform` | Size preset: hashnode, dev, twitter, linkedin-post, instagram, youtube, … |
| `font` | `font-serif`, `font-sans`, `font-mono`, `font-Inter`, `font-Poppins`, `font-Anek` |
| `authorName` / `author` | Author name shown on the cover |
| `format` | `png` (default) or `svg` |
| `width` / `height` | Custom dimensions (override platform) |

## 👩‍💻 Developing
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



```shell
git clone https://github.com/soumendrak/Advanced-CoverView.git
cd Advanced-CoverView/
npm start
```


## 👇 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


1. Fork it (<https://github.com/soumendrak/Advanced-CoverView/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


## 🙏 Acknowledgments
- [dom-to-image](https://github.com/tsayen/dom-to-image)
- [Hero Patterns](https://www.heropatterns.com/)
- [Devicons](https://github.com/devicons/devicon)

Don't forget to leave a ⭐ if you found this useful. Also checkout more products i built at [rutik.dev](https://rutik.dev)



---
title: Notes on {Xe,Lua}Latex
pubDate: 2026-03-13
updatedDate: 2026-07-27
---

Running notes on getting good typography out of LuaLaTeX (and, where it differs, XeLaTeX).

## Microtype

```latex
\usepackage[tracking=true,factor=1500,stretch=50]{microtype}
```

Base config lifted from [Joar von Arndt's writeup](https://joarvarndt.se/latex), who in turn credits the package author Robert Schlicht's own documentation for the reasoning. Von Arndt's actual settings are a bit more aggressive (`kerning=true, spacing=true, selected=true`) but restricted to pdfTeX. XeLaTeX and LuaLaTeX load fonts through `fontspec`, which doesn't hand microtype the same low-level font-expansion hooks. Character protrusion and tracking still work fine on both engines. So under lualatex you're mainly taking advantage of letter spacing (which is still incredibly useful). It might be worth reducing stretch to 25 to make it less noticable at the cost of some layout savings.

## My Preferred Hyperref Setup

```latex
\hypersetup{
    hidelinks,
    pdfpagemode={UseOutlines},
    pdfpagelayout={TwoPageRight},
    pdftitle={⟨Your Title⟩},
    pdfauthor={⟨You⟩}
    % ⟨other metadata⟩
}
```

`hidelinks` disables the default boxes hyperref draws around links, refs, citations, etc. `UseOutlines` opens the PDF with the bookmarks panel visible, which is more useful information-wise than thumbnails. `TwoPageRight` gives you a proper book-style facing-page layout which only really matters once you have symmetric (not just left/right) margins.

## Footnote & general layout stuff

If you want book-grade layout references use Peter Wilson's _A Few Notes on Book Design_ (`texdoc memdesign`). Wilson has said outright that he wrote it after being frustrated that most LaTeX documentation tells you what to type without ever explaining why a given layout is good design. Lars Madsen has maintained `memoir` since around 2009 and has written a lot of the newer material himself. I don't actually use the memoir class day too often outside of typsetting booklets but the manual is worth reading purely for the design reasoning.

## My Favorite Fonts

- [`pagella-otf`](https://ctan.org/pkg/pagella-otf)
- [`schola-otf`](https://ctan.org/pkg/schola-otf)
- [`termes-otf`](https://ctan.org/pkg/termes-otf) -- always nice if you need TNR
- [`CharisSIL`](https://ctan.org/pkg/CharisSIL) --
  Similar to Lucida Bright. I have taken to using `fontspec` and the official SIL file, but I cannot remember why.
- [`libertinus`](https://ctan.org/pkg/libertinus)

---
title: Notes on {Xe,Lua}Latex
pubDate: 2026-03-13
---

## Microtype

derived from [Joar von Arndt](https://joarvarndt.se/latex)

```latex
\usepackage[tracking=true,factor=1500,stretch=50]{microtype}
```

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

## My Favorite Fonts

- [`pagella-otf`](https://ctan.org/pkg/pagella-otf)
- [`schola-otf`](https://ctan.org/pkg/schola-otf)
- [`termes-otf`](https://ctan.org/pkg/termes-otf) -- always nice if you need TNR
- [`CharisSIL`](https://ctan.org/pkg/CharisSIL) --
  Similar to Lucida Bright. I have taken to using `fontspec` and the official SIL file, but I cannot remember why.
- [`libertinus`](https://ctan.org/pkg/libertinus)
#!/usr/bin/env python3
"""Generate App Store screenshots for poco start (iPhone 6.7\" + iPad 13\")."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "app-store"
ICON = ROOT / "assets" / "icon.png"

# App Store required sizes
IPHONE_67 = (1290, 2796)  # 6.7"
IPHONE_65 = (1242, 2688)  # 6.5"
IPHONE = IPHONE_65  # default upload size many slots expect
IPAD = (2048, 2732)  # 12.9" / 13"

NAVY = (26, 39, 68)
RED = (229, 57, 53)
ORANGE = (255, 138, 0)
YELLOW = (255, 208, 0)
CREAM = (255, 248, 240)
WHITE = (255, 255, 255)
MUTED = (138, 151, 173)
SOFT = (255, 241, 224)
BORDER = (232, 217, 200)


def font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica.ttc",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size=size)
        except OSError:
            continue
    return ImageFont.load_default()


def gradient(size: tuple[int, int], top: tuple[int, int, int], mid: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    w, h = size
    # Build a 1px-wide column, then stretch — much faster than per-pixel loops.
    col = Image.new("RGB", (1, h))
    px = col.load()
    for y in range(h):
        t = y / max(h - 1, 1)
        if t < 0.55:
            u = t / 0.55
            c = tuple(int(top[i] + (mid[i] - top[i]) * u) for i in range(3))
        else:
            u = (t - 0.55) / 0.45
            c = tuple(int(mid[i] + (bottom[i] - mid[i]) * u) for i in range(3))
        px[0, y] = c
    return col.resize((w, h), Image.Resampling.BILINEAR)


def rounded_rect(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    radius: int,
    fill=None,
    outline=None,
    width: int = 1,
) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def shadow_card(base: Image.Image, box: tuple[int, int, int, int], radius: int, fill=WHITE) -> None:
    x0, y0, x1, y1 = box
    pad = 28
    sw, sh = (x1 - x0) + pad * 2, (y1 - y0) + pad * 2
    layer = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle((pad + 6, pad + 10, pad + (x1 - x0) + 6, pad + (y1 - y0) + 10), radius=radius, fill=(26, 39, 68, 40))
    blurred = layer.filter(ImageFilter.GaussianBlur(12))
    base.alpha_composite(blurred, (x0 - pad, y0 - pad))
    d2 = ImageDraw.Draw(base)
    d2.rounded_rectangle(box, radius=radius, fill=fill)


def fit_text(draw: ImageDraw.ImageDraw, text: str, max_width: int, start_size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    size = start_size
    while size > 18:
        f = font(size, bold=bold)
        if draw.textlength(text, font=f) <= max_width:
            return f
        size -= 2
    return font(18, bold=bold)


def paste_icon(img: Image.Image, center: tuple[int, int], size: int) -> None:
    icon = Image.open(ICON).convert("RGBA")
    icon = icon.resize((size, size), Image.Resampling.LANCZOS)
    # soft circle mask behind
    mask = Image.new("RGBA", (size + 24, size + 24), (0, 0, 0, 0))
    md = ImageDraw.Draw(mask)
    md.ellipse((0, 0, size + 23, size + 23), fill=(255, 255, 255, 230))
    ix = center[0] - (size + 24) // 2
    iy = center[1] - (size + 24) // 2
    img.alpha_composite(mask, (ix, iy))
    img.alpha_composite(icon, (center[0] - size // 2, center[1] - size // 2))


def status_bar(draw: ImageDraw.ImageDraw, w: int, y: int, dark: bool = False) -> None:
    color = NAVY if dark else WHITE
    f = font(max(28, w // 40), bold=True)
    draw.text((48, y), "9:41", font=f, fill=color)
    # simple battery/signal glyphs
    bx = w - 48
    draw.rounded_rectangle((bx - 70, y + 8, bx, y + 28), radius=6, outline=color, width=3)
    draw.rectangle((bx - 62, y + 14, bx - 18, y + 22), fill=color)


def draw_tab_icon(draw: ImageDraw.ImageDraw, kind: str, cx: int, cy: int, color: tuple[int, int, int]) -> None:
    if kind == "home":
        draw.polygon([(cx, cy - 14), (cx - 16, cy), (cx - 16, cy + 14), (cx + 16, cy + 14), (cx + 16, cy)], outline=color, width=3)
        draw.rectangle((cx - 5, cy + 4, cx + 5, cy + 14), outline=color, width=3)
    elif kind == "learn":
        draw.rounded_rectangle((cx - 14, cy - 16, cx + 14, cy + 16), 4, outline=color, width=3)
        draw.line((cx - 6, cy - 6, cx + 6, cy - 6), fill=color, width=3)
        draw.line((cx - 6, cy + 2, cx + 6, cy + 2), fill=color, width=3)
    elif kind == "practice":
        draw.ellipse((cx - 14, cy - 14, cx + 14, cy + 14), outline=color, width=3)
        draw.polygon([(cx - 4, cy - 8), (cx + 8, cy), (cx - 4, cy + 8)], fill=color)
    elif kind == "speak":
        draw.rounded_rectangle((cx - 8, cy - 16, cx + 8, cy + 4), 8, outline=color, width=3)
        draw.arc((cx - 16, cy - 6, cx + 16, cy + 18), 0, 180, fill=color, width=3)
        draw.line((cx, cy + 18, cx, cy + 24), fill=color, width=3)
    else:  # you
        draw.ellipse((cx - 8, cy - 16, cx + 8, cy - 2), outline=color, width=3)
        draw.arc((cx - 16, cy - 2, cx + 16, cy + 20), 200, 340, fill=color, width=3)


def tab_bar(img: Image.Image, labels: list[str], active: int, y: int, pad: int) -> None:
    draw = ImageDraw.Draw(img)
    w = img.width
    h = 120
    rounded_rect(draw, (pad, y, w - pad, y + h), 36, fill=WHITE, outline=BORDER, width=2)
    kinds = ["home", "learn", "practice", "speak", "you"]
    slot = (w - 2 * pad) / len(labels)
    f = font(22, bold=True)
    for i, label in enumerate(labels):
        cx = int(pad + slot * (i + 0.5))
        color = RED if i == active else MUTED
        draw_tab_icon(draw, kinds[i], cx, y + 38, color)
        draw.text((cx, y + 78), label, font=f, fill=color, anchor="mt")


def badge_circle(draw: ImageDraw.ImageDraw, xy: tuple[int, int], label: str, bg: tuple[int, int, int], fg=WHITE) -> None:
    x, y = xy
    draw.ellipse((x - 28, y - 28, x + 28, y + 28), fill=bg)
    draw.text((x, y), label, font=font(22), fill=fg, anchor="mm")


def caption(draw: ImageDraw.ImageDraw, w: int, y: int, title: str, subtitle: str, light: bool = False) -> int:
    title_c = WHITE if light else NAVY
    sub_c = (255, 255, 255, 230) if light else MUTED
    # subtitle uses RGB
    if light:
        sub_c = (255, 245, 230)
    tf = fit_text(draw, title, w - 120, 72)
    draw.text((w // 2, y), title, font=tf, fill=title_c, anchor="mt")
    sf = font(34, bold=False)
    draw.text((w // 2, y + 90), subtitle, font=sf, fill=sub_c, anchor="mt")
    return y + 170


def screen_welcome(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = gradient(size, YELLOW, ORANGE, RED).convert("RGBA")
    draw = ImageDraw.Draw(img)
    status_bar(draw, w, 48)
    y = caption(draw, w, 160, "Spanish for beginners", "Start speaking from day one", light=True)

    paste_icon(img, (w // 2, y + 180), min(420, w // 3))
    brand = font(92)
    draw.text((w // 2, y + 430), "poco start", font=brand, fill=WHITE, anchor="mt")
    tag = font(36, bold=False)
    draw.text((w // 2, y + 540), "Learn Spanish poco a poco", font=tag, fill=(255, 245, 230), anchor="mt")

    btn_y = h - 320
    rounded_rect(draw, (80, btn_y, w - 80, btn_y + 110), 32, fill=RED)
    draw.text((w // 2, btn_y + 55), "Get started", font=font(40), fill=WHITE, anchor="mm")
    rounded_rect(draw, (80, btn_y + 140, w - 80, btn_y + 240), 32, fill=WHITE)
    draw.text((w // 2, btn_y + 190), "I already have an account", font=font(32), fill=NAVY, anchor="mm")
    return img


def screen_home(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGBA", size, CREAM + (255,))
    draw = ImageDraw.Draw(img)
    status_bar(draw, w, 48, dark=True)
    y = caption(draw, w, 140, "Pick up where you left off", "Lessons, streak & XP in one place")

    pad = 64
    draw.text((pad, y), "¡Hola!", font=font(54), fill=NAVY)
    draw.text((pad, y + 70), "poco start", font=font(36), fill=ORANGE)

    card = (pad, y + 150, w - pad, y + 520)
    # gradient hero card
    hero = gradient((card[2] - card[0], card[3] - card[1]), YELLOW, ORANGE, ORANGE).convert("RGBA")
    mask = Image.new("L", hero.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, hero.width - 1, hero.height - 1), 40, fill=255)
    img.paste(hero, (card[0], card[1]), mask)
    hd = ImageDraw.Draw(img)
    hd.text((card[0] + 40, card[1] + 40), "NEXT LESSON", font=font(26), fill=WHITE)
    hd.text((card[0] + 40, card[1] + 100), "Hola", font=font(56), fill=WHITE)
    hd.text((card[0] + 40, card[1] + 190), "Greet people the Spanish way", font=font(32, False), fill=(255, 245, 230))
    rounded_rect(hd, (card[0] + 40, card[1] + 270, card[0] + 360, card[1] + 350), 28, fill=RED)
    hd.text((card[0] + 200, card[1] + 310), "Continue", font=font(34), fill=WHITE, anchor="mm")

    # stats
    stats = [("Streak", "3", ORANGE), ("XP", "120", YELLOW), ("Done", "2/12", RED)]
    sw = (w - 2 * pad - 40) // 3
    sy = card[3] + 40
    for i, (label, value, accent) in enumerate(stats):
        x0 = pad + i * (sw + 20)
        shadow_card(img, (x0, sy, x0 + sw, sy + 180), 28, fill=WHITE)
        d = ImageDraw.Draw(img)
        d.ellipse((x0 + sw // 2 - 10, sy + 28, x0 + sw // 2 + 10, sy + 48), fill=accent)
        d.text((x0 + sw // 2, sy + 80), value, font=font(40), fill=NAVY, anchor="mt")
        d.text((x0 + sw // 2, sy + 140), label, font=font(24, False), fill=MUTED, anchor="mt")

    # lesson list preview
    ly = sy + 230
    ImageDraw.Draw(img).text((pad, ly), "Your path", font=font(40), fill=NAVY)
    lessons = [("Hola", "Done", True), ("Presentarse", "Next", False), ("Números", "Locked", False)]
    for i, (title, badge, done) in enumerate(lessons):
        box = (pad, ly + 70 + i * 130, w - pad, ly + 180 + i * 130)
        shadow_card(img, box, 28, fill=WHITE)
        d = ImageDraw.Draw(img)
        bg = (46, 155, 94) if done else (RED if badge == "Next" else BORDER)
        cx, cy = box[0] + 56, (box[1] + box[3]) // 2
        d.ellipse((cx - 28, cy - 28, cx + 28, cy + 28), fill=bg)
        if done:
            d.line((cx - 12, cy, cx - 2, cy + 10), fill=WHITE, width=5)
            d.line((cx - 2, cy + 10, cx + 14, cy - 10), fill=WHITE, width=5)
        else:
            d.text((cx, cy), str(i + 1), font=font(24), fill=WHITE if badge == "Next" else MUTED, anchor="mm")
        d.text((box[0] + 110, (box[1] + box[3]) // 2), title, font=font(34), fill=NAVY, anchor="lm")
        color = (46, 155, 94) if done else (RED if badge == "Next" else MUTED)
        d.text((box[2] - 36, (box[1] + box[3]) // 2), badge, font=font(26), fill=color, anchor="rm")

    tab_bar(img, ["Home", "Learn", "Practice", "Speak", "You"], 0, h - 200, pad)
    return img


def screen_speak(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGBA", size, CREAM + (255,))
    draw = ImageDraw.Draw(img)
    status_bar(draw, w, 48, dark=True)
    y = caption(draw, w, 140, "Practice your pronunciation", "Speak Spanish out loud — get instant feedback")

    pad = 64
    draw.text((pad, y), "Speak", font=font(56), fill=NAVY)
    draw.text((pad, y + 70), "Say the phrase clearly in Spanish", font=font(30, False), fill=MUTED)
    draw.text((w - pad, y + 20), "1 / 12", font=font(30), fill=MUTED, anchor="rt")

    card = (pad, y + 160, w - pad, y + 780)
    shadow_card(img, card, 40, fill=WHITE)
    d = ImageDraw.Draw(img)
    # Spanish flag stripe
    fx = (card[0] + card[2]) // 2
    d.rounded_rectangle((fx - 48, card[1] + 50, fx + 48, card[1] + 110), 8, fill=RED)
    d.rectangle((fx - 48, card[1] + 70, fx + 48, card[1] + 90), fill=YELLOW)
    d.text(((card[0] + card[2]) // 2, card[1] + 160), "Buenos días", font=font(64), fill=NAVY, anchor="mt")
    d.text(((card[0] + card[2]) // 2, card[1] + 250), "Good morning", font=font(36, False), fill=MUTED, anchor="mt")
    d.text(((card[0] + card[2]) // 2, card[1] + 320), "BWE-nos DI-as", font=font(32, False), fill=ORANGE, anchor="mt")

    # mic button
    cx, cy = (card[0] + card[2]) // 2, card[1] + 520
    d.ellipse((cx - 90, cy - 90, cx + 90, cy + 90), fill=RED)
    d.rounded_rectangle((cx - 18, cy - 36, cx + 18, cy + 8), 16, fill=WHITE)
    d.arc((cx - 36, cy - 10, cx + 36, cy + 40), 0, 180, fill=WHITE, width=6)
    d.line((cx, cy + 40, cx, cy + 54), fill=WHITE, width=6)
    d.text((cx, cy + 130), "Hold to speak", font=font(28, False), fill=MUTED, anchor="mt")

    # score chip
    chip = (pad, card[3] + 40, w - pad, card[3] + 180)
    shadow_card(img, chip, 28, fill=SOFT)
    d = ImageDraw.Draw(img)
    d.text((chip[0] + 40, (chip[1] + chip[3]) // 2), "Nice!", font=font(40), fill=NAVY, anchor="lm")
    d.text((chip[2] - 40, (chip[1] + chip[3]) // 2), "92% match", font=font(36), fill=RED, anchor="rm")

    tab_bar(img, ["Home", "Learn", "Practice", "Speak", "You"], 3, h - 200, pad)
    return img


def screen_learn(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGBA", size, CREAM + (255,))
    draw = ImageDraw.Draw(img)
    status_bar(draw, w, 48, dark=True)
    y = caption(draw, w, 140, "A1 beginner path", "Short lessons that build real Spanish")

    pad = 64
    units = [
        ("Primeros pasos", "#FF8A00", [("Hola", True), ("Presentarse", True), ("Números", False)]),
        ("En la ciudad", "#E53935", [("Café", False), ("Transporte", False)]),
        ("Conversación", "#1A2744", [("Small talk", False)]),
    ]
    uy = y
    for title, color_hex, lessons in units:
        color = tuple(int(color_hex[i : i + 2], 16) for i in (1, 3, 5))
        d = ImageDraw.Draw(img)
        d.text((pad, uy), title, font=font(40), fill=color)
        uy += 70
        for lesson, done in lessons:
            box = (pad, uy, w - pad, uy + 120)
            shadow_card(img, box, 28, fill=WHITE)
            d = ImageDraw.Draw(img)
            d.ellipse((box[0] + 28, box[1] + 35, box[0] + 78, box[1] + 85), fill=(46, 155, 94) if done else BORDER)
            if done:
                d.text((box[0] + 53, box[1] + 60), "✓", font=font(28), fill=WHITE, anchor="mm")
            d.text((box[0] + 110, (box[1] + box[3]) // 2), lesson, font=font(36), fill=NAVY, anchor="lm")
            d.text((box[2] - 36, (box[1] + box[3]) // 2), "20 XP", font=font(26), fill=MUTED, anchor="rm")
            uy += 140
        uy += 30

    tab_bar(img, ["Home", "Learn", "Practice", "Speak", "You"], 1, h - 200, pad)
    return img


def screen_practice(size: tuple[int, int]) -> Image.Image:
    w, h = size
    img = Image.new("RGBA", size, CREAM + (255,))
    draw = ImageDraw.Draw(img)
    status_bar(draw, w, 48, dark=True)
    y = caption(draw, w, 140, "Quick practice rounds", "Translate, listen & lock it in")

    pad = 64
    draw.text((pad, y), "Practice", font=font(56), fill=NAVY)
    draw.text((pad, y + 70), "What does this mean?", font=font(32, False), fill=MUTED)

    prompt = (pad, y + 160, w - pad, y + 420)
    shadow_card(img, prompt, 36, fill=WHITE)
    d = ImageDraw.Draw(img)
    d.text(((prompt[0] + prompt[2]) // 2, prompt[1] + 80), "Gracias", font=font(72), fill=NAVY, anchor="mt")
    d.text(((prompt[0] + prompt[2]) // 2, prompt[1] + 180), "Tap the correct translation", font=font(30, False), fill=MUTED, anchor="mt")

    options = [("Thank you", True), ("Please", False), ("Goodbye", False), ("You're welcome", False)]
    oy = prompt[3] + 40
    for text, correct in options:
        box = (pad, oy, w - pad, oy + 120)
        fill = (255, 245, 244) if correct else WHITE
        outline = RED if correct else BORDER
        shadow_card(img, box, 28, fill=fill)
        d = ImageDraw.Draw(img)
        d.rounded_rectangle(box, 28, outline=outline, width=4 if correct else 2)
        d.text((box[0] + 40, (box[1] + box[3]) // 2), text, font=font(36), fill=NAVY, anchor="lm")
        if correct:
            d.text((box[2] - 40, (box[1] + box[3]) // 2), "✓", font=font(40), fill=RED, anchor="rm")
        oy += 140

    tab_bar(img, ["Home", "Learn", "Practice", "Speak", "You"], 2, h - 200, pad)
    return img


SCREENS = [
    ("01-welcome", screen_welcome),
    ("02-home", screen_home),
    ("03-speak", screen_speak),
    ("04-learn", screen_learn),
    ("05-practice", screen_practice),
]


def save(img: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(path, "PNG", optimize=True)
    print(f"Wrote {path} ({img.width}x{img.height})")


def main() -> None:
    for slug, maker in SCREENS:
        for size, label in ((IPHONE_65, "1242x2688"), (IPHONE_67, "1290x2796")):
            save(maker(size), OUT / f"iphone-{slug}-{label}.png")
        save(maker(IPAD), OUT / f"ipad-{slug}-2048x2732.png")


if __name__ == "__main__":
    main()

/* Dice & Dots — lightweight i18n + UI behaviour.
   - Landing page strings use [data-i18n] keys from the dictionary below.
   - Long legal text uses [data-lang="en|pl"] blocks toggled by language.
   - Language is persisted in localStorage and reflected on <html lang>. */

const I18N = {
  en: {
    "nav.how": "How it works",
    "nav.build": "What you get",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.faq": "FAQ",
    "nav.cta": "Get the app",

    "hero.eyebrow": "Photo → printable dice mosaic",
    "hero.title.1": "Turn your photos into",
    "hero.title.2": "real dice mosaics",
    "hero.lead": "Dice & Dots converts any photo into a print-ready plan made of dice faces. Print the instruction, place real dice on the matching squares, and build your own dice art — at true 1:1 scale.",
    "hero.cta.primary": "Download on the App Store",
    "hero.cta.secondary": "See how it works",
    "hero.note": "No accounts · No ads · Everything runs on your device",

    "how.kicker": "Simple workflow",
    "how.title": "From photo to mosaic in four steps",
    "how.subtitle": "Everything happens right on your phone — no internet, no uploads.",
    "how.s1.t": "Pick a photo",
    "how.s1.d": "Choose an image from your gallery, take a new photo, or import a file. Crop and rotate to frame it perfectly.",
    "how.s2.t": "Set the size",
    "how.s2.d": "Choose dice size (8 mm mini to jumbo) and mosaic dimensions. The app shows the real-world size and total dice count.",
    "how.s3.t": "Tune the look",
    "how.s3.d": "Pick dice color, adjust contrast and tone, enable blank dice for bright or dark areas, and preview live.",
    "how.s4.t": "Print & build",
    "how.s4.d": "Export a print-ready PDF at 1:1 scale, print it, and place real dice on each square following the grid.",

    "build.kicker": "What you actually get",
    "build.title": "A printable instruction you simply follow",
    "build.subtitle": "The app gives you a clear, numbered plan — so anyone can build the mosaic, no guessing.",
    "build.b1.t": "A grid where every square = one die",
    "build.b1.d": "Each cell of the printed sheet shows how many pips a die should show (1–6). You just place a real die showing the same number on that square.",
    "build.b1.li1": "Dots printed in every cell tell you the exact die face",
    "build.b1.li2": "X / Y coordinates around the edges keep you from losing your place",
    "build.b1.li3": "Large mosaics are split across multiple A-format sheets",
    "build.b2.t": "Printed at true 1:1 scale",
    "build.b2.d": "The PDF matches the real size of your dice, so the printed grid lines up perfectly with the physical pieces. Tile the pages together and start placing dice.",
    "build.b2.li1": "Snap dice into the grid row by row",
    "build.b2.li2": "Works with standard pipped dice you can buy in bulk",
    "build.b2.li3": "Glue the finished mosaic to a board to hang it on your wall",

    "feat.kicker": "Features",
    "feat.title": "Everything you need to build dice art",
    "feat.subtitle": "Powerful options, all on-device and private.",
    "feat.1.t": "Multiple image sources",
    "feat.1.d": "Use your photo gallery, camera, or imported files as the source image.",
    "feat.2.t": "Live mosaic preview",
    "feat.2.d": "Real-time rendering shows exactly how your mosaic will look before you print.",
    "feat.3.t": "Adjustable dice size",
    "feat.3.d": "From 8 mm mini to jumbo dice — pick the scale that fits your project.",
    "feat.4.t": "Many dice colors",
    "feat.4.d": "Black, white, red and more color schemes to match the look you want.",
    "feat.5.t": "Paper format presets",
    "feat.5.d": "A4, A3, A2, A1, A0, B-series and custom mosaic dimensions.",
    "feat.6.t": "Contrast & tone control",
    "feat.6.d": "Fine-tune the image and add blank dice for very bright or dark areas.",
    "feat.7.t": "Print-ready PDF",
    "feat.7.d": "Generates a PDF with grid coordinates and axis labels, ready to print.",
    "feat.8.t": "10 languages",
    "feat.8.d": "PL, EN, ES, FR, DE, IT, PT, RU, NL and SV built in.",
    "feat.9.t": "100% private",
    "feat.9.d": "No accounts, no backend, no tracking. Your photos never leave your device.",

    "gallery.kicker": "Inside the app",
    "gallery.title": "Designed to be effortless",

    "price.kicker": "Pricing",
    "price.title": "Free to create — pay only to export",
    "price.subtitle": "Build and preview as many mosaics as you like for free. No ads, no subscriptions.",
    "price.single.t": "Single export",
    "price.single.p": "per PDF",
    "price.single.li1": "Create and preview for free",
    "price.single.li2": "Export one print-ready PDF",
    "price.single.li3": "Pay only when you're ready",
    "price.life.tag": "Best value",
    "price.life.t": "Lifetime unlock",
    "price.life.p": "one-time",
    "price.life.li1": "Unlimited PDF exports forever",
    "price.life.li2": "All dice colors and sizes",
    "price.life.li3": "Pay once — no subscription",
    "price.note": "Prices are shown in the App Store in your local currency.",

    "faq.kicker": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How does Dice & Dots work?",
    "faq.a1": "You pick a photo, choose your dice size and mosaic dimensions, and the app turns the image into a grid of dice faces. You then export a print-ready PDF and build the mosaic with real dice.",
    "faq.q2": "What do I print exactly?",
    "faq.a2": "You print an instruction sheet: a grid where every square shows how many pips a die should display, with X/Y coordinates so you always know where you are. Place a matching die on each square.",
    "faq.q3": "What dice do I need?",
    "faq.a3": "Standard pipped dice (the kind with dots, 1–6). You can choose the size in the app — from 8 mm mini dice up to larger ones — and buy them in bulk.",
    "faq.q4": "Is it really printed at 1:1 scale?",
    "faq.a4": "Yes. The PDF is generated at real-world scale so the printed grid matches the physical size of your dice. Just make sure your printer is set to print at 100% (no scaling).",
    "faq.q5": "Do you collect my photos or data?",
    "faq.a5": "No. All image processing happens locally on your device. There are no accounts, no backend servers, no analytics and no tracking.",
    "faq.q6": "How much does it cost?",
    "faq.a6": "Creating and previewing mosaics is free. You can pay per single PDF export, or unlock unlimited exports forever with a one-time purchase. No ads, no subscriptions.",

    "cta.title": "Ready to build your first dice mosaic?",
    "cta.text": "Download Dice & Dots and turn a favourite photo into a piece of art made of dice.",
    "cta.btn": "Download on the App Store",

    "footer.tagline": "Turn your photos into printable dice mosaics.",
    "footer.product": "Product",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.madeby": "By Hubert Przychodniak",

    "legal.back": "Back to home"
  },

  pl: {
    "nav.how": "Jak to działa",
    "nav.build": "Co otrzymujesz",
    "nav.features": "Funkcje",
    "nav.pricing": "Cennik",
    "nav.faq": "FAQ",
    "nav.cta": "Pobierz aplikację",

    "hero.eyebrow": "Zdjęcie → mozaika z kostek do druku",
    "hero.title.1": "Zamień zdjęcia w",
    "hero.title.2": "mozaiki z prawdziwych kostek",
    "hero.lead": "Dice & Dots zamienia dowolne zdjęcie w gotowy do druku plan ułożony z oczek kostek. Wydrukuj instrukcję, układaj prawdziwe kostki na pasujących polach i twórz własną sztukę z kostek — w skali 1:1.",
    "hero.cta.primary": "Pobierz z App Store",
    "hero.cta.secondary": "Zobacz, jak to działa",
    "hero.note": "Bez kont · Bez reklam · Wszystko działa na Twoim urządzeniu",

    "how.kicker": "Prosty proces",
    "how.title": "Od zdjęcia do mozaiki w czterech krokach",
    "how.subtitle": "Wszystko dzieje się na Twoim telefonie — bez internetu, bez wysyłania danych.",
    "how.s1.t": "Wybierz zdjęcie",
    "how.s1.d": "Wybierz obraz z galerii, zrób nowe zdjęcie lub zaimportuj plik. Przytnij i obróć, by idealnie skadrować.",
    "how.s2.t": "Ustaw rozmiar",
    "how.s2.d": "Wybierz rozmiar kostek (od 8 mm mini po duże) i wymiary mozaiki. Aplikacja pokaże rzeczywisty rozmiar i liczbę kostek.",
    "how.s3.t": "Dopracuj wygląd",
    "how.s3.d": "Wybierz kolor kostek, dostosuj kontrast i tonację, włącz puste kostki dla jasnych lub ciemnych obszarów i oglądaj podgląd na żywo.",
    "how.s4.t": "Wydrukuj i ułóż",
    "how.s4.d": "Wyeksportuj gotowy PDF w skali 1:1, wydrukuj go i układaj prawdziwe kostki na każdym polu według siatki.",

    "build.kicker": "Co właściwie dostajesz",
    "build.title": "Instrukcję do druku, którą po prostu odwzorowujesz",
    "build.subtitle": "Aplikacja daje Ci czytelny, ponumerowany plan — dzięki temu mozaikę ułoży każdy, bez zgadywania.",
    "build.b1.t": "Siatka, w której każde pole = jedna kostka",
    "build.b1.d": "Każda komórka wydrukowanego arkusza pokazuje, ile oczek ma mieć kostka (1–6). Wystarczy położyć na tym polu prawdziwą kostkę z tą samą liczbą oczek.",
    "build.b1.li1": "Kropki w każdej komórce wskazują dokładną ściankę kostki",
    "build.b1.li2": "Współrzędne X / Y na brzegach nie pozwolą zgubić miejsca",
    "build.b1.li3": "Duże mozaiki są dzielone na kilka arkuszy formatu A",
    "build.b2.t": "Druk w prawdziwej skali 1:1",
    "build.b2.d": "PDF odpowiada rzeczywistemu rozmiarowi Twoich kostek, więc wydrukowana siatka idealnie pasuje do fizycznych elementów. Złóż strony razem i zacznij układać.",
    "build.b2.li1": "Wkładaj kostki w siatkę rząd po rzędzie",
    "build.b2.li2": "Działa ze standardowymi kostkami z oczkami, dostępnymi hurtowo",
    "build.b2.li3": "Gotową mozaikę przyklej do podkładu i powieś na ścianie",

    "feat.kicker": "Funkcje",
    "feat.title": "Wszystko, czego potrzebujesz do sztuki z kostek",
    "feat.subtitle": "Rozbudowane opcje — w całości na urządzeniu i prywatnie.",
    "feat.1.t": "Wiele źródeł obrazu",
    "feat.1.d": "Jako źródło użyj galerii zdjęć, aparatu lub zaimportowanych plików.",
    "feat.2.t": "Podgląd mozaiki na żywo",
    "feat.2.d": "Renderowanie w czasie rzeczywistym pokazuje dokładnie, jak mozaika będzie wyglądać przed drukiem.",
    "feat.3.t": "Regulowany rozmiar kostek",
    "feat.3.d": "Od 8 mm mini po duże kostki — wybierz skalę pasującą do Twojego projektu.",
    "feat.4.t": "Wiele kolorów kostek",
    "feat.4.d": "Czarne, białe, czerwone i więcej zestawów kolorów do wybranego efektu.",
    "feat.5.t": "Gotowe formaty papieru",
    "feat.5.d": "A4, A3, A2, A1, A0, seria B oraz własne wymiary mozaiki.",
    "feat.6.t": "Kontrola kontrastu i tonacji",
    "feat.6.d": "Dopracuj obraz i dodaj puste kostki dla bardzo jasnych lub ciemnych obszarów.",
    "feat.7.t": "PDF gotowy do druku",
    "feat.7.d": "Tworzy PDF ze współrzędnymi siatki i opisami osi, gotowy do wydruku.",
    "feat.8.t": "10 języków",
    "feat.8.d": "Wbudowane PL, EN, ES, FR, DE, IT, PT, RU, NL i SV.",
    "feat.9.t": "100% prywatności",
    "feat.9.d": "Bez kont, bez serwera, bez śledzenia. Twoje zdjęcia nie opuszczają urządzenia.",

    "gallery.kicker": "Wnętrze aplikacji",
    "gallery.title": "Zaprojektowana, by była prosta",

    "price.kicker": "Cennik",
    "price.title": "Tworzenie za darmo — płacisz tylko za eksport",
    "price.subtitle": "Twórz i oglądaj podgląd dowolnej liczby mozaik za darmo. Bez reklam, bez subskrypcji.",
    "price.single.t": "Pojedynczy eksport",
    "price.single.p": "za PDF",
    "price.single.li1": "Tworzenie i podgląd za darmo",
    "price.single.li2": "Eksport jednego PDF gotowego do druku",
    "price.single.li3": "Płacisz dopiero, gdy jesteś gotów",
    "price.life.tag": "Najlepsza wartość",
    "price.life.t": "Odblokowanie na zawsze",
    "price.life.p": "jednorazowo",
    "price.life.li1": "Nieograniczone eksporty PDF na zawsze",
    "price.life.li2": "Wszystkie kolory i rozmiary kostek",
    "price.life.li3": "Płacisz raz — bez subskrypcji",
    "price.note": "Ceny widoczne są w App Store w Twojej walucie lokalnej.",

    "faq.kicker": "FAQ",
    "faq.title": "Najczęściej zadawane pytania",
    "faq.q1": "Jak działa Dice & Dots?",
    "faq.a1": "Wybierasz zdjęcie, ustawiasz rozmiar kostek i wymiary mozaiki, a aplikacja zamienia obraz w siatkę ze ścianek kostek. Następnie eksportujesz PDF gotowy do druku i układasz mozaikę z prawdziwych kostek.",
    "faq.q2": "Co dokładnie drukuję?",
    "faq.a2": "Drukujesz arkusz instrukcji: siatkę, w której każde pole pokazuje, ile oczek ma mieć kostka, ze współrzędnymi X/Y, dzięki którym zawsze wiesz, gdzie jesteś. Na każdym polu kładziesz pasującą kostkę.",
    "faq.q3": "Jakich kostek potrzebuję?",
    "faq.a3": "Standardowych kostek z oczkami (z kropkami, 1–6). Rozmiar wybierasz w aplikacji — od kostek 8 mm mini po większe — i kupujesz je hurtowo.",
    "faq.q4": "Czy druk naprawdę jest w skali 1:1?",
    "faq.a4": "Tak. PDF generowany jest w rzeczywistej skali, więc wydrukowana siatka odpowiada fizycznemu rozmiarowi kostek. Upewnij się tylko, że drukarka drukuje w 100% (bez skalowania).",
    "faq.q5": "Czy zbieracie moje zdjęcia lub dane?",
    "faq.a5": "Nie. Całe przetwarzanie obrazu odbywa się lokalnie na Twoim urządzeniu. Nie ma kont, serwerów, analityki ani śledzenia.",
    "faq.q6": "Ile to kosztuje?",
    "faq.a6": "Tworzenie i podgląd mozaik są darmowe. Możesz płacić za pojedynczy eksport PDF lub odblokować nieograniczone eksporty na zawsze jednorazowym zakupem. Bez reklam, bez subskrypcji.",

    "cta.title": "Gotów ułożyć swoją pierwszą mozaikę z kostek?",
    "cta.text": "Pobierz Dice & Dots i zamień ulubione zdjęcie w dzieło sztuki z kostek.",
    "cta.btn": "Pobierz z App Store",

    "footer.tagline": "Zamień zdjęcia w mozaiki z kostek do druku.",
    "footer.product": "Produkt",
    "footer.legal": "Informacje prawne",
    "footer.privacy": "Polityka prywatności",
    "footer.terms": "Warunki korzystania",
    "footer.contact": "Kontakt",
    "footer.rights": "Wszelkie prawa zastrzeżone.",
    "footer.madeby": "Autor: Hubert Przychodniak",

    "legal.back": "Powrót na stronę główną"
  }
};

const SUPPORTED = ["en", "pl"];

function detectInitialLang() {
  const saved = localStorage.getItem("dd_lang");
  if (saved && SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("pl") ? "pl" : "en";
}

function applyLang(lang) {
  if (!SUPPORTED.includes(lang)) lang = "en";
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // format: "attr:key;attr2:key2"
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  // Long blocks (legal pages)
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.getAttribute("data-lang") === lang ? "" : "none";
  });

  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("dd_lang", lang);

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-set-lang") === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(detectInitialLang());

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-set-lang")));
  });

  // mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
});

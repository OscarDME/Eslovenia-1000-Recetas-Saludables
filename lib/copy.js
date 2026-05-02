// lib/copy.js — CELOTNA vidna vsebina pristajalne strani (landing page).
// Vse spremembe besedila se izvajajo tukaj. Komponente berejo samo iz tega objekta.

export const copy = {
  metadata: {
    title: "1000 Zdravih receptov 2.0",
    description:
      "1000 Zdravih receptov 2.0 za diabetike: okusni, preprosti in ustvarjeni posebej za nadzor krvnega sladkorja. Posebna ponudba: 9.90 € + 5 brezplačnih bonusov.",
    lang: "sl",
  },

  brand: {
    name: "",
    tagline: "",
  },

  hero: {
    banner: "TA PONUDBA + BREZPLAČNI BONUSI POTEČE ČEZ:",
    timerLabels: { days: "Dni", hours: "Ur", minutes: "Min", seconds: "Sek" },
    kicker: "Več kot 2.000 ljudi je spremenilo svoje življenje",
    headlinePre: "Več kot 2.000 ljudi",
    headlineHighlight: "je izboljšalo svoje zdravje",
    headlinePost: "zahvaljujoč našim 1000 receptom",
    subheadline: "Sladkorna bolezen ni izgovor, da bi se odrekli okusni hrani!",
    supporting:
      "Izboljšaj svoje zdravje in uživaj v neverjetnih okusih z našimi 1000 zdravimi recepti 2.0.",
    cta: "Želim knjigo zdaj! 📖",
    imageAlt: "E-knjiga 1000 Zdravih receptov 2.0 za diabetike",
    trustChips: [
      { icon: "⭐", text: "+2.000 ljudi" },
      { icon: "🎁", text: "5 brezplačnih bonusov" },
      { icon: "🛡️", text: "7-dnevna garancija" },
    ],
  },

  story: {
    headlinePre: "Ali veš, da lahko slaba prehrana poveča tveganje za",
    headlineHighlight: "zaplete pri sladkorni bolezni",
    headlinePost: "hitro in povsem neopazno?",
    intro:
      "Vsak grižljaj šteje. Kar poješ danes, določa, kako se boš počutil jutri. Ko živiš s sladkorno boleznijo, se majhne napake seštevajo tiho in neopazno.",
    problemsLead: "Tukaj so težave, ki se pojavijo, ko zanemariš svojo prehrano:",
    problems: [
      {
        title: "Nenadni skoki krvnega sladkorja",
        desc: "Slaba prehrana lahko povzroči skoke sladkorja v krvi, kar vodi do poškodb živcev, oči in ledvic.",
      },
      {
        title: "Povečanje telesne teže",
        desc: "Neustrezna hrana pogosto vodi do debelosti, ki lahko močno poslabša stanje sladkorne bolezni.",
      },
      {
        title: "Povečano tveganje za srčne bolezni",
        desc: "Slabe prehranjevalne navade povečujejo tveganje za bolezni srca, ki so eden glavnih vzrokov umrljivosti pri ljudeh z diabetesom.",
      },
      {
        title: "Prebavne težave",
        desc: "Nekatere sestavine lahko povzročijo intoleranco, zaprtje, pline in nelagodje.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Roka z zelenim jabolkom in druga z roza krofom: izbira je pomembna",
    solutionBadge: "Rešitev",
    solutionHeadline:
      "Se želiš naučiti jesti okusno in zdravo, ne da bi pri tem zanemaril svojo sladkorno bolezen?",
  },

  benefits: {
    forYouHeadline: "Ta e-knjiga je popolna zate, če...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Živiš s sladkorno boleznijo ali skrbiš za diabetika",
        desc: "Odkril boš recepte, ustvarjene za ohranjanje sladkorja pod nadzorom, brez odrekanja užitkom ob hrani.",
      },
      {
        icon: "Sparkles",
        title: "Želiš poenostaviti zdravo kuhanje",
        desc: "Zdrava prehrana ne sme biti zapletena: ponujamo ti kratke in jasne korake.",
      },
      {
        icon: "Users",
        title: "Iščeš okusne in preproste recepte za vso družino",
        desc: "Jedi, v katerih bodo uživali vsi domači, ne le oseba z diabetesom.",
      },
    ],
    headline: "Kaj vse te čaka v 1000 Zdravih receptih 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Okusni in zdravi recepti",
        desc: "Ki jih bo tvoja družina oboževala ob vsakem obroku.",
      },
      {
        icon: "ListChecks",
        title: "Navodila korak za korakom",
        desc: "Preprosta za sledenje, tudi če si v kuhinji popoln začetnik.",
      },
      {
        icon: "ShoppingBasket",
        title: "Dostopne sestavine",
        desc: "Ki jih zlahka najdeš v vsakem lokalnem supermarketu.",
      },
      {
        icon: "Lightbulb",
        title: "Nasveti in triki izkušenih kuharjev",
        desc: "Da boš kuhal samozavestno in dosegel še boljši okus.",
      },
      {
        icon: "Apple",
        title: "Skrbno izbrana hranila",
        desc: "Naučil se boš dati telesu točno tisto, kar potrebuje.",
      },
      {
        icon: "Wheat",
        title: "Nadzor nad vnosom ogljikovih hidratov",
        desc: "Popolnoma brez odrekanja okusu ali raznolikosti.",
      },
      {
        icon: "Activity",
        title: "Stabilne ravni krvnega sladkorja",
        desc: "Jedi, ki ti pomagajo obdržati vse pod strogim nadzorom.",
      },
      {
        icon: "HeartPulse",
        title: "Izboljšano splošno zdravje",
        desc: "Več energije, boljša prebava in višja kakovost življenja.",
      },
    ],
    socialProof:
      "Z našimi 1000 Zdravimi recepti 2.0 za diabetike so ljudje, tako kot ti, uspeli uravnati svoj krvni sladkor, izgubiti odvečne kilograme in vrniti veselje v svoje življenje.",
  },

  features: {
    headline: "Kaj vključuje e-knjiga?",
    subheadline: "Vse, kar potrebuješ, da ješ okusno in zdravo, brez nepotrebnega stresa in razmišljanja.",
    items: [
      {
        icon: "Utensils",
        title: "Okusni in zdravi recepti",
        desc: "Ogromno raznolikih, uravnoteženih in hranljivih receptov – od kosil in večerij do zdravih omak in krem.",
      },
      {
        icon: "BookOpen",
        title: "Osnove zdravega kuhanja za diabetike",
        desc: "Spoznaj, kako točno so ti recepti zasnovani, da ustrezajo tvojim specifičnim potrebam.",
      },
      {
        icon: "Lightbulb",
        title: "Praktični kulinarični nasveti",
        desc: "Odkrij uporabne trike, zaradi katerih bo tvoj čas v kuhinji veliko prijetnejši.",
      },
      {
        icon: "Replace",
        title: "Vodnik po zdravih zamenjavah",
        desc: "Ugotovi, katere sestavine so prijazne do diabetikov in s čim zamenjati škodljivo hrano.",
      },
      {
        icon: "Gift",
        title: "Dodatne ugodnosti",
        desc: "Z nakupom prejmeš ekskluzivna darila in dostop do našega VIP kluba.",
      },
    ],
  },

  bonuses: {
    badge: "BREZPLAČNI BONUSI",
    headline: "Samo omejen čas prejmeš teh 5 daril",
    subheadline: "Popolnoma brezplačno priloženo ob današnjem nakupu e-knjige.",
    freeLabel: "BREZPLAČNO!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BONUS 1",
        title: "E-knjiga: 100 Zdravih juh",
        desc: "Vsebuje 100 receptov za tople juhe z nizko vsebnostjo ogljikovih hidratov in sladkorjev.",
        value: "15 €",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BONUS 2",
        title: "E-knjiga: 67 Zdravih smutijev",
        desc: "67 receptov za osvežilne smutije z malo ogljikovimi hidrati in sladkorji.",
        value: "15 €",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BONUS 3",
        title: "E-knjiga: 100 Zdravih prigrizkov",
        desc: "100 idej za hitre in zdrave vmesne obroke za ljudi s sladkorno boleznijo.",
        value: "15 €",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BONUS 4",
        title: "E-knjiga: Planer prehrane",
        desc: "Praktičen planer, s katerim zlahka organiziraš svoj dnevni jedilnik.",
        value: "15 €",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BONUS 5",
        title: "VIP Klub",
        desc: "Pravica do prihodnjih posodobitev, 7-dnevna garancija in popusti na druge izdelke iz našega kataloga.",
        value: "20 €",
      },
    ],
    totalLabel: "Skupna vrednost bonusov: 80 € — Danes: BREZPLAČNO",
    footer: "Vse se dostavi v digitalni obliki takoj po tvojem nakupu.",
  },

  testimonials: {
    headline: "Kaj pravijo naši kupci",
    subheadline:
      "Resnični ljudje delijo svoje mnenje o 1000 Zdravih receptih 2.0 za diabetike.",
    productLabel: "1000 Zdravih receptov 2.0 za diabetike",
    reviewedLabel: "je ocenil/a",
    rating: "5★",
    actions: { like: "Všeč mi je", comment: "Komentiraj", share: "Deli" },
    items: [
      {
        name: "Peter Novak",
        text:
          "Iskal sem preproste recepte z dostopnimi sestavinami. Ta knjiga vsebuje neverjetno okusne recepte in v samo nekaj korakih lahko ješ odlično. Priporočam 100%!",
      },
      {
        name: "Marija Horvat",
        text:
          "Moj največji strah ob diagnozi sladkorne bolezni je bil, da ne bom več mogla okusno jesti. Recepti so zelo dobri, ker pa je knjiga digitalna, jo imam med nakupovanjem kar na telefonu.",
      },
      {
        name: "Julija Kovačič",
        text:
          "Kot mami otroka z diabetesom je bilo iskanje hrane, ki bi ugajala vsem, pravi izziv. Ta e-knjiga nam je dala raznolikost in lahkotnost. Recepti so pri nas doma prava uspešnica.",
      },
      {
        name: "Ana Krajnc",
        text:
          "Ko so mojemu možu diagnosticirali sladkorno bolezen, mi je ta knjiga izjemno pomagala. Preprosti recepti, brez čudnih sestavin in zelo okusni. Toplo priporočam!",
      },
      {
        name: "Nina Zupan",
        text:
          "Priporočam knjigo: okusni in enostavni recepti za sledenje. Hvala za brezplačne bonuse, planer prehrane je popoln za natančno spremljanje diete.",
      },
      {
        name: "Janez Vidmar",
        text:
          "Ta knjiga je spremenila moj način kuhanja. Prej sem si hrano pripravljal ločeno od družine. Zdaj vsi jemo isto, brez kakršnihkoli zapletov. Tisočkrat hvala!",
      },
    ],
    cta: "ŽELIM ZAČETI ŠE DANES",
  },

  finalCta: {
    preHeadline: "TVOJ TRENUTEK JE ZDAJ",
    urgencyTop: "80% POPUST",
    headline:
      "VZEMI NAŠO DIGITALNO KNJIGO DANES Z NORIM POPUSTOM!",
    subUrgency:
      "Več kot 2.000 ljudi je že preobrazilo svoje zdravje s temi recepti. Danes si na vrsti ti.",
    bundleList: [
      "E-knjiga: 1000 Zdravih receptov 2.0 za diabetike",
      "Bonus 1 — 100 Zdravih juh",
      "Bonus 2 — 67 Zdravih smutijev",
      "Bonus 3 — 100 Zdravih prigrizkov",
      "Bonus 4 — Planer prehrane",
      "Bonus 5 — VIP Klub",
    ],
    imageAlt: "Celoten paket 1000 Zdravih receptov 2.0 + 5 bonusov",
    guaranteeText:
      "Še vedno oklevaš? Ne skrbi, tveganja popolnoma ni! Tvoje zdravje si to zasluži. 7-dnevna garancija na zadovoljstvo.",
    guaranteeImageAlt: "Garancija",
    regularPriceLabel: "Od",
    regularPrice: "25.00 €",
    offerPrice: "9.90 €",
    discountBadge: "80% POPUST",
    urgencyText: "PLAČILO BO PRIKAZANO V TVOJI LOKALNI VALUTI",
    bottomUrgency: "Ta ponudba poteče, ko odštevalnik doseže ničlo.",
    button: "IZKORISTI PRILOŽNOST DANES",
    trustRow: "100% varno plačilo · Takojšen dostop · 7-dnevna garancija",
  },

  faq: {
    authorRole: "Ekipa za zdravo prehrano",
    authorHeadline: "Okusna hrana, ki skrbi za tvoje zdravje",
    authorBio:
      "Verjamemo, da ti sladkorna bolezen ne sme vzeti užitka ob hrani. Vsak posamezen recept je bil ustvarjen z mislijo na to, da lahko uživaš brez slabe vesti in ohraniš glukozo pod popolnim nadzorom.",
    authorImageAlt: "Naša ekipa",
    worksHeadline: "Za koga ta e-knjiga NI?",
    doesntWork: [
      "Za tiste, ki želijo jesti nezdravo brez posledic",
      "Za tiste, ki niso pripravljeni poskusiti novih okusov",
      "Za tiste, ki pričakujejo rezultate, ne da bi karkoli spremenili",
    ],
    worksText:
      "Če pa želiš prave, preproste, okusne in tvoji sladkorni bolezni prilagojene recepte, je ta knjiga narejena točno zate.",
    headline: "Pogosta vprašanja",
    subheadline: "Vse, kar moraš vedeti, preden začneš.",
    items: [
      {
        q: "Kako bom prejel knjigo po plačilu?",
        a: "Takoj po nakupu boš prejel e-pošto s povezavo za prenos. Lahko jo bereš na telefonu, tablici ali računalniku.",
      },
      {
        q: "V kakšnem formatu je e-knjiga?",
        a: "Je v visokokakovostnem PDF formatu, ustvarjena za udobno branje na katerikoli napravi, ne da bi jo moral natisniti.",
      },
      {
        q: "So recepti primerni za diabetike tipa 1 in tipa 2?",
        a: "Da, recepti so posebej zasnovani za pomoč pri uravnavanju krvnega sladkorja. Kljub temu vedno priporočamo, da se o svoji prehrani posvetuješ s svojim zdravnikom.",
      },
      {
        q: "Potrebujem kakšne čudne ali drage sestavine?",
        a: "Ne. Vsi recepti uporabljajo sestavine, ki jih zlahka in po ugodnih cenah najdeš v vsakem supermarketu.",
      },
      {
        q: "Ali obstaja garancija?",
        a: "Da. Imaš 7-dnevno polno garancijo. Če nisi zadovoljen, ti vrnemo 100% denarja, brez vprašanj.",
      },
      {
        q: "Lahko plačam v svoji lokalni valuti?",
        a: "Da. Znesek se med nakupom avtomatsko preračuna in prikaže v tvoji lokalni valuti.",
      },
    ],
  },

  closing: {
    kicker: "ZADNJI KORAK",
    headline: "Tvoje zdravje ne more več čakati",
    subheadline:
      "Že danes lahko začneš jesti okusno, ne da bi pri tem zanemaril svojo sladkorno bolezen. Jutri ta cena morda ne bo več na voljo.",
    regularPrice: "25.00 €",
    offerPrice: "9.90 €",
    ctaLabel: "IZKORISTI PRILOŽNOST DANES",
    trustRow: "Varno plačilo · Takojšen dostop · 7-dnevna garancija",
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "To spletno mesto ni del spletnega mesta Facebook ali družbe Facebook Inc. Prav tako to mesto na noben način NI odobreno ali sponzorirano s strani družbe Facebook.",
    trademark: "FACEBOOK je registrirana blagovna znamka družbe FACEBOOK, Inc.",
  },
};
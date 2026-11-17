import type { Product, ProductSource } from "./productTypes";

const catalogueSource = {
  title: "Наша продукция",
  url: "https://apisfera2000.ru/catalogue",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const tedaPageSource = {
  title: "Тэда",
  url: "https://apisfera2000.ru/teda",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const tedaInstructionUrl =
  "https://apisfera2000.ru/images/instr/teda_instr.pdf";
const tedaInstructionSource = {
  title: "Инструкция по применению препарата ТЭДА",
  url: tedaInstructionUrl,
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const muravinkaPageSource = {
  title: "Муравьинка",
  url: "https://apisfera2000.ru/muravinka",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const muravinkaInstructionUrl =
  "https://apisfera2000.ru/images/instr/muravinka_instr.pdf";
const muravinkaInstructionSource = {
  title: "Инструкция по ветеринарному применению препарата Муравьинка",
  url: muravinkaInstructionUrl,
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const vetforPageSource = {
  title: "Ветфор",
  url: "https://apisfera2000.ru/vetfor",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const vetforInstructionUrl =
  "https://apisfera2000.ru/images/instr/vetfor_instr.pdf";
const vetforInstructionSource = {
  title: "Инструкция по применению препарата Ветфор",
  url: vetforInstructionUrl,
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const apitakPageSource = {
  title: "Апитак",
  url: "https://apisfera2000.ru/apitak",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const apitakInstructionUrl =
  "https://apisfera2000.ru/images/instr/apitak_instr.pdf";
const apitakInstructionSource = {
  title: "Инструкция по применению препарата Апитак",
  url: apitakInstructionUrl,
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const apistimPageSource = {
  title: "Апистим",
  url: "https://apisfera2000.ru/apistim",
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const apistimInstructionUrl =
  "https://apisfera2000.ru/images/instr/apistim_instr.pdf";
const apistimInstructionSource = {
  title: "Инструкция по применению Апистима",
  url: apistimInstructionUrl,
  checkedAt: "2026-11-17",
} satisfies ProductSource;

const officialImageRightsNote =
  "Оригинал с сайта ООО «Аписфера 2000»; условия повторного использования не опубликованы.";

export const localProducts: readonly Product[] = [
  {
    slug: "teda",
    name: "ТЭДА",
    purpose: "Для лечения варроатоза и акарапидоза пчёл.",
    purposeCategoryIds: ["varroatosis", "acarapidosis"],
    description: "Термовозгонные шнуры для аэрозольного применения.",
    composition:
      "Действующее вещество — амитраз; в инструкции также указаны калий азотнокислый и о-ксилол.",
    application:
      "Тлеющий шнур на подложке вводят в нижний леток улья. Полная схема обработки и ограничения приведены в PDF-инструкции на сайте компании.",
    image: {
      src: "/images/teda-package.jpg",
      alt: "Упаковка ТЭДА и шнуры препарата",
      sourceUrl: "https://apisfera2000.ru/images/phocagallery/teda1.jpg",
      rights: officialImageRightsNote,
    },
    instruction: {
      href: "/documents/teda-instruction.pdf",
      title: "Инструкция по применению препарата ТЭДА (PDF)",
      sourceUrl: tedaInstructionUrl,
    },
    sources: [catalogueSource, tedaPageSource, tedaInstructionSource],
    relatedProductSlugs: null,
  },
  {
    slug: "apistim",
    name: "Апистим",
    purpose: "Для стимуляции развития пчелиных семей.",
    purposeCategoryIds: ["family-development"],
    description: "Кормовая добавка для пчёл в форме порошка.",
    composition:
      "Калий фосфорнокислый — 25%, магний сернокислый — 36%, кобальт хлористый — 1,2%, сахароза — до 100% (по PDF-инструкции).",
    application:
      "Добавляют в сахарный сироп для подкормки или в воду для поения пчёл. Полная схема применения приведена в PDF-инструкции на сайте компании.",
    image: {
      src: "/images/apistim-package.jpg",
      alt: "Упаковка кормовой добавки Апистим",
      sourceUrl: "https://apisfera2000.ru/images/phocagallery/apistim.jpg",
      rights: officialImageRightsNote,
    },
    instruction: {
      href: "/documents/apistim-instruction.pdf",
      title: "Инструкция по применению Апистима (PDF)",
      sourceUrl: apistimInstructionUrl,
    },
    sources: [catalogueSource, apistimPageSource, apistimInstructionSource],
    relatedProductSlugs: null,
  },
  {
    slug: "muravinka",
    name: "Муравьинка",
    purpose: "Для лечения варроатоза и акарапидоза пчёл.",
    purposeCategoryIds: ["varroatosis", "acarapidosis"],
    description: "Гель для наружного применения в кислотопроницаемых пакетах.",
    composition:
      "Действующее вещество — муравьиная кислота (85%); вспомогательный компонент — натрий-карбоксиметилцеллюлоза.",
    application:
      "Пакеты с гелем размещают в улье при температуре наружного воздуха от 12 до 25 °C. Полная схема обработки и ограничения приведены в PDF-инструкции на сайте компании.",
    image: {
      src: "/images/muravinka-package.jpg",
      alt: "Банка Муравьинки и пакетики с препаратом",
      sourceUrl: "https://apisfera2000.ru/images/phocagallery/muravinka.jpg",
      rights: officialImageRightsNote,
    },
    instruction: {
      href: "/documents/muravinka-instruction.pdf",
      title:
        "Инструкция по ветеринарному применению препарата Муравьинка (PDF)",
      sourceUrl: muravinkaInstructionUrl,
    },
    sources: [catalogueSource, muravinkaPageSource, muravinkaInstructionSource],
    relatedProductSlugs: null,
  },
  {
    slug: "apitak",
    name: "Апитак",
    purpose: "Для лечения варроатоза пчёл.",
    purposeCategoryIds: ["varroatosis"],
    description: "Раствор для наружного применения.",
    composition:
      "Действующее вещество — амитраз (12,5%). В инструкции также указаны эфирное масло чабреца, неонол и ксилол.",
    application:
      "После медосбора, в осенний безрасплодный период, эмульсию препарата наносят на пчёл в улочках. Температурные условия и приготовление эмульсии требуют уточнения из-за расхождения страницы и PDF-инструкции.",
    image: {
      src: "/images/apitak-package.jpg",
      alt: "Упаковка Апитака и две ампулы",
      sourceUrl: "https://apisfera2000.ru/images/phocagallery/apitak.jpg",
      rights: officialImageRightsNote,
    },
    instruction: {
      href: "/documents/apitak-instruction.pdf",
      title: "Инструкция по применению препарата Апитак (PDF)",
      sourceUrl: apitakInstructionUrl,
    },
    sources: [catalogueSource, apitakPageSource, apitakInstructionSource],
    relatedProductSlugs: null,
  },
  {
    slug: "vetfor",
    name: "Ветфор",
    purpose: "Для лечения варроатоза пчёл.",
    purposeCategoryIds: ["varroatosis"],
    description: "Пластины из древесного шпона для размещения в улье.",
    composition:
      "На одну пластину: флувалинат — 80 мг, амитраз — 5 мг. В инструкции также указаны пихтовое масло, диметилсульфоксид и древесный шпон.",
    application:
      "Пластины размещают внутри улья. Дозировку и условия начала обработки нужно уточнить: сведения на странице препарата и в PDF-инструкции расходятся.",
    image: {
      src: "/images/vetfor-package.jpg",
      alt: "Упаковка Ветфора и деревянные пластины",
      sourceUrl: "https://apisfera2000.ru/images/phocagallery/vetfor.jpg",
      rights: officialImageRightsNote,
    },
    instruction: {
      href: "/documents/vetfor-instruction.pdf",
      title: "Инструкция по применению препарата Ветфор (PDF)",
      sourceUrl: vetforInstructionUrl,
    },
    sources: [catalogueSource, vetforPageSource, vetforInstructionSource],
    relatedProductSlugs: null,
  },
];

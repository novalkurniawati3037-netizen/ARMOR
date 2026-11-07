/* ARMOR v2 — data + interaktivitas prototipe */

const PATHOGENS = [
  "Escherichia coli","Klebsiella pneumoniae","Acinetobacter baumannii",
  "Pseudomonas aeruginosa","Staphylococcus aureus (MRSA)","Enterococcus faecium","Enterobacter cloacae"
];
const SPECIMENS = ["Darah","Urin","Respiratori","Feses","Swab genital","Cairan serebrospinal"];
const ANTIBIOTICS = [
  "Ceftriaxone","Cefotaxime","Meropenem","Imipenem","Amikacin","Gentamicin",
  "Ciprofloxacin","Levofloxacin","Piperacillin-tazobactam","Fosfomycin",
  "Vancomycin","Linezolid","Colistin","Tigecycline","Ampicillin","Cotrimoxazole"
];
const DISEASES = [
  "Infeksi aliran darah / sepsis","Pneumonia","Infeksi saluran kemih (ISK)",
  "Infeksi kulit & jaringan lunak","Infeksi luka","Meningitis","Infeksi intra-abdomen"
];
const REGIONS = [
  { id:"sumatera", name:"Sumatera" },
  { id:"jawa", name:"Jawa" },
  { id:"kalimantan", name:"Kalimantan" },
  { id:"sulawesi", name:"Sulawesi" },
  { id:"bali-nusra", name:"Bali & Nusa Tenggara" },
  { id:"maluku-papua", name:"Maluku & Papua" }
];

const KEY_STATS = [
  { label:"Isolat (konsep SINAR)", value:"134.620+", sub:"dari 139 RS · 24 provinsi" },
  { label:"Dimensi pencarian", value:"4+", sub:"penyakit · obat · wilayah · patogen" },
  { label:"Patogen prioritas", value:"7", sub:"WHO priority pathogens" },
  { label:"Kategori warna AST", value:"CLSI M39", sub:"≤60% · 61–80% · ≥81% · N<30" }
];

const GENE_INFO = [
  { gene:"blaCTX-M", mechanism:"ESBL", pathogens:"E. coli, K. pneumoniae", note:"Resisten sefalosporin gen-3" },
  { gene:"blaNDM", mechanism:"Carbapenemase (MBL)", pathogens:"Enterobacterales, A. baumannii", note:"Resisten hampir semua β-laktam" },
  { gene:"blaOXA-48", mechanism:"Carbapenemase", pathogens:"K. pneumoniae", note:"Sering sulit dideteksi fenotipik" },
  { gene:"mecA", mechanism:"PBP2a", pathogens:"S. aureus", note:"MRSA" },
  { gene:"vanA", mechanism:"Vancomycin resistance", pathogens:"Enterococcus", note:"VRE" }
];

const resistanceData = [
  { name:"Sumatera", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:29, nIsolates:4200, specimen:"Urin", year:2024, category:"red" },
  { name:"Jawa", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:42, nIsolates:18500, specimen:"Urin", year:2024, category:"red" },
  { name:"Kalimantan", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:51, nIsolates:2100, specimen:"Urin", year:2024, category:"red" },
  { name:"Sulawesi", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:78, nIsolates:1800, specimen:"Urin", year:2024, category:"yellow" },
  { name:"Bali & Nusa Tenggara", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:55, nIsolates:950, specimen:"Urin", year:2024, category:"red" },
  { name:"Maluku & Papua", pathogen:"Escherichia coli", antibiotic:"Ceftriaxone", sensitivity:61, nIsolates:420, specimen:"Urin", year:2024, category:"yellow" },
  { name:"Sumatera", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:68, nIsolates:2800, specimen:"Darah", year:2024, category:"yellow" },
  { name:"Jawa", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:54, nIsolates:9200, specimen:"Darah", year:2024, category:"red" },
  { name:"Kalimantan", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:71, nIsolates:1100, specimen:"Darah", year:2024, category:"yellow" },
  { name:"Sulawesi", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:82, nIsolates:980, specimen:"Darah", year:2024, category:"green" },
  { name:"Bali & Nusa Tenggara", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:75, nIsolates:620, specimen:"Darah", year:2024, category:"yellow" },
  { name:"Maluku & Papua", pathogen:"Klebsiella pneumoniae", antibiotic:"Meropenem", sensitivity:79, nIsolates:210, specimen:"Darah", year:2024, category:"yellow" },
  { name:"Sumatera", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:31, nIsolates:1900, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Jawa", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:28, nIsolates:7800, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Kalimantan", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:39, nIsolates:890, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Sulawesi", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:48, nIsolates:720, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Bali & Nusa Tenggara", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:42, nIsolates:410, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Maluku & Papua", pathogen:"Acinetobacter baumannii", antibiotic:"Meropenem", sensitivity:55, nIsolates:180, specimen:"Respiratori", year:2024, category:"red" },
  { name:"Jawa", pathogen:"Pseudomonas aeruginosa", antibiotic:"Meropenem", sensitivity:62, nIsolates:4500, specimen:"Respiratori", year:2024, category:"yellow" },
  { name:"Sumatera", pathogen:"Pseudomonas aeruginosa", antibiotic:"Meropenem", sensitivity:71, nIsolates:1600, specimen:"Respiratori", year:2024, category:"yellow" },
  { name:"Jawa", pathogen:"Staphylococcus aureus (MRSA)", antibiotic:"Vancomycin", sensitivity:98, nIsolates:3200, specimen:"Darah", year:2024, category:"green" },
  { name:"Sumatera", pathogen:"Staphylococcus aureus (MRSA)", antibiotic:"Vancomycin", sensitivity:97, nIsolates:1100, specimen:"Darah", year:2024, category:"green" }
];

function getCategory(sens, n) {
  if (n < 30) return "gray";
  if (sens <= 60) return "red";
  if (sens <= 80) return "yellow";
  return "green";
}

/** Pilihan obat per lini + harga + ketersediaan + cara pakai (ilustratif) */
function getTherapyLines(regionId, pathogen, disease) {
  const adj = regionId === "jawa" ? -4 : regionId === "sulawesi" ? 6 : regionId === "maluku-papua" ? 3 : 0;

  const packs = {
    "Escherichia coli": {
      "Infeksi saluran kemih (ISK)": [
        { line: 1, name: "Fosfomycin trometamol", route: "Oral 3 g dosis tunggal", sens: 91, n: 1800, price: 85000, avail: "tinggi", form: "Sachet 3 g", note: "ISK non-komplikasi pada dewasa" },
        { line: 1, name: "Nitrofurantoin", route: "Oral 100 mg 4×/hari × 5–7 hari", sens: 88, n: 2200, price: 12000, avail: "tinggi", form: "Kapsul 100 mg", note: "Hindari jika GFR rendah" },
        { line: 2, name: "Amikacin", route: "IV 15 mg/kg/hari", sens: 86, n: 4200, price: 45000, avail: "sedang", form: "Injeksi", note: "Monitoring kadar & ginjal" },
        { line: 2, name: "Ciprofloxacin", route: "Oral/IV sesuai formularium", sens: 48, n: 5100, price: 28000, avail: "tinggi", form: "Tab / infus", note: "Sensitivitas lokal sering rendah" },
        { line: 3, name: "Meropenem", route: "IV 1 g 8 jam", sens: 94, n: 3800, price: 185000, avail: "sedang", form: "Injeksi", note: "Cadangan; indikasi ketat" }
      ],
      "Infeksi aliran darah / sepsis": [
        { line: 1, name: "Amikacin", route: "IV 15 mg/kg/hari", sens: 86, n: 4200, price: 45000, avail: "sedang", form: "Injeksi", note: "Kombinasi sering diperlukan" },
        { line: 1, name: "Piperacillin-tazobactam", route: "IV 4,5 g 6–8 jam", sens: 72, n: 3100, price: 95000, avail: "sedang", form: "Injeksi", note: "Sesuaikan dengan antibiogram RS" },
        { line: 2, name: "Meropenem", route: "IV 1 g 8 jam", sens: 94, n: 3800, price: 185000, avail: "sedang", form: "Injeksi", note: "ESBL / sepsis berat" },
        { line: 3, name: "Colistin", route: "IV loading lalu maintenance", sens: 89, n: 650, price: 310000, avail: "terbatas", form: "Injeksi", note: "Nefrotoksisitas; last-line" }
      ],
      default: [
        { line: 1, name: "Amikacin", route: "IV sesuai BB", sens: 86, n: 4200, price: 45000, avail: "sedang", form: "Injeksi", note: "" },
        { line: 2, name: "Meropenem", route: "IV 1 g 8 jam", sens: 94, n: 3800, price: 185000, avail: "sedang", form: "Injeksi", note: "" },
        { line: 3, name: "Colistin", route: "IV sesuai protokol", sens: 89, n: 650, price: 310000, avail: "terbatas", form: "Injeksi", note: "Cadangan" }
      ]
    },
    "Klebsiella pneumoniae": {
      default: [
        { line: 1, name: "Amikacin", route: "IV 15 mg/kg/hari", sens: 72, n: 2900, price: 45000, avail: "sedang", form: "Injeksi", note: "" },
        { line: 2, name: "Meropenem", route: "IV 1–2 g 8 jam", sens: 58, n: 4100, price: 185000, avail: "sedang", form: "Injeksi", note: "Cek karbapenemase lokal" },
        { line: 2, name: "Tigecycline", route: "IV 100 mg loading, 50 mg 12 jam", sens: 78, n: 1200, price: 420000, avail: "terbatas", form: "Injeksi", note: "Bukan untuk bakteremia primer" },
        { line: 3, name: "Colistin", route: "IV sesuai protokol", sens: 89, n: 850, price: 310000, avail: "terbatas", form: "Injeksi", note: "Kombinasi sering direkomendasikan" }
      ]
    },
    "Acinetobacter baumannii": {
      default: [
        { line: 1, name: "Colistin", route: "IV loading + maintenance", sens: 84, n: 2100, price: 310000, avail: "terbatas", form: "Injeksi", note: "Sering pilihan utama MDR" },
        { line: 2, name: "Tigecycline", route: "IV sesuai protokol", sens: 71, n: 1600, price: 420000, avail: "terbatas", form: "Injeksi", note: "" },
        { line: 3, name: "Amikacin", route: "IV", sens: 45, n: 2400, price: 45000, avail: "sedang", form: "Injeksi", note: "Sensitivitas sering rendah" },
        { line: 3, name: "Meropenem", route: "IV high-dose extended infusion", sens: 31, n: 3200, price: 185000, avail: "sedang", form: "Injeksi", note: "Jika masih sensitif secara lokal" }
      ]
    },
    "Pseudomonas aeruginosa": {
      default: [
        { line: 1, name: "Piperacillin-tazobactam", route: "IV 4,5 g 6 jam", sens: 68, n: 2100, price: 95000, avail: "sedang", form: "Injeksi", note: "" },
        { line: 1, name: "Amikacin", route: "IV", sens: 78, n: 1800, price: 45000, avail: "sedang", form: "Injeksi", note: "Kombinasi pada infeksi berat" },
        { line: 2, name: "Meropenem", route: "IV", sens: 64, n: 2500, price: 185000, avail: "sedang", form: "Injeksi", note: "" },
        { line: 3, name: "Ciprofloxacin", route: "Oral/IV", sens: 52, n: 1900, price: 28000, avail: "tinggi", form: "Tab / infus", note: "Cek sensitivitas lokal" }
      ]
    },
    "Staphylococcus aureus (MRSA)": {
      default: [
        { line: 1, name: "Vancomycin", route: "IV sesuai kadar serum", sens: 97, n: 2800, price: 75000, avail: "tinggi", form: "Injeksi", note: "Monitoring trough" },
        { line: 1, name: "Linezolid", route: "IV/Oral 600 mg 12 jam", sens: 99, n: 1100, price: 280000, avail: "sedang", form: "Tab / infus", note: "Durasi terbatas (toksisitas)" },
        { line: 2, name: "Teicoplanin", route: "IV", sens: 96, n: 650, price: 145000, avail: "sedang", form: "Injeksi", note: "" }
      ]
    }
  };

  const byPath = packs[pathogen] || packs["Escherichia coli"];
  let list = byPath[disease] || byPath.default || packs["Escherichia coli"].default;

  return list.map((item) => {
    const sens = Math.max(15, Math.min(99, item.sens + adj));
    return {
      ...item,
      sens,
      category: getCategory(sens, item.n)
    };
  }).sort((a, b) => a.line - b.line || b.sens - a.sens);
}

function availBadge(avail) {
  if (avail === "tinggi") return '<span class="badge-green rounded-full px-2 py-0.5 text-[10px] font-semibold">Ketersediaan tinggi</span>';
  if (avail === "sedang") return '<span class="badge-yellow rounded-full px-2 py-0.5 text-[10px] font-semibold">Ketersediaan sedang</span>';
  return '<span class="badge-red rounded-full px-2 py-0.5 text-[10px] font-semibold">Ketersediaan terbatas</span>';
}

function sensBadge(cat, val) {
  const cls = "badge-" + cat;
  return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}">${val}%</span>`;
}

function statsCard(s) {
  return `<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-xs font-medium uppercase tracking-wider text-slate-500">${s.label}</p>
    <p class="mt-1 font-nunito text-2xl font-extrabold text-navy-900">${s.value}</p>
    ${s.sub ? `<p class="mt-1 text-xs text-slate-500">${s.sub}</p>` : ""}
  </div>`;
}

/* ===== NAV ===== */
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  const el = document.getElementById("page-" + id);
  if (el) el.classList.add("active");
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.remove("active", "bg-navy-900", "text-white");
    a.classList.add("text-slate-600");
    if (a.dataset.page === id) {
      a.classList.add("active", "bg-navy-900", "text-white");
      a.classList.remove("text-slate-600");
    }
  });
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (id === "peta" && window.armorMap) {
    setTimeout(() => { window.armorMap.invalidateSize(); }, 120);
  }
}

/* ===== SEARCH ===== */
const SEARCH_INDEX = [
  ...DISEASES.map((d) => ({ type: "penyakit", label: d, action: "terapi", hint: "Buka pilihan obat untuk sindrom ini" })),
  ...ANTIBIOTICS.map((a) => ({ type: "antimikroba", label: a, action: "peta", hint: "Lihat pola sensitivitas di peta" })),
  ...REGIONS.map((r) => ({ type: "wilayah", label: r.name, action: "peta", hint: "Filter peta & terapi ke wilayah ini" })),
  ...PATHOGENS.map((p) => ({ type: "patogen", label: p, action: "terapi", hint: "Rekomendasi & insight strain" })),
  { type: "fitur", label: "Phylogenetic tree", action: "phylo", hint: "Hubungan filogenetik antar isolat" },
  { type: "fitur", label: "Choropleth map", action: "peta", hint: "Peta resistensi wilayah" },
  { type: "fitur", label: "Ketersediaan obat", action: "terapi", hint: "Harga & stok dalam pilihan lini" }
];

function runSearch() {
  const q = (document.getElementById("search-input").value || "").trim().toLowerCase();
  const type = document.getElementById("search-type").value;
  let hits = SEARCH_INDEX.filter((item) => {
    if (type !== "all" && item.type !== type) return false;
    if (!q) return true;
    return item.label.toLowerCase().includes(q) || item.type.includes(q) || (item.hint || "").toLowerCase().includes(q);
  });
  if (q && hits.length === 0) {
    hits = SEARCH_INDEX.filter((item) => item.label.toLowerCase().split(" ").some((w) => q.includes(w) || w.includes(q)));
  }
  const box = document.getElementById("search-results");
  if (hits.length === 0) {
    box.innerHTML = `<div class="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">Tidak ada hasil untuk “${q}”. Coba pneumonia, meropenem, Jawa, atau E. coli.</div>`;
    return;
  }
  box.innerHTML = hits.slice(0, 20).map((h) => `
    <button type="button" class="search-hit w-full text-left rounded-xl border border-slate-200 bg-white px-4 py-3 flex items-start justify-between gap-3"
      onclick="showPage('${h.action}')">
      <div>
        <div class="font-medium text-navy-900">${h.label}</div>
        <div class="text-xs text-slate-500 mt-0.5">${h.hint || ""}</div>
      </div>
      <span class="badge-blue rounded-full px-2 py-0.5 text-[10px] font-semibold shrink-0">${h.type}</span>
    </button>`).join("");
}

/* ===== MAP (Leaflet choropleth) ===== */
const REGION_PROVINCES = {
  "Sumatera": ["Aceh","Sumatera Utara","Sumatera Barat","Riau","Jambi","Sumatera Selatan","Bengkulu","Lampung","Kepulauan Bangka Belitung","Kepulauan Riau"],
  "Jawa": ["DKI Jakarta","Jawa Barat","Jawa Tengah","Daerah Istimewa Yogyakarta","Jawa Timur","Banten"],
  "Kalimantan": ["Kalimantan Barat","Kalimantan Tengah","Kalimantan Selatan","Kalimantan Timur","Kalimantan Utara"],
  "Sulawesi": ["Sulawesi Utara","Sulawesi Tengah","Sulawesi Selatan","Sulawesi Tenggara","Gorontalo","Sulawesi Barat"],
  "Bali & Nusa Tenggara": ["Bali","Nusa Tenggara Barat","Nusa Tenggara Timur"],
  "Maluku & Papua": ["Maluku","Maluku Utara","Papua","Papua Barat","Papua Selatan","Papua Tengah","Papua Pegunungan","Papua Barat Daya"]
};

// Approximate centroids for circle markers (lat, lng) — key provinces with pilot data
const PROVINCE_MARKERS = [
  { name: "Aceh", lat: 4.7, lng: 96.7, region: "Sumatera" },
  { name: "Sumatera Utara", lat: 2.1, lng: 99.0, region: "Sumatera" },
  { name: "Sumatera Barat", lat: -0.9, lng: 100.4, region: "Sumatera" },
  { name: "Riau", lat: 0.5, lng: 101.5, region: "Sumatera" },
  { name: "DKI Jakarta", lat: -6.2, lng: 106.8, region: "Jawa" },
  { name: "Jawa Barat", lat: -6.9, lng: 107.6, region: "Jawa" },
  { name: "Jawa Tengah", lat: -7.2, lng: 110.1, region: "Jawa" },
  { name: "Daerah Istimewa Yogyakarta", lat: -7.8, lng: 110.4, region: "Jawa" },
  { name: "Jawa Timur", lat: -7.5, lng: 112.5, region: "Jawa" },
  { name: "Kalimantan Barat", lat: -0.1, lng: 109.3, region: "Kalimantan" },
  { name: "Kalimantan Timur", lat: 0.5, lng: 116.5, region: "Kalimantan" },
  { name: "Sulawesi Selatan", lat: -4.0, lng: 119.9, region: "Sulawesi" },
  { name: "Sulawesi Utara", lat: 1.5, lng: 124.8, region: "Sulawesi" },
  { name: "Bali", lat: -8.4, lng: 115.2, region: "Bali & Nusa Tenggara" },
  { name: "Nusa Tenggara Barat", lat: -8.6, lng: 116.1, region: "Bali & Nusa Tenggara" },
  { name: "Papua", lat: -4.3, lng: 138.0, region: "Maluku & Papua" },
  { name: "Maluku", lat: -3.2, lng: 128.2, region: "Maluku & Papua" }
];

let armorMap = null;
let geoLayer = null;
let markerLayer = null;
let indoGeoJSON = null;

function getCategoryFromSens(s) {
  if (s == null) return "gray";
  if (s <= 60) return "red";
  if (s <= 80) return "yellow";
  return "green";
}

function colorForSens(s) {
  if (s == null) return "#cbd5e1"; // slate-300
  // continuous-ish: low sens (high resistance) = red, high sens = green
  if (s <= 40) return "#ef4444";
  if (s <= 55) return "#f97316";
  if (s <= 70) return "#f59e0b";
  if (s <= 85) return "#84cc16";
  return "#22c55e";
}

function initArmorMap() {
  if (armorMap) return;
  armorMap = L.map("armor-map", {
    center: [-2.5, 118],
    zoom: 5,
    minZoom: 4,
    maxZoom: 8,
    zoomControl: true,
    attributionControl: true
  });
  window.armorMap = armorMap;

  // Light basemap (OSM standard – free, no API key)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(armorMap);

  markerLayer = L.layerGroup().addTo(armorMap);

  // Load province GeoJSON
  fetch("https://raw.githubusercontent.com/denyherianto/indonesia-geojson-topojson-maps-with-38-provinces/main/GeoJSON/indonesia-38-provinces.geojson")
    .then((r) => r.json())
    .then((geo) => {
      indoGeoJSON = geo;
      geoLayer = L.geoJSON(geo, {
        style: () => ({
          fillColor: "#e2e8f0",
          weight: 0.8,
          opacity: 1,
          color: "#94a3b8",
          fillOpacity: 0.75
        }),
        onEachFeature: (feature, layer) => {
          const name = feature.properties.PROVINSI || feature.properties.name || "—";
          layer.bindTooltip(name, { sticky: true, direction: "top", opacity: 0.9 });
        }
      }).addTo(armorMap);
      renderMap(); // re-apply colors once geo is ready
    })
    .catch((err) => {
      console.warn("Gagal memuat GeoJSON provinsi, peta tetap menampilkan marker.", err);
      document.getElementById("map-stats").textContent = "GeoJSON tidak termuat — hanya marker regional";
    });
}

function updateMapChoropleth(filtered) {
  if (!geoLayer || !indoGeoJSON) return;

  // Build lookup: province name → region data
  const regionData = {};
  filtered.forEach((d) => { regionData[d.name] = d; });

  const provinceToData = {};
  Object.keys(REGION_PROVINCES).forEach((reg) => {
    const d = regionData[reg];
    REGION_PROVINCES[reg].forEach((p) => {
      provinceToData[p] = d || null;
    });
  });

  geoLayer.eachLayer((layer) => {
    const name = layer.feature.properties.PROVINSI || "";
    const d = provinceToData[name];
    const sens = d ? d.sensitivity : null;
    layer.setStyle({
      fillColor: colorForSens(sens),
      weight: 0.9,
      color: sens != null ? "#64748b" : "#94a3b8",
      fillOpacity: sens != null ? 0.82 : 0.55
    });
    if (d) {
      layer.bindPopup(
        `<strong>${name}</strong><br/>
         Wilayah: ${d.name}<br/>
         Sensitivitas: <b>${d.sensitivity}%</b><br/>
         N isolat (regional): ${d.nIsolates.toLocaleString("id-ID")}<br/>
         <span style="color:#64748b;font-size:11px">${d.pathogen} · ${d.antibiotic}</span>`
      );
    } else {
      layer.bindPopup(`<strong>${name}</strong><br/><span style="color:#64748b">Tidak ada data memadai pada dataset ilustratif</span>`);
    }
  });
}

function updateMapMarkers(filtered) {
  if (!markerLayer) return;
  markerLayer.clearLayers();

  const regionData = {};
  filtered.forEach((d) => { regionData[d.name] = d; });

  let withData = 0;
  PROVINCE_MARKERS.forEach((m) => {
    const d = regionData[m.region];
    if (!d) {
      // small gray cross-like marker for no data
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:10px;height:10px;border:1.5px solid #94a3b8;background:transparent;transform:rotate(45deg);margin:-5px 0 0 -5px;"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      });
      L.marker([m.lat, m.lng], { icon, interactive: false }).addTo(markerLayer);
      return;
    }
    withData++;
    const radius = Math.max(8, Math.min(28, Math.sqrt(d.nIsolates) / 4.5));
    const circle = L.circleMarker([m.lat, m.lng], {
      radius,
      fillColor: colorForSens(d.sensitivity),
      color: "#fff",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.88
    });
    const resistPct = Math.max(0, Math.min(100, 100 - d.sensitivity));
    circle.bindPopup(
      `<strong>${m.name}</strong><br/>
       n ≈ ${Math.round(d.nIsolates / (REGION_PROVINCES[m.region]?.length || 4)).toLocaleString("id-ID")} (estimasi lokal)<br/>
       % sensitif: <b>${d.sensitivity}%</b><br/>
       % resisten (approx): ${resistPct}%<br/>
       <span style="color:#64748b;font-size:11px">${d.pathogen} · ${d.antibiotic} · ${d.specimen}</span>`
    );
    circle.addTo(markerLayer);
  });

  const nRegions = filtered.length;
  document.getElementById("map-stats").textContent =
    `Wilayah dengan data memadai: ${nRegions} · marker provinsi ilustratif: ${withData}`;
}

function renderMap() {
  const pathogen = document.getElementById("filter-pathogen").value;
  const antibiotic = document.getElementById("filter-antibiotic").value;
  const specimen = document.getElementById("filter-specimen").value;
  let filtered = resistanceData.filter((d) => d.pathogen === pathogen && d.antibiotic === antibiotic && (specimen === "Semua" || d.specimen === specimen));
  if (!filtered.length) filtered = resistanceData.filter((d) => d.pathogen === pathogen && d.antibiotic === antibiotic);

  // Update title
  const titleEl = document.getElementById("map-title");
  const subEl = document.getElementById("map-subtitle");
  if (titleEl) titleEl.textContent = `${pathogen} — ${antibiotic}: % sensitif`;
  if (subEl) subEl.textContent = `Fasilitas pilot · data ilustratif · abu-abu = tidak ada data`;

  // Cards
  document.getElementById("region-grid").innerHTML = REGIONS.map((r) => {
    const data = filtered.find((d) => d.name === r.name);
    const cat = data ? data.category : "gray";
    const bg = cat === "red" ? "bg-red-50 border-red-200" : cat === "yellow" ? "bg-amber-50 border-amber-200" : cat === "green" ? "bg-emerald-50 border-emerald-200" : "bg-slate-50 border-slate-200";
    const bar = cat === "red" ? "bg-red-500" : cat === "yellow" ? "bg-amber-500" : cat === "green" ? "bg-emerald-500" : "bg-slate-400";
    if (!data) {
      return `<div class="region-card rounded-2xl border p-5 ${bg}"><h3 class="font-nunito text-lg font-bold text-navy-900">${r.name}</h3>
        <p class="text-xs text-slate-500 mt-0.5">${pathogen} · ${antibiotic}</p>
        <p class="mt-4 text-sm text-slate-500">Data kombinasi ini belum tersedia pada dataset ilustratif. Tidak digambarkan sebagai bebas resistensi.</p></div>`;
    }
    return `<div class="region-card rounded-2xl border p-5 ${bg}">
      <div class="flex items-start justify-between gap-3">
        <div><h3 class="font-nunito text-lg font-bold text-navy-900">${r.name}</h3>
        <p class="text-xs text-slate-500 mt-0.5">${pathogen} · ${antibiotic}</p></div>
        ${sensBadge(data.category, data.sensitivity)}
      </div>
      <div class="mt-4 space-y-2 text-sm">
        <div class="flex justify-between"><span class="text-slate-600">Sensitivitas</span><span class="font-semibold">${data.sensitivity}%</span></div>
        <div class="flex justify-between"><span class="text-slate-600">N isolat</span><span class="font-medium">${data.nIsolates.toLocaleString("id-ID")}</span></div>
        <div class="flex justify-between"><span class="text-slate-600">Spesimen</span><span class="font-medium">${data.specimen}</span></div>
        <div class="pt-2"><div class="h-2 w-full overflow-hidden rounded-full bg-white/70"><div class="h-full rounded-full ${bar}" style="width:${data.sensitivity}%"></div></div></div>
      </div></div>`;
  }).join("");

  // Leaflet updates
  if (armorMap) {
    updateMapChoropleth(filtered);
    updateMapMarkers(filtered);
  }
}

/* ===== THERAPY ===== */
function renderTherapy() {
  const regionId = document.getElementById("tx-region").value;
  const disease = document.getElementById("tx-disease").value;
  const pathogen = document.getElementById("tx-pathogen").value;
  const specimen = document.getElementById("tx-specimen").value;
  const regionName = REGIONS.find((r) => r.id === regionId)?.name || regionId;
  const list = getTherapyLines(regionId, pathogen, disease);

  const byLine = {};
  list.forEach((item) => {
    if (!byLine[item.line]) byLine[item.line] = [];
    byLine[item.line].push(item);
  });

  const lineLabel = { 1: "Lini 1 — pilihan awal (jika sesuai pola lokal)", 2: "Lini 2 — alternatif / eskalasi", 3: "Lini 3 — cadangan / last-line" };

  let html = `<div class="mb-4 text-sm text-slate-600"><span class="font-medium text-navy-900">${regionName}</span> · ${disease} · ${pathogen} · ${specimen}</div>`;
  Object.keys(byLine).sort().forEach((line) => {
    html += `<div class="mb-6"><h3 class="font-nunito text-sm font-bold text-navy-800 mb-3 uppercase tracking-wide">${lineLabel[line] || "Lini " + line}</h3><div class="space-y-3">`;
    byLine[line].forEach((item) => {
      const bar = item.category === "red" ? "bg-red-500" : item.category === "yellow" ? "bg-amber-500" : "bg-emerald-500";
      html += `<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h4 class="font-nunito font-bold text-navy-900">${item.name}</h4>
            <p class="text-xs text-slate-500 mt-0.5">${item.form || ""} · ${item.route}</p>
          </div>
          <div class="flex flex-wrap gap-1.5 items-center">
            ${sensBadge(item.category, item.sens)}
            ${availBadge(item.avail)}
          </div>
        </div>
        <div class="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
          <div><span class="text-slate-400">N isolat</span><br><strong class="text-navy-900">${item.n.toLocaleString("id-ID")}</strong></div>
          <div><span class="text-slate-400">Est. biaya/hari*</span><br><strong class="text-navy-900">Rp ${item.price.toLocaleString("id-ID")}</strong></div>
          <div class="col-span-2"><span class="text-slate-400">Cara penggunaan</span><br><strong class="text-navy-900 font-medium">${item.route}</strong></div>
        </div>
        ${item.note ? `<p class="mt-2 text-xs text-slate-500">${item.note}</p>` : ""}
        <div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100"><div class="h-full rounded-full ${bar}" style="width:${item.sens}%"></div></div>
      </div>`;
    });
    html += `</div></div>`;
  });

  html += `<div class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
    <strong class="text-navy-900">Disclaimer:</strong> Sensitivitas in vitro ≠ luaran klinis. Harga/ketersediaan bersifat estimasi placeholder (e-Katalog/Fornas). ARMOR tidak menyimpulkan bahwa suatu antibiotik “tidak diperlukan” hanya karena resistensi pada subset data. Keputusan terapi mengikuti klinisi, PPRA, dan pedoman yang berlaku.
  </div>`;

  document.getElementById("tx-results").innerHTML = html;
}

/* ===== PHYLO ===== */
function renderPhylo() {
  const pathogen = document.getElementById("phylo-pathogen").value;
  const region = document.getElementById("phylo-region").value;
  const regionName = REGIONS.find((r) => r.id === region)?.name || region;

  // Simple SVG tree (illustrative clusters A/B)
  const svg = `
  <svg viewBox="0 0 520 300" class="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
    <line class="phylo-line" x1="40" y1="150" x2="120" y2="150"/>
    <line class="phylo-line" x1="120" y1="80" x2="120" y2="220"/>
    <!-- Cluster A branch -->
    <line class="phylo-line" x1="120" y1="80" x2="200" y2="50"/>
    <line class="phylo-line" x1="120" y1="80" x2="200" y2="110"/>
    <line class="phylo-line" x1="200" y1="50" x2="320" y2="40"/>
    <line class="phylo-line" x1="200" y1="50" x2="320" y2="70"/>
    <line class="phylo-line" x1="200" y1="110" x2="320" y2="100"/>
    <line class="phylo-line" x1="200" y1="110" x2="320" y2="130"/>
    <!-- Cluster B branch -->
    <line class="phylo-line" x1="120" y1="220" x2="200" y2="190"/>
    <line class="phylo-line" x1="120" y1="220" x2="200" y2="250"/>
    <line class="phylo-line" x1="200" y1="190" x2="320" y2="180"/>
    <line class="phylo-line" x1="200" y1="190" x2="320" y2="210"/>
    <line class="phylo-line" x1="200" y1="250" x2="320" y2="240"/>
    <line class="phylo-line" x1="200" y1="250" x2="320" y2="270"/>
    <!-- Nodes -->
    <circle class="phylo-node" cx="40" cy="150" r="5"/>
    <circle class="phylo-node" cx="120" cy="80" r="4"/>
    <circle class="phylo-node" cx="120" cy="220" r="4"/>
    <circle cx="320" cy="40" r="5" fill="#1A7A8C"/><text class="phylo-label" x="330" y="44">Isolat A1 · ${regionName}</text>
    <circle cx="320" cy="70" r="5" fill="#1A7A8C"/><text class="phylo-label" x="330" y="74">Isolat A2 · ${regionName}</text>
    <circle cx="320" cy="100" r="5" fill="#1A7A8C"/><text class="phylo-label" x="330" y="104">Isolat A3 · RS mitra</text>
    <circle cx="320" cy="130" r="5" fill="#1A7A8C"/><text class="phylo-label" x="330" y="134">Isolat A4 · RS mitra</text>
    <circle cx="320" cy="180" r="5" fill="#B45309"/><text class="phylo-label" x="330" y="184">Isolat B1 · ${regionName}</text>
    <circle cx="320" cy="210" r="5" fill="#B45309"/><text class="phylo-label" x="330" y="214">Isolat B2 · luar wilayah</text>
    <circle cx="320" cy="240" r="5" fill="#B45309"/><text class="phylo-label" x="330" y="244">Isolat B3 · luar wilayah</text>
    <circle cx="320" cy="270" r="5" fill="#B45309"/><text class="phylo-label" x="330" y="274">Isolat B4 · ${regionName}</text>
    <text x="40" y="28" class="phylo-label" style="font-weight:700;font-size:12px;fill:#0A2540">${pathogen} — demo tree</text>
    <text x="40" y="295" class="phylo-label" style="fill:#64748B">Teal = Klaster A · Amber = Klaster B (data fiktif)</text>
  </svg>`;

  document.getElementById("phylo-tree").innerHTML = svg;

  document.getElementById("phylo-clusters").innerHTML = `
    <div class="rounded-lg border border-teal-100 bg-teal-50/50 p-3">
      <div class="font-semibold text-navy-900">Klaster A <span class="text-teal-600 text-xs font-normal">· 4 isolat</span></div>
      <p class="text-xs text-slate-600 mt-1">Jarak genetik dekat antar isolat di ${regionName} & RS mitra. Hipotesis: klonal lokal — perlu verifikasi epidemiologi (waktu, ruangan, alat).</p>
    </div>
    <div class="rounded-lg border border-amber-100 bg-amber-50/50 p-3">
      <div class="font-semibold text-navy-900">Klaster B <span class="text-amber-700 text-xs font-normal">· 4 isolat</span></div>
      <p class="text-xs text-slate-600 mt-1">Campuran isolat lokal & luar wilayah. Tidak otomatis berarti outbreak; bisa impor strain atau reservoir komunitas.</p>
    </div>`;

  const genes = pathogen.includes("Klebsiella") || pathogen.includes("coli")
    ? [
        { g: "blaNDM", c: "Terdeteksi pada subset Klaster A (demo)" },
        { g: "blaCTX-M", c: "Umum pada kedua klaster (ESBL)" },
        { g: "blaOXA-48", c: "Tidak terdeteksi pada sampel demo" }
      ]
    : pathogen.includes("Acinetobacter")
    ? [
        { g: "blaOXA-23", c: "Sering terkait resistensi karbapenem" },
        { g: "blaNDM", c: "Subset isolat (demo)" }
      ]
    : [{ g: "—", c: "Pilih patogen Enterobacterales / Acinetobacter untuk contoh gen" }];

  document.getElementById("phylo-genes").innerHTML = genes.map((x) =>
    `<div class="flex justify-between gap-2 border-b border-slate-100 py-1.5"><span class="font-mono text-navy-800 font-semibold">${x.g}</span><span class="text-slate-500 text-xs text-right">${x.c}</span></div>`
  ).join("");
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("stats-grid").innerHTML = KEY_STATS.map(statsCard).join("");

  // Map filters
  const fp = document.getElementById("filter-pathogen");
  const fa = document.getElementById("filter-antibiotic");
  const fs = document.getElementById("filter-specimen");
  PATHOGENS.forEach((p) => { fp.innerHTML += `<option>${p}</option>`; });
  ANTIBIOTICS.forEach((a) => { fa.innerHTML += `<option>${a}</option>`; });
  SPECIMENS.forEach((s) => { fs.innerHTML += `<option>${s}</option>`; });
  fp.value = "Escherichia coli"; fa.value = "Ceftriaxone"; fs.value = "Urin";
  [fp, fa, fs].forEach((el) => el.addEventListener("change", renderMap));

  // Init Leaflet map
  initArmorMap();

  // Therapy filters
  const tr = document.getElementById("tx-region");
  const td = document.getElementById("tx-disease");
  const tp = document.getElementById("tx-pathogen");
  const ts = document.getElementById("tx-specimen");
  REGIONS.forEach((r) => { tr.innerHTML += `<option value="${r.id}">${r.name}</option>`; });
  DISEASES.forEach((d) => { td.innerHTML += `<option>${d}</option>`; });
  PATHOGENS.forEach((p) => { tp.innerHTML += `<option>${p}</option>`; });
  SPECIMENS.forEach((s) => { ts.innerHTML += `<option>${s}</option>`; });
  tr.value = "jawa"; td.value = "Infeksi saluran kemih (ISK)"; tp.value = "Escherichia coli";
  document.getElementById("btn-terapi").addEventListener("click", renderTherapy);

  // Phylo
  const pr = document.getElementById("phylo-region");
  REGIONS.forEach((r) => { pr.innerHTML += `<option value="${r.id}">${r.name}</option>`; });
  document.getElementById("btn-phylo").addEventListener("click", renderPhylo);
  renderPhylo();

  // Search
  document.getElementById("btn-search").addEventListener("click", runSearch);
  document.getElementById("search-input").addEventListener("keydown", (e) => { if (e.key === "Enter") runSearch(); });
  const chips = ["Pneumonia", "Meropenem", "Jawa", "E. coli", "ISK", "Phylogenetic", "Colistin"];
  document.getElementById("quick-chips").innerHTML = chips.map((c) =>
    `<button type="button" class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-navy-700 hover:text-navy-900"
      onclick="document.getElementById('search-input').value='${c}';runSearch()">${c}</button>`
  ).join("");

  // Nav
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.addEventListener("click", (e) => { e.preventDefault(); showPage(a.dataset.page); });
  });
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  renderMap();
});

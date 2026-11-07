// ===== DATA =====
const PATHOGENS = [
  "Escherichia coli",
  "Klebsiella pneumoniae",
  "Acinetobacter baumannii",
  "Pseudomonas aeruginosa",
  "Staphylococcus aureus (MRSA)",
  "Enterococcus faecium",
  "Enterobacter cloacae",
];

const SPECIMENS = ["Darah", "Urin", "Respiratori", "Feses", "Swab genital", "Cairan serebrospinal"];

const ANTIBIOTICS = [
  "Ceftriaxone", "Cefotaxime", "Meropenem", "Imipenem", "Amikacin", "Gentamicin",
  "Ciprofloxacin", "Levofloxacin", "Piperacillin-tazobactam", "Fosfomycin",
  "Vancomycin", "Linezolid", "Colistin", "Tigecycline",
];

const REGIONS = [
  { id: "sumatera", name: "Sumatera", shortName: "SUM" },
  { id: "jawa", name: "Jawa", shortName: "JAW" },
  { id: "kalimantan", name: "Kalimantan", shortName: "KAL" },
  { id: "sulawesi", name: "Sulawesi", shortName: "SUL" },
  { id: "bali-nusra", name: "Bali & Nusa Tenggara", shortName: "BNT" },
  { id: "maluku-papua", name: "Maluku & Papua", shortName: "MAP" },
];

const KEY_STATS = [
  { label: "Isolat teranalisis", value: "134.620+", sub: "dari 139 RS (SINAR 2024)" },
  { label: "Provinsi tercakup", value: "24+", sub: "dengan data agregat" },
  { label: "Patogen prioritas", value: "7", sub: "sesuai WHO priority list" },
  { label: "Standar warna", value: "CLSI M39", sub: "merah ≤60% · kuning 61–80% · hijau ≥81%" },
];

const GENE_INFO = [
  { gene: "blaCTX-M", mechanism: "ESBL", pathogens: "E. coli, K. pneumoniae", note: "Resisten sefalosporin gen-3" },
  { gene: "blaNDM", mechanism: "Carbapenemase (MBL)", pathogens: "Enterobacterales, A. baumannii", note: "Resisten hampir semua β-laktam" },
  { gene: "blaOXA-48", mechanism: "Carbapenemase", pathogens: "K. pneumoniae", note: "Sering sulit dideteksi fenotipik" },
  { gene: "mecA", mechanism: "PBP2a", pathogens: "S. aureus", note: "MRSA; resisten seluruh β-laktam" },
  { gene: "vanA", mechanism: "Vancomycin resistance", pathogens: "Enterococcus", note: "VRE" },
];

const resistanceData = [
  { name: "Sumatera", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 29, nIsolates: 4200, specimen: "Urin", year: 2024, category: "red" },
  { name: "Jawa", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 42, nIsolates: 18500, specimen: "Urin", year: 2024, category: "red" },
  { name: "Kalimantan", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 51, nIsolates: 2100, specimen: "Urin", year: 2024, category: "red" },
  { name: "Sulawesi", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 78, nIsolates: 1800, specimen: "Urin", year: 2024, category: "yellow" },
  { name: "Bali & Nusa Tenggara", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 55, nIsolates: 950, specimen: "Urin", year: 2024, category: "red" },
  { name: "Maluku & Papua", pathogen: "Escherichia coli", antibiotic: "Ceftriaxone", sensitivity: 61, nIsolates: 420, specimen: "Urin", year: 2024, category: "yellow" },
  { name: "Sumatera", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 68, nIsolates: 2800, specimen: "Darah", year: 2024, category: "yellow" },
  { name: "Jawa", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 54, nIsolates: 9200, specimen: "Darah", year: 2024, category: "red" },
  { name: "Kalimantan", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 71, nIsolates: 1100, specimen: "Darah", year: 2024, category: "yellow" },
  { name: "Sulawesi", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 82, nIsolates: 980, specimen: "Darah", year: 2024, category: "green" },
  { name: "Bali & Nusa Tenggara", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 75, nIsolates: 620, specimen: "Darah", year: 2024, category: "yellow" },
  { name: "Maluku & Papua", pathogen: "Klebsiella pneumoniae", antibiotic: "Meropenem", sensitivity: 79, nIsolates: 210, specimen: "Darah", year: 2024, category: "yellow" },
  { name: "Sumatera", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 31, nIsolates: 1900, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Jawa", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 28, nIsolates: 7800, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Kalimantan", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 39, nIsolates: 890, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Sulawesi", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 48, nIsolates: 720, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Bali & Nusa Tenggara", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 42, nIsolates: 410, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Maluku & Papua", pathogen: "Acinetobacter baumannii", antibiotic: "Meropenem", sensitivity: 55, nIsolates: 180, specimen: "Respiratori", year: 2024, category: "red" },
  { name: "Jawa", pathogen: "Pseudomonas aeruginosa", antibiotic: "Meropenem", sensitivity: 62, nIsolates: 4500, specimen: "Respiratori", year: 2024, category: "yellow" },
  { name: "Sumatera", pathogen: "Pseudomonas aeruginosa", antibiotic: "Meropenem", sensitivity: 71, nIsolates: 1600, specimen: "Respiratori", year: 2024, category: "yellow" },
  { name: "Jawa", pathogen: "Staphylococcus aureus (MRSA)", antibiotic: "Vancomycin", sensitivity: 98, nIsolates: 3200, specimen: "Darah", year: 2024, category: "green" },
  { name: "Sumatera", pathogen: "Staphylococcus aureus (MRSA)", antibiotic: "Vancomycin", sensitivity: 97, nIsolates: 1100, specimen: "Darah", year: 2024, category: "green" },
];

function getCategory(sens, n) {
  if (n < 30) return "gray";
  if (sens <= 60) return "red";
  if (sens <= 80) return "yellow";
  return "green";
}

function getRecommendations(regionId, pathogen) {
  const base = {
    "Escherichia coli": [
      { name: "Amikacin", sensitivity: 86, nIsolates: 4200, costPerDay: 45000 },
      { name: "Fosfomycin", sensitivity: 91, nIsolates: 1800, costPerDay: 120000, note: "Oral / IV tergantung formularium" },
      { name: "Meropenem", sensitivity: 94, nIsolates: 3800, costPerDay: 185000 },
      { name: "Ciprofloxacin", sensitivity: 48, nIsolates: 5100, costPerDay: 28000 },
      { name: "Ceftriaxone", sensitivity: 41, nIsolates: 6200, costPerDay: 22000 },
    ],
    "Klebsiella pneumoniae": [
      { name: "Amikacin", sensitivity: 72, nIsolates: 2900, costPerDay: 45000 },
      { name: "Meropenem", sensitivity: 58, nIsolates: 4100, costPerDay: 185000 },
      { name: "Fosfomycin", sensitivity: 52, nIsolates: 980, costPerDay: 120000 },
      { name: "Tigecycline", sensitivity: 78, nIsolates: 1200, costPerDay: 420000, note: "Pertimbangkan CAP" },
      { name: "Colistin", sensitivity: 89, nIsolates: 850, costPerDay: 310000, note: "Cadangan; monitoring nefrotoksisitas" },
    ],
    "Acinetobacter baumannii": [
      { name: "Colistin", sensitivity: 84, nIsolates: 2100, costPerDay: 310000, note: "Cadangan utama" },
      { name: "Tigecycline", sensitivity: 71, nIsolates: 1600, costPerDay: 420000 },
      { name: "Amikacin", sensitivity: 45, nIsolates: 2400, costPerDay: 45000 },
      { name: "Meropenem", sensitivity: 31, nIsolates: 3200, costPerDay: 185000 },
    ],
    "Pseudomonas aeruginosa": [
      { name: "Amikacin", sensitivity: 78, nIsolates: 1800, costPerDay: 45000 },
      { name: "Piperacillin-tazobactam", sensitivity: 68, nIsolates: 2100, costPerDay: 95000 },
      { name: "Meropenem", sensitivity: 64, nIsolates: 2500, costPerDay: 185000 },
      { name: "Ciprofloxacin", sensitivity: 52, nIsolates: 1900, costPerDay: 28000 },
    ],
    "Staphylococcus aureus (MRSA)": [
      { name: "Vancomycin", sensitivity: 97, nIsolates: 2800, costPerDay: 75000 },
      { name: "Linezolid", sensitivity: 99, nIsolates: 1100, costPerDay: 280000 },
      { name: "Teicoplanin", sensitivity: 96, nIsolates: 650, costPerDay: 145000 },
    ],
  };

  const list = base[pathogen] || base["Escherichia coli"];
  return list.map((item) => {
    let adj = 0;
    if (regionId === "jawa") adj = -4;
    if (regionId === "sulawesi") adj = 6;
    if (regionId === "maluku-papua") adj = 3;
    const sens = Math.max(15, Math.min(99, item.sensitivity + adj));
    return {
      ...item,
      sensitivity: sens,
      category: getCategory(sens, item.nIsolates),
    };
  });
}

// ===== UI HELPERS =====
function badgeHTML(category, value) {
  const labels = { red: "Rendah (≤60%)", yellow: "Sedang (61–80%)", green: "Tinggi (≥81%)", gray: "Data terbatas" };
  const cls = "badge-" + category;
  const val = value !== undefined ? `<span>${value}%</span>` : "";
  return `<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}">${val}<span class="opacity-90">${labels[category]}</span></span>`;
}

function badgeCompact(category, value) {
  const cls = "badge-" + category;
  return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${cls}">${value}%</span>`;
}

function statsCard(s) {
  return `<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-xs font-medium uppercase tracking-wider text-slate-500">${s.label}</p>
    <p class="mt-1 font-nunito text-2xl font-extrabold text-navy-900">${s.value}</p>
    ${s.sub ? `<p class="mt-1 text-xs text-slate-500 leading-snug">${s.sub}</p>` : ""}
  </div>`;
}

// ===== NAVIGATION =====
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  const el = document.getElementById("page-" + pageId);
  if (el) el.classList.add("active");

  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.remove("active");
    a.classList.add("text-slate-600");
    if (a.dataset.page === pageId) {
      a.classList.add("active");
      a.classList.remove("text-slate-600");
    }
  });

  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== MAP PAGE =====
function renderMap() {
  const pathogen = document.getElementById("filter-pathogen").value;
  const antibiotic = document.getElementById("filter-antibiotic").value;
  const specimen = document.getElementById("filter-specimen").value;

  let filtered = resistanceData.filter(
    (d) => d.pathogen === pathogen && d.antibiotic === antibiotic && (specimen === "Semua" || d.specimen === specimen)
  );
  if (filtered.length === 0) {
    filtered = resistanceData.filter((d) => d.pathogen === pathogen && d.antibiotic === antibiotic);
  }

  const grid = document.getElementById("region-grid");
  grid.innerHTML = REGIONS.map((r) => {
    const data = filtered.find((d) => d.name === r.name);
    const cat = data ? data.category : "gray";
    const bg =
      cat === "red" ? "bg-red-50 border-red-200" :
      cat === "yellow" ? "bg-amber-50 border-amber-200" :
      cat === "green" ? "bg-emerald-50 border-emerald-200" :
      "bg-slate-50 border-slate-200";
    const barColor =
      cat === "red" ? "bg-red-500" :
      cat === "yellow" ? "bg-amber-500" :
      cat === "green" ? "bg-emerald-500" : "bg-slate-400";

    if (!data) {
      return `<div class="region-card rounded-2xl border p-5 ${bg}">
        <h3 class="font-nunito text-lg font-bold text-navy-900">${r.name}</h3>
        <p class="text-xs text-slate-500 mt-0.5">${pathogen} · ${antibiotic}</p>
        <p class="mt-4 text-sm text-slate-500">Data untuk kombinasi ini belum tersedia pada dataset ilustratif.</p>
      </div>`;
    }

    return `<div class="region-card rounded-2xl border p-5 ${bg}">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="font-nunito text-lg font-bold text-navy-900">${r.name}</h3>
          <p class="text-xs text-slate-500 mt-0.5">${pathogen} · ${antibiotic}</p>
        </div>
        ${badgeCompact(data.category, data.sensitivity)}
      </div>
      <div class="mt-4 space-y-2 text-sm">
        <div class="flex justify-between"><span class="text-slate-600">Sensitivitas</span><span class="font-semibold text-navy-900">${data.sensitivity}%</span></div>
        <div class="flex justify-between"><span class="text-slate-600">Jumlah isolat (N)</span><span class="font-medium">${data.nIsolates.toLocaleString("id-ID")}</span></div>
        <div class="flex justify-between"><span class="text-slate-600">Spesimen</span><span class="font-medium">${data.specimen}</span></div>
        <div class="flex justify-between"><span class="text-slate-600">Tahun data</span><span class="font-medium">${data.year}</span></div>
        <div class="pt-2">
          <div class="h-2 w-full overflow-hidden rounded-full bg-white/70">
            <div class="h-full rounded-full ${barColor}" style="width:${Math.min(100, data.sensitivity)}%"></div>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
}

// ===== RECOMMENDATION =====
function renderRecommendations() {
  const regionId = document.getElementById("rec-region").value;
  const pathogen = document.getElementById("rec-pathogen").value;
  const specimen = document.getElementById("rec-specimen").value;
  const regionName = REGIONS.find((r) => r.id === regionId)?.name || regionId;
  const results = getRecommendations(regionId, pathogen);

  const container = document.getElementById("rec-results");
  container.innerHTML = `
    <div class="mb-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
      <span class="font-medium text-navy-900">${regionName}</span>
      <span>·</span><span>${specimen}</span>
      <span>·</span><span>${pathogen}</span>
    </div>
    <div class="space-y-3">
      ${results.map((item, idx) => {
        const barColor =
          item.category === "red" ? "bg-red-500" :
          item.category === "yellow" ? "bg-amber-500" :
          item.category === "green" ? "bg-emerald-500" : "bg-slate-400";
        return `<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition-colors">
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <span class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-600">${idx + 1}</span>
              <div>
                <h3 class="font-nunito font-bold text-navy-900">${item.name}</h3>
                ${item.note ? `<p class="text-xs text-slate-500 mt-0.5">${item.note}</p>` : ""}
              </div>
            </div>
            ${badgeHTML(item.category, item.sensitivity)}
          </div>
          <div class="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span>N isolat: <strong class="text-navy-900">${item.nIsolates.toLocaleString("id-ID")}</strong></span>
            ${item.costPerDay !== undefined ? `<span>Estimasi biaya/hari: <strong class="text-navy-900">Rp ${item.costPerDay.toLocaleString("id-ID")}</strong></span>` : ""}
          </div>
          <div class="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div class="h-full rounded-full ${barColor}" style="width:${item.sensitivity}%"></div>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-relaxed">
      <strong class="text-navy-900">Disclaimer klinis:</strong> Persentase sensitivitas in vitro bukan luaran klinis. Biaya bersifat estimasi awal (e-Katalog / Fornas placeholder). Keputusan terapi harus mempertimbangkan kondisi pasien, alergi, interaksi, ketersediaan obat, dan pedoman lokal yang berlaku.
    </div>
  `;
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  // Stats
  document.getElementById("stats-grid").innerHTML = KEY_STATS.map(statsCard).join("");
  document.getElementById("dash-stats").innerHTML = KEY_STATS.map(statsCard).join("");

  // Gene table
  document.getElementById("gene-table").innerHTML = GENE_INFO.map(
    (g) => `<tr class="hover:bg-slate-50">
      <td class="px-4 py-3 font-mono font-semibold text-navy-800">${g.gene}</td>
      <td class="px-4 py-3">${g.mechanism}</td>
      <td class="px-4 py-3 text-slate-600">${g.pathogens}</td>
      <td class="px-4 py-3 text-slate-600">${g.note}</td>
    </tr>`
  ).join("");

  // Fill selects - Map
  const fp = document.getElementById("filter-pathogen");
  const fa = document.getElementById("filter-antibiotic");
  const fs = document.getElementById("filter-specimen");
  PATHOGENS.forEach((p) => { fp.innerHTML += `<option value="${p}">${p}</option>`; });
  ANTIBIOTICS.forEach((a) => { fa.innerHTML += `<option value="${a}">${a}</option>`; });
  SPECIMENS.forEach((s) => { fs.innerHTML += `<option value="${s}">${s}</option>`; });
  fp.value = "Escherichia coli";
  fa.value = "Ceftriaxone";
  fs.value = "Urin";

  // Fill selects - Rec
  const rr = document.getElementById("rec-region");
  const rs = document.getElementById("rec-specimen");
  const rp = document.getElementById("rec-pathogen");
  REGIONS.forEach((r) => { rr.innerHTML += `<option value="${r.id}">${r.name}</option>`; });
  SPECIMENS.forEach((s) => { rs.innerHTML += `<option value="${s}">${s}</option>`; });
  PATHOGENS.forEach((p) => { rp.innerHTML += `<option value="${p}">${p}</option>`; });
  rr.value = "jawa";
  rs.value = "Urin";
  rp.value = "Escherichia coli";

  // Events
  [fp, fa, fs].forEach((el) => el.addEventListener("change", renderMap));
  document.getElementById("btn-rekomendasi").addEventListener("click", renderRecommendations);

  // Nav links
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showPage(a.dataset.page);
    });
  });

  // Mobile menu
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  });

  renderMap();
});

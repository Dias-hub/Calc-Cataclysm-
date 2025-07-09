// // --- Список брони ---
const armors = [
    { name: "Кустарка +15", protection: 67.9 },
    { name: "Покров +15", protection: 68.4 },
    { name: "Игдрасиль +15", protection: 71.26 },
    { name: "Восход +15", protection: 71.6 },
    { name: "Экза +15", protection: 75.5 },
    { name: "Модка +15", protection: 76 },
    { name: "Штурм +15", protection: 76.3 },
    { name: "Панцирь +15", protection: 81.9 }
];

// --- Список боеприпасов ---
const ammoList = [
    { id: "545_standard", name: "5.45x39 (стандарт)", pen: 0, dmgPenalty: 0 },
    { id: "545_upgraded", name: "5.45x39 (БП)", pen: 12, dmgPenalty: 5 },
    { id: "762x39_standard", name: "7.62x39 (ПС)", pen: 0, dmgPenalty: 0 },
    { id: "762x39_upgraded", name: "7.62x39 (БП)", pen: 13, dmgPenalty: 7 },
    { id: "762x54_standard", name: "7.62x54 (ЛПС)", pen: 0, dmgPenalty: 0 },
    { id: "762x54_upgraded", name: "7.62x54 (БС)", pen: 10, dmgPenalty: 0 },
    { id: "762R_standard", name: "7.62x54 (ПП)", pen: 20, dmgPenalty: 15 },
    { id: "308WIN_upgraded", name: "7.62x51 (Снайперский)", pen: 10, dmgPenalty: 0 },
    { id: "9x19_standard", name: "9x19 (ПС)", pen: 0, dmgPenalty: 0 },
    { id: "9x19_upgraded", name: "9x19 (ПП)", pen: 8, dmgPenalty: 0 },
    { id: "9x39_standard", name: "9x39 (СП-5)", pen: 0, dmgPenalty: 0 },
    { id: "9x39_upgraded", name: "9x39 (СП-6)", pen: 9, dmgPenalty: 0 },
    { id: "12.7x76_upgraded", name: "12.7x76 (дротик)", pen: 20, dmgPenalty: 30 },
    { id: "762x51_standard", name: "7.62x51 (М59)", pen: 0, dmgPenalty: 0 },
    { id: "762x51_upgraded", name: "7.62x51 (М61)", pen: 18, dmgPenalty: 14 },
    { id: "556_standard", name: "5.56 (М885)", pen: 0, dmgPenalty: 0 },
    { id: "556_upgraded", name: "5.56 (М995)", pen: 14, dmgPenalty: 9 }
];

// --- Список оружия ---
const weapons = [
    { name: "РПД", baseDamage: 37, fireRate: 750, ammoIds: ["762x39_standard", "762x39_upgraded"] },
    { name: "РПК-74", baseDamage: 36, fireRate: 650, ammoIds: ["545_standard", "545_upgraded"] },
    { name: "SIG Sniper", baseDamage: 38, fireRate: 480, ammoIds: ["556_standard", "556_upgraded"] },
    { name: "HK417", baseDamage: 44, fireRate: 575, ammoIds: ["762x51_standard", "762x51_upgraded"] },
    { name: "XM8", baseDamage: 35.5, fireRate: 750, ammoIds: ["556_standard", "556_upgraded"] },
    { name: "WA-2000", baseDamage: 130, fireRate: 85, ammoIds: ["308WIN_upgraded"] },
    { name: "USAS-12", baseDamage: 56, fireRate: 360, ammoIds: ["12.7x76_upgraded"] },
    { name: "FN FAL", baseDamage: 42, fireRate: 650, ammoIds: ["762x51_standard", "762x51_upgraded"] },
    { name: "FN P90", baseDamage: 24.5, fireRate: 1100, ammoIds: ["9x19_standard", "9x19_upgraded"] },
    { name: "SCAR-H", baseDamage: 41, fireRate: 600, ammoIds: ["762x51_standard", "762x51_upgraded"] },
    { name: "ВСК-94", baseDamage: 36, fireRate: 700, ammoIds: ["9x39_standard", "9x39_upgraded"] },
    { name: "Гроза", baseDamage: 33, fireRate: 700, ammoIds: ["9x39_standard", "9x39_upgraded"] },
    { name: "М-249", baseDamage: 32, fireRate: 800, ammoIds: ["556_standard", "556_upgraded"] },
    { name: "М-24", baseDamage: 158, fireRate: 35, ammoIds: ["308WIN_upgraded"] },
    { name: "HK G36", baseDamage: 32.5, fireRate: 750, ammoIds: ["556_standard", "556_upgraded"] },
    { name: "F2000 Tactical", baseDamage: 33, fireRate: 850, ammoIds: ["556_standard", "556_upgraded"] },
    { name: "SVD", baseDamage: 115, fireRate: 100, ammoIds: ["762x54_standard", "762x54_upgraded"] },
    { name: "SVD-S", baseDamage: 120, fireRate: 100, ammoIds: ["762x54_standard", "762x54_upgraded"] },
    { name: "HK G3SG-1", baseDamage: 50, fireRate: 380, ammoIds: ["762x51_standard", "762x51_upgraded"] },
    { name: "ПКМ", baseDamage: 45, fireRate: 650, ammoIds: ["762R_standard"] },
    { name: "ВСС", baseDamage: 40, fireRate: 600, ammoIds: ["9x39_standard", "9x39_upgraded"] },
    { name: "L96A1", baseDamage: 185, fireRate: 25, ammoIds: ["308WIN_upgraded"] }
];

// --- Множители урона по голове ---
const headshotMultipliers = {
    "РПД": 1.25,
    "РПК-74": 1.25,
    "SIG Sniper": 1.35,
    "HK417": 1.25,
    "XM8": 1.25,
    "WA-2000": 1.25,
    "USAS-12": 1.25,
    "FN FAL": 1.35,
    "FN P90": 1.25,
    "SCAR-H": 1.25,
    "ВСК-94": 1.85,
    "Гроза": 1.35,
    "М-249": 1.25,
    "М-24": 1.5,
    "HK G36": 1.25,
    "F2000 Tactical": 1.25,
    "SVD": 1.25,
    "SVD-S": 1.35,
    "HK G3SG-1": 1.35,
    "ПКМ": 1.25,
    "ВСС": 1.85,
    "L96A1": 1.5
};

// --- DOM ---
const armorSelect = document.getElementById("armorSelect");
const weaponSelect = document.getElementById("weaponSelect");
const ammoSelect = document.getElementById("ammoSelect");
const headshotCheckbox = document.getElementById("headshotCheckbox");
const resultDiv = document.getElementById("result");

// --- Функции заполнения ---
function populateArmors() {
    armorSelect.innerHTML = "";
    armors.forEach((armor, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = armor.name;
        armorSelect.appendChild(option);
    });
}

function populateWeapons() {
    weaponSelect.innerHTML = "";
    weapons.forEach((weapon, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = weapon.name;
        weaponSelect.appendChild(option);
    });
}

function populateAmmo(weaponIndex) {
    ammoSelect.innerHTML = "";
    const weapon = weapons[weaponIndex];
    if (!weapon) return;
    weapon.ammoIds.forEach(ammoId => {
        const ammo = ammoList.find(a => a.id === ammoId);
        if (ammo) {
            const option = document.createElement("option");
            option.value = ammo.id;
            option.textContent = ammo.name;
            ammoSelect.appendChild(option);
        }
    });
    if (ammoSelect.options.length > 0) ammoSelect.value = ammoSelect.options[0].value;
}

// --- Расчёт ---
function calculate() {
    const armor = armors[Number(armorSelect.value)];
    const weapon = weapons[Number(weaponSelect.value)];
    const ammoId = ammoSelect.value;
    const ammo = ammoList.find(a => a.id === ammoId);
    const baseHP = 100;

    if (!armor || !weapon || !ammo) {
        resultDiv.innerHTML = `<p style="color:red">Пожалуйста, выберите броню, оружие и патрон.</p>`;
        return;
    }

    const isHeadshot = headshotCheckbox.checked;

    // Урон с учетом патрона
    let realDamage = weapon.baseDamage * (1 - ammo.dmgPenalty / 100);

    // Множитель хедшота (до брони)
    if (isHeadshot && headshotMultipliers[weapon.name]) {
        realDamage *= headshotMultipliers[weapon.name];
    }

    // Пробитие брони
    const realProtection = armor.protection - ammo.pen;

    // Итоговый урон
    const effectiveDamage = realDamage * (1 - realProtection / 100);

    if (effectiveDamage <= 0) {
        resultDiv.innerHTML = `<p style="color:red">Эффективный урон ≤ 0, проверьте параметры брони и патрона.</p>`;
        return;
    }

    const BTK = Math.ceil(baseHP / effectiveDamage);
    const TTK = ((BTK - 1) / weapon.fireRate * 60).toFixed(2);

    resultDiv.innerHTML = `
        <p>Урон после брони: ${effectiveDamage.toFixed(2)}</p>
        <p>Пуль до убийства (BTK): <b>${BTK}</b></p>
        <p>Время до убийства (TTK): <b>${TTK}</b> сек</p>
        <p>Хедшот: <b>${isHeadshot ? "Да" : "Нет"}</b></p>
    `;
}

// --- Инициализация ---
populateArmors();
populateWeapons();
populateAmmo(0);
calculate();

// --- Обработчики ---
armorSelect.addEventListener("change", calculate);
weaponSelect.addEventListener("change", () => {
    populateAmmo(Number(weaponSelect.value));
    calculate();
});
ammoSelect.addEventListener("change", calculate);
headshotCheckbox.addEventListener("change", calculate);

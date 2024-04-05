console.log('funguju!');
// Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.

// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.


const updateSkill = (id, znalost) => {
  const skill = document.querySelector(id);
  skill.querySelector('.skill__progress').style.width = znalost + '%';
  skill.querySelector('.skill__value').textContent = znalost + ' / 100';
};

const html = Number(prompt('Zadej svou úroveň znalosti HTML na škále 0-100:'));
const css = Number(prompt('Zadej svou úroveň znalosti CSS na škále 0-100'));
const js = Number(prompt('Zadej svou úroveň znalosti JavaScriptu na škále 0-100'));

updateSkill('#skill1', html);
updateSkill('#skill2', css);
updateSkill('#skill3', js);
